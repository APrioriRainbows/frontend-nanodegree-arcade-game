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
	if (this.x > 505){this.x -= (this.x%505 + 505)}
    }
}
class Player extends Sprite {
    constructor(x,y){
	super(x,y,'images/char-cat-girl.png');
    }
    handleInput(input){
	if(input=='up'){this.y -= this.tileVertical-20;console.log(this.y)}
	else if(input=='down'){this.y += this.tileVertical-20;console.log(this.y)}
	else if(input=='left'){this.x -= this.tileHorizontal+20;console.log(this.x)}
	else if(input=='right'){this.x += this.tileHorizontal+20;console.log(this.x)}
	if(this.y > this.tileVertical*4){this.y = 377;console.log(this.y)};
	if(this.y < 53){
	    this.y = 377;alert('game over')//TODO: replace with game over func
	};
	if(this.x > 404){this.x = 404;console.log(this.x)};
	if(this.x < 0){this.x = 0;console.log(this.x)};
    }
    update(){
	//check collisions
	for(let enemy of allEnemies){
	    if ((this.y === enemy.y) &&
		(enemy.x + enemy.tileHorizontal >= this.x) && (enemy.x - this.tileHorizontal <= this.x))
	    {[player.x,player.y]=[202,377]};
	
//	    if (enemy.x >300){console.log(enemy.x,this.x)};
	}
    }
    
}


var allEnemies = [
    new Enemy(-101,215,101),
    new Enemy(-101,134,202),
    new Enemy(-101,53,303),
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
