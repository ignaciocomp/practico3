let ancho //ANCHO
let alto //ALTO
let caracter //CARACTER
document.querySelector("#btnCalcular").addEventListener("click", calcular)

function calcular(){
    document.querySelector('#pResultado').innerHTML = ""
    ancho = Number(document.querySelector("#txtValor1").value)
    alto = Number(document.querySelector("#txtValor2").value)
    caracter = document.querySelector("#txtValor3").value


    for(let i = 1; i <= alto; i++){
        let fila = ""
        for(let a = 1; a <= ancho; a++){
            fila += caracter
        }
        document.querySelector('#pResultado').innerHTML += `${fila}`+"<br>"
    }
    
}