var garden,gardenImage;
var cat,cat_sitting,cat_moving,cat_happy;
var mouse,mouse_sitting,mouse_eating,mouse_teasing;

function preload() {
//load the images here
gardenImage=loadImage("images/garden.png");
cat_sitting=loadImage("images/cat1.png");
cat_moving=loadImage("images/cat2.png",);
cat_happy=loadImage("images/cat4.png");
mouse_sitting=loadImage("images/mouse4.png");
mouse_eating=loadImage("images/mouse1.png");
mouse_teasing=loadImage("images/mouse2.png",);
}

function setup(){
createCanvas(1000,800);
garden=createSprite(500,400,2000,1600);
garden.addImage(gardenImage);
//create tom and jerry sprites here
cat=createSprite(850,600,50,50);
cat.addImage(cat_sitting);
cat.scale=0.2;
mouse=createSprite(100,600,50,50);
mouse.addImage(mouse_sitting);
mouse.scale=0.2;
}

function draw() {
background(255);
//background.addImage("backgroundImage");
cat.depth=mouse.depth;
cat.depth=mouse.depth+1;
//Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<200){
  cat.addImage(cat_happy);
  mouse.addImage(mouse_eating);
  cat.velocityX=0;
}
else{
  cat.addImage(cat_sitting);
  mouse.addImage(mouse_sitting);
}
keyPressed();
console.log(cat.x)
drawSprites();
}


function keyPressed(){
if(keyDown("t")){
  mouse.addImage(mouse_teasing);
}
if(keyDown("a")){
  cat.velocityX=-2
  cat.addImage(cat_moving)
}


  //For moving and changing Image write code here


}
