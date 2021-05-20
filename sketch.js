var ground,engine,bin, binimg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){

binimg=loadImage("dustbingreen.png");

}


function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);



	//Create the Bodies Here.
 paper = new paper(100,300,20);
 bin=createSprite(790,320,10,1);
 bin.scale=0.47;
 bin.addImage(binimg);
 dustbin = new dustbin(790,390,100,10);
 launcher = new launcher(paper.body,{x:80,y:80})



 ground = Bodies.rectangle(width / 2, 400, width, 10,{ isStatic: true});

 World.add(world, ground);



	
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  paper.display();
  dustbin.display();
  launcher.display();

  

  drawSprites();
 
}

//Createfunction keyPressed(){
	//if (keyCode === UP_ARROW ) {
	//  Matter.Body.applyForce(paper.body, paper.body.position, {x: 57,y: -63 } )
//	}
//}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY})
}
	

function mouseReleased()
{
	
	launcher.fly();
 
}	
			

