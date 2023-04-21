let valor //valor
document.querySelector("#btnCalcular").addEventListener("click", calcular)

function calcular(){
    document.querySelector('#pResultado').innerHTML = ""
    valor = Number(document.querySelector("#txtValor1").value)
    let contador = 0

    // 0 es contado como 1 digito en mi interpretacion de la letra
    if (valor === 0) {
        contador = 1;
    }
    while (valor >= 1) {
        valor /= 10;
        contador++;
    }
    document.querySelector("#pResultado").innerHTML = "El número tiene " + contador + " dígitos."
}