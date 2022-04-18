let x = 40
let x2 =40
let returning = false 
function setup() {
  createCanvas(400, 400);
}
function boundCheck(localX,localReturning) {
    if (localX > 360 && localReturning == false) {
    return true
  } else if (localX < 0 && localReturning == true) {
   return false
  
  }
}
function draw() {
    background(220);

    if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  first = ellipse(x,mouseY,80,80); 
  returning1 = boundCheck(x,returning)

  if (returning) {
    x = x -1
  } else {
    x = x +1
  }
  
  
  second = ellipse(x2,40,80,80)
  x2=x*0.5
  
  
  
}