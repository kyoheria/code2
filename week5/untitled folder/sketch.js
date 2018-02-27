// Code 2
// Section B
// BFADT
// Spring 2018
// Jonathan Beilin

// Based on code by Bryan Ma

// week 4
// simple scene state machine

let sceneStates = Object.freeze({
  ABOUT: 0,
  TUTORIAL: 1,
  ONE: 2,
  TWO: 3,
  THREE: 4,
  END: 5
});

let currentState = sceneStates.ABOUT;

let keyOn = false;
let tutorialTimer;
let gameTimer;
let gameTimePressed;
const timeForTutorial = 3000;
const timeForGame = 5000;

function setup() {
  createCanvas(1000, 500);
}

function draw() {
  drawScene(currentState);
  checkTransition(currentState);
  keyOn = false;
}

function drawScene(whichScene) {
  switch (whichScene) {
    case sceneStates.ABOUT:
      background(100 + sin(frameCount * 0.05) * 50, 100 + sin(frameCount * 0.06) * 50, 100 + sin(frameCount * 0.07) * 50);
      fill(255);
      textSize(80);
      textAlign(CENTER, CENTER);
      text("welcome to the\nRian Ishikawa's\n\"Resume\"", width/2, height/2);
      break;
    case sceneStates.TUTORIAL:
        background(100 + sin(frameCount * 0.05) * 50, 100 + sin(frameCount * 0.06) * 50, 100 + sin(frameCount * 0.07) * 50);
        fill(0);
        textSize(48);
        textAlign(CENTER, CENTER);
        text("HOW TO VIEW...", width/2, height/2 - 100);
        textSize(32);
        text("by hitting the key,\nit switchs the page", width/2, height/2);

        textSize(24);
      
      break;
    case sceneStates.ONE:
        background(100 + sin(frameCount * 0.05) * 50, 100 + sin(frameCount * 0.06) * 50, 100 + sin(frameCount * 0.07) * 50);
        textSize(20);
        fill(255);
        text("Rian Ishikawa is a  Parsons to study Design and Technology. \n She strongly believes technology is what we need to explore in the world \nwe all live in right now because digital art has the capacity to expand the idea of art . \nArt has been about the relationship between the artist to physical materials to viewers \nand something that once made and would be unchangeable other than decaying throughout time.\n But with digital art, artists can explore and represent them self freely not tied to the physical world.\n Digital technology could expand the space freely so it is possible to manipulate the space \nand send an idea and message of the artwork more directly to the audience. \n", width/2, height/2);  

  
      break;
    case sceneStates.TWO:
        background(100 + sin(frameCount * 0.05) * 50, 100 + sin(frameCount * 0.06) * 50, 100 + sin(frameCount * 0.07) * 50);
        textSize(20);
        fill(255);
        text("For example... \n", width/2, height/2);  

  
      break;
    case sceneStates.THREE:
      //var timeLeft = (timeForGame - (millis() - gameTimer))/1000;
      
      background(0);
      var gridSize = 35;
      var r;
      var g = 0;
      var b;
      fill(0);
      textSize(164);

      for (var x = gridSize; x <= width - gridSize; x += gridSize) {
        for (var y = gridSize; y <= height - gridSize; y += gridSize) {
          noStroke();
          r=map(x, 0,255,0,720);
          b=map(y, 0,255,0,360);
          fill(r,g,b);
          rect(x-1, y-1, 3, 3);
          stroke(255, 50);
          line(x, y, mouseX, mouseY);
        }
      } 
    
      break;
    case sceneStates.END:
      background(10, 10, 10);
      fill(255);
      textSize(64);
      textAlign(CENTER, CENTER);
      text("If you are intrested,", width/2, height - 200);
      textSize(24);
      text("Please contact me by ishir445@newschool.edu", width/2, height - 100);
    default:
      break;
  }
}

function checkTransition(whichScene) {
  switch (whichScene) {
    case sceneStates.ABOUT:
      if (keyOn) {
        currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneStates.TUTORIAL:
      
        if (keyOn) {
          currentState++;
          setUpScene(currentState);
        }
      
      break;
    case sceneStates.ONE:
      
        if (keyOn) {
          currentState++;
          setUpScene(currentState);
        }
      
      break;
    case sceneStates.TWO:
      
        if (keyOn) {
          currentState++;
          setUpScene(currentState);
        }
      
      break;
    case sceneStates.THREE:
        if (keyOn) {
            currentState++;
            setUpScene(currentState);
          }
      break;
    case sceneStates.END:
        if (keyOn) {
            currentState++;
            setUpScene(currentState);
          }
      break;

    default:
      break;
  }
}

function setUpScene(whichScene) {
  switch (whichScene) {
    case sceneStates.ABOUT:
      break;
    case sceneStates.TUTORIAL:
      //tutorialTimer = millis();
      break;
    case sceneStates.ONE:
      //gameTimer = millis();
      break;
    case sceneStates.TWO:
      break;
    case sceneStates.THREE:
      break;
    case sceneStates.END:
      break;
    default:
      break;
  }
}

function keyPressed() {
  keyOn = true;
}
