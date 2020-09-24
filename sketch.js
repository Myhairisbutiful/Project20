var car, wall;
var speed, weight, height;

function setup() {
  var canvas = createCanvas(2000,400);
  car = createSprite(50, 200, 50, 50);
  speed = random(55,99);
  weight = random(400,1500);
  wall = createSprite(1000,200,60,height/2);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car.velocityX = speed;
  wall.shapeColor = color(80,80,80);
  
  if(wall.x-car.x < (car.width+wall.width)/2) {
    car.velocityX=0
    
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180) {
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100) {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100) {
      car.shapeColor=color(0,255,0);
    }
  }
}

function display() {


}