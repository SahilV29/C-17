
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(windowWidth,windowHeight)
  monkey=createSprite(80,315,20,20)
monkey.addAnimation("moving", monkey_running)
  monkey.scale=0.1;
  
  ground=createSprite(width,height-10,900,20)

FoodGroup = new Group();
 obstacleGroup  = new Group();
}


function draw() {
background("green")
  
  stroke ("black");
  textSize(20);
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time "+survivalTime,100,50)
  
  ground.velocityX=4+survivalTime/70;
  ground.x=ground.width/2;

  monkey.velocityY= monkey.velocityY+0.8;
  monkey.collide(ground);
  
  if(keyDown("space")  && monkey.y >= height-70) {
      monkey.velocityY= -25;
      
    }
  
  
  spawnbananas();
  spawnobstacles();
  
  
  
  
  
  drawSprites();
}


function spawnbananas(){
  if (frameCount%80===0){
    banana = createSprite(width,height/2);
    banana.addImage(bananaImage);
    var r =Math.round(random(height/2-100,height/2+100))
     banana.y  =r
    banana.velocityX=-5
    banana.scale=0.1;
    banana.lifetime=windowWidth/banana.velocityX;
    
    FoodGroup.add(banana);
  }
 }

function spawnobstacles(){
  if (frameCount%300===0){
    obstacle = createSprite(width,height-50);
    obstacle.addImage(obstacleImage);
    
     
    obstacle.velocityX=-5
    obstacle.scale=0.3;
    obstacle.lifetime=windowWidth/obstacle.velocityX;
    
    obstacleGroup.add(obstacle);
  }
 }

