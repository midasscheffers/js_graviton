// vars
var Xsize = innerWidth - 20;
var Ysize = innerHeight - 20;
var aantal_ballen;
var Xpos;
var Ypos;
var x_speed;
var y_speed;
var radius;
var ball;
var ballen = [];

// setup
function setup() {
  createCanvas(Xsize, Ysize);
  background(0,0,25);

  ball = new Ball(60,60,0,0,25);

  ballen.push(ball);
/*  for(i = 0; i < aantal_ballen; i++){
    bal = new Ball();
    ballen.push(bal);
  }
  */
}

// draw loop
function draw() {

  background(0,0,25,50);

  for (var i = 0; i < ballen.length; i++){
    console.log("runloop");
    ball = ballen[i];
    ball.teken();
  }
}

function Ball(x, y, x_sp, y_sp, size){
  this.Xpos = x;
  this.Ypos = y;
  this.x_speed = x_sp;
  this.y_speed = y_sp;
  this.radius = size;
  console.log("deze functie is aangemaakt");

  this.teken = function(){
    console.log("teken");
    noStroke();
    fill(250, 250, 250);
    ellipse(this.Xpos, this.Ypos, this.radius);
  }
}
