let apiKey = '859dd915fbeed6d12c75e1ad595bf2ae';
let city = 'new york';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
let temp;
var ps = null;
var particle_texture = null;
//const request = require('request');
/*request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
    let weather = JSON.parse(body);
    temp = weather.main.temp;
    wea = weather.weather[0].main;
    cloudp = weather.clouds.all; //val that change the intensity of clouds 
    winddeg = weather.wind.deg;
    windspeed = weather.wind.speed;
    let message = `It's ${weather.weather[0].description} and ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
    console.log(temp, wea, cloudp, winddeg, windspeed);   
  }
});*/

function setup() {
  createCanvas(1000,1000);
  ps = new ParticleSystem(0,createVector(width / 2, height - 60));
  
  /*= new Flock();
  // Add an initial set of boids into the system
  for (var i = 0; i < 100; i++) {
    var b = new Boid(width/2,height/2,0,0,0);
    flock.addBoid(b);
  }*/
}


function draw() {
  background(0,100,255);
  //flock.run();
  var dx = 100;
  var wind = createVector(dx,0);

  ps.applyForce(wind);
  ps.run();
  for (var i = 0; i < 2; i++) {
    ps.addParticle();
  }

    // Draw an arrow representing the wind force
  drawVector(wind, createVector(width/2,50,0),500);
}
function drawVector(v,loc,scale){
    push();
    var arrowsize = 4;
    translate(loc.x,loc.y);
    stroke(255);
    rotate(v.heading());

    var len = v.mag() * scale;
    line(0,0,len,0);
    line(len,0,len-arrowsize,+arrowsize/2);
    line(len,0,len-arrowsize,-arrowsize/2);
    pop();
}

var ParticleSystem = function(num,v) {

    this.particles = [];
    this.origin = v.copy(); // we make sure to copy the vector value in case we accidentally mutate the original by accident
    for(var i = 0; i < num; ++i){
        this.particles.push(new Particle(this.origin));
    }
};

ParticleSystem.prototype.run = function() {

    // cache length of the array we're going to loop into a variable
    // You may see <variable>.length in a for loop, from time to time but
    // we cache it here because otherwise the length is re-calculated for each iteration of a loop
    var len = this.particles.length;

    //loop through and run particles
    for (var i = len - 1; i >= 0; i--) {
        var particle = this.particles[i];
        particle.run();

        // if the particle is dead, we remove it.
        // javascript arrays don't have a "remove" function but "splice" works just as well.
        // we feed it an index to start at, then how many numbers from that point to remove.
        if (particle.isDead()) {
            this.particles.splice(i,1);
        }
    }
}
ParticleSystem.prototype.applyForce = function(dir) {
    var len = this.particles.length;
    for(var i = 0; i < len; ++i){
        this.particles[i].applyForce(dir);
    }
}
ParticleSystem.prototype.addParticle = function() {
    this.particles.push(new Particle(this.origin,this.img));
}


var Particle = function (pos) {
    this.loc = pos.copy();

    var vx = randomGaussian() * 0.3;
    var vy = randomGaussian() * 0.3 - 1.0;

    this.vel = createVector(vx,vy);
    this.acc = createVector();
    this.lifespan = 100.0;
    
}

Particle.prototype.run = function() {
    this.update();
    this.render();
}

/**
 *  A function to display a particle
 */
Particle.prototype.render = function() {
    //imageMode(CENTER);
    tint(255,this.lifespan);
    //image(this.texture,this.loc.x,this.loc.y);
}

/**
 *  A method to apply a force vector to a particle.
 */
Particle.prototype.applyForce = function(f) {
    this.acc.add(f);
}

/**
 *  This method checks to see if the particle has reached the end of it's lifespan,
 *  if it has, return true, otherwise return false.
 */
Particle.prototype.isDead = function () {
    if (this.lifespan <= 0.0) {
        return true;
    } else {
        return false;
    }
}
Particle.prototype.update = function() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.lifespan -= 2.5;
    this.acc.mult(0);
}
