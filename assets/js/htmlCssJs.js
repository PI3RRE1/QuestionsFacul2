const perguntas = [
    {
        pergunta: "Qual é a finalidade da propriedade CSS display?",
        respostas: [
            "Controlar o posicionamento de um elemento na página.",
            "Determinar se um elemento HTML está visível.",
            "Definir o tipo de exibição de um elemento, como bloco, linha ou em linha.",
        ],
        correta: 2 // Resposta C é a correta
    },
    {
        pergunta: " O que o elemento <script> faz em HTML?",
        respostas: [
            "Define um estilo para um elemento HTML.",
            "Define um script do lado do servidor.",
            "Define um script do lado do cliente, como JavaScript, para ser executado na página.",
        ],
        correta: 2 // Resposta C é a correta
    },
    {
        pergunta: "Qual é a função do método querySelector() em JavaScript?",
        respostas: [
            "Determinar se um elemento HTML está visível.",
            "Selecionar um elemento do DOM com base em um seletor CSS.",
            "Definir a cor de fundo de uma página da web.",
        ],
        correta: 1 // Resposta B é a correta
    },
    
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas =  perguntas.length
const mostrarTotal =document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


// loop
for(const item of perguntas) {
    
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()


    // coloca as perguntas na tela
    quiz.appendChild(quizItem)
}