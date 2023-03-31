function calcularimc() {
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;
  let img = document.getElementById("img");

  let imc = peso / (altura * altura).toFixed(2);

  // Definir as imagens e as faixas de IMC correspondentes
  let imagens = [
    "img/magro.png",
    "img/peso-ideal.png",
    "img/acima do peso.png",
    "img/gordo.png",
    "img/obeso.png",
  ];
  let faixas = [
    [0, 18.5],
    [18.5, 24.9],
    [25, 30],
    [30.1, 35],
    [35.1, 99],
  ];    

  // Encontrar a faixa correspondente ao IMC calculado
  const index = faixas.findIndex((faixa) => imc >= faixa[0] && imc < faixa[1]);

  // Atualizar a imagem e o fundo de acordo com a faixa encontrada
  img.src = imagens[index];
  document.body.style.background = getBackgroundColor(index);
}

function getBackgroundColor(index) {
  // Definir as cores de fundo corres pondentes a cada imagem
  let cores = ["#5bd9ab", "#1ba673", "#f28f79", "#f2637e", "#d94e4e"];
  return cores[index];
}

let button = document.getElementById("button");
button.addEventListener("click", calcularimc);
