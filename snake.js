class Snake {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.tail = [];
		this.direction = [0, 0];
	}

	eat(food) {
		if (this.x === food.x && this.y === food.y) {
			let tail = createVector(this.tail[this.tail.length - 1].x, this.tail[this.tail.length - 1].y);
			this.tail.push(tail);
			return true;
		}
		return false;
	}

	show() {
		this.x += this.direction[0];
		this.y += this.direction[1];
		this.tail[0] = createVector(this.x, this.y);
		fill(255);
		for (let i = 0; i < this.tail.length; i++) {
			rect(this.tail[i].x, this.tail[i].y, this.size, this.size);
		}
		for (let i = this.tail.length - 1; i > 0; i--) {
			this.tail[i] = createVector(this.tail[i - 1].x, this.tail[i - 1].y);
		}
	}

	death(x, y) {
		this.x = x;
		this.y = y;
		this.tail = [];
		this.direction = [0, 0];
	}

	check() {
		for (let i = 2; i < this.tail.length; i++) {
			if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
				this.death();
			}
		}
	}

	inTail(x, y) {
		for (let i = 0; i < this.tail.length; i++) {
			if (x === this.tail[i].x && y === this.tail[i].y) {
				return true;
			}
		}
		return false;
	}
}