let valor1
let valor2
let producto = 0

document.querySelector("#btnCalcular").addEventListener("click", calcular)

function calcular(){
    valor1 = Number(document.querySelector("#txtValor1").value)
    valor2 = Number(document.querySelector("#txtValor2").value)

    for(let i = 1; i <= valor2; i++){
        producto += valor1;
    }
    document.querySelector("#pResultado").innerHTML = `EL resultado es ${producto}`
}