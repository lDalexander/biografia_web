---
title: "Zyncro Abastecimiento — Sistema de Inteligencia de Inventario"
status: "ONLINE"
category: "Enterprise / Logistics"
year: 2026
featured: true
summary: "Sistema full-stack de inteligencia de inventario y abastecimiento logístico para empresa industrial. Monitorea ~500 SKUs en tiempo casi-real, calcula puntos de reorden con estadística aplicada y proyecta cuándo y cuánto comprar antes de que ocurra un quiebre de stock. Integra un ERP corporativo (MBA3), API propia, dashboard web y app móvil."
problem: "El ERP corporativo registra datos pero no proyecta ni alerta: vigilar manualmente cientos de insumos es inviable. Los quiebres de stock detienen producción; el exceso inmoviliza capital. Se necesitaba visibilidad centralizada, alertas automáticas y respuestas claras a '¿qué está por faltar?', '¿cuánto pido?' y '¿cuándo lo pido?'."
stack:
  - "Python 3.12 (FastAPI + uvicorn)"
  - "SciPy / NumPy (estadística)"
  - "SQLAlchemy + MySQL"
  - "React 18 + Vite"
  - "TanStack Query v5"
  - "Recharts"
  - "Tailwind CSS"
  - "React Native 0.83 + Expo"
  - "Nginx + systemd"
  - "Bridge ODBC (Windows Server)"
features:
  - "Sincronización con ERP MBA3 vía bridge ODBC — procesamiento de ~1M filas por ciclo"
  - "Motor de KPIs por SKU: consumo promedio, desviación estándar, Z-score, punto de reorden y cantidad sugerida de compra"
  - "Proyección 'diente de sierra': simulación día a día del stock futuro con órdenes automáticas al tocar el punto de reorden"
  - "Explosión de materiales (BOM): demanda de productos terminados → necesidad real de insumos"
  - "Alertas automáticas por email a las 9 AM con reporte HTML de SKUs críticos"
  - "Dashboard web con semáforo Crítico / Preventivo / Óptimo, filtros, historial y edición de parámetros"
  - "App móvil (React Native + Expo) para consulta y administración desde planta"
  - "Patrón de ingesta idempotente con control de concurrencia (lock + timeout) para evitar trabajos duplicados"
  - "Campos de edición humana (lead time, alertas silenciadas, stock en proveedor) nunca sobrescritos por sincronizaciones"
metrics:
  - "~500 SKUs monitoreados continuamente"
  - "3 sincronizaciones diarias (06:00 / 14:00 / 22:00)"
  - "~1.000.000 filas procesadas por sincronización"
  - "2 interfaces (web + móvil) sobre 1 API unificada"
  - "5 módulos: Inventario, Forecasting, Demanda/BOM, Historial, Admin"
  - "Nivel de servicio configurable (98% por defecto)"
---

Zyncro Abastecimiento transforma datos crudos de un ERP industrial en decisiones de compra accionables. El sistema integra un bridge ODBC en Windows con un backend FastAPI en Linux, aplica estadística (Z-score, desviación estándar) para calcular stocks de seguridad, y proyecta el comportamiento futuro del inventario mediante una simulación día a día. Un ingeniero construyó el stack completo: integración ERP, API, base de datos, frontend web, app móvil e infraestructura de despliegue.
