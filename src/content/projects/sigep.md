---
title: "SIGEP — Sistema Integrado de Gestión de Empaque y Producción"
slug: "sigep"
status: "ONLINE"
category: "Enterprise / Industrial"
year: 2024
featured: true
summary: "Aplicación empresarial Android para coordinación de líneas de empaque en planta manufacturera de productos de limpieza. Opera en entornos con conectividad intermitente mediante arquitectura offline-first."
problem: "El registro de producción se realizaba íntegramente en papel, sin trazabilidad en tiempo real ni visibilidad del estado de los lotes entre turnos. El entorno WiFi de planta es intermitente, lo que hacía inviable una solución puramente online."
stack:
  - "Kotlin (Android Nativo)"
  - "Coroutines + Flow"
  - "SQLite (Room)"
  - "WebSockets"
  - "Python (FastAPI)"
  - "SQLAlchemy"
  - "SQLite / PostgreSQL"
features:
  - "Arquitectura offline-first con cola de sincronización idempotente"
  - "Reconciliación de IDs temporales al reconectar con el servidor"
  - "Despacho de insumos estilo 'Uber' — asignación dinámica a operarios"
  - "Alarma crítica full-screen con WakeLock de Android para eventos de paro"
  - "Panel de supervisión en tiempo real vía WebSocket"
  - "Escaneo de códigos de barras para identificación de SKUs"
metrics:
  - "~500 SKUs catalogados"
  - "~20 tablets industriales coordinadas simultáneamente"
  - "100% trazabilidad de lotes en condiciones offline"
  - "0 pérdidas de datos por reconexión (encolado idempotente)"
---

SIGEP reemplazó un flujo de trabajo basado en papel en una planta manufacturera de detergentes, introduciendo trazabilidad digital completa sin depender de conectividad continua. La aplicación corre en tablets Android robustizadas distribuidas por línea de producción.
