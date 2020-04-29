console.log('JavaScript carregado');




function validaCPF(cpf) {
    console.log("o cpf possui " + cpf.length + " digitos");
    if (cpf.length != 11 || isNaN(cpf)) {  // verifica se o cps digitado possui 11 digitos
        return false;
    }
    else {
        var numeros = cpf.substring(0, 9); //pega os 9 primeiros digitos
        console.log("numero é " + numeros);
        var digitos = cpf.substring(9); // vai pegar os últimos 2
        console.log("digito é " + digitos);
        return true
    }
};

function validacao() {
    console.log('Iniciando validação do CPF');

    var cpf = document.getElementById('cpf_digitado').value;
    console.log("numero completo é " + cpf);

    var resultadovalidaaacao = validaCPF(cpf);


    if (resultadovalidaaacao) {
        document.getElementById('success').style.display = 'block';
    }
    else {
        document.getElementById('error').style.display = 'block';
    }
};

