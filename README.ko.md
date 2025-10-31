# 포트 관리 🚀

[日本語](./README.ja.md) | [English](./README.md) | [中文](./README.zh.md) | [한국어](./README.ko.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

Tauri 2와 React로 구축된 모던한 크로스 플랫폼 포트 관리 애플리케이션입니다.

![포트 관리](./app.png)

## ✨ 기능

- **포트 모니터링**: 모든 리스닝 포트를 실시간으로 표시
- **프로세스 상세정보**: 각 프로세스의 상세 정보 표시
  - 명령줄 인수
  - 작업 디렉토리
  - 시작 시간
  - 메모리 사용량
- **포트 관리**:
  - 원클릭으로 프로세스 중지
  - 브라우저 또는 사용자 지정 애플리케이션에서 포트 열기
- **정리된 뷰**: 1000번대별로 포트 그룹화
- **정렬**: 포트, PID, 프로세스명, 메모리 사용량으로 정렬
- **필터링**: 범위로 포트 필터
- **다국어 지원**: 7개 언어 지원(일본어, 영어, 중국어, 한국어, 스페인어, 프랑스어, 독일어)

## 🚀 왜 Tauri인가요?

**Tauri 2**로 구축된 이 애플리케이션은 기존 Electron 앱과 비교하여 상당한 이점을 제공합니다：

- **⚡ 초고속**: Chromium을 번들링하는 대신 시스템 WebView를 사용하여 네이티브 성능 구현
- **💾 최소 메모리 사용량**: 일반적으로 Electron 대안보다 **10-20배 적은 메모리** 사용
  - Tauri 앱: ~50-100 MB
  - Electron 앱: ~500-1000 MB
- **📦 작은 바이너리 크기**: 최종 앱 크기 약 3-5 MB (Electron은 100 MB 이상)
- **🔒 보안 강화**: 메모리 안전성을 보장하는 Rust 기반 백엔드
- **🌍 크로스 플랫폼**: 한 번 작성하면 macOS, Windows, Linux에서 실행

이 포트 관리 앱은 Tauri가 무엇을 할 수 있는지 보여주는 완벽한 예입니다 - 풍부한 UI를 가진 완전한 기능의 데스크톱 앱이면서도 놀라울 정도로 가볍고 빠릅니다.

## 📥 설치

### 사전 빌드된 바이너리 다운로드

1. [Releases](https://github.com/yourusername/tauri-port/releases) 페이지로 이동
2. 플랫폼에 맞는 최신 릴리스 다운로드：
   - **macOS**: `.dmg` 또는 `.app.tar.gz`
   - **Windows**: `.msi` 또는 `.exe`
   - **Linux**: `.AppImage` 또는 `.deb`
3. 설치 및 실행

### 개발 환경 설정

기여하거나 소스에서 실행하려는 경우：

```bash
# 저장소 클론
git clone https://github.com/yourusername/tauri-port.git
cd tauri-port

# 의존성 설치
npm install

# 개발 모드 실행
npm run tauri dev
```

**개발 사전 요구사항**：
- [Node.js](https://nodejs.org/) (v20.19+ 또는 v22.12+)
- [Rust](https://www.rustup.rs/)
- [Tauri CLI](https://v2.tauri.app/start/create-project/)

## 🎯 사용법

1. **새로고침**: "새로고침" 버튼을 클릭하여 포트 목록 업데이트
2. **포트 열기**: "포트 열기"를 클릭하여 브라우저 또는 사용자 지정 애플리케이션에서 특정 포트 열기
   - 포트 번호 입력
   - 선택적으로 사용자 지정 명령 입력(`{port}`를 플레이스홀더로 사용)
3. **상세정보 확장**: `>` 아이콘을 클릭하여 상세한 프로세스 정보 표시
4. **프로세스 중지**: "중지" 버튼을 클릭하여 프로세스 종료
5. **언어 변경**: 언어 드롭다운을 사용하여 언어 전환

## 🛠️ 기술 스택

- **프론트엔드**: React + TypeScript + Vite
- **백엔드**: Rust + Tauri 2
- **스타일링**: CSS3
- **i18n**: 커스텀 번역 시스템

## 📝 플랫폼 지원

현재 지원:
- **macOS** ✅

곧 지원 예정:
- **Windows** (개발 중)
- **Linux** (개발 중)

## 🤝 기여

기여를 환영합니다! 언제든지 풀 리퀘스트를 제출해주세요.

1. 저장소 포크
2. 기능 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
3. 변경사항 커밋 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 푸시 (`git push origin feature/AmazingFeature`)
5. 풀 리퀘스트 열기

## 📄 라이센스

이 프로젝트는 MIT 라이센스에 따라 라이센스가 부여됩니다 - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🙏 감사의 말

- [Tauri](https://tauri.app/)로 구축
- 아이콘은 [Tauri Icons](https://tauri.app/reference/icons/)에서 제공

## 📧 연락처

프로젝트 링크: [https://github.com/yourusername/tauri-port](https://github.com/yourusername/tauri-port)
