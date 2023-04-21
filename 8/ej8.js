let resultado = '';
let valor
let valor1
let aux

document.querySelector("#btnCalcular").addEventListener("click", calcular)

function calcular(){
    document.querySelector('#pResultado').innerHTML = ""
    valor1 = Number(document.querySelector("#txtValor1").value)
    valor = Number(document.querySelector("#txtValor").value)

    if (valor > valor1) {
        aux = valor;
        valor = valor1
        valor1 = aux
    } 


    for (let i = valor; i <= valor1; i++) {
    resultado += i;
    document.querySelector('#pResultado').innerHTML += i;
    }
}