class Paper{
    constructor(x,y,radius){
        var options = {
        'restitution':0.3,
        'friction':0.5,
        'denity':1.2
        }
        
        this.image=loadImage("paper.png");
        this.body = Bodies.circle(x,y,radius,options);
        this.radius=radius;
        
        
        World.add(world,this.body);
        }
        display(){
        ellipseMode(RADIUS);
        
        fill ("yellow");
        ellipse(this.body.position.x,this.body.position.y,2*this.radius,2*this.radius);



   }
};