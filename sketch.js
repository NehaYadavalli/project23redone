var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var red1, red2, red3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	red1=createSprite(400,650, 200,20);
	red1.shapeColor=color(235,64,52);

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255,255,255)




	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	
	 
	 red1 = Bodies.rectangle(400, 650, 200, 20 , {isStatic:true} );
	 World.add(world, red1);
	 
	 
	 
	 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 red2 = new RedSide(500,600);
	 red3 = new RedSide(300,600);
 

	Engine.run(engine);
  
}


function draw() {

Engine.update(engine);

  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed(); 


  red2.display();
  red3.display();

  drawSprites();



  
	
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
	restitution:0.8,
  }
}
