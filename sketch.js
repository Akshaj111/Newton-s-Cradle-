
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   Roof = new roof(400,400,300,20);
   bob1 = new Bob(mouseX,640,50,50);
   bob2 = new Bob(360,640,50,50);
   bob3 = new Bob(420,640,50,50);
   bob4 = new Bob(480,640,50,50); 
   chain = new Chain(bob1.body, bob2.body, bob3.body, bob4.body, Roof.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 Roof.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 chain.display();
}



