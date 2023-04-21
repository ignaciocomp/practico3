let valor1
let valor2
let valor3

document.querySelector("#btnCalcular").addEventListener("click", calcular)

function calcular(){
    document.querySelector('#pResultado').innerHTML = ""
    valor1 = Number(document.querySelector("#txtValor1").value)
    valor2 = Number(document.querySelector("#txtValor2").value)
    valor3 = Number(document.querySelector("#txtValor3").value)

    if (valor1 > valor2) {
        aux = valor1;
        valor1 = valor2
        valor2 = aux
    } 


    for (let i = valor1; i <= valor2; i++) {
    if(i % valor3 === 0){
        document.querySelector('#pResultado').innerHTML += i + "<br>";
        }
    }
}