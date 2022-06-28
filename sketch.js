
function setup() {
  createCanvas(700, 500);
  TrilhaSonora.loop();
  Transito.loop();
}

function draw() {
  background(imagemDaEstrada);
  Ator();
  Carros();
  MoveCarros();
  MoveAtor();
  RepetePassagemCarros();
  Colisao();
  Pontos();
  PontosComputador();
  PontosDoAtor();
}

