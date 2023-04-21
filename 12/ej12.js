let valor1
let factorial

document.querySelector("#btnCalcular").addEventListener("click", calcular)

function calcular(){
    document.querySelector('#pResultado').innerHTML = ""
    valor1 = Number(document.querySelector("#txtValor1").value)
    factorial = 1

    
    for (let i = 1; i <= valor1; i++) {
    factorial *= i;
    }
    document.querySelector('#pResultado').innerHTML += factorial + "<br>";
}