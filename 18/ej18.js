let valor1 //valor1
document.querySelector("#btnCalcular").addEventListener("click", calcular)

function calcular(){
    valor1 = Number(document.querySelector("#txtValor1").value)
    let resultado = "" 
    for (let i = 30; i < 200; i++) {
        if (i % valor1 === 0 && i % 2 === 0) {
        resultado += i + "<br> ";
        }
    }
    document.querySelector('#pResultado').innerHTML = (`${resultado}`)
}