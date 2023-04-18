let resultado = '';

for (let i = 1; i <= 450; i++) {
    if (i % 5 === 0){
    resultado += i + '<br>';}
}

document.querySelector('#pResultado').innerHTML = resultado;