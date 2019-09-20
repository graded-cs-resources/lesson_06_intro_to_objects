export class Ball {
    constructor(x, y, size, col = color("red"), speedX = Math.random() * 10 - 5, speedY = Math.random() * 10 - 5) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.col = col;
        this.speedX = speedX;
        this.speedY = speedY;
    }
    move() {
        this.y = this.y + this.speedY;
        this.x = this.x + this.speedX;
        if (this.onXEdge()) {
            this.speedX = -this.speedX;
        }
        if (this.onYEdge()) {
            this.speedY = -this.speedY;
        }
    }
    draw() {
        stroke(0);
        fill(this.col);
        if (this.onXEdge() || this.onYEdge()) {
            fill("white");
        }
        ellipse(this.x, this.y, this.size);
    }
    onYEdge() {
        if (this.y <= this.size / 2 || this.y >= height - this.size / 2) {
            return true;
        }
        else {
            return false;
        }
    }
    onXEdge() {
        if (this.x <= this.size / 2 || this.x >= width - this.size / 2) {
            return true;
        }
        else {
            return false;
        }
    }
}
//# sourceMappingURL=ball.js.map