function verificarIdade(){
    
    let idade = parseFloat (document.querySelector('#idade').value);
    let resultado = document.querySelector('#resultado');

    if (idade % 2 === 0){
        resultado.textContent = "Valor Par";
    }
    else if (idade % 1 === 0){
        resultado.textContent = "Valor Impar";
    }

    else {
        resultado.textContent = "Digite um Numero";
    }
}