// Arreglo de preguntas con opciones y respuestas correctas
const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Londres", "Berlín", "París", "Madrid"],
        correct: 2
    },
    {
        question: "¿En qué año llegó el hombre a la Luna?",
        options: ["1967", "1969", "1971", "1973"],
        correct: 1
    },
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        options: ["Saturno", "Júpiter", "Neptuno", "Urano"],
        correct: 1
    },
    {
        question: "¿Quién escribió 'Cien años de soledad'?",
        options: ["Mario Vargas Llosa", "Jorge Luis Borges", "Gabriel García Márquez", "Pablo Neruda"],
        correct: 2
    },
    {
        question: "¿Cuál es el océano más grande del mundo?",
        options: ["Atlántico", "Índico", "Ártico", "Pacífico"],
        correct: 3
    },
    {
        question: "¿En qué continente se encuentra Egipto?",
        options: ["Asia", "África", "Europa", "América"],
        correct: 1
    },
    {
        question: "¿Cuál es el elemento químico con símbolo 'O'?",
        options: ["Oro", "Oxígeno", "Osmio", "Óxido"],
        correct: 1
    },
    {
        question: "¿Cuántos continentes hay en el mundo?",
        options: ["5", "6", "7", "8"],
        correct: 2
    }
];

// Variables del juego
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let gameQuestions = [];

// Elementos del DOM
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreElement = document.getElementById('score');
const currentQuestionElement = document.getElementById('current-question');
const maxQuestionsElement = document.getElementById('max-questions');
const totalQuestionsElement = document.getElementById('total-questions');
const nextBtn = document.getElementById('next-btn');
const feedbackElement = document.getElementById('feedback');
const gameContainer = document.querySelector('.game-container');
const resultContainer = document.getElementById('result-container');
const finalScoreElement = document.getElementById('final-score');
const finalTotalElement = document.getElementById('final-total');
const percentageElement = document.getElementById('percentage');
const restartBtn = document.getElementById('restart-btn');
const challengeBtn = document.getElementById('challenge-btn');
const challengeMessage = document.getElementById('challenge-message');
const challengeModal = document.getElementById('challenge-modal');
const closeChallengeBtn = document.getElementById('close-challenge');
const closeChallengeFooterBtn = document.getElementById('close-challenge-footer');
const acceptChallengeBtn = document.getElementById('accept-challenge');

// Función para mezclar array (algoritmo Fisher-Yates)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Función para inicializar el juego
function initGame() {
    // Seleccionar 5 preguntas aleatorias
    gameQuestions = shuffleArray(questions).slice(0, 5);
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    
    // Actualizar elementos del DOM
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = gameQuestions.length;
    maxQuestionsElement.textContent = gameQuestions.length;
    
    // Mostrar contenedor del juego y ocultar resultados
    gameContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    
    // Ocultar elementos del desafío al reiniciar
    challengeBtn.style.display = 'none';
    challengeMessage.textContent = '';
    challengeModal.style.display = 'none';
    
    // Mostrar primera pregunta
    showQuestion();
}

// Función para mostrar la pregunta actual
function showQuestion() {
    const question = gameQuestions[currentQuestionIndex];
    
    // Actualizar número de pregunta
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    
    // Mostrar pregunta
    questionText.textContent = question.question;
    
    // Limpiar opciones anteriores
    optionsContainer.innerHTML = '';
    
    // Crear opciones
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index, optionElement));
        optionsContainer.appendChild(optionElement);
    });
    
    // Resetear estado
    selectedOption = null;
    nextBtn.disabled = true;
    feedbackElement.textContent = '';
    feedbackElement.className = 'feedback';
}

// Función para seleccionar una opción
function selectOption(optionIndex, optionElement) {
    // Si ya se seleccionó una opción, no permitir cambios
    if (selectedOption !== null) return;
    
    selectedOption = optionIndex;
    const question = gameQuestions[currentQuestionIndex];
    const isCorrect = optionIndex === question.correct;
    
    // Marcar opción seleccionada
    optionElement.classList.add('selected');
    
    // Mostrar todas las opciones con sus estados
    const allOptions = optionsContainer.querySelectorAll('.option');
    allOptions.forEach((option, index) => {
        option.classList.add('disabled');
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === optionIndex && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    // Actualizar puntaje y feedback
    if (isCorrect) {
        score++;
        scoreElement.textContent = score;
        feedbackElement.textContent = '¡Correcto! 🎉';
        feedbackElement.className = 'feedback correct';
    } else {
        feedbackElement.textContent = `Incorrecto. La respuesta correcta es: ${question.options[question.correct]}`;
        feedbackElement.className = 'feedback incorrect';
    }
    
    // Habilitar botón siguiente
    nextBtn.disabled = false;
}

// Función para ir a la siguiente pregunta
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < gameQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Función para mostrar resultados finales
function showResults() {
    gameContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    const totalQuestions = gameQuestions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    finalScoreElement.textContent = score;
    finalTotalElement.textContent = totalQuestions;
    percentageElement.textContent = `${percentage}%`;
    
    // Cambiar color del porcentaje según el resultado
    if (percentage >= 80) {
        percentageElement.style.color = '#4CAF50'; // Verde
    } else if (percentage >= 60) {
        percentageElement.style.color = '#FF9800'; // Naranja
    } else {
        percentageElement.style.color = '#f44336'; // Rojo
    }
    
    // Mostrar desafío basado en el puntaje
    showChallengeBasedOnScore(percentage);
}

// Función para mostrar el desafío según el puntaje
function showChallengeBasedOnScore(percentage) {
    let message = '';
    
    if (percentage >= 80) {
        message = '¡Excelente! 🌟 Tienes gran potencial para la programación.';
    } else if (percentage >= 60) {
        message = '¡Buen trabajo! 👍 Con práctica puedes mejorar aún más.';
    } else if (percentage >= 40) {
        message = '¡No te rindas! 💪 La programación requiere práctica y paciencia.';
    } else {
        message = '¡Sigue intentando! 🚀 Cada error es una oportunidad de aprender.';
    }
    
    // Mostrar mensaje y botón de desafío
    challengeMessage.textContent = message;
    challengeBtn.style.display = 'inline-block';
    
    // Asegurar que la sección de desafío sea visible
    const challengeSection = document.querySelector('.challenge-section');
    if (challengeSection) {
        challengeSection.style.display = 'block';
    }
}

// Función para reiniciar el juego
function restartGame() {
    initGame();
}

// Funciones para manejar el modal de desafío
function openChallengeModal() {
    challengeModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevenir scroll del fondo
}

function closeChallengeModal() {
    challengeModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll
}

function acceptChallenge() {
    // Mostrar mensaje de motivación
    alert('¡Excelente! 🎉\n\nHas aceptado el desafío. Ahora es tu momento de brillar como desarrollador.\n\n💡 Consejos para empezar:\n• Revisa el código de esta trivia como referencia\n• Comienza con algo simple y ve agregando funcionalidades\n• ¡No tengas miedo de experimentar!\n\n¡Mucha suerte en tu proyecto! 🚀');
    closeChallengeModal();
}

// Event Listeners
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartGame);
challengeBtn.addEventListener('click', openChallengeModal);
closeChallengeBtn.addEventListener('click', closeChallengeModal);
closeChallengeFooterBtn.addEventListener('click', closeChallengeModal);
acceptChallengeBtn.addEventListener('click', acceptChallenge);

// Cerrar modal al hacer clic fuera del contenido
challengeModal.addEventListener('click', (event) => {
    if (event.target === challengeModal) {
        closeChallengeModal();
    }
});

// Inicializar el juego cuando se carga la página
document.addEventListener('DOMContentLoaded', initGame);

// Función para manejar teclas (opcional - mejora la experiencia)
document.addEventListener('keydown', (event) => {
    // Cerrar modal con Escape
    if (event.key === 'Escape' && challengeModal.style.display === 'flex') {
        closeChallengeModal();
        return;
    }
    
    if (event.key === 'Enter' && !nextBtn.disabled) {
        nextQuestion();
    }
    
    // Permitir seleccionar opciones con teclas 1-4
    if (selectedOption === null && ['1', '2', '3', '4'].includes(event.key)) {
        const optionIndex = parseInt(event.key) - 1;
        const options = optionsContainer.querySelectorAll('.option');
        if (options[optionIndex]) {
            selectOption(optionIndex, options[optionIndex]);
        }
    }
});

// Agregar números a las opciones para mejor UX
function addOptionNumbers() {
    const style = document.createElement('style');
    style.textContent = `
        .option::before {
            content: counter(option-counter) ". ";
            counter-increment: option-counter;
            font-weight: bold;
            color: #666;
        }
        .options-container {
            counter-reset: option-counter;
        }
    `;
    document.head.appendChild(style);
}

// Aplicar numeración a las opciones
addOptionNumbers();