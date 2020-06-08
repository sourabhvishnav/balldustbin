
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var package,ground,ground2;
var dustbin, d_Image;
var dpart1, dpart2, dpart3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world  = engine.world;

	package = new Ball(80,420,20);
	
	d_Image = loadImage("dustbingreen.png");
    
	
	ground = new Ground(width/2,645,width,10);

	
	var dust_options = {isStatic:true}
	dustbin = Bodies.rectangle(670,720,5,5,dust_options);
	
	dpart1 = new Dustbin(740,635,7,95);
	dpart3 = new Dustbin(695,690,85,7);
	dpart2 = new Dustbin(645,630,7,95);
   
	Engine.run(engine);

}


function draw() {

	Engine.update(engine);
	background(80);

	  

	fill("white");
	rect(0,695,800,15);
   
 

//    ground.display();
    dpart1.display();
    dpart3.display();
    dpart2.display();

  
   
  package.display();
    
 
  image(d_Image, 645, 570);
 
  
  drawSprites();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(package.body,package.body.position,{x:14.7,y:-14.4});
		
	}
}



