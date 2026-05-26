---
title: "SIGAC — Sistema de Gestión de Acceso al Comedor"
status: "ONLINE"
category: "Corporate / IoT"
year: 2026
featured: true
summary: "Sistema corporativo 24/7 para control de acceso al comedor de DETCUADOR S.A. mediante biometría ZKTeco. Reemplazó un proceso manual en papel, eliminando fraudes y automatizando el flujo de ~140 empleados en tres turnos."
problem: "El control de almuerzos se gestionaba en papel de forma manual, sin auditoría ni trazabilidad. Esto generaba fraudes por registro duplicado y consumía tiempo administrativo considerable en la reconciliación diaria."
stack:
  - "Python (Worker de hardware ZKTeco)"
  - "Node.js (Express)"
  - "React 18 + Vite"
  - "MariaDB"
  - "Socket.IO"
  - "Nginx (reverse proxy)"
  - "systemd (proceso daemon)"
features:
  - "Integración directa con hardware biométrico ZKTeco K40 vía protocolo TCP"
  - "Impresión automática de tickets ESC/POS en impresora térmica"
  - "Dashboard web en tiempo real con latencia <2s vía Socket.IO"
  - "Hardening completo: JWT, rate limiting, hashing bcrypt, HTTPS"
  - "Tres turnos de trabajo con políticas de acceso independientes"
  - "Logs de auditoría inmutables por empleado y turno"
metrics:
  - "~140 empleados activos"
  - "~100 tickets de acceso diarios"
  - "<2s latencia de extremo a extremo (biométrico → ticket impreso)"
  - ">99% uptime desde Enero 2026"
  - "0 incidentes de fraude registrados post-implementación"
---

SIGAC opera como infraestructura crítica de RRHH, procesando accesos biométricos en tiempo real. El sistema worker en Python comunica con el dispositivo ZKTeco y delega eventos al backend Node.js que actualiza el dashboard React y dispara la impresión del ticket físico simultáneamente.
