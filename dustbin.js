class dustbin {
constructor(x,y,width,height){

var options = {

    isStatic: true
}

this.bodybottom = Bodies.rectangle(x,y, width, height,options );
World.add(world, this.bodybottom);

 this.bodys1= Bodies.rectangle((x-(width/2)), (y-(height*2)), height, width/2 ,options);
 World.add(world, this.bodys1);

 this.bodys2 = Bodies.rectangle((x+(width/2)), (y-(height*2)), height, width/2 ,options);
 World.add(world, this.bodys2);
        
this.bodybottom.width = width
this.bodybottom.height = height 
this.image=loadImage("dustbingreen.png");

}

display() {
    push()
    rectMode(CENTER)
    imageMode(CENTER)
    fill("lightblue");
    rect(this.bodybottom.position.x, this.bodybottom.position.y,this.bodybottom.width, this.bodybottom.height)
    rect((this.bodybottom.position.x-(this.bodybottom.width/2)), (this.bodybottom.position.y-(this.bodybottom.height*(2*(this.bodybottom.width/100)))), this.bodybottom.height, this.bodybottom.width/2)
    rect((this.bodybottom.position.x+(this.bodybottom.width/2)), (this.bodybottom.position.y-(this.bodybottom.height*(2*(this.bodybottom.width/100)))), this.bodybottom.height, this.bodybottom.width/2)
    pop()

}




}