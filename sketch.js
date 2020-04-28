let xPos = 30; //declare & initialize xPos variable at half the diameter of our ellipse
let goingRight = true; //boolean variable to determine direction of square

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(125);
  square(xPos,60,60,10); //draw square 
  if (xPos < width - 20 && goingRight == true){
  // xPos++;
    xPos += 10; //add ten to x position if the square is on screen and direction is set to going right
  }
  else if(xPos == width-20){
    //if square has reached the right side of the screen, toggle direction boolean variable
    console.log("time to switch");
    goingRight = false;
  }
  
  //if square is still on screen and direction is going left, subtract ten from x position
  if (xPos > 10 && goingRight == false){
    //if (xPos > 10 && !goingRight) //another way to write that condition
    // xPos--;
    xPos -= 10;
}
  //if square has reached the left side of the screen, toggle direction variable
  else if(xPos == 10){
    goingRight = true;
  }
}