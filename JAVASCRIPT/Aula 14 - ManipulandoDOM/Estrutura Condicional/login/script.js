function verificarLogin() {

    const usuario = document.querySelector('#usuario').value;
    const senha = document.querySelector('#senha').value;
    const mensagem = document.querySelector('#mensagem');


    if (usuario === "admin" && senha === "1234") {
        mensagem.textContent = "Login bem-sucedido!";
    }
    else if (usuario === "admin") {
            mensagem.textContent = "Senha incorreta!";
        } 

    else if(senha === "1234"){
            mensagem.textContent = "Usuario incorreta!";
        }
    else {
        mensagem.textContent = "Informe Login e senha ";
    }

    }