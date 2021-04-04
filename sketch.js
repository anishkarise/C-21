var fixedRect, movingRect;
var obj1,obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1=createSprite(200,200,50,50);
  obj1.shapeColor="yellow";
  obj1.debug=true;

  obj2=createSprite(150,150,50,50);
  obj2.shapeColor="purple";
  obj2.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  drawSprites();

 
  if (isTouching(movingRect,fixedRect))
  {
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
  }
 else 
 {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    obj1.shapeColor= "green";
    obj2.shapeColor= "green";
 }

 if (isTouching(movingRect,obj1))
 {
  movingRect.shapeColor = "red";
  obj1.shapeColor = "red";
 }
 
 if (isTouching(movingRect,obj2))
 {
  movingRect.shapeColor = "red";
  obj2.shapeColor = "red";
 }
}

function isTouching(hulk,venom)
{
  if (hulk.x - venom.x < venom.width/2 + hulk.width/2
    && venom.x - hulk.x < venom.width/2 + hulk.width/2
    && hulk.y - venom.y < venom.height/2 + hulk.height/2
    && venom.y - hulk.y < venom.height/2 + hulk.height/2) {

  return true 
}
else {
  
  return false
}

}