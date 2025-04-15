function verificarIdade(){
    
    let idade = parseFloat (document.querySelector('#idade').value);
    let resultado = document.querySelector('#resultado');

    if (idade >= 18){
        resultado.textContent = "Maior de Idade";
    }
    else if (idade <= 18){
        resultado.textContent = "Menor de Idade";
    }

    else {
        resultado.textContent = "Digite sua idade";
    }
}