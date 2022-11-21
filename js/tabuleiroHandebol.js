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

//personagem

const casaInicio = document.querySelectorAll('#inicio');
const casa1 = document.querySelectorAll('#casa1');
const casa2 = document.querySelectorAll('#casa2');
const casa3 = document.querySelectorAll('#casa3');
const casa4 = document.querySelectorAll('#casa4');
const casa5 = document.querySelectorAll('#casa5');
const casa6 = document.querySelectorAll('#casa6');
const casa7 = document.querySelectorAll('#casa7');
const casa8 = document.querySelectorAll('#casa8');
const casa9 = document.querySelectorAll('#casa9');
const casa10 = document.querySelectorAll('#casa10');
const casa11 = document.querySelectorAll('#casa11');
const casa12 = document.querySelectorAll('#casa12');
const casa13 = document.querySelectorAll('#casa13');
const casa14 = document.querySelectorAll('#casa14');
const casa15 = document.querySelectorAll('#casa15');
const casa16 = document.querySelectorAll('#casa16');
const casa17 = document.querySelectorAll('#casa17');
const casa18 = document.querySelectorAll('#casa18');
const casa19 = document.querySelectorAll('#casa19');
const casa20 = document.querySelectorAll('#casa20');
const casa21 = document.querySelectorAll('#casa21');
const casa22 = document.querySelectorAll('#casa22');
const casa23 = document.querySelectorAll('#casa23');
const casa24 = document.querySelectorAll('#casa24');
const casa25 = document.querySelectorAll('#casa25');
const casa26 = document.querySelectorAll('#casa26');
const casa27 = document.querySelectorAll('#casa27');
const casa28 = document.querySelectorAll('#casa28');
const casa29 = document.querySelectorAll('#casa29');
const casaChegada = document.querySelectorAll('#fim');
