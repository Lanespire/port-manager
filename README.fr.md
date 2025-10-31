# Gestionnaire de Ports 🚀

[日本語](./README.ja.md) | [English](./README.md) | [中文](./README.zh.md) | [한국어](./README.ko.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

Une application moderne multiplateforme de gestion de ports construite avec Tauri 2 et React.

![Gestionnaire de Ports](./docs/screenshot.png)

## ✨ Fonctionnalités

- **Surveillance des Ports**: Affiche tous les ports en écoute en temps réel
- **Détails du Processus**: Affiche des informations détaillées pour chaque processus
  - Arguments de ligne de commande
  - Répertoire de travail
  - Heure de démarrage
  - Utilisation de la mémoire
- **Gestion des Ports**:
  - Arrêter les processus en un clic
  - Ouvrir les ports dans le navigateur ou une application personnalisée
- **Vue Organisée**: Regroupe les ports par plages de 1000
- **Tri**: Par port, PID, nom du processus, utilisation de la mémoire
- **Filtrage**: Filtrer les ports par plage
- **Support Multilingue**: Supporte 7 langues (japonais, anglais, chinois, coréen, espagnol, français, allemand)

## 🚀 Pourquoi Tauri ?

Construite avec **Tauri 2**, cette application offre des avantages significatifs par rapport aux applications Electron traditionnelles：

- **⚡ Ultra Rapide**: Performances natives utilisant WebView système au lieu d'empaqueter Chromium
- **💾 Empreinte Mémoire Minimale**: Utilise généralement **10 à 20 fois moins de mémoire** que les alternatives Electron
  - Applications Tauri: ~50-100 MB
  - Applications Electron: ~500-1000 MB
- **📦 Taille Binaire Réduite**: Taille finale de l'application ~3-5 MB vs. 100+ MB pour Electron
- **🔒 Sécurité Renforcée**: Backend basé sur Rust avec garanties de sécurité mémoire
- **🌍 Multiplateforme**: Écrire une fois, exécuter sur macOS, Windows et Linux

Ce gestionnaire de ports est un exemple parfait de ce que Tauri peut faire - une application de bureau complète avec une interface riche qui reste incroyablement légère et réactive.

## 📥 Installation

### Télécharger les Binaires Précompilés

1. Visitez la page [Releases](https://github.com/yourusername/tauri-port/releases)
2. Téléchargez la dernière version pour votre plateforme：
   - **macOS**: `.dmg` ou `.app.tar.gz`
   - **Windows**: `.msi` ou `.exe`
   - **Linux**: `.AppImage` ou `.deb`
3. Installer et exécuter

### Configuration de Développement

Si vous souhaitez contribuer ou exécuter depuis les sources：

```bash
# Cloner le dépôt
git clone https://github.com/yourusername/tauri-port.git
cd tauri-port

# Installer les dépendances
npm install

# Exécuter en mode développement
npm run tauri dev
```

**Prérequis pour le développement**：
- [Node.js](https://nodejs.org/) (v20.19+ ou v22.12+)
- [Rust](https://www.rustup.rs/)
- [Tauri CLI](https://v2.tauri.app/start/create-project/)

## 🎯 Utilisation

1. **Actualiser**: Cliquez sur "Actualiser" pour mettre à jour la liste des ports
2. **Ouvrir le Port**: Cliquez sur "Ouvrir le Port" pour ouvrir un port spécifique dans le navigateur ou une application personnalisée
   - Entrez le numéro de port
   - Entrez éventuellement une commande personnalisée (utilisez `{port}` comme espace réservé)
3. **Développer les Détails**: Cliquez sur l'icône `>` pour voir les informations détaillées du processus
4. **Arrêter le Processus**: Cliquez sur "Arrêter" pour terminer le processus
5. **Changer de Langue**: Utilisez le menu déroulant de langue pour changer de langue

## 🛠️ Stack Technologique

- **Frontend**: React + TypeScript + Vite
- **Backend**: Rust + Tauri 2
- **Styles**: CSS3
- **i18n**: Système de traduction personnalisé

## 📝 Support des Plateformes

Actuellement supporté:
- **macOS** ✅

Bientôt disponible:
- **Windows** (en développement)
- **Linux** (en développement)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à soumettre des demandes de tirage.

1. Forkez le dépôt
2. Créez une branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Validez vos modifications (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une demande de tirage

## 📄 Licence

Ce projet est sous licence MIT - consultez le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- Construit avec [Tauri](https://tauri.app/)
- Icônes de [Tauri Icons](https://tauri.app/reference/icons/)

## 📧 Contact

Lien du projet: [https://github.com/yourusername/tauri-port](https://github.com/yourusername/tauri-port)
