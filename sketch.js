const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player

var ground

var gameState='PLAY'

function preload()
{
	
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(900, 700);

	player=createSprite(100,-50,20,20)


	ground=createSprite(450,690,900,20)

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(225);
  player.collide(ground);
 	if(gameState='PLAY'){
  
	if(keyWentDown("Space")){
	player.velocityY=player.velocityY-15
  }
  
  player.velocityY=player.velocityY+0.8

  if(keyDown(LEFT_ARROW)){
	  player.position.x=player.position.x-10
  }
  else if(keyDown(RIGHT_ARROW)){
	player.position.x=player.position.x+10 
  }

  
  drawSprites();
}
 
}



