




function preload () {
bg= loadImage("images/iss.png");
sleep = loadAnimation("images/sleep.png");
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym21.png","images/gym22.png");
eat = loadAnimation("add image urls here");
drink = loadAnimation("add image urls here");
move = loadAnimation("add image urls here");
}







function setup() {
  createCanvas(400, 400);



  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;





}

function draw() {
  background("Blue");

if (KeyDown("UP_ARROW")){
   astronaut.addAnimation("brushing",brush);
   astronaut.changeAnimation("brushing");
   astronaut.y = 350;
   astronaut.velocityX = 0;
   astronaut.velocityY = 0;
}

if (KeyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym);
  astronaut.changeAnimation("gymming");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if (KeyDown("LEFT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if (KeyDown("RIGHT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if (KeyDown("m")){
  astronaut.velocityY = 2;
  astronaut.velocityX = 2;
}

drawSprites();


}