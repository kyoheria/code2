
function setup() {

  createCanvas(720, 360); 
  background(0); 
  noStroke(); 
  var gridSize = 35;
	for (var x = gridSize; x <= width - gridSize; x += gridSize) {
    	for (var y = gridSize; y <= height - gridSize; y += gridSize) {
	      	noStroke();
	      	fill(255);
	      	rect(x-1, y-1, 5, 5);
	      	//stroke(255, 50);
	      	//line(x, y, mouseX, mouseY);
	    }
  }

}



function draw() {
	background(0);
	var gridSize = 35;
	var r;
	var g ;
	var b= 0;

	for (var x = gridSize; x <= width - gridSize; x += gridSize) {
    	for (var y = gridSize; y <= height - gridSize; y += gridSize) {
      	noStroke();
      	r=map(x, 0,255,0,720);
      	g=map(y, 0,255,0,360);
      	fill(r,g,b);
      	rect(x-1, y-1, 3, 3);
      	stroke(255, 50);
      	//line(x, y, mouseX, mouseY);
    }
  }
	
}

