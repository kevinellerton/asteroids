// THIS IS YOUR JAVASCRIPT DOCUMENT!


// MOVEMENT CONTROLS FOR SHIP

// declare & initialize movement variables
var xPosition = 100;
var yPosition = 100;
var xSpeed = 1;
var ySpeed = 0;
var maxSpeed = 5;

// declare & initialize controller variables
var upPressed = 0;
var downPressed = 0;
var leftPressed = 0;
var rightPressed = 0;


function keyDown(playerKeyPress)
{
  var keyPressed = playerKeyPress.which;
  if (keyPressed == 38)
    upPressed = 1;
  if (keyPressed == 40)
    downPressed = 1;
  if (keyPressed == 37)
    leftPressed = 1;
  if (keyPressed == 39)
    rightPressed = 1;
}

function keyUp(playerKeyPress)
{
  var keyPressed = playerKeyPress.which;
  if (keyPressed == 38)
    upPressed = 0;
  if (keyPressed == 40)
    downPressed = 0;
  if (keyPressed == 37)
    leftPressed = 0;
  if (keyPressed == 39)
    rightPressed = 0;
}

function slowDownX()
{
  if (xSpeed > 0)
    xSpeed = xSpeed - 1;
  if (xSpeed < 0)
    xSpeed = xSpeed + 1;
}

function slowDownY()
{
  if (ySpeed > 0)
    ySpeed = ySpeed - 1;
  if (ySpeed < 0)
    ySpeed = ySpeed + 1;
}

function gameLoop()
{

  // new position
  xPosition = xPosition + xSpeed;
  yPosition = yPosition + ySpeed;

  // actually change on-screen position by adjusting CSS
  document.getElementById('ship').style.left = xPosition;
  document.getElementById('ship').style.top = yPosition;

  // change speed when user presses keys
  if (upPressed == 1)
    ySpeed = Math.max(ySpeed - 1,-1*maxSpeed);
  if (downPressed == 1)
    ySpeed = Math.min(ySpeed + 1,1*maxSpeed)
  if (rightPressed == 1)
    xSpeed = Math.min(xSpeed + 1,1*maxSpeed);
  if (leftPressed == 1)
    xSpeed = Math.max(xSpeed - 1,-1*maxSpeed);

  // deceleration
  if (upPressed == 0 && downPressed == 0)
     slowDownY();
  if (leftPressed == 0 && rightPressed == 0)
     slowDownX();

  // loop
  setTimeout("gameLoop()",10);
}




// GENERATE NEW ASTEROIDS

for (var i = 0; i < 5; i++) {

  var asteroid = new Image();
  asteroid.id = "asteroid" + i.toString();
  asteroid.src = "asteroid.png";
  asteroid.style.height = "20%";
  asteroid.style.position = "absolute";
  asteroid.style.top = (i*100);
  asteroid.style.right = -100;
  var asteroidPosition = asteroid.style.right;
  var asteroidID = asteroid.id;

  document.body.appendChild(asteroid);

}

var i = 0;                     //  set your counter to 0
function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called

     var currentAsteroid = ("asteroid" + i.toString());
     var startingPosition = -100;
     asteroidMovementLoop(currentAsteroid, startingPosition);

      i++;                     //  increment the counter
      if (i < 5) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another
      }                        //  ..  setTimeout()
   }, 3000)
}

myLoop();                      //  start the loop




function asteroidMovementLoop(currentAsteroid, currentPosition)
{

  // new position
  var newAsteroidPosition = currentPosition + 1;

  // actually change on-screen position by adjusting CSS
  document.getElementById(currentAsteroid).style.right = newAsteroidPosition;

  // loop
  setTimeout(function(){
    asteroidMovementLoop(currentAsteroid, newAsteroidPosition)
  },10);
}



/*

// COLLISIONS & DAMAGE TO SHIP

var shipHealth = 100;
var asteroid01_damage = 6;

var collision = true;

if (collision) {
  shipHealth = (shipHealth - asteroid01_damage);
}

is this code necessary? --> var code = fvi.keyCode ? fvi.keyCode : fvi.which;

*/
