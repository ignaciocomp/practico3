let dividendo //valor1
let divisor //valor2
document.querySelector("#btnCalcular").addEventListener("click", calcular)

function calcular(){
    dividendo = Number(document.querySelector("#txtValor1").value)
    divisor = Number(document.querySelector("#txtValor2").value)
    let cociente = 0
    while (dividendo >= divisor) {
        dividendo = dividendo - divisor;
        cociente++;
    }
    
    let resto = dividendo;
    document.querySelector('#pResultado').innerHTML = (`El cociente es ${cociente}<br>
    El resto es ${resto}`)
}