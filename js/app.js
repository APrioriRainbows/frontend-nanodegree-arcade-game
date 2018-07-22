class Sprite {
    constructor(x,y,sprite){
	this.x = x;
	this.y = y;
	this.sprite = sprite;
	this.tileVertical = 101;
	this.tileHorizontal = 83;
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for all computers.
    update(dt){
    }

    // Draw the enemy on the screen, required method for game
    render(){
//	ctx.fillStyle = "black";
//	ctx.fillRect(this.x,this.y,this.w,this.h)
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class Enemy extends Sprite {
    constructor(x,y,speed){
	super(x,y,'images/enemy-bug.png');
	this.speed = speed;
    }
    update(dt) {
	this.x += this.speed*dt;
	if (this.x > 505){this.x -= 505}
    }
}
class Player extends Sprite {
    constructor(x,y){
	super(x,y,'images/char-cat-girl.png');
    }
    handleInput(){
	if(event.keyCode === 38){this.y -= this.tileVertical-20;console.log(this.y)}
	else if(event.keyCode === 40){this.y += this.tileVertical-20;console.log(this.y)}
	else if(event.keyCode === 37){this.x -= this.tileHorizontal+20;console.log(this.x)}
	else if(event.keyCode === 39){this.x += this.tileHorizontal+20;console.log(this.x)}
	if(this.y > this.tileVertical*4){this.y = 377;console.log(this.y)};
	if(this.y < this.tileVertical/2){
	    this.y = this.tileVertical/2;alert('game over')//TODO: replace with game over func
	};
	if(this.x > 404){this.x = 404;console.log(this.x)};
	if(this.x < 0){this.x = 0;console.log(this.x)};
    }
    
}

var allEnemies = [
    new Enemy(101,217,101),
    new Enemy(0,137,202),
    new Enemy(202,57,303),
    new Enemy(404,57,303)
]
const player = new Player(202,377);


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
