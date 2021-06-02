

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
var roof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
roof= new Roof(340,200,300,30);

bobObject1 = new Bob (200,400,10);
bobObject2 = new Bob (270,400,10);
bobObject3 = new Bob (340,400,10);
bobObject4 = new Bob (410,400,10);
bobObject5 = new Bob (480,400,10);
	
rope1= new Rope(bobObject1.body,{x:240,y:200})
rope2= new Rope(bobObject2.body,{x:290,y:200})
rope3= new Rope(bobObject3.body,{x:340,y:200})
rope4= new Rope(bobObject4.body,{x:390,y:200})
rope5= new Rope(bobObject5.body,{x:440,y:200})

	
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()

rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()

roof.display()


  drawSprites();
 
}
function keyPressed(){
	 if (keyCode === UP_ARROW)
{ Matter.Body.applyForce(bobObject1.body,bobObject1.position,{x:-10, y:-10}) } }


