/*let titulo = document.querySelector('h1'); // seleciona o h1 do html 
titulo.innerHTML = 'Jogo do nº secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';*/
let listNumSor = []; /* o indice de uma lista sempre inicia em 0 por ex 
banana(0), mação(1), pera(2) */
let limiteMax = 10;
let NS = gerarNumAleatorio(); /* chama a função gerarNumAleatorio*/
let tentativas = 1;


/* função que exibe os textos na tela*/
function exTxtTela(tag, texto) {
    let campo =document.querySelector(tag);
    campo.innerHTML = texto;
    /*responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});*/
}

function exMsgInicial() {
    exTxtTela('h1', 'Jogo do nº secreto');
    exTxtTela('p', 'Escolha um número entre 1 e 10');

}

exMsgInicial();

/*recho de codigo responsavel por uma determinada função 
nesse caso será verificado o chute do user */
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == NS){
        exTxtTela('h1', 'Acertou!');
        let plaTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let msgTentativas = `Parabés! Você descobriu o número secreto com ${tentativas} ${plaTentativa}!`;
        exTxtTela('p', msgTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > NS) {
            exTxtTela('h1', 'ERROU!');
            exTxtTela('p', 'O número secreto é menor!');
        } else{
            exTxtTela('h1', 'ERROU!');
            exTxtTela('p', 'O número secreto é maior!');
        }
        tentativas++; 
        limparCamp();
    }
}

function gerarNumAleatorio() {
    //return parseInt(Math.random() *10 + 1);
    let numEscolhido = parseInt(Math.random() *limiteMax + 1);
    let quantidadeElemList = listNumSor.length; /*A propriedade length é usada para 
    obter a quantidade de elementos em uma lista/array em JavaScript.*/
    
    if(quantidadeElemList == limiteMax){
        listNumSor = [] ;
    }
    if(listNumSor.includes(numEscolhido)) { /* verifica se um numero sorteado
     está na lista de numeros escolhidos*/
        return gerarNumAleatorio();
    } else {
        listNumSor.push(numEscolhido); /*add o número sorteado no final da lista de numeros esclhidos. 
        para remover o ultimo elemento de uma lista basta usar o metodo pop*/
        console.log(listNumSor);
        return numEscolhido;
    }

}
/* essa função limpa o campo de escrita o user */
function limparCamp() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

/*essa função faz o jogo ser reiniciado com todos os 'elementos' pra que seja executado de forma correta*/ 
function reiniciarJogo() {
    NS = gerarNumAleatorio ();
    limparCamp();
    tentativas = 1;
    exMsgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); /* aqui pegamos o elemento id reiniciar do html 
    e em seguida setamos o disabled la do html para que ele seja ultilizado apenas quando o user acerta o nº secreto */
    
}
