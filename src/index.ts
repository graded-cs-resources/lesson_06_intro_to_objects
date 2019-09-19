/*
 *  Before you read the code and start playing, run the code once! You have two options to do this:
 *
 * 1) Press `Cmd-Shift-B` and choose `Build and Serve`. it should build and launch a browser automatically!
 *  OR (NOT AND DO NOT DO BOTH)
 * 2) Press `Cmd-Shift-B` and choose `tsc watch`. Then press the 'Go Live' button.
 *
 * At any time after this, you should be able to press F5 to launch a special instance
 * of chrome that opens on the correct page and gives you some magic debugging power.
 * It's optional at first, but will come in handy later (or if you forget how to find the page!)
 *
 * Once it launches, explore the program. Try holding your mouse down on the screen!
 * Once you've explored the initial program you are ready to read and edit below.
 */

/* ------IMPORTING FILES ----------
 * Typescript, like many languages, allows us to *import* code from other files.
 */
import { Ball } from "./modules/ball.js";

/* ========== TASK 1 ==========
 * Hover over the word "Ball" above to learn about the Ball *class*. A class is a way to create
 * our own custom *data types*. We will explore the Ball class code in a while, but for now the hover
 * gives us our key information.
 */

/** Global array of Ball objects */
const ball: Ball[] = [];

function setup() {
  createCanvas(640, 480); // creates a drawing canvas 640 px wide and 480 tall.
  strokeWeight(2);

  /* ------------CREATING NEW OBJECTS FROM CLASSES--------------
 * The `new` keyword, used below, allows us to make different OBJECTS from an overall type.
 * Ball represents an overall type.
 *
 * Hover over the `new Ball` command to get some information about how to use it to make a new ball.
 */

  /* ball[0] starts centered at (30,30) and has a diameter of 30.
   * Since it does not include color or speed parameters, it has
   * the default color "red" and a random speed. */
  ball[0] = new Ball(30, 30, 30);

  /* ball[1] starts centered at (300,100) and has a diameter of 60.
   * It is pink, with random speed. */
  ball[1] = new Ball(300, 100, 60, color("pink"));

  /* ball[2] starts centered at (500,300) and has a diameter of 10.
   * It is green, and starts out moving right with speed 1 and down with speed 3. */
  ball[2] = new Ball(500, 300, 90, color("green"), 1, 3);

  /* =========== TASK 2 =================
 * Create a fourth ball in the array that starts at position (200,400), has a diameter and color of your choice
 * and a random speed (that is, don't give it a starting speed).
 * As you type, VS Code should help you figure out what each argument means - very helpful!
 */
}

function draw() {
  background("lightgray");

  /* ===========  TASK 3 ===========
   * Temporarily comment out the line above by adding a // in front of the line (or using
   * the keyboard shortcut CMD-/. Save, then look back at the code (which should reload - if not, try
   * building again). Describe what changes! Then put the comment back in.
   *
   *
   *
   *
   */

  /* =========== TASK 4 ===========
   * You created a fourth ball before. Change the patterns below to move and draw your fourth ball.
   * If you can, switch to using a loop to move them and draw them.
   */

  if (!mouseIsPressed) {
    // only move if the mouse is NOT pressed
    ball[0].move(); // moves the ball, based on its speed.
    ball[1].move();
    ball[2].move();
  }

  ball[0].draw(); // draw ball1
  ball[1].draw(); // draw ball2
  ball[2].draw(); // draw ball3
}

/* ===========  TASK 5 - Exploring Ball Objects =============
 * Before we examine the ball *class* and see how ball objects are created
 * let's explore them in a console environment. To do that, follow these steps:
 *
 * 1) Press F5 to open a debugger window. You may have to install the "Debugger for Chrome" extension if you haven't.
 * 2) A new Chrome will open to the page and VS Code will switch to the debug console. You are now in debugging mode!
 * 3) Hover your mouse over one of the lines in the draw loop command above,
 *    then move to the left of the line numbers. A little red dot should appear. Click the dot. This is called
 *    *setting a breakpoint* and it essentially tells the code to pause when it hits that line so you can explore.
 *    It should pause in the Chrome window almost immediately, since the draw() function is run over and over.
 * 4) Press the "continue" button (looks like blue Play button) in the Debug toolbar near the top of your screen.
 *    Each time you click it the code will continue, but then pause again when it hits your breakpoint.
 * 5) You can now hover over the word `ball` and `ball3` and get information about the
 *    ACTUAL CURRENT STATE of the balls.
 * 6) Type `ball[0].x` in the debug console. What do you get?
 *
 *
 * 7) Type `ball[3].col` in the debug console. What do you get?
 *
 *
 * 8) Go back to the line above and remove the break point, then continue the code with the blue play button.
 *
 * Now that you see how to create new Ball objects and make them move (add a fifth ball if you want!)
 * You should be ready to look at the code used to CREATE the ball objects.
 * Open the ball.ts file from the "modules" directory and read through it and complete those tasks.
 * You will need to return this file for a couple of changes - do that when told.
 */

/*
 *
 *
 *  ================IGNORE BELOW ================
 * This code makes it so the setup and draw functions are available
 *  globally. This is a rare thing to do in TypeScript programs, but because
 *  of the way p5js works here it is necessary. You can ignore it.
 *
 *
 */
window.draw = draw;
window.setup = setup;
