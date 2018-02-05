ArrayList<FireworkParticle> fireworkArray = new ArrayList<FireworkParticle>();

void setup() {
  size(1000, 1000);
  frameRate(60);
  
}

void draw() {
  background(0);
  for (int i = 0; i < fireworkArray.size(); i++) {
    FireworkParticle firework = fireworkArray.get(i);
    firework.update();
    firework.display();
  }
}

void mouseClicked(){
  int numFireworks = 350;
  PVector position = new PVector(mouseX,mouseY);
  color randomColor = color(random(255), random(255), random(255));
  
  for (int i = 0; i < numFireworks; i++) {
    fireworkArray.add(new FireworkParticle(position, randomColor));
  }
}
  