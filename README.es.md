# Gestor de Puertos 🚀

[日本語](./README.ja.md) | [English](./README.md) | [中文](./README.zh.md) | [한국어](./README.ko.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

Una aplicación moderna multiplataforma de gestión de puertos construida con Tauri 2 y React.

![Gestor de Puertos](./docs/screenshot.png)

## ✨ Características

- **Monitoreo de Puertos**: Muestra todos los puertos en escucha en tiempo real
- **Detalles del Proceso**: Muestra información detallada de cada proceso
  - Argumentos de línea de comandos
  - Directorio de trabajo
  - Hora de inicio
  - Uso de memoria
- **Gestión de Puertos**:
  - Detener procesos con un clic
  - Abrir puertos en el navegador o aplicación personalizada
- **Vista Organizada**: Agrupa puertos por rangos de 1000
- **Ordenamiento**: Por puerto, PID, nombre del proceso, uso de memoria
- **Filtrado**: Filtrar puertos por rango
- **Soporte Multilingüe**: Soporta 7 idiomas (japonés, inglés, chino, coreano, español, francés, alemán)

## 🚀 ¿Por qué Tauri?

Construida con **Tauri 2**, esta aplicación ofrece ventajas significativas sobre las aplicaciones Electron tradicionales：

- **⚡ Súper Rápido**: Rendimiento nativo usando WebView del sistema en lugar de empaquetar Chromium
- **💾 Mínima Huella de Memoria**: Generalmente usa **10-20 veces menos memoria** que las alternativas Electron
  - Aplicaciones Tauri: ~50-100 MB
  - Aplicaciones Electron: ~500-1000 MB
- **📦 Tamaño Binario Pequeño**: Tamaño final de la aplicación ~3-5 MB vs. 100+ MB para Electron
- **🔒 Seguridad Mejorada**: Backend basado en Rust con garantías de seguridad de memoria
- **🌍 Multiplataforma**: Escribir una vez, ejecutar en macOS, Windows y Linux

Este gestor de puertos es un ejemplo perfecto de lo que Tauri puede hacer: una aplicación de escritorio con todas las funciones y una interfaz rica que permanece increíblemente ligera y receptiva.

## 📥 Instalación

### Descargar Binarios Precompilados

1. Visite la página de [Releases](https://github.com/yourusername/tauri-port/releases)
2. Descargue la última versión para su plataforma：
   - **macOS**: `.dmg` o `.app.tar.gz`
   - **Windows**: `.msi` o `.exe`
   - **Linux**: `.AppImage` o `.deb`
3. Instalar y ejecutar

### Configuración de Desarrollo

Si desea contribuir o ejecutar desde el código fuente：

```bash
# Clonar el repositorio
git clone https://github.com/yourusername/tauri-port.git
cd tauri-port

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run tauri dev
```

**Requisitos previos para desarrollo**：
- [Node.js](https://nodejs.org/) (v20.19+ o v22.12+)
- [Rust](https://www.rustup.rs/)
- [Tauri CLI](https://v2.tauri.app/start/create-project/)

## 🎯 Uso

1. **Actualizar**: Haga clic en "Actualizar" para actualizar la lista de puertos
2. **Abrir Puerto**: Haga clic en "Abrir Puerto" para abrir un puerto específico en el navegador o aplicación personalizada
   - Ingrese el número de puerto
   - Opcionalmente ingrese un comando personalizado (use `{port}` como marcador de posición)
3. **Expandir Detalles**: Haga clic en el icono `>` para ver información detallada del proceso
4. **Detener Proceso**: Haga clic en "Detener" para terminar el proceso
5. **Cambiar Idioma**: Use el menú desplegable de idioma para cambiar el idioma

## 🛠️ Stack Tecnológico

- **Frontend**: React + TypeScript + Vite
- **Backend**: Rust + Tauri 2
- **Estilos**: CSS3
- **i18n**: Sistema de traducción personalizado

## 📝 Soporte de Plataformas

Actualmente soportado:
- **macOS** ✅

Próximamente:
- **Windows** (en desarrollo)
- **Linux** (en desarrollo)

## 🤝 Contribución

¡Las contribuciones son bienvenidas! No dude en enviar solicitudes de extracción.

1. Haga fork del repositorio
2. Cree una rama de función (`git checkout -b feature/AmazingFeature`)
3. Confirme sus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Empuje a la rama (`git push origin feature/AmazingFeature`)
5. Abra una solicitud de extracción

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulte el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- Construido con [Tauri](https://tauri.app/)
- Iconos de [Tauri Icons](https://tauri.app/reference/icons/)

## 📧 Contacto

Enlace del proyecto: [https://github.com/yourusername/tauri-port](https://github.com/yourusername/tauri-port)
