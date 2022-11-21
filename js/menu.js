let botaoFutebol = document.querySelector('#futebol'); 
let botaoVolei = document.querySelector('#volei');
let botaoBasquete = document.querySelector('#basquete');
let botaoHandebol = document.querySelector('#handebol');

botaoFutebol.addEventListener('click', function futebol(){
    location.href = "tabuleiroFutebol.html"; //abre a página com o arquivo do tabuleiro futebol
});

botaoVolei.addEventListener('click', function volei(){
    location.href = "tabuleiroVolei.html"; //abre a página com o arquivo do tabuleiro vôlei
});

botaoBasquete.addEventListener('click', function basquete(){
    location.href = "tabuleiroBasquete.html"; //abre a página com o arquivo do tabuleiro basquete
});

botaoHandebol.addEventListener('click', function handebol(){
    location.href = "tabuleiroHandebol.html"; //abre a página com o arquivo do tabuleiro handebol
});

let img = document.querySelector('#voltar');

img.addEventListener('click', function voltar(){
    location.href = "index.html"; //permiti volta para tela inicial
});

