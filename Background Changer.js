var back,red,blue,yellow,random,move;

function setup(){
    createCanvas(400,400);

    back=createSprite(200,200,400,400);

    red=createSprite(100,100,100,100);

    blue=createSprite(300,100,100,100);

    yellow=createSprite(100,300,100,100);

    move=createSprite(200,200,50,50);

}

function draw(){

    back.shapeColor="white";

    red.shapeColor="red";

    blue.shapeColor="blue";

    yellow.shapeColor="yellow";

    move.shapeColor="black";

    move.X=mouse.X;
    move.Y=mouse.Y;

    if(isTouching(move,red)){
        back.shapeColor="red";
        blue.shapeColor="red";
        yellow.shapeColor="red";
    }
    else{
        back.shapeColor="white";
        red.shapeColor="red";
        blue.shapeColor="blue";
        yellow.shapeColor="yellow";
    }

    if(isTouching(move,blue)){
        back.shapeColor="blue";
        red.shapeColor="blue";
        yellow.shapeColor="blue";
    }
    else{
        back.shapeColor="white";
        red.shapeColor="red";
        blue.shapeColor="blue";
        yellow.shapeColor="yellow";

    if(isTouching(move,yellow)){
        back.shapeColor="yellow";
        red.shapeColor="yellow";
        yellow.shapeColor="yellow";
    }
    else{
        back.shapeColor="white";
        red.shapeColor="red";
        blue.shapeColor="blue";
        yellow.shapeColor="yellow";
    }

    drawSprites();

}

function isTouching(object1,object2){
    if(object1.x-object2.x<object1.width/2+object2.width/2
      &&object2.x-object1.x<object1.width/2+object2.width/2
      &&object1.y-object2.y<object1.height/2+object2.height/2
      &&object2.y-object1.y<object1.height/2+object2.height/2){
        return true;
      }
  else {
    return false;
  }
      
}