//elemnt
const grid = document.querySelector(".grid")
const scoreDisplay = document.getElementById('score')
const startBtn = document.getElementById('start-btn')
const resetBtn = document.getElementById('reset-btn')

// constants
const width = 20
const height = 20
const totalSquareCount = width * height

const squareEls = []  //this will contain all of the divs representing square on our grid 

// grid creation
  for (let i = 0; i < totalSquareCount; i++){
    const square = document.createElement('div')
    // square.innerText = i //numbers to get rid
    square.classList.add('sqr')
    square.id = i
    squareEls.push(square)
    grid.appendChild(square)
   }

// Apple variables
const appleClass = 'apple'
let applePosition = -1

//function add apple to the grid
function addApple(){
    
  if ( applePosition !== -1){
    squareEls[applePosition].classList.remove(appleClass) //removing apple from the grid
  }
  
  applePosition = Math.floor(Math.random() * squareEls.length)// adding random position 

  squareEls[applePosition].classList.add(appleClass) // adding a new position
}


//snake variable
const snakeClass = 'snake'
let snake = [2,1,0]
let direction = 1

//Interval for the snake move
let score = 0
let snakeSpeed = 500
let snakeInterval
let gameActive = false //trackinh the game

//placing and removing snake on the screen
const addSnake = () => {
  snake.forEach(index => squareEls[index].classList.add(snakeClass))
}

const removeSnake = () => {
  snake.forEach(index => squareEls[index].classList.remove(snakeClass))
}
// placing apple 
snake.forEach((index) => squareEls[index].classList.add(snakeClass))
addApple() 

removeApple = () => {
  if (applePosition !== -1) {
    squareEls[applePosition].classList.remove(appleClass); // Remove apple from position
    applePosition = -1; // Reset apple position
  }
}

//Move Snake
function moveSnake(){
  // console.log(snake)
  const head = snake[0]
  const tail = snake.pop()
  let newHead = head + direction //calculating the new head 

if (
 (direction === 1 && head % width === width - 1) ||  // Hit right border  ()
 (direction === -1 && head % width === 0) ||         // Hit left border
 (direction === width && head + width >= totalSquareCount) ||  // Hit bottom border
 (direction === -width && head - width < 0)          // Hit top border
) {
 clearInterval(snakeInterval)//stop the snake movement 
 window.alert("Game Over!")
 window.location.reload
 resetGame()
 return//stop the game
}

if (snake.includes(newHead)) {
  clearInterval(snakeInterval)
  window.alert("Game Over")
  window.location.reload
  return
}

snake.unshift(newHead);  // Adding new head 
squareEls[newHead].classList.add(snakeClass);  // Adding the new head to the grid
squareEls[tail].classList.remove(snakeClass);  // Removing the tail from the grid

// if snake eats the apple
if (newHead === applePosition) {
  squareEls[tail].classList.add(snakeClass) // Add the tail back, growing the snake
  snake.push(tail)  // Adding tail to grow
  addApple()
  speedUp()
  increaseScore()
  }
}

// Speed Up the Snake After Eating an Apple
function speedUp() {
  clearInterval(snakeInterval);
  snakeSpeed *= 0.9; // multiplying and Increase speed by 10%
  snakeInterval = setInterval(moveSnake, snakeSpeed);
}

//change snake Direction 
function changeSnakeDirection(event){
  const key = event.keyCode
  const left = -1
  const right = 1
  const up = -width
  const down = +width

  if (key === 37 && direction !== 1) {
    direction = -1; // Move left with the arrows -1 is representing moving left
} else if (key === 38 && direction !== width) {
    direction = -width; // Move up
} else if (key === 39 && direction !== -1) {
    direction = 1; // Move right
} else if (key === 40 && direction !== -width) {
    direction = width; // Move down
}
}

function startGame() {
  if (!gameActive) {
    addSnake()
    gameActive = true;
    snakeInterval = setInterval(moveSnake, snakeSpeed);
    addApple();
    startBtn.disabled = true;
    resetBtn.disabled = false;
    document.addEventListener('keydown', changeSnakeDirection);
  }
}

// Reset the Game
function resetGame() {
  clearInterval(snakeInterval);
  removeSnake();
  removeApple();
  snake = [2, 1, 0];
  direction = 1;
  snakeSpeed = 500;
  score = 0;
  updateScore();
  gameActive = false;
  startBtn.disabled = false;
  resetBtn.disabled = true;
}

// Increase Score
function increaseScore() {
  score += 10;
  updateScore();
}

// Update Score Display
function updateScore() {
  scoreDisplay.innerText = `Score: ${score}`;
}

// Add Snake and Initialize Game
addSnake();

// Event Listeners
startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);


//i need the text 