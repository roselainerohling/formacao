//Variáveis das Imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;
let imagemCarros;

let TrilhaSonora;
let Choque;
let Ponto;
let Transito;

function preload() {
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("Imagens/Minion.png");
  imagemCarro1 = loadImage("Imagens/Carro02.png");
  imagemCarro2 = loadImage("Imagens/Sonic-Carro.png");
  imagemCarro3 = loadImage("Imagens/Carro04.png");
  imagemCarro4 = loadImage("Imagens/motoboy 01.png");
  imagemCarro5 = loadImage("Imagens/BatCarro.png");
  imagemCarro6 = loadImage("Imagens/Caminhao Verde.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6];
  
  TrilhaSonora = loadSound("Sons/TrilhaCarros.wav");
  Choque = loadSound("Sons/Choque.wav");
  Ponto = loadSound("Sons/Ponto.wav");
  Transito = loadSound("Sons/Transito_Intenso.mp3");
}

