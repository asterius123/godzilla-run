var trex, trex_correndo, trex_colidiu;
var solo, soloinvisivel, imagemdosolo;

function preload() {
  //defininir a animação do trex 
  trex_correndo = loadAnimation("g1.png", "g2.png", "g3.png", "g4.png","g5.png" );
  
  
  trex_colidiu = loadImage("trex_collided.png");
  
  //definir a imagem do solo
  imagemdosolo = loadImage("ground_long.png")
  
}

function setup() {
  createCanvas(600, 200);

  //criar um sprite do trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_correndo);
  trex.scale = 0.2;
  trex.mirrorX(-1)
  //criar um sprite do solo
  solo = createSprite(400,180,900,20);
  solo.addImage("ground",imagemdosolo);
  solo.x = solo.width /2;
  solo.velocityX = -2;
  solo.scale=1
  
  //criar o solo invisivel
  soloinvisivel = createSprite(300,220,600,20)
  soloinvisivel.visible=0
}

function draw() {
  background(220);
  console.log(trex.y)
  trex_correndo.play()
  //pular quando a tecla espaço é acionada
  if (keyDown("space") && trex.y > 160) {
    trex.velocityY = -15;
  }
  //gravidade do trex
  trex.velocityY = trex.velocityY + 0.8
  
  //fazendo o solo ficar infinito
  if (solo.x < 0) {
    solo.x = solo.width / 2;
  }
  //adicinando a colisão do solo
  trex.collide(soloinvisivel);
  solo.depth=trex.depth 
    trex.depth=trex.depth+1
  drawSprites();
}