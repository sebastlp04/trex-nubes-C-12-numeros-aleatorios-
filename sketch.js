var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud,cloudimage;



var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudimage = loadImage("cloud.png");
 
  
}

function setup() {

  createCanvas(600,200)
  
  //crear sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crear sprite de suelo
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crear sprite de suelo invisible
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generar números aleatorios
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //establecer color de fondo
  background(180);
  
  
  
  
  //hacer que el trex salte al presionar la barra espaciadora
  if(keyDown("space")&& trex.y >= 150) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //evitar que el trex caiga
  trex.collide(invisibleGround);
  
  //aparecer nubes
  spawnClouds()
  
  drawSprites();
}

//función para aparecer las nubes

function spawnClouds(){
 //escribir aquí el código 
 if(frameCount % 60 === 0)
 {
  cloud = createSprite(610,100,50,20);
  cloud.addImage(cloudimage);
  cloud.velocityX = -3;
  cloud.y = Math.round(random(20,70));
  cloud.scale = 0.6;  
  console.log(trex.depth);
  console.log(cloud.depth);
  cloud.depth = trex.depth;
  trex.depth = trex.depth +1;  
 }

}



