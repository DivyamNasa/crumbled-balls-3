class paper {

constructor(x,y,radius){

    var options = {
        'restitution':0.5,
        'friction':1.0,
        'density':1.0,
        'isStatic' : false
    }

this.radius=radius;
this.body=Bodies.circle(x,y,radius,options);
World.add(world,this.body);
this.image=loadImage("paper.png");
}


display()
{


    var paperpos=this.body.position;	

  //  this.body.position.x=mouseX;
    //this.body.position.y=mouseY;

push()
translate(paperpos.x,paperpos.y)
fill("yellow")
rectMode(CENTER)
imageMode(CENTER);
image(this.image,0,0,2*this.radius,2*this.radius)
pop()
}

}