var gameWidth = 5; // width of the game canvas
var gameHeight = 6; // height of the game canvas

// Set x position
function enemyInitialX(direction) { 
    if(direction == 1) {
        // Set initial x in the range of -3 and -1
        return Math.round(-1 - 2 * Math.random()); 
    } else {
        // Set initial x in the range of 5 and 7
        return Math.round(5 + 2 * Math.random()); 
    }
}

// Set y position in the range of row 1 and 3
function enemyInitialY() {
    return Math.round((2 * Math.random() + 1));
} 

// Set speed in the range of 2 and 5
function randomSpeed() {
    return Math.random() * 3 + 2;
} 

// Set direction to 1 or -1
function randomDirection() {
    return Math.round(Math.random()) * 2 - 1;
} 

/* Define Enemies class
 * This class requires a render() and a handleInput() method.
 */
var Enemy = function() {
    // Set the enemy direction to be random
    this.direction = randomDirection(); 
    // Set the initial x of the enemy
    this.x = enemyInitialX(this.direction); 
    // Set the initial y of the enemy
    this.y = enemyInitialY(); 
    // Set the initial speed
    this.speed = randomSpeed() * this.direction; 
    // The image/sprite for enemy
    this.sprite = 'images/Bug.png'; 
};

/* Update the enemy's position, required method for game
 * Parameter: dt, a time delta between ticks
 */
Enemy.prototype.update = function(dt) {
    // If game isn't paused, update enemies position. 
    if(!game.pause) {       
        /* Multiply any movement by the dt parameter which will ensure 
         * the game runs at the same speed for all computers.
         */
        this.x = this.x + this.speed * dt; 
        
        // If any enemy is moving out of the game canvas, reset its direction, x, y and speed.
        if ((this.x >= 5 && this.direction == 1) || (this.x <= -4 && this.direction == -1)) { 
            this.direction = randomDirection(); 
            this.x = enemyInitialX(this.direction); 
            this.y = enemyInitialY(); 
            this.speed = randomSpeed() * this.direction; 
        }
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 84 - 25); //scaling the grid to the graphics
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
