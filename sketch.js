var car, wall, speed, weight, deformation;
function setup() {
  createCanvas(1600,400);
  car = createSprite(400, 200, 70, 40);
  wall = createSprite(1500, 200, 60, 800);
  wall.shapeColor = color(80, 80, 80);
  speed = random(55, 90);
  weight = random(400, 1500);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.width/2 + car.width/2 >= wall.x - car.x){
      deformation = (0.5*weight*speed*speed)/22500;
      car.velocityX = 0;
      if(deformation < 100){
        car.shapeColor = "green";
      }
      else if(deformation>=100 && deformation<=180){
        car.shapeColor = "yellow";
      }
      else{
        car.shapeColor = "red";
      }
  }
}