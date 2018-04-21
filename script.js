let COLS = 19;
let ROWS = 19;
let CELL = 40;
let snake;
let food;
let score = 0;
let direction = [0, 0];
let scoreDisplay;

function setup() {
	createCanvas(COLS * CELL, ROWS * CELL);
	frameRate(10);
	snake = new Snake(floor(ROWS / 2) * CELL, floor(COLS / 2) * CELL, CELL);
	food = new Food(floor(random() * ROWS) * CELL, floor(random() * COLS) * CELL, CELL);
	scoreDisplay = createElement('h1', `SCORE : ${score}`);
	scoreDisplay.position(width / 2 - 96, height);
	scoreDisplay.style('font-family', 'monospace');
	scoreDisplay.style('font-size', '3em');
}

function draw() {
	background(0);
	stroke(120);
	fill(0);
	snake.direction = direction;
	for (let i = 0; i < COLS; i++) {
		for (let j = 0; j < ROWS; j++) {
			rect(i * CELL, j * CELL, CELL, CELL);
		}
	}
	if (snake.x < 0 || snake.x === width || snake.y < 0 || snake.y === height) {
		removeElements();
		snake.death(floor(ROWS / 2) * CELL, floor(COLS / 2) * CELL);
		direction = [0, 0];
		console.log(score);
		score = 0;
		scoreDisplay = createElement('h1', `SCORE : ${score}`);
		scoreDisplay.position(width / 2 - 96, height);
		scoreDisplay.style('font-family', 'monospace');
		scoreDisplay.style('font-size', '3em');
	}
	snake.check();
	if (snake.eat(food)) {
		removeElements();
		while (snake.inTail(food.x, food.y)) {
			food = new Food(floor(random() * COLS) * CELL, floor(random() * ROWS) * CELL, CELL);
		}
		score++;
		scoreDisplay = createElement('h1', `SCORE : ${score}`);
		scoreDisplay.position(width / 2 - 96, height);
		scoreDisplay.style('font-family', 'monospace');
		scoreDisplay.style('font-size', '3em');
	}
	food.show();
	snake.show();
}

function keyPressed() {
	if (keyCode === LEFT_ARROW && snake.direction[0] !== CELL) {
		direction = [-CELL, 0];
	} else if (keyCode === RIGHT_ARROW && snake.direction[0] !== -CELL) {
		direction = [CELL, 0];
	} else if (keyCode === UP_ARROW && snake.direction[1] !== CELL) {
		direction = [0, -CELL];
	} else if (keyCode === DOWN_ARROW && snake.direction[1] !== -CELL) {
		direction = [0, CELL];
	}
}