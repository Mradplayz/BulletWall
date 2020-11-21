var bullet,wall;
var speed,weight;
var damage;
var thickness;
function setup() {
  createCanvas(900,400);
 bullet =  createSprite(50,200,50,50);
 wall =  createSprite(800,200,60,height/2);
 speed = random(55,90);
 weight = random(400,1500);
thickness = random(22,83);
 bullet.velocityX = speed;
 damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
}
   

function draw() {
  background("black");  
  if(bullet.collide(wall)){
  if(damage<10){
    wall.shapeColor = "green";
  }
  if(damage>10){
    wall.shapeColor = "red";
  }
  }
  drawSprites();
}