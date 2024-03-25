let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function showText(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

showText('h1', 'Jogo do número secreto');
showText('p', 'Escolha um número entre 1 e 40');

function verificarChute(){
    let chute =  document.querySelector('input').value;
    if(chute == numeroSecreto){
        showText('h1', 'Acertou');
        let palavraTentativas = tentativas > 1 ? ' tentativas!' : ' tentativa!';
        let mensagemTentativas = 'Você descobriu o número secreto com ' + tentativas + palavraTentativas;
        showText('p', mensagemTentativas);
        document.getElementById('chutar').setAttribute('disabled', true);
        document.getElementById("reiniciar").removeAttribute('disabled');
    } else{
        if (chute < numeroSecreto){
            showText('h1', 'Jogo do número secreto');
            showText('p', 'O número secreto é menor que o chute');
        } else {
            showText('h1', 'Jogo do número secreto');
            showText('p', 'O número secreto é maior que o chute');
        }
        tentativas++;
        limparCampo()
    }
}
function gerarNumeroAleatorio(){
    let NumeroEscolhido = parseInt(Math.random() * 40 + 1);
    let quantidadeElementos = listaDeNumerosSorteados.length;
    if (quantidadeElementos == 100){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(NumeroEscolhido)){
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(NumeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return NumeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ''
}

function reiniciarJogo(){
    showText('h1', 'Jogo do número secreto');
    showText('p', 'Escolha um número entre 1 e 40');
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    document.getElementById("chutar").removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}