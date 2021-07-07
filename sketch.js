var sea,ship_img,ship,sea_img;
function preload(){

 ship_img = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

 sea_img = loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);

 sea = createSprite(200,180,20,50);
 sea.addImage("sea",sea_img);
 sea.x = sea.width /2;
 sea.velocityX = -4
 sea.scale= 0.2;

 ship = createSprite(180,150,20,20);
 ship.addAnimation("ship",ship_img);
 ship.scale = 0.5;
}

function draw() {
  background("blue");
   
  if (sea.x < 0){
sea.velocityY = -4;

    sea.x = sea.width/2;
  }
 
  drawsprites();
}