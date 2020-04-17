const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg;
var ball, pendulum;

function preload() {
    backgroundImg = loadImage("sprites/cream.png");
    log = loadImage("sprites/wood2.png");
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight-110);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(700,300);
  
    pendulum = new Pendulum(ball.body,{x:700, y:40});
    
}

function draw(){
    background(backgroundImg);
    
    Engine.update(engine);
    image(log,100,30,1200,30);
    ball.display();
    pendulum.display();
    
   
  
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}


