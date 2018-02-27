
function setup() {

  createCanvas(720, 360); 
  background(0);
  var gridSize = 35;
  var r;
  var g = 0;
  var b;

  for (var x = gridSize; x <= width - gridSize; x += gridSize) {
      
        noStroke();
        r=map(x, 0,255,0,720);
        //b=map(y, 0,255,0,360);
        fill(r,0,0);
        rect(x-1, height/2, 3, 3);
        
  }
}



function draw() {
	
	
}

