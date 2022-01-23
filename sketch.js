
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ground =new Ground(800,670,1600,20);
  right = new Ground(1100,600,20,120);
  left = new Ground(1350,600,20,120);
	//Create the Bodies Here.
	var balloptions={
		restitution:0.95
	  }
	  ball=Bodies.circle(200,100,20,balloptions)
	  World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,40,40)
  ground.show()
  right.show()
left.show()
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:0.1,y:-0.03})
	}
}

