import { Ball } from "./modules/ball.js";
const ball = [];
function setup() {
    createCanvas(640, 480);
    strokeWeight(2);
    ball[0] = new Ball(30, 30, 30);
    ball[1] = new Ball(300, 100, 60, color("pink"));
    ball[2] = new Ball(500, 300, 90, color("green"), 1, 3);
}
function draw() {
    background("lightgray");
    if (!mouseIsPressed) {
        ball[0].move();
        ball[1].move();
        ball[2].move();
    }
    ball[0].draw();
    ball[1].draw();
    ball[2].draw();
}
window.draw = draw;
window.setup = setup;
//# sourceMappingURL=index.js.map