const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld;


function preload()
{
   //preload the images here
  
   backIMG=loadImage("back.png");
   R=loadImage("h1.png")
   L=loadImage("h2.png")
   packageIMG=loadImage("package.png");
   crossIMG=loadImage("cross.png");
   soldierIMG=loadImage("soldier.png");
   noteIMG=loadImage("note.png");
   note1IMG=loadImage("s1.png");
   note2IMG=loadImage("h.png");
}

function setup() {
  createCanvas(1520,750);
  myengine=Engine.create();
  myworld=myengine.world;

  b=createSprite(760,375,50,50);
  b.addImage("background",backIMG);
  b.scale=1.5;

  ground=createSprite(750,680,8000,160);
  ground.shapeColor=color(120,64,64);
  World.add(World,ground);

  ground1=createSprite(230,680,700,10);
  ground1.visible=false;
  ground2=createSprite(1300,680,700,10);
  ground2.visible=false;

  soldier=createSprite(1060,630,50,50);
  soldier.addImage(soldierIMG);
  soldier.scale=0.60;

  cross=createSprite(750,680,20,20);
  cross.addImage(crossIMG);
  cross.scale=0.60;
  World.add(World,cross);
    
  engine = Engine.create();
	world = engine.world;

  var options={
    isStatic:true,
    restitution:0.8,
    friction:0.5,
    density:0.2
}
 
   box1=new Box(600,650,50,240)
   box2=new Box(940,650,50,240)
   box3=new Box(770,740,400,70)

   var options={
     isStatic:true,
    restitution:0.8,
    friction:0.5,
    density:0.2
}
package=createSprite(1300,100,50,50);
package.addImage("stop",packageIMG);
package.scale=0.2;
World.add(myworld,package)

var options={
isStatic:true
}

packageBody=Bodies.rectangle(1300,100,15,15,options);
World.add(myworld,packageBody) 

  helicopter=createSprite(350,50,50,50);
	helicopter.addAnimation("right",R);
	helicopter.addAnimation("left",L);
  helicopter.scale=0.95;
	World.add(World,helicopter)

  note1=createSprite(1000,460,10,10);
  note1.addImage(note1IMG);
  note1.visible=false;
  note1.scale=0.50;

  note2=createSprite(1000,460,10,10);
  note2.addImage(note2IMG);
  note2.visible=false;
  note2.scale=0.50;

  note=createSprite(760,375,50,50);
  note.addImage(noteIMG);
  note.scale=0.65;
 
 myworld=myengine.world;
}
function draw() {
  background("black");
  Engine.update(myengine);
 
  if(keyDown("b")){
     note.destroy();}

  if(keyDown("left")){
    helicopter.x=helicopter.x-10;
    helicopter.changeAnimation("left",L); } 

  if(keyDown("right")){
    helicopter.x=helicopter.x+10;
    helicopter.changeAnimation("right",R); }
  
  if(keyDown("down")){
   packageBody.velocityY=1;
   Matter.Body.setStatic(packageBody,isStatic=false)}

 

  if(packageBody.position.y>675){
    Matter.Body.setStatic(packageBody,isStatic=true)}

 rectMode(CENTER); 
 rect(package.position.x,package.position.y,100,100);
 
 rectMode(CENTER); 
 package.x=packageBody.position.x
 package.y=packageBody.position.y
 packageBody.position.x=helicopter.position.x
 
 box1.display();
 box2.display();
 box3.display();
  drawSprites();
  
  if(package.isTouching(ground1)||package.isTouching(ground2)){
    cross.destroy();
    fill("black");
    textSize(100);
    textFont("Algerian");
    stroke("Aqua");
    text("You Failed In Your Mission"  ,90,250)
    note1.visible=true;
  }
  if(package.isTouching(cross)){ 
    fill("black");
    textSize(100);
    textFont("Algerian");
    stroke("Aqua");
    text("You Pased"  ,365,460)
    ground1.destroy();
    ground2.destroy();
    note2.visible=true;
  }
}