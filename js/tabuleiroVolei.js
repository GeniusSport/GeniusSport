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
