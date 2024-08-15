const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a principal causa do aquecimento global?",
        alternativas: [
            {
                texto: "Ciclos naturais da Terra.",
                afirmacao: "Errado"
            },
            {
                texto: "Atividades humanas.",
                afirmacao: "Correto"
            }
        ]
    },
    {
        enunciado: "A chuva ácida é causada por:",
        alternativas: [
            {
                texto: "Poluentes atmosféricos.",
                afirmacao: "Correto"
            },
            {
                texto: "Variações naturais do clima.",
                afirmacao: "Errado"
            }
        ]
    },
    {
        enunciado: "Em uma região de clima mediterrâneo, você esperaria:",
        alternativas: [
            {
                texto: "Invernos chuvosos e verões secos.",
                afirmacao: "Correto"
            },
            {
                texto: "Chuvas uniformes durante o ano inteiro.",
                afirmacao: "Errado"
            }
        ]
    },
    {
        enunciado: "O que causa os furacões?",
        alternativas: [
            {
                texto: "Diferenças de pressão e temperaturas elevadas no oceano.",
                afirmacao: "Correto"
            },
            {
                texto: "Mudanças na intensidade da radiação solar.",
                afirmacao: "Errado"
            }
        ]
    },
    {
        enunciado: "Qual tipo de clima é mais comum em regiões próximas ao Equador?",
        alternativas: [
            {
                texto: "Clima desértico.",
                afirmacao: "Errado"
            },
            {
                texto: "Clima equatorial.",
                afirmacao: "Correto"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2050...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();