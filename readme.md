<!-- Pseudo Code -->

+create function call init() /to set the initial condition and set up dat, variable and objects/

+targing the grid using query selector saving to a variable call grid

define a function to set up the widht,height and cellcount
cell will be with an empty array

we start creating a grid through a loop to specifing numbers of cell 


creating new div using document.create element(div)

assign an id to each cell with cell.id = i

adding new cell to a grid element with grid.appendchild(cell)

then store the each cells array with cells.push(cell)

we have to mark /add grids cells as par of the snake with 

..SnakePosition.forEach((index) => cells[i].classList.add(..))


define a variable call apple . same for the snake 
 
const appleclass = apple
let....position= -1 / position of the apple

add a random place for the apple

classList.remove/removing the old position of the apple

Math.floor(Math.random()) / random position
lassList.add / adding a new position for the apple


add class call snake
function speed, direction 
define with cell will be the snake [0,1,2]
=index in an array
push 3

unshift = 0
moving the snake 
defining a function to move 
and remove the previous class list like[0] - 1
 
 makin and if and else statement for the direction restart the game true or false 

 and specifing the tal will pop = remove -2
 unshift= add 1 more elemnt in the begging of the array(snake) -3
 and return in 
(adding the class back to the new position) -4
dectectine to hit the wall or eating the food -5
defining a new position if you lose and restarting the game

creating an event for the changing direction  (event)



set the time out
interval
to keep the cell moving
