//dado

let dado = document.querySelector('#face');//chama do arquivo html

    dado.addEventListener('click', function rodar(){ //permitir que clique no dado para rodar
        let sorteio = Math.floor(Math.random() * 6 + 1);

        switch(sorteio){
            case 1:
                document.getElementById("face").src = "imagens/face1.png"; //chama dado com face 1
               break;
            case 2:
                document.getElementById("face").src = "imagens/face2.png"; //chama dado com face 2
                break;
            case 3:
                document.getElementById("face").src = "imagens/face3.png"; //chama dado com face 3
                break;
            case 4:
                document.getElementById("face").src = "imagens/face4.png"; //chama dado com face 4
                break;
            case 5:
                document.getElementById("face").src = "imagens/face5.png"; //chama dado com face 5
                break;
            case 6:
                document.getElementById("face").src = "imagens/face6.png"; //chama dado com face 6
                break;
            default:
                break;
        }
    });

//ajuda

let ajuda = document.querySelector('#ajuda');
    
ajuda.addEventListener('click', function ajuda(){
    alert("Para rodar o dado basta clicar em cima do mesmo!");
});

//trilha

const casaInicio = document.querySelector('#inicio');
const casa1 = document.querySelector('#casa1');
const casa2 = document.querySelector('#casa2');
const casa3 = document.querySelector('#casa3');
const casa4 = document.querySelector('#casa4');
const casa5 = document.querySelector('#casa5');
const casa6 = document.querySelector('#casa6');
const casa7 = document.querySelector('#casa7');
const casa8 = document.querySelector('#casa8');
const casa9 = document.querySelector('#casa9');
const casa10 = document.querySelector('#casa10');
const casa11 = document.querySelector('#casa11');
const casa12 = document.querySelector('#casa12');
const casa13 = document.querySelector('#casa13');
const casa14 = document.querySelector('#casa14');
const casa15 = document.querySelector('#casa15');
const casa16 = document.querySelector('#casa16');
const casa17 = document.querySelector('#casa17');
const casa18 = document.querySelector('#casa18');
const casa19 = document.querySelector('#casa19');
const casa20 = document.querySelector('#casa20');
const casa21 = document.querySelector('#casa21');
const casa22 = document.querySelector('#casa22');
const casa23 = document.querySelector('#casa23');
const casa24 = document.querySelector('#casa24');
const casa25 = document.querySelector('#casa25');
const casa26 = document.querySelector('#casa26');
const casa27 = document.querySelector('#casa27');
const casa28 = document.querySelector('#casa28');
const casa29 = document.querySelector('#casa29');
const casaChegada = document.querySelector('#fim');

//personagem

const jogador1 = document.querySelector('#personagem1');
const jogador2 = document.querySelector('#personagem2');

