# Generador de QR Code

Un proyecto frontend moderno, accesible y completamente responsive que permite generar códigos QR dinámicos a partir de texto o enlaces ingresados por el usuario. Construido desde cero con **HTML, CSS y JavaScript puro**, sin frameworks.

---

## Características principales

- Generación de códigos QR en tiempo real usando API externa
- Interfaz minimalista, responsiva y visualmente moderna
- Interacciones suaves con mensajes en tiempo real
- Accesibilidad para lectores de pantalla (`aria-*`, `sr-only`)
- Funcionalidad para **descargar el código QR generado**

---

## Estructura del proyecto

Projeto.QRcode/
├── index.html
├── css/
│ └── styles.css
├── js/
│ └── scripts.js
├── img/
│ ├── qrcode.png
│ └── preview.jpg

---

## Tecnologías utilizadas

- HTML5 - estructura semántica
- CSS3 - diseño adaptativo con media queries
- JavaScript ES6 - manipulación del DOM, interacción dinámica y lógica de descarga
- API externa

  ---

  ## Vista previa

  ![Vista del Generador de Código QR](img/preview.jpg)

 ---

 ## Detalles técnicos

 ### Accesibilidad
 - Uso de aria-live para mensajes de estado dinámicos.
 - aria-label y title en el botón de descarga.
 - Elementos sr-only para lectores de pantalla.

 ### Interactividad
 - Lógica de generación y reinicio de QR con una sola función reutilizable.
 - Estado visual en el botón ("Generando..." →  "Crear nuevo QR")
 - Animación pulse para feedback visual al descargar.

 ### Funcionalidad avanzada
 - Conversión del código QR en imagen descargable usando canvas
 - Uso de crossOrigin para permitir renderizado externo sin errores.
 - Doble control de eventos: clic y "tecla Enter".

---

## Licencia 

- Este proyecto fue desarrollado con fines educativos y de portafolio personal. Puedes usarlo y adaptarlo libremente. Se prohíbe su uso comercial con fines engañosos.

---

## Autora

Amanda Cereja 
GitHub: @amandaceereja
Contacto: amandacereja027@outlook.com