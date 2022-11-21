let botaoPlay = document.querySelector('#play');

botaoPlay.addEventListener('click', function play(){
    location.href = "menu.html"; //permiti ir para a próxima página
});

let img = document.querySelector('#voltar');

img.addEventListener('click', function voltar(){
    location.href = "index.html"; //permiti volta para tela inicial
});