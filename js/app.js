//main sprite parent class
class Sprite {
    //takes 3 arguments, position x, position y, and the sprite image
    constructor(x,y,sprite){
	this.x = x;
	this.y = y;
	this.sprite = sprite;
	//fixed width and height of game tiles
	this.tileH = 101;
	this.tileW = 83;
    }
    
    // Draw the enemy on the screen, required method for game
    render(){
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

//enemy subclass
class Enemy extends Sprite {
    constructor(x,y,speed){
	super(x,y,'images/enemy-bug.png');
	this.speed = speed;
    }
    //update enemy positions
    // Parameter: dt, a time delta between ticks that will animate the enemies. Multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for all computers.
    update(dt) {
	this.x += this.speed*dt;
	//special check to move enemies back to their starting position. Fixes relative positions of enemies if user tabs away from game
	if (this.x > 505){this.x = (this.x%505 - this.tileW)}
    }
}

//hero or player subclass
class Player extends Sprite {
    constructor(x,y){
	super(x,y,'images/char-cat-girl.png');
    }
    handleInput(input){
	//take in the keypress event and then move the character in the correct position. Amounts are ammended to account for padding in the board
	if(input=='up'){this.y -= this.tileH-20}
	else if(input=='down'){this.y += this.tileH-20}
	else if(input=='left'){this.x -= this.tileW+20}
	else if(input=='right'){this.x += this.tileW+20}
	//check that player isn't moving outside board boundaries, adn then reset
	if(this.y > this.tileH*4){this.y = 377};
	if(this.x > 404){this.x = 404;};
	if(this.x < 0){this.x = 0;};
	//if player hits the water, show winning message and then reset player
	if(this.y < 53){gameOver('Hooray! You win!',resetPlayer)};
    }
    //player update function to check for collisions
    update(){
	//check collisions
	for(let enemy of allEnemies){
	    //if you're on the same line as an enemy...
	    if ((this.y === enemy.y) &&
		//and the area of the enemy overlaps with your area
		(enemy.x + enemy.tileW >= this.x) && (enemy.x - this.tileW <= this.x))
		//then show a message saying you died and reset the player position
	    {gameOver('Game over--you died!',resetPlayer)};
	
	}
    }
    
}

//allEnemies array
var allEnemies = [
    //create 3 enemies with varying speeds and start them off screen
    new Enemy(-101,215,101),
    new Enemy(-101,134,202),
    new Enemy(-101,53,303),
]

//instantiate player
const player = new Player(202,377);

//global function to reset player position
function resetPlayer(){
    [player.x,player.y]=[202,377];
}

//global function to reset game
function gameOver(message,callback){
    alert(message);
    callback();
}

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
