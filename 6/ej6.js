let resultado = '';

for (let i = -33; i <= 230; i++) {
    if (i % 4 === 0){
    resultado += i + '<br>';}
}

document.querySelector('#pResultado').innerHTML = resultado;