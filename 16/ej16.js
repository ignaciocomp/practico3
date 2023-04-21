let valor1 //valor1
let valor2 //valor2
document.querySelector("#btnCalcular").addEventListener("click", calcular)

function calcular(){
    valor1 = Number(document.querySelector("#txtValor1").value)
    valor2 = Number(document.querySelector("#txtValor2").value)

    for (let i = valor1; i <= valor2; i++) {
        if (i % 4 === 0 && i % 6 === 0) {
            document.querySelector('#pResultado').innerHTML = ("El primer mltiplo de 4 y 6 es " + i);
        break;
        }
    }
}