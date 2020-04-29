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

        //calculo primeiro digito

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11); // operador ternário
        console.log('primeiro dígito validado é ' + resultado);

        //validacao do primeiro digito

        if (resultado != digitos.charAt(0)) {
            return false;
        }

        //calculo segundo digito

        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11); // operador ternário
        console.log('segundo validado dígito é ' + resultado);

        //validacao segundo digito

        if (resultado != digitos.charAt(1)) {
            return false;
        }

        return true;
    }
};

function validacao() {
    console.log('Iniciando validação do CPF');

    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';


    var cpf = document.getElementById('cpf_digitado').value;
    console.log("numero completo é " + cpf);

    var resultadoValidacao = validaCPF(cpf);


    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    }
    else {
        document.getElementById('error').style.display = 'block';
    }
};

