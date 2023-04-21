let valor1
let valor2
let acomulador = 1

document.querySelector("#btnCalcular").addEventListener("click", calcular)

function calcular(){
    valor1 = Number(document.querySelector("#txtValor1").value)
    valor2 = Number(document.querySelector("#txtValor2").value)
    acomulador = 1
    for(let i = valor1; i <= valor2; i++){
        acomulador *= i;
    }
    document.querySelector("#pResultado").innerHTML = acomulador
}