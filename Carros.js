//Lista de Variáveis xCarro
let xCarro = [800, 800, 800, -100, -100, -100];

//Lista de Variáveis yCarro
let yCarro = [50, 115, 185, 270, 330, 373];

//Listas de Variáveis Largura e Altura do Veículo
let LarguraX = [100, 100, 100, 60, 100, 100];
let AlturaY = [60, 60, 60, 40, 50, 75];

//Lista de Variáveis das Velocidades
let Velocidades = [-4.5, -7, -5, 4, 6, 3];

function Carros() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    image(imagemCarros[i], xCarro[i], yCarro[i], LarguraX[i], AlturaY[i]);
  }
}

function MoveCarros() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    xCarro[i] = xCarro[i] + Velocidades[i];
  }
}

function RepetePassagemCarros() {
  if (xCarro[0] < -100){
    xCarro[0] = 800;
  }
  if (xCarro[1] < -100) {
    xCarro[1] = 800;
  }
  if (xCarro[2] < -100) {
    xCarro[2] = 800;
  }
  if (xCarro[3] > 800) {
    xCarro[3] = -100;
  }
  if (xCarro[4] > 800) {
    xCarro[4] = -100;
  }
  if (xCarro[5] > 800) {
    xCarro[5] = -100;
  }
}
