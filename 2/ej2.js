let resultado = '';

for (let i = -100; i <= 10; i++) {
    resultado += i + '<br>';
}

document.querySelector('#pResultado').innerHTML = resultado;