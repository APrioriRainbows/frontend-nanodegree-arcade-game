class Sprite {
    constructor(x,y,sprite){
	this.x = x;
	this.y = y;
	this.sprite = sprite;
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for all computers.
    update(dt){
    }

    handleInput(){
	if(event.keyCode === 38){this.y -= 80;console.log(this.y)}
	else if(event.keyCode === 40){this.y += 80;console.log(this.y)}
	else if(event.keyCode === 37){this.x -= 101;console.log(this.x)}
	else if(event.keyCode === 39){this.x += 101;console.log(this.x)}
	if(this.y > 377){this.y = 377;console.log(this.y)};
	if(this.y < 57){this.y = 57;alert('game over')};
	if(this.x > 404){this.x = 404;console.log(this.x)};
	if(this.x < 0){this.x = 0;console.log(this.x)};
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
	super(x,y,'images/enemy-bug.png');
    }
    update(dt) {
	this.x += 101*dt;
	if (this.x > 505){this.x -= 606}
    }
}
class Player extends Sprite {
    constructor(x,y){
	super(x,y,'images/char-cat-girl.png');
    }
}

var allEnemies = [
    new Enemy(101,217),
    new Enemy(0,137),
    new Enemy(202,57),
    new Enemy(404,57)
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
