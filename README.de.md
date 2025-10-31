# Port-Manager 🚀

[日本語](./README.ja.md) | [English](./README.md) | [中文](./README.zh.md) | [한국어](./README.ko.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

Eine moderne plattformübergreifende Port-Management-Anwendung, erstellt mit Tauri 2 und React.

![Port-Manager](./docs/screenshot.png)

## ✨ Funktionen

- **Port-Überwachung**: Zeigt alle lauschenden Ports in Echtzeit an
- **Prozessdetails**: Zeigt detaillierte Informationen für jeden Prozess
  - Befehlszeilenargumente
  - Arbeitsverzeichnis
  - Startzeit
  - Speichernutzung
- **Port-Verwaltung**:
  - Prozesse mit einem Klick stoppen
  - Ports im Browser oder in benutzerdefinierten Anwendungen öffnen
- **Organisierte Ansicht**: Gruppiert Ports nach 1000er-Bereichen
- **Sortierung**: Nach Port, PID, Prozessname, Speichernutzung
- **Filterung**: Ports nach Bereich filtern
- **Mehrsprachige Unterstützung**: Unterstützt 7 Sprachen (Japanisch, Englisch, Chinesisch, Koreanisch, Spanisch, Französisch, Deutsch)

## 🚀 Warum Tauri?

Mit **Tauri 2** erstellt, bietet diese Anwendung erhebliche Vorteile gegenüber traditionellen Electron-Apps：

- **⚡ Blitzschnell**: Native Leistung durch Verwendung des System-WebView statt Chromium-Bundling
- **💾 Minimaler Speicherbedarf**: Verwendet typischerweise **10-20 mal weniger Speicher** als Electron-Alternativen
  - Tauri-Apps: ~50-100 MB
  - Electron-Apps: ~500-1000 MB
- **📦 Kleine Binärgröße**: Endgültige App-Größe ~3-5 MB vs. 100+ MB für Electron
- **🔒 Verbesserte Sicherheit**: Rust-basiertes Backend mit Speichersicherheitsgarantien
- **🌍 Plattformübergreifend**: Einmal schreiben, auf macOS, Windows und Linux ausführen

Dieser Port-Manager ist ein perfektes Beispiel für das, was Tauri kann - eine voll ausgestattete Desktop-Anwendung mit reichhaltiger Benutzeroberfläche, die unglaublich leicht und reaktionsschnell bleibt.

## 📥 Installation

### Vorkompilierte Binärdateien Herunterladen

1. Besuchen Sie die [Releases](https://github.com/yourusername/tauri-port/releases)-Seite
2. Laden Sie die neueste Version für Ihre Plattform herunter：
   - **macOS**: `.dmg` oder `.app.tar.gz`
   - **Windows**: `.msi` oder `.exe`
   - **Linux**: `.AppImage` oder `.deb`
3. Installieren und ausführen

### Entwicklungsumgebung

Wenn Sie beitragen oder aus dem Quellcode ausführen möchten：

```bash
# Repository klonen
git clone https://github.com/yourusername/tauri-port.git
cd tauri-port

# Abhängigkeiten installieren
npm install

# Im Entwicklungsmodus ausführen
npm run tauri dev
```

**Voraussetzungen für die Entwicklung**：
- [Node.js](https://nodejs.org/) (v20.19+ oder v22.12+)
- [Rust](https://www.rustup.rs/)
- [Tauri CLI](https://v2.tauri.app/start/create-project/)

## 🎯 Verwendung

1. **Aktualisieren**: Klicken Sie auf "Aktualisieren", um die Portliste zu aktualisieren
2. **Port Öffnen**: Klicken Sie auf "Port Öffnen", um einen bestimmten Port im Browser oder in einer benutzerdefinierten Anwendung zu öffnen
   - Geben Sie die Port-Nummer ein
   - Optional einen benutzerdefinierten Befehl eingeben (verwenden Sie `{port}` als Platzhalter)
3. **Details Erweitern**: Klicken Sie auf das `>`-Symbol, um detaillierte Prozessinformationen anzuzeigen
4. **Prozess Stoppen**: Klicken Sie auf "Stoppen", um den Prozess zu beenden
5. **Sprache Ändern**: Verwenden Sie das Sprach-Dropdown-Menü, um die Sprache zu wechseln

## 🛠️ Technologie-Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Rust + Tauri 2
- **Styling**: CSS3
- **i18n**: Benutzerdefiniertes Übersetzungssystem

## 📝 Plattform-Unterstützung

Derzeit unterstützt:
- **macOS** ✅

Demnächst verfügbar:
- **Windows** (in Entwicklung)
- **Linux** (in Entwicklung)

## 🤝 Mitwirken

Beiträge sind willkommen! Zögern Sie nicht, Pull-Requests einzureichen.

1. Repository forken
2. Feature-Branch erstellen (`git checkout -b feature/AmazingFeature`)
3. Änderungen committen (`git commit -m 'Add some AmazingFeature'`)
4. Zum Branch pushen (`git push origin feature/AmazingFeature`)
5. Pull-Request öffnen

## 📄 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe die [LICENSE](LICENSE)-Datei für Details.

## 🙏 Danksagungen

- Erstellt mit [Tauri](https://tauri.app/)
- Icons von [Tauri Icons](https://tauri.app/reference/icons/)

## 📧 Kontakt

Projekt-Link: [https://github.com/yourusername/tauri-port](https://github.com/yourusername/tauri-port)
