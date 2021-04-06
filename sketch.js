var backgroundimage
var gamestate = play
var play = 1
var end = 0
var runner , runner_running
var ground , groundimage
var cloud , cloudimage
var O, O1 , O2 , O3 , O4
var jumpSound , dieSound , gSound
function preload(){
  runner_running = loadImage("MY.png")
  groundimage = loadImage("MYgameB.png")
  cloudimage = loadImage("MyGameCloud.jpg")
  O1 = loadImage("OBS1.png")
  O2 = loadImage("OBS2.jfif")
  O3 = loadImage("O3.png")
  O4 = loadImage("MyGameBird.jpg")
  backgroundimage = loadImage("sky.png")
  gSound = loadSound("smb_bowserfalls.wav")
  jumpSound = loadSound("smb_jump-small.wav")
  dieSound = loadSound("smb_mariodie.wav")
  gSound = loadSound("smb_bowserfalls.wav")
}


function setup() {
  createCanvas(800,400);

 
  ground = createSprite(400,365,2000,55)
  ground.addImage(groundimage) 
  invisibleground = createSprite(20,370,300,20)
  invisibleground.visible = false
  runner = createSprite(100, 375, 50, 50);
  runner.scale = 0.12
  runner.addImage("running",runner_running) 
  cloudgroup = createGroup()
  obstaclegroup = createGroup()

}

function draw() {
  background(backgroundimage); 
  if (gamestate === play){
   clouds()
   obstacle()
   if (obstaclegroup.isTouching(runner)){
     gamestate = end
     gos.play()
   }
   ground.velocityX = -10
    if (keyDown("space") ){
     runner.velocityY = -10
      jumpsound.play()

    }
    
   // runner.velocityY = runner.velocityY+1
    
  } 
  drawSprites();
}
function clouds(){
  if (frameCount%60===0){
    cloud = createSprite(600,50,20,20)
    cloud.velocityX = -4
    cloud.addImage(cloudimage)
    cloud.scale = random(0.5,1.2)
    cloud.y = Math.round(random(40,100))
    cloud.depth = runner.depth
    cloud.depth = runner.depth+1
    cloud.lifetime = 200 
    cloudgroup.add(cloud)
  }
   function obstacle (){
    if (frameCount%90===0){
     O = createSprite(500,100,20,20)
     O.velocityX = -7
     var r = Math.round(random(1,3))
     switch(r){
       case 1 : O.addImage(O1)
        break;
       case 2 : O.addImage(O2)
        break;
       case 3 : O.addImage(O3)
        break;
        default:break;

     } 
     obstaclegroup.add(O)


    }
  }
  
}