
//---------------VARIÁVEIS GLOBAIS

const emojis =[
    "⚔",
    "⚔",
    "🏆",
    "🏆",
    "✈",
    "✈",
    "⚡",
    "⚡",
    "⚓",
    "⚓",
    "⚽",
    "⚽",
    "🎮",
    "🎮",
    "♟",
    "♟"
];
let openCards = [];

document.addEventListener("DOMContentLoaded", function() {
    // Código para criar as cartas dinamicamente...

    // Depois de criar as cartas, remova a classe .boxOpen de todas elas após um atraso
    setTimeout(function() {
        let cards = document.querySelectorAll(".item");
        cards.forEach(function(card) {
            card.classList.remove("boxOpen");
        });
    }, 100); // ajuste o atraso conforme necessário
});

//------------------FUNÇÕES


let shuffleEmojis = emojis.sort(()=>(Math.random()>0.5 ? 2 : -1)); //função random, ela embaralha cada item e adiciona eles em uma ordem aleatória na variável

for(let i=0; i<emojis.length; i++){

    let box = document.createElement("div");//criando a div no html
    box.className = "item";  //com classe "item"
    box.innerHTML = shuffleEmojis[i];//joga para o html o valor (emoji) da posição contido no array 
    box.onclick= handleClick; // quando clicado chama a função abaixo
    document.querySelector(".game").appendChild(box);

}

function handleClick(){

    if (openCards.length < 2){

        this.classList.add("boxOpen"); //mudou a classe para carta aberta
        openCards.push(this); //adiciona a carta no array

    }
    if (openCards.length == 2) {

        setTimeout(checkMatch, 500); //verificação das cartas abertas

    }

}

function checkMatch(){

    if(openCards[0].innerHTML === openCards[1].innerHTML){//se as duas castas abertas forem iguais
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");

    }
    else{//se as duas cartas abertas forem diferentes remove a classe carta aberta
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards =[]; //esvazia o array que recebe as duas cartas por vez

    if(document.querySelectorAll(".boxMatch").length ===emojis.length){//verifica a quantidade de elementos que receberam a rotulação de carta aberta e compara com a quantidade inicial de emojis
        alert("Você venceu!"); //alerta de vitória
    }

}