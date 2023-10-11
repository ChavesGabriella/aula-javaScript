//exemplos aula
//alert("oi")
//const nome = prompt("Digite seu nome")
//console.log(nome)
//const confirmacao = confirm("tem certeza que seu nome está correto?") */

function calcularIMC() {
    const peso = parseFloat(prompt("Informe seu peso"))
    //console.log(peso);
    const altura = parseFloat(prompt("Informe sua altura"))
    //console.log(altura);

    if(isNaN(peso) || isNaN(altura)){
        alert("Por favor, insira valores numericos validos.");
    }

    const imc = peso / (altura * altura);
    const classificacao = classificarIMC(imc);

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${classificacao}`);
}

function classificarIMC(imc){
    if(imc < 18.5){
        return "Abaixo do peso";
    } else if(imc < 24.9){
        return "Peso normal";
    }else if(imc < 29.9){
        return "Sobrepeso";
    }else if(imc < 34.9){
        return "Obesidade grau I";
    }else if(imc < 39.9){
        return "Obesidade grau II";
    }else{
        return "Obesidade grau III (mórbida)";
    }
}

calcularIMC();