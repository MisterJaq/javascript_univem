function somar(){
    let n1 = document.getElementById("numero1");
    let n2 = document.getElementById("numero2");
    
    let num1 = Number(n1.value);
    let num2 = Number(n2.value);
    
    let soma = num1 + num2;
    alert ("A soma é: " + soma);
}
function subtrair(){
    let n1 = document.getElementById("numero1");
    let n2 = document.getElementById("numero2");

    let num1 = Number(n1.value);
    let num2 = Number(n2.value);

    let subtra = num1 - num2;
    alert("A subtração é: " + subtra);
}
function dividir(){
    let n1 = document.getElementById("numero1");
    let n2 = document.getElementById("numero2");

    let num1 = Number(n1.value);
    let num2 = Number(n2.value);

    let div = num1/num2;
    alert("A divisão é: " + div);
}
function multiplicar(){
    let n1 = document.getElementById("numero1");
    let n2 = document.getElementById("numero2");

    let num1 = Number(n1.value);
    let num2 = Number(n2.value);

    let mult = num1 * num2;
    alert("A multiplicação é: " + mult);
}
function primo(){
    let num1 = document.getElementById("n1");

    let n1 = Number(num1.value);

    if (n1 != 2 && n1 % 2 != 0){
        alert("Primo");
    }
    else if (n1 == 2){
        alert("Primo");
    }
    else{
        alert("Nao e primo");
    }
}