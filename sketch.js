var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(60,600,100,20);
    block1.shapeColor="red";

    block2 = createSprite(170,600,100,20);
    block2.shapeColor="orange";

    block3 = createSprite(280,600,100,20);
    block3.shapeColor="yellow";

    block4 = createSprite(390,600,100,20);
    block4.shapeColor="green";

    block5 = createSprite(500,600,100,20);
    block5.shapeColor="darkGreen";

    block6 = createSprite(610,600,100,20);
    block6.shapeColor="darkBlue";

    block7 = createSprite(720,600,100,20);
    block7.shapeColor="blue";

    box = createSprite(200,200,20,20);
    box.shapeColor = "white";
    box.velocityY = 8;
    box.velocityX = 5;

    
}

function draw() {
    background("pink");

    edges = createEdgeSprites();
    box.bounceOff(edges);
    
   if(block1.isTouching(box)&&box.bounceOff(block1)){
       box.shapeColor="red";
   }
   if(block2.isTouching(box)&&box.bounceOff(block2)){
    box.shapeColor="orange";
}
if(block3.isTouching(box)&&box.bounceOff(block3)){
    box.shapeColor="yellow";
    box.velocityX=0;
    box.velocityY=0;
}
if(block4.isTouching(box)&&box.bounceOff(block4)){
    box.shapeColor="green";
}
if(block5.isTouching(box)&&box.bounceOff(block5)){
    box.shapeColor="darkGreen";
}
if(block6.isTouching(box)&&box.bounceOff(block6)){
    box.shapeColor="darkBlue";
}
if(block7.isTouching(box)&&box.bounceOff(block7)){
    box.shapeColor="blue";
}



drawSprites();

    //add condition to check if box touching surface and make it box
}
