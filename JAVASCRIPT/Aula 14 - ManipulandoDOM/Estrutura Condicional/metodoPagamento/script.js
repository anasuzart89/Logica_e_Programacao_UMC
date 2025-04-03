//Switc Case - Menu
//if

//Metodos de pagamento 
//1 - Pix - 10% de desconto
//2 - Debito - 5% de desconto
//3 - Credito - valor total
function calcularPagamento() {


    let formaPagamento = document.querySelector("#formaPagamento").value
    let valorTotal = parseFloat(document.querySelector("#valorCompra").value)
    let resultado = document.querySelector("#resultado")
    let valorFinal
    if (valorTotal <= 0 || isNaN(valorTotal)) {
        resultado.innerHTML = "Por favor informar um valor válido"
    }
    else {
        switch (formaPagamento) {
            case "pix":
                valorFinal = valorTotal * 0.9
                resultado.innerHTML = `Valor final de R$ ${valorFinal.toFixed(2)}`;
                break
            case "debito":
                valorFinal = valorTotal * 0.95
                resultado.innerHTML = `Valor final de R$ ${valorFinal.toFixed(2)}`;
                break
            case "credito":
                resultado.innerHTML = `Valor final de R$ ${valorTotal.toFixed(2)}`;
                break
            default:
                resultado.innerHTML = "Informe uma forma de pagamento válida";
                break

        }
    }
}