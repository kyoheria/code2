class Drop{
  float x; 
  float y; 
  float yspeed;
  
  Drop(){
    x  = random(width);
    y  = random(-500, -50);
    yspeed = random(1,20); 
  }
  
  void fall(){
    y += yspeed;
    float grav = map(yspeed, 0, 20, 0, 0.2);
    yspeed+=grav;
    
    if (y > height) {
      y = random(-200, -100);
      yspeed = random(1,20);
    }
  }   
  void show(){
     ellipse(x, y, 5, 5);
  }
    
 }