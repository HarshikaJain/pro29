class Block {
    constructor(x,y,width,height) {
        var option = {
            'restitution':0.8,
            'friction':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        var pos = this.block.position;
        var angle = this.block.angle;
        push();
        translate(this.block.position.x,this.block.position.y);
        rotate(angle);
        fill("lightblue");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
} 
