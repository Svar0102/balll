
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world
var ground
var groundObj
var ball
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.
	

var ball_options ={
	isStatic:false,
	restitution:.3,
	friction:0,
	density:1.2
}
ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  groundObj=new Ground(width/2,670,width,20)
  leftSide = new Ground(400,600,20,120)
  rightSide = new Ground(600,600,20,120)

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.show()
  leftSide.show()
  rightSide.show()
  ellipse(ball.position.x, ball.position.y, 20, 20)
 
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
			Matter.Body.applyForce(ball,ball.position,{x:40,y:-40})
			
			  }
	}


