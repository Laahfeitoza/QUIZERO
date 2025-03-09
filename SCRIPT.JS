// Definir as perguntas, respostas e explicações
const quizData = [
    {
        question: "Quantos estados o Grupo Energisa atende com distribuição de energia elétrica?",
        answers: ["3 estados", "5 estados", "7 estados", "11 estados"],
        correct: 3, // Índice da resposta correta
        explanation: "A Energisa distribui energia elétrica em 11 estados brasileiros, sendo uma das maiores empresas do setor."
    },
    {
        question: "Em que ano a Energisa foi fundada?",
        answers: ["1905", "1980", "1992", "2000"],
        correct: 0, // Índice da resposta correta
        explanation: "A Energisa foi fundada em 1905, com o objetivo de atuar na distribuição de energia elétrica."
    },
    {
        question: "Quantos milhões de clientes a Energisa atende atualmente?",
        answers: ["5 milhões", "10 milhões", "20 milhões", "30 milhões"],
        correct: 2, // Índice da resposta correta
        explanation: "A Energisa atende mais de 20 milhões de clientes em diversas regiões do Brasil."
    },
    {
        question: "A Energisa investe fortemente em fontes de energia renováveis, como:",
        answers: ["Solar e eólica", "Hidrelétricas", "Energia nuclear", "Carvão mineral"],
        correct: 0, // Índice da resposta correta
        explanation: "A Energisa investe em energias renováveis, como solar e eólica, para garantir uma matriz energética mais sustentável."
    },
    {
        question: "A empresa foi uma das pioneiras na implementação de redes inteligentes, utilizando tecnologias para:",
        answers: ["Melhorar a distribuição de energia e a qualidade do serviço", "Construir usinas hidrelétricas", "Aumentar o consumo de energia nas áreas urbanas", "Reduzir os preços de energia para clientes industriais"],
        correct: 0, // Índice da resposta correta
        explanation: "A Energisa foi pioneira na implementação de redes inteligentes, visando otimizar a distribuição de energia e melhorar a qualidade do serviço."
    },
    {
        question: "Qual é o principal valor que a Energisa busca promover em suas operações?",
        answers: ["Inovação", "Sustentabilidade", "Redução de custos", "Crescimento rápido"],
        correct: 1,
        explanation: "A Energisa promove a sustentabilidade em suas operações, buscando sempre preservar o meio ambiente e oferecer soluções de energia mais limpas."
    },
    {
        question: "A Energisa é uma das maiores distribuidoras de energia em quais estados do Brasil?",
        answers: ["Acre, Amazonas e Rondônia", "Rio de Janeiro, São Paulo e Paraná", "Minas Gerais, Mato Grosso e Goiás", "Paraíba, Ceará e Bahia"],
        correct: 2,
        explanation: "A Energisa atua em diversos estados, incluindo Minas Gerais, Mato Grosso e Goiás, sendo uma das maiores distribuidoras de energia elétrica do Brasil."
    },
    {
        question: "Em 2023, qual foi a área com o maior investimento da Energisa?",
        answers: ["Energias renováveis", "Infraestrutura para redes inteligentes", "Pesquisa e desenvolvimento", "Expansão para novos estados"],
        correct: 1,
        explanation: "A Energisa investiu fortemente em infraestrutura para redes inteligentes, uma tecnologia que melhora a distribuição e o gerenciamento de energia."
    },
    {
        question: "Qual é o nome do programa que a Energisa utiliza para engajar a comunidade e seus colaboradores em projetos sustentáveis?",
        answers: ["E-NOVA", "EcoEnergisa", "Conectar Energia", "Energia do Bem"],
        correct: 0,
        explanation: "O E-nova é o programa de inovação incremental do Grupo Energisa, focado na melhoria contínua. Seu objetivo é implantar iniciativas alinhadas com a estratégia do grupo, gerando bons resultados tanto para a organização quanto para os clientes."
    },
    {
        question: "Qual é a tecnologia que a Energisa usa para monitorar e gerenciar o consumo de energia de seus clientes em tempo real?",
        answers: ["Medidores inteligentes", "Aplicativo mobile de consumo", "Sensores de luz", "Inteligência Artificial"],
        correct: 0,
        explanation: "A Energisa usa medidores inteligentes para monitorar e gerenciar o consumo de energia dos seus clientes em tempo real, facilitando a gestão e oferecendo maior precisão."
    },
    {
        question: "A Energisa é responsável por fornecer energia elétrica para quais tipos de clientes?",
        answers: ["Apenas residenciais", "Apenas comerciais", "Apenas industriais", "Residenciais, comerciais e industriais"],
        correct: 3,
        explanation: "A Energisa atende diversos tipos de clientes, incluindo residenciais, comerciais e industriais, oferecendo energia elétrica de qualidade."
    },
    {
        question: "Qual é a principal missão da Energisa ao oferecer serviços de energia elétrica?",
        answers: ["Garantir a melhor experiência para o cliente", "Ser a empresa mais rentável", "Aumentar a produção de energia", "Reduzir os custos operacionais"],
        correct: 0,
        explanation: "A missão da Energisa é sempre garantir que seus clientes recebam energia elétrica com qualidade, de forma eficiente e segura."
    }
];

// Variáveis globais
let currentQuestionIndex = 0;
let score = 0;

// Carregar a pergunta atual
function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];
    const questionContainer = document.getElementById("question-container");

    questionContainer.innerHTML = `
        <p>${questionData.question}</p>
        <div id="answers">
            ${questionData.answers.map((answer, index) => `
                <div class="answer" onclick="checkAnswer(${index})">${answer}</div>
            `).join('')}
        </div>
        <div id="explanation" style="display: none;">
            <p><strong>Explicação:</strong> ${questionData.explanation}</p>
        </div>
    `;
}

// Verificar resposta selecionada
function checkAnswer(selectedIndex) {
    const questionData = quizData[currentQuestionIndex];
    const isCorrect = selectedIndex === questionData.correct;

    if (isCorrect) {
        score += 10;
        alert("Resposta correta!");
    } else {
        alert(`Resposta incorreta! A resposta correta é: ${questionData.answers[questionData.correct]}`);
    }

    // Mostrar explicação
    document.getElementById("explanation").style.display = "block";

    // Atualizar o placar
    document.getElementById("score").textContent = `Pontuação: ${score}`;

    // Passar para a próxima pergunta
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        setTimeout(loadQuestion, 3000); // Esperar 2 segundos antes de carregar a próxima pergunta
    } else {
        showResult();
    }
}

// Mostrar resultado final
function showResult() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("final-score").textContent = `Seu placar final é: ${score}`;
}

// Reiniciar o quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score").textContent = `Pontuação: ${score}`;
    document.getElementById("result-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    loadQuestion();
}

// Iniciar o quiz
loadQuestion();
