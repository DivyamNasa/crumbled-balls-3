class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.001,
            length: 10
        }
        this.pointB = pointB
        this.bodyA=bodyA
        this.launcher= Constraint.create(options);
        World.add(world, this.launcher);
    }


      display(){
          if(this.launcher.bodyA){

            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
          }

        
    }


    fly()
	{
		//World.remove(world,this.rope)
		this.launcher.bodyA=null;
	}
    
}



