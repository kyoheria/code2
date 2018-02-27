

function setup() {
  createCanvas(800,800);
}

function draw() {
  background (0);
  for (var i = 0; i <3; i++) {
    if(i==0){
      fill(255,0,0);
    }else if (i==1){
      fill(255,255,0);
    }else{
      fill(0,0,255);
    }
    rect(i*20,i*20,mouseX/5,20);
  }
}
