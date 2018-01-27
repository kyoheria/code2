//i changed it so that every five point player get, the pabble will be smaller by 20% and also back ground will gray scaled as they gain point to make winning player to be harder to get point
//also paddle will stop at the edge of the screen 


int p1Score;
int p2Score;


int oneNum;
int twoNum;

boolean p1Up = false;
boolean p1Down = false;
boolean p2Up = false;
boolean p2Down = false;

Ball b;
Paddle p1;
Paddle p2;

void setup() {
  size(1000, 700);
  b = new Ball();
  p1 = new Paddle(0);
  p2 = new Paddle(1);
 
}

void draw() {
  background(0);
  fill(oneNum);
  rect(0,0, width/2,height);
  fill(twoNum);
  rect(width/2, 0, width/2 ,height);
  
  fill(255);
  b.checkCollisionWithPaddle(p1);
  b.checkCollisionWithPaddle(p2);
  

  b.update();
  b.display();
  p1.update();
  p1.display();
  p2.update();
  p2.display();

  textSize(36);
  fill(255);
  textAlign(CENTER, CENTER);

  text(p1Score, width/2 - 100, 50);
  text(p2Score, width/2 + 100, 50);
}

void keyPressed() {
  if (key == CODED) {
    if (keyCode == UP) {
      //if(p2.getY()>0)
        p2Up = true;
    }
    if (keyCode == DOWN) {
      //if(p2.getY()<height)
        p2Down = true;
    }
  } else {
    if (key == 'w') {
      //if(p1.getY()>0)
        p1Up = true;
    }
    if (key == 's') {
      //if(p1.getY()<height)
        p1Down = true;
       
    }
  }
}

void keyReleased() {
  if (key == CODED) {
    if (keyCode == UP) {
      p2Up = false;
    }
    if (keyCode == DOWN) {
      p2Down = false;
    }
  } else {
    if (key == 'w') {
      p1Up = false;
    }
    if (key == 's') {
      p1Down = false;
    }
  }
}

void chageColorForOne(){
  if(oneNum<255)
  oneNum+=10;
}
void chageColorForTwo(){
  if(twoNum<255)
  twoNum+=10;
}