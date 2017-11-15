// vars
var Xsize = innerWidth - 20;
var Ysize = innerHeight - 20;
var aantal_ballen = 15;
var Xpos;
var Ypos;
var x_speed;
var y_speed;
var radius;
var colr;
var ball;
var ballen = [];

// setup
function setup() {
  createCanvas(Xsize, Ysize);
  background(0,0,25);
  // cal ball functions
  for(var i = 0; i < aantal_ballen; i++){
    ball = new Ball(random(60, Xsize - 60), random(60, Ysize - 60), random(-8, 7)+1, random(-8, 7)+1, random(20, 50), [random(0, 255), random(0, 255), random(0, 255)]);
    ballen.push(ball);
  }
}

// draw loop
function draw() {

  background(0,0,25,50);

  for (var i = 0; i < ballen.length; i++){
    ball = ballen[i];
    ball.teken();
    ball.move();
  }
}

function Ball(x, y, x_sp, y_sp, size, col){
  this.Xpos = x;
  this.Ypos = y;
  this.x_speed = x_sp;
  this.y_speed = y_sp;
  this.radius = size;
  this.colr = col;

  this.teken = function(){
    noStroke();
    fill(this.colr);
    ellipse(this.Xpos, this.Ypos, this.radius);
  }

  this.move = function(){
    if(this.Xpos > Xsize || this.Xpos < 0){
      this.x_speed = -this.x_speed;
    }
    else if(this.Ypos > Ysize || this.Ypos < 0){
      this.y_speed = -this.y_speed;
    }
    this.Xpos = this.Xpos + this.x_speed;
    this.Ypos = this.Ypos + this.y_speed;
  }

}
