# CinePlus

Este proyecto es una aplicación web simulada para la gestión de películas en cartelera, con opciones de visualización, renta y reseñas. Está desarrollado con **HTML, CSS, Bootstrap y jQuery**.

---

## Funcionalidades Implementadas

1. **Listado dinámico de películas (index.html)**
   - Carga las películas desde un archivo `peliculas.json` usando AJAX.
   - Simulación de carga con retraso artificial de **5 segundos** y un spinner.
   - Indica si una película está en **Estreno** o en **Cartelera Regular** según su fecha.
   - Botones:
     - **Ver más** → Abre página de detalles.
     - **Rentar** → Abre el formulario de renta.
     - **Ver tráiler** → Abre el tráiler en un **Modal de Bootstrap**.
   - Animación de entrada con efectos (`fadeIn`, `slideDown`).

2. **Detalle de película (detalle.html)**
   - Muestra sinopsis, tráiler embebido, géneros, estado y precio dinámico.
   - Carga reseñas desde `reseñas.json` con AJAX.
   - Cada reseña incluye:
     - Usuario
     - Comentario
     - Calificación con estrellas ⭐.

3. **Formulario de renta (renta.html)**
   - Permite ingresar cliente, correo, seleccionar películas, días de renta y forma de pago.
   - Cálculo dinámico del **total a pagar** (precio/día × días).
   - Resumen de la compra mostrado en un **Modal de Bootstrap**.

4. **Formulario de contacto (contacto.html)**
   - Validación de todos los campos.
   - El mensaje debe tener entre **20 y 50 caracteres**.
   - Mensajes de error personalizados.
   - Al enviar correctamente, muestra una alerta de confirmación.

5. **Tema visual personalizado**
   - Tipografía global con **Google Fonts (Poppins)**.
   - Estilos mejorados en `style.css`: márgenes, paddings, colores, hover en tarjetas y botones.
   - Footer siempre fijo en la parte inferior del navegador.
   - Navbar en todas las páginas, con la página actual destacada.

6. **Extras**
   - Alerta de bienvenida que aparece **solo la primera vez** que entras (persistencia con `localStorage`).

---

## Estructura del Proyecto
```
├── css/
│ └── style.css
├── data/
│ ├── peliculas.json
│ └── resenas.json
├── img/ (imágenes de películas)
├── js/
│ ├── app.js
│ ├── renta.js
├── pages/
│ ├── contacto.html
│ ├── detalle.html
│ └── renta.html
└── index.html
      
```
---

## Instrucciones de Uso

1. Clona o descarga el proyecto.
2. Abre una terminal en la carpeta del proyecto y ejecuta un servidor local (ejemplo con **VSCode Live Server** o **http-server**):
   ```bash
   npx http-server .
   ```
3. Ingresa a la aplicación en tu navegador:  
   ```
   http://127.0.0.1:5500/index.html
   ```
4. Navega por las secciones:
   - **Inicio (index.html)** → Lista de películas.
   - **Detalle** → Información y reseñas.
   - **Renta** → Formulario para alquilar.
   - **Contacto** → Formulario validado con mensajes personalizados.

---

## Tecnologías Usadas

- HTML5  
- CSS3 / Bootstrap 5  
- jQuery / AJAX  
- JSON  

---

##  Notas
- Las reseñas y películas se cargan desde archivos `.json` simulando una API.  
- El sistema está orientado al aprendizaje de conceptos de **AJAX, manipulación del DOM y validación de formularios**.  

---

Desarrollado como práctica de programación web.
