const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
var world,engine,ground1,box1,box2;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
    world=engine.world;
    box1=new box(200,300,50,50);
    box2=new box(240,100,50,100);
    ground1=new ground(400,390,800,20);
}
function draw() {
  background(0);  
  Engine.update(engine)
  ground1.display();
  box1.display();
  box2.display();
}