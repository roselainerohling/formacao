//Variáveis Ator
let xAtor = 350;
let yAtor = 460;

let PontosAtor = 0;
let Computador = 0;

let Colide = false;

function Ator() {
  image(imagemDoAtor, xAtor, yAtor, 35, 35);
}

function MoveAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 2;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (yAtor < 460) {
      yAtor += 2;
    }
  }
  if (keyIsDown(LEFT_ARROW)) {
    xAtor -= 2;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xAtor += 2;
  }
}

function Colisao() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    Colide = collideRectCircle(
      xCarro[i],
      yCarro[i],
      LarguraX[i],
      AlturaY[i],
      xAtor,
      yAtor,
      20
    );
    if (Colide) {
      Computador += 1;
      Choque.play();
      RetornaPosicaoInicial();
    }
    if (Computador === 10) {
      FimDeJogo();
    }
  }
}

function RetornaPosicaoInicial() {
  xAtor = 350;
  yAtor = 460;
}

function PontosDoAtor() {
  if (yAtor < 15){
    PontosAtor += 1;
    Ponto.play()
    RetornaPosicaoInicial();
  }
  if (PontosAtor === 10) {
      FimDeJogo();
    }
}

function Pontos() {
  fill(color(255, 100, 0));
  rect(30, 5, 55, 35);
  textSize(35);
  textAlign(CENTER);
  fill(color(255, 255, 0));
  text(PontosAtor, 57, 35);
  textSize(25);
  text("Minion", 130, 32);
}

function PontosComputador() {
  fill(color(255, 100, 0));
  rect(width - 85, 5, 55, 35);
  textSize(35);
  textAlign(CENTER);
  fill(color(255, 255, 0));
  text(Computador, 642, 35);
  textSize(25);
  text("Computador", 533, 32);
}

function FimDeJogo() {
  fill(color(255, 100, 0));
  rect(173, 207, 350, 50);
  fill(color(255, 255, 0));
  textAlign(CENTER);
  textSize(45);
  text("FIM DE JOGO", width/2, height/2);
  TrilhaSonora.pause();
      Transito.pause();
      noLoop();
}
