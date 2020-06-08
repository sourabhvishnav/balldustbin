class Ball {

    constructor(x,y,r){
            var options ={
            isStatic:false,
            resitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.img = loadImage("paper.png")
        this.body = Matter.Bodies.circle(x, y, r/2, options);
        this.r =  r/2;
       
        World.add(world,this.body)
       
    }
  
    display(){
       var pos = this.body.position;
       ellipseMode(RADIUS);
       
       image(this.img, pos.x, pos.y);
    }
}