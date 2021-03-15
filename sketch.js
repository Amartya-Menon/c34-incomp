const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var superImg;
var hero,backgroundImg;
var engine,world;
var fly;
function preload() {
//preload the images here
backgroundImg=loadImage("sprites/background.jpg")


}

function setup() {
  createCanvas(2500, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
  
  hero = new Hero(1250,400,(50/2))

  fly = new Fly(hero.body, { x: 500, y: 50 });

  
  ground = new Ground(750, 750, 1200, 20);

console.log(hero)

}

function draw() {
  background(backgroundImg);
  
 Engine.update(engine);
 
 

 ground.display(); 
 
 
 
 fly.display();

 hero.display();
 



 

  
}

function mouseDragged() {
Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}
