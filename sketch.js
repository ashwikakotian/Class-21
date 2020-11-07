var fixedRect,movingRect;

var box1,box2;

function setup() {
  createCanvas(800,800);
  fixedRect= createSprite(100, 100, 50, 50);
  fixedRect.shapeColor= "green";
  fixedRect.debug= true;
  fixedRect.velocityY=4

  movingRect=createSprite(100,500,50,50);
  movingRect.shapeColor="green"
  movingRect.debug= true;
  movingRect.velocityY=-4

  // box1= createSprite(100,100,50,50);
  // box1.shapeColor="green";
  // box2= createSprite(200,200,50,50);
  // box2.shapeColor="green";
}

function draw() {
  background(0);  

  // movingRect.x= mouseX;
  // movingRect.y= mouseY;

  bounceOff(movingRect,fixedRect)

  // if(isTouching(movingRect,box1)){
  //     movingRect.shapeColor= "blue";
  //     box1.x= 300;
  // }
  // else{
  //     movingRect.shapeColor= "green";
  //     box1.x=100;
  // }


 
  drawSprites();
}


