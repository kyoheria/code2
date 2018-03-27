var weather;
let temp;
let wea;
let cloudp;
let winddeg;
let windspeed;
var wind;
var position;
var c;
var r;
var b;

function preload() {
  // Get the most recent earthquake in the database
let apiKey = '859dd915fbeed6d12c75e1ad595bf2ae';
let city = 'new york';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  weather = loadJSON(url);
}

function setup() {
  createCanvas(710, 400, WEBGL);
  position = createVector(0,0);
  wind = createVector();
  temp = parseInt(weather.main.temp);
  // = map(temp, 0,255,-40,100);
  //b = map(temp, 0,255,-40,100);
  //c = (r,b,0);
  wea = weather.weather[0].main;
  cloudp = weather.clouds.all; //val that change the intensity of clouds 
  winddeg = weather.wind.deg;
  windspeed = weather.wind.speed;
  let message = `It's ${weather.weather[0].main} and ${weather.main.temp} degrees in ${weather.name}!`;
  console.log(message);
  console.log(windspeed);
  
  background(0,0,255);
}

function draw() {

  background(0,0,255);
  position.x += windspeed;
  position.y -= windspeed;
  push();
  translate(position.x,position.y);
  // position.x += windspeed;
  // position.y -= windspeed;
  
  noStroke();
  fill(100);
  sphere(6);
  pop();
  if (position.x > width)  position.x = 0;
  if (position.x < 0)      position.x = width;
  if (position.y > height) position.y = 0;
  if (position.y < 0)      position.y = height;

 
}

