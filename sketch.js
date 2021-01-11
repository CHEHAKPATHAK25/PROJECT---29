const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base1, base2;
var box1, box2, box3, box4, box5,polygon;

var chain;
function preload(){
    poly = loadImage("polygon.png");
}
function setup () {
    createCanvas(800,400);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,380,800,20);
    slab1 = new Ground(350,270,200,10);
    
    polygon = Bodies.circle(100,100,20);
    World.add(world,polygon);
    
    chain = new Slingshot(polygon,{x:100,y:100});
   
    //row one
    block1 = new Block(330,235,30,40);
    block2 = new Block(360,235,30,40);
    block3 = new Block(390,235,30,40);
    block4 = new Block(420,235,30,40);
    block5 = new Block(450,235,30,40);
    block6 = new Block(330,235,30,40);
    block7 = new Block(360,235,30,40);

    //row two
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);

    //row 3
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);

    //top
    block16 = new Block(390,155,30,40);

    slab2 = new Ground(650,200,200,10);

    //row 1
    block17 = new Block(530,165,30,40);
    block18 = new Block(560,165,30,40);
    block19 = new Block(590,165,30,40);
    block20 = new Block(620,165,30,40);
    block21 = new Block(650,165,30,40);
    block22 = new Block(680,165,30,40);
    block23 = new Block(710,165,30,40);

    //row 2
    block24 = new Block(500,165,30,40);
    block25 = new Block(500,165,30,40);
    block26 = new Block(500,165,30,40);
    block27 = new Block(500,165,30,40);
    block28 = new Block(500,165,30,40);

    //row3
    block29 = new Block(470,135,30,40);
    block30 = new Block(470,135,30,40);
    block31 = new Block(470,135,30,40);

    //top
    block32 = new Block(450,155,30,40);
   
}

function draw () {
background(0);
Engine.update(engine);
ground.display();

imageMode(CENTER);
image(poly,polygon.position.x,polygon.position.y,40,40);

fill("skyblue");
block1 .display();
block2 .display();

block17 .display();
block18 .display();

fill("pink");

block3.display();
block4.display();
block5.display();
block6.display();
block7.display(); 

block19.display();
block20.display();
block21.display();
block22.display();
block23.display(); 

fill("lime");

block8 .display();
block9 .display();
block10 .display();
block11 .display();
block12 .display();

block24.display();
block25.display();
block26.display();
block27.display();
block28.display(); 

fill("cyan");
block13.display();
block14.display();
block15.display();
block16.display();

block29.display();
block30.display();
block31.display();
block32.display();

//chain.display();
slab1.display();
slab2.display();
chain.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}

