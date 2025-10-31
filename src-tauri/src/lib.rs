use serde::{Deserialize, Serialize};
use std::process::Command;

#[derive(Debug, Serialize, Deserialize)]
pub struct PortInfo {
    pub port: u16,
    pub pid: u32,
    pub process_name: String,
    pub protocol: String,
    pub command: Option<String>,
    pub working_dir: Option<String>,
    pub start_time: Option<String>,
    pub memory_mb: Option<f64>,
}

fn get_process_command(pid: u32) -> Option<String> {
    let output = Command::new("ps")
        .args(["-p", &pid.to_string(), "-o", "command="])
        .output()
        .ok()?;

    if output.status.success() {
        Some(String::from_utf8_lossy(&output.stdout).trim().to_string())
    } else {
        None
    }
}

fn get_process_cwd(pid: u32) -> Option<String> {
    let output = Command::new("lsof")
        .args(["-p", &pid.to_string(), "-a", "-d", "cwd", "-Fn"])
        .output()
        .ok()?;

    if output.status.success() {
        let stdout = String::from_utf8_lossy(&output.stdout);
        for line in stdout.lines() {
            if line.starts_with("n") {
                return Some(line[1..].to_string());
            }
        }
    }
    None
}

fn get_process_start_time(pid: u32) -> Option<String> {
    let output = Command::new("ps")
        .args(["-p", &pid.to_string(), "-o", "lstart="])
        .output()
        .ok()?;

    if output.status.success() {
        Some(String::from_utf8_lossy(&output.stdout).trim().to_string())
    } else {
        None
    }
}

fn get_process_memory(pid: u32) -> Option<f64> {
    let output = Command::new("ps")
        .args(["-p", &pid.to_string(), "-o", "rss="])
        .output()
        .ok()?;

    if output.status.success() {
        let rss_kb = String::from_utf8_lossy(&output.stdout).trim().parse::<f64>().ok()?;
        Some(rss_kb / 1024.0) // Convert KB to MB
    } else {
        None
    }
}

#[tauri::command]
fn get_ports() -> Result<Vec<PortInfo>, String> {
    #[cfg(target_os = "macos")]
    {
        let output = Command::new("lsof")
            .args(["-i", "-P", "-n"])
            .output()
            .map_err(|e| format!("Failed to execute lsof: {}", e))?;

        if !output.status.success() {
            return Err("lsof command failed".to_string());
        }

        let stdout = String::from_utf8_lossy(&output.stdout);
        let mut ports = Vec::new();
        let mut seen_ports = std::collections::HashSet::new();

        for line in stdout.lines().skip(1) {
            if !line.contains("LISTEN") {
                continue;
            }

            let parts: Vec<&str> = line.split_whitespace().collect();
            if parts.len() < 9 {
                continue;
            }

            let process_name = parts[0].to_string();
            let pid = parts[1].parse::<u32>().unwrap_or(0);
            let protocol = parts[7].to_string();

            // Extract port from address (format: *:PORT or IP:PORT)
            if let Some(address) = parts.get(8) {
                if let Some(port_str) = address.split(':').last() {
                    if let Ok(port) = port_str.parse::<u16>() {
                        // Avoid duplicates
                        let key = format!("{}:{}", port, pid);
                        if seen_ports.insert(key) {
                            ports.push(PortInfo {
                                port,
                                pid,
                                process_name,
                                protocol,
                                command: get_process_command(pid),
                                working_dir: get_process_cwd(pid),
                                start_time: get_process_start_time(pid),
                                memory_mb: get_process_memory(pid),
                            });
                        }
                    }
                }
            }
        }

        Ok(ports)
    }

    #[cfg(not(target_os = "macos"))]
    {
        Err("This platform is not supported yet".to_string())
    }
}

#[tauri::command]
fn kill_port(pid: u32) -> Result<String, String> {
    #[cfg(target_os = "macos")]
    {
        // First try SIGTERM (graceful shutdown)
        let output = Command::new("kill")
            .args([&pid.to_string()])
            .output()
            .map_err(|e| format!("Failed to kill process: {}", e))?;

        if output.status.success() {
            Ok(format!("Successfully sent SIGTERM to process {}", pid))
        } else {
            // If SIGTERM fails, try SIGKILL
            let output = Command::new("kill")
                .args(["-9", &pid.to_string()])
                .output()
                .map_err(|e| format!("Failed to kill process: {}", e))?;

            if output.status.success() {
                Ok(format!("Successfully killed process {}", pid))
            } else {
                let stderr = String::from_utf8_lossy(&output.stderr);
                Err(format!("Failed to kill process {}: {}", pid, stderr))
            }
        }
    }

    #[cfg(not(target_os = "macos"))]
    {
        let output = Command::new("kill")
            .args(["-9", &pid.to_string()])
            .output()
            .map_err(|e| format!("Failed to kill process: {}", e))?;

        if output.status.success() {
            Ok(format!("Successfully killed process {}", pid))
        } else {
            let stderr = String::from_utf8_lossy(&output.stderr);
            Err(format!("Failed to kill process: {}: {}", pid, stderr))
        }
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![get_ports, kill_port])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
