//getElementesByTagName - Seleciona todas as teg's que você desejar
let paragrafos = document.getElementsByTagName("p")
paragrafos[0].innerHTML = "Palmeiras 2 x 0 sem mundial"

//getElementById - Seleciona um elemento do tipo ID
var titulo = document.getElementById("titulo")
titulo.innerHTML = "Alterado usando JS"

//getElementsByClassName - Seleciona todas os elementos do tipo Class
const caixas = document.getElementsByClassName("caixa")
caixas[0].style.backgroundColor = "blue"
caixas[1].style.backgroundColor = "green"

//querySelector - Seleciona um elemento do tipo Class ou Id
const paragrafoQuery = document.querySelector("#paragrafoQuery")
paragrafoQuery.style.backgroundColor = "blue"
paragrafoQuery.style.padding = "10px"

function alteraTexto() {
let input = document.getElementsByTagName("input")[0].value
titulo.innerHTML = input

}

function alteraParagrafo() {
    let input = document.getElementsByTagName("input")[1].value
    paragrafoQuery.innerHTML = input
    
}

//querySelectorAll - Seleciona um elemento do tipo Class ou Id
const caixaQuery = document.querySelectorAll(".caixaQuery")

caixaQuery[0].style.backgroundColor = "purple"
caixaQuery[1].style.backgroundColor = "black"
caixaQuery[1].style.color = "white"
