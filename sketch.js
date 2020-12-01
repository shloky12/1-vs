var s,g;

function setup() {
  createCanvas(1200,800);
  s=createSprite(600, 400, 50, 80);
  s.shapeColor="red"
  g=createSprite(400,400,50,80)
  g.shapeColor="red"
}

function draw() {
  background(255,255,255);  

  g.x=World.mouseX
  g.y=World.mouseY

  if (g.x - s.x < g.width/2 + s.width/2 &&
    s.x - g.x < s.width/2 + g.width / 2 &&
    g.y - s.y < g.height/2 + s.height/2 &&
    s.y - g.y < s.height/2 + g.height/2){
      s.shapeColor="lightblue"
      g.shapeColor="lightblue"
    }
    
    else{
      s.shapeColor="red"
      g.shapeColor="red"
    }
    
  drawSprites();  
}