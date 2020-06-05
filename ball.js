class Ball {

    constructor(x,y,r){
            var options ={
            isStatic:false,
            resitution:0.3,
            friction:0.5,
            density:1.2
        }
        //  let radius = 35;
        this.body = Matter.Bodies.circle(x, y, r/2, options);
        this.r =  r/2;
       
        // this.velocityY = 5;
        World.add(world,this.body)
       
    }
  
    display(){
       var pos = this.body.position;
       ellipseMode(RADIUS);
       fill("yellow");
       ellipse(pos.x,pos.y,this.r,this.r);
    }
}