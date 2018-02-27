var val =0;

function setup() {
  createCanvas(800,800);
  
}

function draw() {
  background (val);
  fill(2550,0,0);
    rect(width/2,height/2,50,50);
  
}
function mousePressed() {
  if(mouseX<width/2+50&&mouseX>width/2&&mouseY<height/2+50&&mouseY>height/2){
    if (val === 0) {
      val = 255;
    } else {
      val = 0;
    }
  }
}
