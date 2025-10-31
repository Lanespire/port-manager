import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import { openUrl } from "@tauri-apps/plugin-opener";
import { translations, Language } from "./i18n/translations";
import "./App.css";

interface PortInfo {
  port: number;
  pid: number;
  process_name: string;
  protocol: string;
  command?: string;
  working_dir?: string;
  start_time?: string;
  memory_mb?: number;
}

type SortField = "port" | "pid" | "process_name" | "memory_mb";
type SortOrder = "asc" | "desc";

// ポート番号を1000番台ごとにグループ化
const groupPortsByRange = (ports: PortInfo[]): Map<string, PortInfo[]> => {
  const groups = new Map<string, PortInfo[]>();

  ports.forEach((port) => {
    const rangeStart = Math.floor(port.port / 1000);
    const rangeKey = `${rangeStart}000`;

    if (!groups.has(rangeKey)) {
      groups.set(rangeKey, []);
    }
    groups.get(rangeKey)?.push(port);
  });

  return groups;
};

function App() {
  const [ports, setPorts] = useState<PortInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sortField, setSortField] = useState<SortField>("port");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [portRangeFilter, setPortRangeFilter] = useState<string>("all");
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [showModal, setShowModal] = useState(false);
  const [selectedPort, setSelectedPort] = useState<number | null>(null);
  const [customCommand, setCustomCommand] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [language, setLanguage] = useState<Language>("ja");
  const [killingPid, setKillingPid] = useState<number | null>(null);

  const t = translations[language];

  const fetchPorts = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await invoke<PortInfo[]>("get_ports");
      setPorts(result);
    } catch (err) {
      setError(err as string);
    } finally {
      setLoading(false);
    }
  };

  const killProcess = async (pid: number) => {
    setKillingPid(pid);
    try {
      const result = await invoke<string>("kill_port", { pid });
      console.log(result);
      // Wait for the process to terminate
      await new Promise(resolve => setTimeout(resolve, 1000));
      await fetchPorts();
    } catch (err) {
      console.error("Kill process error:", err);
      // Still refresh to see if it worked
      await fetchPorts();
      alert(`${t.error}: ${err}`);
    } finally {
      setKillingPid(null);
    }
  };

  const openModal = (port: number) => {
    setSelectedPort(port);
    setCustomCommand("");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPort(null);
    setCustomCommand("");
  };

  const executeOpen = async () => {
    if (!selectedPort) return;

    try {
      if (customCommand.trim()) {
        // カスタムコマンドを実行
        const fullCommand = customCommand.replace(/\{port\}/g, selectedPort.toString());
        await openUrl(fullCommand);
      } else {
        // デフォルトでブラウザで開く
        await openUrl(`http://localhost:${selectedPort}`);
      }
      closeModal();
    } catch (err) {
      alert(`${t.error}: ${err}`);
    }
  };

  const sortPorts = (portsToSort: PortInfo[]) => {
    return [...portsToSort].sort((a, b) => {
      let comparison = 0;
      if (sortField === "port") {
        comparison = a.port - b.port;
      } else if (sortField === "pid") {
        comparison = a.pid - b.pid;
      } else if (sortField === "process_name") {
        comparison = a.process_name.localeCompare(b.process_name);
      } else if (sortField === "memory_mb") {
        comparison = (a.memory_mb || 0) - (b.memory_mb || 0);
      }
      return sortOrder === "asc" ? comparison : -comparison;
    });
  };

  const filterByPortRange = (portsToFilter: PortInfo[]) => {
    if (portRangeFilter === "all") return portsToFilter;

    const ranges: { [key: string]: [number, number] } = {
      "0-999": [0, 999],
      "1000-4999": [1000, 4999],
      "5000-9999": [5000, 9999],
      "10000+": [10000, 65535],
    };

    const [min, max] = ranges[portRangeFilter] || [0, 65535];
    return portsToFilter.filter((p) => p.port >= min && p.port <= max);
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const toggleRowExpansion = (portPid: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(portPid)) {
      newExpanded.delete(portPid);
    } else {
      newExpanded.add(portPid);
    }
    setExpandedRows(newExpanded);
  };

  useEffect(() => {
    fetchPorts();
  }, []);

  const filteredAndSortedPorts = sortPorts(filterByPortRange(ports));
  const groupedPorts = groupPortsByRange(filteredAndSortedPorts);
  const sortedGroups = Array.from(groupedPorts.entries()).sort((a, b) => {
    const aStart = parseInt(a[0].split("-")[0]);
    const bStart = parseInt(b[0].split("-")[0]);
    return aStart - bStart;
  });

  return (
    <div className="container">
      <div className="header">
        <img src="/logo.png" alt="Port Manager Logo" className="logo" />
        <h1>{t.title}</h1>
      </div>

      <div className="controls">
        <button className="refresh-btn" onClick={fetchPorts} disabled={loading}>
          {loading ? t.loading : t.refresh}
        </button>

        <button className="open-port-btn" onClick={() => openModal(0)}>
          {t.openPort}
        </button>

        <select
          value={portRangeFilter}
          onChange={(e) => setPortRangeFilter(e.target.value)}
        >
          <option value="all">{t.allPorts}</option>
          <option value="0-999">0-999</option>
          <option value="1000-4999">1000-4999</option>
          <option value="5000-9999">5000-9999</option>
          <option value="10000+">10000+</option>
        </select>

        <select value={language} onChange={(e) => setLanguage(e.target.value as Language)}>
          <option value="ja">日本語</option>
          <option value="en">English</option>
          <option value="zh">中文</option>
          <option value="ko">한국어</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
        </select>
      </div>

      {error && <div className="error">{error}</div>}

      {/* モーダル */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>
              {t.modalTitle}
              <button
                className="info-icon"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                ⓘ
              </button>
              {showTooltip && (
                <div className="tooltip">
                  <strong>{t.tooltipUsage}</strong>
                  <ul>
                    <li>{t.tooltipPort}</li>
                    <li>{t.tooltipDefault}</li>
                    <li>{t.tooltipCustom}</li>
                  </ul>
                  <strong>{t.tooltipExamples}</strong>
                  <ul>
                    <li><code>http://localhost:{"{port}"}</code> - {t.tooltipExample1}</li>
                    <li><code>https://localhost:{"{port}"}</code> - {t.tooltipExample2}</li>
                  </ul>
                </div>
              )}
            </h2>
            <div className="modal-body">
              <label>
                <strong>{t.modalPortLabel}</strong>
                <input
                  type="number"
                  className="modal-input"
                  placeholder={t.modalPortPlaceholder}
                  value={selectedPort || ""}
                  onChange={(e) => setSelectedPort(Number(e.target.value))}
                />
              </label>
              <label>
                <strong>{t.modalCommandLabel}</strong>
                <input
                  type="text"
                  className="modal-input"
                  placeholder={t.modalCommandPlaceholder}
                  value={customCommand}
                  onChange={(e) => setCustomCommand(e.target.value)}
                />
              </label>
            </div>
            <div className="modal-actions">
              <button className="modal-btn cancel-btn" onClick={closeModal}>
                {t.cancel}
              </button>
              <button className="modal-btn confirm-btn" onClick={executeOpen}>
                {t.open}
              </button>
            </div>
          </div>
        </div>
      )}

      <table className="port-table">
        <thead>
          <tr>
            <th style={{ width: "40px" }}>{t.details}</th>
            <th onClick={() => handleSort("port")}>
              {t.portNumber} {sortField === "port" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th onClick={() => handleSort("pid")}>
              {t.pid} {sortField === "pid" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th onClick={() => handleSort("process_name")}>
              {t.processName} {sortField === "process_name" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th>{t.protocol}</th>
            <th onClick={() => handleSort("memory_mb")}>
              {t.memory} {sortField === "memory_mb" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th>{t.actions}</th>
          </tr>
        </thead>
        <tbody>
          {sortedGroups.length === 0 ? (
            <tr>
              <td colSpan={7} style={{ textAlign: "center" }}>
                {loading ? t.loading : t.noPortsFound}
              </td>
            </tr>
          ) : (
            sortedGroups.map(([rangeKey, groupPorts]) => (
              <>
                <tr key={`section-${rangeKey}`} className="section-header">
                  <td colSpan={7}>
                    <strong>{rangeKey}{t.portRange}</strong> ({groupPorts.length}{t.portCount})
                  </td>
                </tr>
                {groupPorts.map((port, index) => {
                  const rowKey = `${port.port}-${port.pid}-${index}`;
                  const isExpanded = expandedRows.has(rowKey);

                  return (
                    <>
                      <tr key={rowKey}>
                        <td>
                          <button
                            className="expand-btn"
                            onClick={() => toggleRowExpansion(rowKey)}
                          >
                            {isExpanded ? "⌄" : ">"}
                          </button>
                        </td>
                        <td>{port.port}</td>
                        <td>{port.pid}</td>
                        <td>{port.process_name}</td>
                        <td>{port.protocol}</td>
                        <td>{port.memory_mb ? port.memory_mb.toFixed(2) : "N/A"}</td>
                        <td>
                          <button
                            className="action-btn kill-btn"
                            onClick={() => killProcess(port.pid)}
                            disabled={killingPid === port.pid}
                          >
                            {killingPid === port.pid ? t.loading : t.stop}
                          </button>
                        </td>
                      </tr>
                      {isExpanded && (
                        <tr key={`${rowKey}-details`} className="detail-row">
                          <td colSpan={7}>
                            <div className="detail-content">
                              {port.command && (
                                <div className="detail-item">
                                  <strong>{t.command}</strong>
                                  <code>{port.command}</code>
                                </div>
                              )}
                              {port.working_dir && (
                                <div className="detail-item">
                                  <strong>{t.workingDir}</strong>
                                  <code>{port.working_dir}</code>
                                </div>
                              )}
                              {port.start_time && (
                                <div className="detail-item">
                                  <strong>{t.startTime}</strong>
                                  <span>{port.start_time}</span>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  );
                })}
              </>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
