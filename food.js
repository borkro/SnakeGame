class Food {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
	}

	show() {
		fill(80, 235, 0);
		rect(this.x, this.y, this.size, this.size);
	}
}