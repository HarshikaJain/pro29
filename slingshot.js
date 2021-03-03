class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointA = pointA;
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    fly(){
       this.sling.bodyA = null; 
    }

    display(){
        if(this.sling.bodyA){
         var bodyA = this.sling.bodyA.position;
         var pointB = this.pointB;
            strokeWeight(2);
            line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        }
    }
} 