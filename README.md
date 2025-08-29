# 🧠 Trivia Challenge

Un juego de trivia interactivo desarrollado con HTML5, CSS3 y JavaScript vanilla.

## 📋 Descripción

Este es un juego de trivia con preguntas de opción múltiple que incluye:
- 8 preguntas variadas de cultura general
- Selección aleatoria de 5 preguntas por partida
- Sistema de puntuación en tiempo real
- Interfaz moderna y responsive
- Efectos visuales y animaciones
- Feedback inmediato para respuestas correctas/incorrectas

## 🚀 Cómo ejecutar el juego

### Opción 1: Abrir directamente en el navegador
1. Navega hasta la carpeta del proyecto
2. Haz doble clic en el archivo `index.html`
3. El juego se abrirá automáticamente en tu navegador predeterminado

### Opción 2: Usando un servidor local (recomendado)
1. Abre una terminal en la carpeta del proyecto
2. Si tienes Python instalado:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
3. Si tienes Node.js instalado:
   ```bash
   npx http-server
   ```
4. Abre tu navegador y ve a `http://localhost:8000`

### Opción 3: Usando Live Server (VS Code)
1. Instala la extensión "Live Server" en VS Code
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

## 🎮 Cómo jugar

1. **Inicio**: El juego comienza automáticamente al cargar la página
2. **Responder**: Haz clic en una de las 4 opciones disponibles
3. **Feedback**: Verás inmediatamente si tu respuesta es correcta o incorrecta
4. **Continuar**: Presiona "Siguiente Pregunta" para avanzar
5. **Resultado**: Al final verás tu puntaje total y porcentaje de aciertos
6. **Reiniciar**: Puedes jugar de nuevo con preguntas aleatorias

## ⌨️ Controles adicionales

- **Teclas 1-4**: Seleccionar opciones rápidamente
- **Enter**: Avanzar a la siguiente pregunta (cuando esté disponible)

## 📁 Estructura del proyecto

```
Lab1/
├── index.html      # Estructura principal del juego
├── styles.css      # Estilos y diseño visual
├── script.js       # Lógica del juego y funcionalidad
└── README.md       # Este archivo de instrucciones
```

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno con gradientes, animaciones y responsive design
- **JavaScript ES6+**: Lógica del juego, manipulación del DOM y eventos

## ✨ Características técnicas

- **Responsive Design**: Se adapta a diferentes tamaños de pantalla
- **Animaciones CSS**: Efectos visuales suaves y atractivos
- **Selección aleatoria**: Cada partida presenta preguntas diferentes
- **Feedback visual**: Colores y animaciones para respuestas correctas/incorrectas
- **Accesibilidad**: Navegación por teclado y estructura semántica

## 🎯 Funcionalidades implementadas

### HTML5
- ✅ Título de la trivia
- ✅ Contenedor para preguntas y opciones
- ✅ Indicador de puntaje actual
- ✅ Botón para siguiente pregunta
- ✅ Pantalla de resultados finales

### CSS
- ✅ Diseño atractivo y moderno
- ✅ Efectos hover en botones y opciones
- ✅ Estilos para respuestas correctas/incorrectas
- ✅ Animaciones y transiciones
- ✅ Diseño responsive

### JavaScript
- ✅ Arreglo de preguntas con opciones múltiples
- ✅ Carga dinámica de preguntas
- ✅ Detección de respuestas seleccionadas
- ✅ Validación y feedback de respuestas
- ✅ Sistema de puntuación
- ✅ Pantalla de resultados finales
- ✅ Función de reinicio del juego

## 🔧 Personalización

Para agregar más preguntas, edita el array `questions` en `script.js`:

```javascript
const questions = [
    {
        question: "Tu pregunta aquí",
        options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
        correct: 0 // Índice de la respuesta correcta (0-3)
    },
    // Más preguntas...
];
```

## 📱 Compatibilidad

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Dispositivos móviles (iOS/Android)

## 👨‍💻 Desarrollo

Este proyecto fue desarrollado como parte de un laboratorio educativo para aprender:
- Manipulación del DOM con JavaScript
- Diseño responsive con CSS
- Programación orientada a eventos
- Estructuras de datos y algoritmos básicos

---

¡Disfruta jugando y aprendiendo! 🎉