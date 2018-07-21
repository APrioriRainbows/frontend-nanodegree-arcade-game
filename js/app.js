class Sprite {
    constructor(x,y,sprite){
	this.x = x;
	this.y = y;
	this.sprite = sprite;
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt){
    }
    handleInput(){
	if(event.keyCode === 38){this.y -= 80;console.log(this.y)}
	else if(event.keyCode === 40){this.y += 80;console.log(this.y)}
	if(this.y > 377){this.y = 377;console.log(this.y)};
	if(this.y < 0){this.y = 57;alert('game over')};
    }
    // Draw the enemy on the screen, required method for game
    render(){
	//ctx.fillStyle = "black";
	//ctx.fillRect(this.x,this.y,this.w,this.h)
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class Enemy extends Sprite {
    constructor(x,y){
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
	super(x,y,'images/enemy-bug.png');
    }
}
class Player extends Sprite {
    constructor(x,y){
	super(x,y,'images/char-cat-girl.png');
    }
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [
    new Enemy(1,50),
    new Enemy(1,130),
    new Enemy(1,225),
]
var player = new Player(202,377);


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
