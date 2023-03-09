function calcularimc() {
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let img = document.getElementById('img');

    let imc = peso / (altura * altura).toFixed(2);

    // Definir as imagens e as faixas de IMC correspondentes
    let imagens = ['img/magro.png', 'img/peso-ideal.png', 'img/acima do peso.png', 'img/gordo.png', 'img/obeso.png'];
    let faixas = [[0, 18.5], [18.5, 24.9], [25, 30], [30.1, 35], [35.1, 99]];

    // Percorrer as faixas e verificar se o IMC calculado está dentro de alguma delas
    for (let i = 0; i < faixas.length; i++) {
        let faixa = faixas[i];
        if (imc >= faixa[0] && imc < faixa[1]) {
            img.src = imagens[i];
            document.body.style.background = getBackgroundColor(i);
            break;
        }
    }
}

function getBackgroundColor(index) {
    // Definir as cores de fundo correspondentes a cada imagem
    let cores = ['#5bd9ab', '#1ba673', '#f28f79', '#f2637e', '#d94e4e'];
    return cores[index];
}

let button = document.getElementById('button');
button.addEventListener('click', calcularimc);
