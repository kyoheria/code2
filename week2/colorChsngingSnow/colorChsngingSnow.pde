Drop[] drops = new Drop[500];

void setup() {
  size(600, 600);
  for (int i = 0; i < drops.length; i++) {
    drops[i] = new Drop();
  }
}

void draw(){
  background(0);
  float RColor = map(mouseX, 0,600, 0,255);
  float GColor = map(mouseY, 0,600, 0,255);
  float BColor = mouseX + mouseY;
  BColor = map(BColor, 0,1200, 0,255);
  fill(RColor, GColor, BColor);
  for (int i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}