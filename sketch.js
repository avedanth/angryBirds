const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4;
var pig1, log1, log2, log3, log4;
var bird; 

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    pig1 = new Pig(775,300,50,50);
    pig2 = new Pig(775,220,50,50);
    box1 = new Box(700,300,50,50);
    box2 = new Box(850,300,50,50);
    log1 = new Log(775,250,300,PI/2);
    log2 = new Log(775,200,300,PI/2);
    bird = new Bird(100,100);
  //  log3 = new Log(100,300,100,PI/2);
  //  log4 = new Log(160,300,50,PI/2);
    box3 = new Box(700,220,50,50);
    box4 = new Box(850,220,50,50);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
     box2.display();
     box3.display();
     box4.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    bird.display();
   // log3.display();
  //  log4.display();*/
    ground.display();
}