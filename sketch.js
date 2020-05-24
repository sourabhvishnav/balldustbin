var package,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dpart1,dpart2,dpart3;


function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world  = engine.world;

	package = Bodies.circle(25 , 450 , 5 , {restitution:0.1, isStatic:false});
	World.add(world, package);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 495, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	dpart1 = new Dustbin(410,465,8,70);
	dpart3 = new Dustbin(480,465,8,70);
	dpart2 = new Dustbin(445,495,70,8);

	Engine.run(engine);

}


function draw() {

	Engine.update(engine);
	background(0);

   rectMode(CENTER);
   fill("red");
   rect(ground.position.x,ground.position.y,500,10);
   
   fill("tan")
   ellipse(package.position.x,package.position.y,30,30);

   console.log(package.position.x);
  
    
  dpart1.display();
  dpart3.display();
  dpart2.display();
 

  if(package.x<430){
	  World.remove(package.body);
  }
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW) {
		Body.applyForce( package, {x: package.position.x, y: package.position.y}, {x: 0.0008, y: -0.0008});
	}
}




