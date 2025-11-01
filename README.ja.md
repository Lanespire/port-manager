# ポート管理 🚀

[日本語](./README.ja.md) | [English](./README.md) | [中文](./README.zh.md) | [한국어](./README.ko.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

Tauri 2とReactで構築されたモダンなクロスプラットフォームポート管理アプリケーション。

![ポート管理](./app.png)

## ✨ 機能

- **ポート監視**: すべてのリスニングポートをリアルタイムで表示
- **プロセス詳細**: 各プロセスの詳細情報を表示
  - コマンドライン引数
  - 作業ディレクトリ
  - 起動時刻
  - メモリ使用量
- **ポート管理**:
  - ワンクリックでプロセスを停止
  - ブラウザまたはカスタムアプリケーションでポートを開く
- **整理されたビュー**: ポートを1000番台ごとにグループ化
- **ソート**: ポート、PID、プロセス名、メモリ使用量でソート
- **フィルタリング**: 範囲でポートをフィルタ
- **多言語対応**: 7言語に対応（日本語、英語、中国語、韓国語、スペイン語、フランス語、ドイツ語）

## 🚀 なぜTauriなのか？

**Tauri 2**で構築されたこのアプリケーションは、従来のElectronアプリと比較して大きな利点があります：

- **⚡ 超高速**: Chromiumをバンドルする代わりにシステムWebViewを使用し、ネイティブパフォーマンスを実現
- **💾 最小限のメモリ使用量**: Electronの代替品と比較して通常**10～20倍少ないメモリ**を使用
  - Tauriアプリ: ~50-100 MB
  - Electronアプリ: ~500-1000 MB
- **📦 小さなバイナリサイズ**: 最終アプリサイズは約3～5 MB（Electronは100 MB以上）
- **🔒 セキュリティ強化**: メモリ安全性を保証するRustベースのバックエンド
- **🌍 クロスプラットフォーム**: 一度書けばmacOS、Windows、Linuxで動作

このポート管理アプリは、Tauriが何ができるかを示す完璧な例です - リッチなUIを持つフル機能のデスクトップアプリでありながら、驚くほど軽量で高速です。

## 📥 インストール

### ビルド済みバイナリをダウンロード

1. [Releases](https://github.com/Lanespire/port-manager/releases/)ページにアクセス
2. お使いのプラットフォーム用の最新リリースをダウンロード：
   - **macOS**: `.dmg` または `.app.tar.gz`
   - **Windows**: `.msi` または `.exe`
   - **Linux**: `.AppImage` または `.deb`
3. インストールして実行

### 開発環境のセットアップ

貢献したい場合やソースから実行したい場合：

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/tauri-port.git
cd tauri-port

# 依存関係をインストール
npm install

# 開発モードで実行
npm run tauri dev
```

**開発の前提条件**：
- [Node.js](https://nodejs.org/) (v20.19+またはv22.12+)
- [Rust](https://www.rustup.rs/)
- [Tauri CLI](https://v2.tauri.app/start/create-project/)

## 🎯 使い方

1. **更新**: 「更新」ボタンをクリックしてポート一覧を更新
2. **ポートを開く**: 「ポートを開く」をクリックして特定のポートをブラウザまたはカスタムアプリケーションで開く
   - ポート番号を入力
   - オプションでカスタムコマンドを入力（`{port}`をプレースホルダーとして使用）
3. **詳細を展開**: `>`アイコンをクリックして詳細なプロセス情報を表示
4. **プロセスを停止**: 「停止」ボタンをクリックしてプロセスを終了
5. **言語を変更**: 言語ドロップダウンを使用して言語を切り替え

## 🛠️ 技術スタック

- **フロントエンド**: React + TypeScript + Vite
- **バックエンド**: Rust + Tauri 2
- **スタイリング**: CSS3
- **i18n**: カスタム翻訳システム

## 📝 プラットフォームサポート

現在対応:
- **macOS** ✅

近日対応予定:
- **Windows** (開発中)
- **Linux** (開発中)

## 🤝 コントリビューション

コントリビューションを歓迎します！お気軽にプルリクエストを提出してください。

1. リポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更をコミット (`git commit -m 'Add some AmazingFeature'`)
4. ブランチにプッシュ (`git push origin feature/AmazingFeature`)
5. プルリクエストを開く

## 📄 ライセンス

このプロジェクトはMITライセンスの下でライセンスされています - 詳細は[LICENSE](LICENSE)ファイルを参照してください。

## 🙏 謝辞

- [Tauri](https://tauri.app/)で構築
- アイコンは[Tauri Icons](https://tauri.app/reference/icons/)から

## 📧 連絡先

プロジェクトリンク: [https://github.com/yourusername/tauri-port](https://github.com/yourusername/tauri-port)
