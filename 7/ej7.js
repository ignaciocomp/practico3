let resultado = '';
let valor



document.querySelector("#btnCalcular").addEventListener("click", calcular)

function calcular(){
    
    valor = Number(document.querySelector("#txtValor").value)
    for (let i = 1; i <= valor; i++) {
    resultado += '-';
    }
    document.querySelector('#pResultado').innerHTML = resultado;
}