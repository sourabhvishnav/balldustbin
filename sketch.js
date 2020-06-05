
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dpart1,dpart2,dpart3;
var package,ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world  = engine.world;

	package = new Ball(120,450,20);
	

	
	ground = new Ground(width/2,655,width,10);


	dpart1 = new bucket(680,625,5,55);
	dpart3 = new bucket(655,657,55,5);
	dpart2 = new bucket(632,625,5,55);

	Engine.run(engine);

}


function draw() {

	Engine.update(engine);
	background(0);


   ground.display();

  package.display();
    
  dpart1.display();
  dpart3.display();
  dpart2.display();
 
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(package.body,package.body.position,{x:19.9,y:-9.9});
		
	}
}




