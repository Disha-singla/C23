class box{
    constructor(x,y,width,height){
        var Opt1={
            restitution:1,
            friction:0.4,
            density:0.3
    }
    this.body=Bodies.rectangle(x,y,width,height,Opt1)
    this.w=width;
    this.h=height;
    World.add(world,this.body);
}
display(){
    var pos=this.body.position
    var angle=this.body.angle
    push();
    translate(pos.x,pos.y);
    rect(0,0,this.w,this.h);
    pop()
}
}