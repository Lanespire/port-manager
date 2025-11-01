# Port Manager 🚀

[日本語](./README.ja.md) | [English](./README.md) | [中文](./README.zh.md) | [한국어](./README.ko.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

A modern cross-platform port management application built with Tauri 2 and React.

![Port Manager](./app.png)

## ✨ Features

- **Port Monitoring**: Display all listening ports in real-time
- **Process Details**: Show detailed information for each process
  - Command-line arguments
  - Working directory
  - Start time
  - Memory usage
- **Port Management**:
  - Stop processes with one click
  - Open ports in browser or custom application
- **Organized View**: Group ports by 1000s ranges
- **Sorting**: Sort by port, PID, process name, memory usage
- **Filtering**: Filter ports by range
- **Multilingual Support**: Supports 7 languages (Japanese, English, Chinese, Korean, Spanish, French, German)

## 🚀 Why Tauri?

Built with **Tauri 2**, this application offers significant advantages over traditional Electron apps:

- **⚡ Blazing Fast**: Native performance using system WebView instead of bundling Chromium
- **💾 Minimal Memory Footprint**: Typically uses **10-20x less memory** than Electron alternatives
  - Tauri apps: ~50-100 MB
  - Electron apps: ~500-1000 MB
- **📦 Tiny Binary Size**: Final app size ~3-5 MB vs. 100+ MB for Electron
- **🔒 Enhanced Security**: Rust-based backend with memory safety guarantees
- **🌍 Cross-Platform**: Write once, run on macOS, Windows, and Linux

This port manager is a perfect example of what Tauri can do - a full-featured desktop app with rich UI that remains incredibly lightweight and responsive.

## 📥 Installation

### Download Pre-built Binaries

1. Go to the [Releases](https://github.com/Lanespire/port-manager/releases) page
2. Download the latest release for macOS:
   - **macOS (Apple Silicon)**: `port-manager_aarch64.dmg`
   - **macOS (Intel)**: `port-manager_x86_64.dmg`
3. Open the DMG and drag the app to Applications folder
4. **Important for macOS users**: When you first open the app, macOS may show a security warning because the app is not notarized. To bypass this:
   - **Method 1**: Right-click (or Control+click) on the app → Select "Open" → Click "Open" in the dialog
   - **Method 2**: Go to System Settings → Privacy & Security → Scroll down to find "Port Manager" → Click "Open Anyway"
   - You only need to do this once. After that, the app will open normally.

### Development Setup

If you want to contribute or run from source:

```bash
# Clone the repository
git clone https://github.com/yourusername/tauri-port.git
cd tauri-port

# Install dependencies
npm install

# Run in development mode
npm run tauri dev
```

**Prerequisites for development**:
- [Node.js](https://nodejs.org/) (v20.19+ or v22.12+)
- [Rust](https://www.rustup.rs/)
- [Tauri CLI](https://v2.tauri.app/start/create-project/)

## 🎯 Usage

1. **Refresh**: Click "Refresh" button to update the port list
2. **Open Port**: Click "Open Port" to open a specific port in browser or custom application
   - Enter port number
   - Optionally enter custom command (use `{port}` as placeholder)
3. **Expand Details**: Click the `>` icon to view detailed process information
4. **Stop Process**: Click "Stop" button to terminate a process
5. **Change Language**: Use the language dropdown to switch languages

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Rust + Tauri 2
- **Styling**: CSS3
- **i18n**: Custom translation system

## 📝 Platform Support

Currently supported:
- **macOS** ✅

Coming soon:
- **Windows** (in development)
- **Linux** (in development)

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Tauri](https://tauri.app/)
- Icons from [Tauri Icons](https://tauri.app/reference/icons/)

## 📧 Contact

Project Link: [https://github.com/yourusername/tauri-port](https://github.com/yourusername/tauri-port)
