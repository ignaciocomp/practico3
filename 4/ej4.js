let resultado = '';

for (let i = 20; i >= -30; i--) {
    resultado += i + '<br>';
}

document.querySelector('#pResultado').innerHTML = resultado;