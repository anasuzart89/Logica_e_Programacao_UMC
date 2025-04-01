//Switc Case - Menu
//if

//Metodos de pagamento 
//1 - Pix - 10% de desconto
//2 - Debito - 5% de desconto
//3 - Credito - valor total
function calcularPagamento(){

    let formaPagamento = "credito"
    let valorTotal = 100
    let valorFinal

    switch (formaPagamento){
        case "pix":
            valorFinal = valorTotal * 0.9
            console.log(valorFinal);
            break
        case "debito":
            valorFinal = valorTotal * 0.95
            console.log(valorFinal);
            break 
        case "credito":
            console.log(valorFinal);
            break   
        default:
            console.log("informe uma forma de pagamento valida");
            break
            
    }
}