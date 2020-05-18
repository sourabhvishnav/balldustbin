var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground,ball;
var dpart1,dpart2,dpart3;
var ground2;

function preload(){}

function setup() {
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;

	var ground_options ={
		isStatic:true
	}
	var ground2_options ={
		isStatic:true
	}
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(300,500,500,20,ground_options);
	World.add(world, ground);
	
	ground2 = Bodies.rectangle(602,250,500,20,ground_options);
	World.add(world, ground);
	
	ball = new Ball(265,450,30,30);
	 
	Engine.run(engine);

	dpart1 = new Dustbin(450,458,10,70);
	dpart2 = new Dustbin(485,488,80,10);
	dpart3 = new Dustbin(520,458,10,70);
}

function draw() {
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
  fill("red");
  rect(ground.position.x,ground.position.y,600,15);

  fill("red");
  rect(ground2.position.x,ground2.position.y,15,600);

  fill("white")
  text("Press up arrow key to throw",200,250);
  
  dpart1.display();
  dpart3.display();
  dpart2.display();
  
  ball.display();
   
  keyPressed();

  drawSprites();

}
function keyPressed(){
	 
	if(keyCode === UP_ARROW){
		Matter.body.applyForce(ball.body,ball.body.position,{x:85,y:100});
	}
}
