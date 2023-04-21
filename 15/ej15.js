let valor //valor
document.querySelector("#btnCalcular").addEventListener("click", calcular)

function calcular(){
    valor = Number(document.querySelector("#txtValor1").value)


    if (valor <= 2000) {
        document.querySelector("#pResultado").innerHTML = "El numero ingresado tiene que ser mayor a 2000";
    } else {
        while (valor >= 100) {
            valor /= 20;
            }
        document.querySelector("#pResultado").innerHTML = valor;
    }
}