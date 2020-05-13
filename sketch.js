var car,wall,s,mg,lethal,type,play;

function setup() {
  createCanvas(1200,400);
  play=createSprite(canvas.width/2,390,50,30);
  play.shapeColor="blue";
  car = createSprite(100,200,35,35);
  car.shapeColor="grey";
  car.setCollider("rectangle",0,0,35,35);
  wall=createSprite(1000,200,20,100);
  wall.shapeColor=color(80,80,80);
  wall.setCollider("rectangle",0,0,20,100);
}

function draw() {
  background("white");
  textSize(20);
  text("again",play.x-22.5,play.y-20);
  if(mousePressedOver(play)&&car.velocityX==0){
    car.x=100;
  if(car.isTouching(wall)==false){
    lethal =0.5*smg()/22500;
  }
}
  if(car.isTouching(wall)){
    car.velocityX=0;
  if (lethal<100){car.shapeColor="green";type="safe";}
  if (lethal>=100&&lethal<180){car.shapeColor="yellow";type="average";}
  if (lethal>=180){car.shapeColor="red";type="dangerous";}
  textSize(20);
  text("speed:"+Math.round(s)+"m/s,weight:"+Math.round(mg)+"g,grade:"+type,canvas.width/2,canvas.height*3/4);
  }
  drawSprites();

}


function smg(){
  s= random(60,120);
  mg = random(500,1500);
  car.velocityX=s;
  return mg*Math.pow(s,2);
}