window.alert("CALCULE SEU IMC DE GRAÇA!")

var nome = window.prompt("Qual é seu nome:?");

var peso = window.prompt("DIgite o seu peso:");

var altura = window.prompt("Digite sua altura");

var imc = peso / (altura * altura);

var imcarrea = parseFloat(imc.toFixed(2));

if (imc <= 18.5){ 
    window.alert("Seu IMC é de: " + imcarrea + ", e está abaixo do normal.");
}

if (imc >= 18.6 && imc <= 24.9){
    window.alert("Seu IMC é de " + imcarrea + ", e está no nível normal.");
}

if (imc >= 25 && imc <= 29.9){
    window.alert("Seu IMC é de " + imcarrea + ", e está em sobrepeso.");
}

if (imc >= 30 && imc <= 34.9){
    window.alert("Seu IMC é de " + imcarrea + ", e está em obesidade grau I.");
}

if (imc >= 35 && imc <= 39.9){
    window.alert("Seu IMC é de " + imcarrea + ", e está em obesidade grau II.");
}

if (imc >= 40){
    window.alert("Seu IMC é de " + imcarrea + ", e está em obesidade grau III.");
}




