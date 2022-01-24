let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Boreal é o mesmo que...",
    alternativaA : "Sul",
    alternativaB : "Leste",
    alternativaC : "Norte",
    alternativaD : "Oeste",
    correta      : "Norte",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual presidente do Brasil era conhecido como Jango?",
    alternativaA : "Lula",
    alternativaB : "Bolsonaro",
    alternativaC : "João Goulart",
    alternativaD : "Fernando Collor",
    correta      : "João Goulart",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "De onde veio a invenção do chuveiro elétrico?",
    alternativaA : "Estados Unidos",
    alternativaB : "Brasil",
    alternativaC : "Argentina",
    alternativaD :  "Espanha",
    correta      : "Brasil",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual estado foi a primeira capital do Brasil?",
    alternativaA : "Rio de Janeiro",
    alternativaB : "Salvador",
    alternativaC : "São Paulo",
    alternativaD : "Acre",
    correta      : "Salvador",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "De quem é a famosa frase: 'Penso, logo existo!'?",
    alternativaA : "Platão",
    alternativaB : "Paulo Freire",
    alternativaC : "Luiz Inácio Lula da Silva",
    alternativaD : "Descartes",
    correta      : "Descartes",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "O que a palavra 'legend' significa em português?",
    alternativaA : "Legenda",
    alternativaB : "Lenda",
    alternativaC : "Jabuticaba",
    alternativaD : "Braço",
    correta      : "Lenda",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Qual o número mínimo e máximo de jogadores numa partida de futebol?",
    alternativaA : "7 e 12",
    alternativaB : "5 e 10",
    alternativaC : "7 e 11",
    alternativaD : "8 e 14",
    correta      : "7 e 11",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : " Em que período da pré-história o fogo foi descoberto?",
    alternativaA : "Idade dos Metais",
    alternativaB : "Neolítico",
    alternativaC : "Idade Média",
    alternativaD : "Paleolítico",
    correta      : "Paleolítico",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Poente é o mesmo que...",
    alternativaA : "Oeste",
    alternativaB : "Sul",
    alternativaC : "Leste",
    alternativaD : "Norte",
    correta      : "Oeste",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Qual a montanha mais alta do Brasil?",
    alternativaA : "Pico da Neblina",
    alternativaB : "Morro de São Paulo",
    alternativaC : "Monte Everest",
    alternativaD : "Pico da Bandeira",
    correta      : "Pico da Neblina",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão  " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes [numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Parabéns! Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Parabéns! Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}