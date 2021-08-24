const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var polygon,polygonImage,slingShot;


function preload(){
	polygonImage = loadImage("polygon.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,400,300,30);
	ground2 = new Ground(1000,250,200,30);
	block1 = new Box(480,340,40,60);
	block2 = new Box(520,340,40,60);
  block3 = new Box(560,340,40,60);
  block4 = new Box(600,340,40,60);
  block5 = new Box(640,340,40,60);
  block6 = new Box(680,340,40,60);
  block7 = new Box(720,340,40,60);
  block8 = new Box(520,280,40,60);
  block9 = new Box(560,280,40,60);
  block10 = new Box(600,280,40,60);
  block11 = new Box(640,280,40,60);
  block12 = new Box(680,280,40,60);
  block13 = new Box(560,220,40,60);
  block14 = new Box(600,220,40,60);
  block15 = new Box(640,220,40,60);
  block16 = new Box(600,140,40,60);
  block17 = new Box(960,120,40,60);
  block18 = new Box(1000,120,40,60);
  block19 = new Box(1040,120,40,60);
  block20 = new Box(1000,60,40,60);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingShot = new SlingShot(polygon,{x:100,y:200})
	
	Engine.run(engine);
 
}

function draw() {
  background("black");
  Engine.update(engine);

  ground.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  slingShot.display();

  imageMode(CENTER);
  image(polygonImage,polygon.position.x,polygon.position.y,40,40);

  
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}