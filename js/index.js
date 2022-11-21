let botaoPlay = document.querySelector('#play');
let botaoInfo = document.querySelector('#info');

botaoPlay.addEventListener('click', function play(){
    location.href = "menu.html"; //permiti ir para a página de escolher o esporte desejado
});

botaoInfo.addEventListener('click', function info(){
    location.href = "informacao.html"; //chama a página de tira dúvida
});

