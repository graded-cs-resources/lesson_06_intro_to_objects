/**
 * The class Ball defines *Ball objects*. Ball objects have a size, position, speed, and color.
 */

// the word 'export' simply makes it available outside the file.
// the word `class` tells TypeScript we are defining a class of objects

export class Ball {
  /*   ------------ PROPERTIES --------
   * Every object can contain *properties* - variables associated with the object -
   * and *methods* - functions associated with the object. When you make a property,
   * you can declare it as *private* (only availble inside the class) or *public*
   * (available outside the class). The default in TypeScript is public.
   *
   * You access properties with the dot operator
   * so for example `ball1.x` access the property named `x` of the object `ball1`.
   * You can read more about them in
   * our Working with Objects notes on the textbook.
   *
   * I have put a comment that starts with /** before each property. This tells VS Code
   * that I want those descriptions to appear when I hover over the property name. Try it by
   * hovering over the x below!
   */

  /** x-position of the ball's center */
  public x: number;
  /** y-position of the ball's center */
  public y: number;
  /** ball's diameter in pixels */
  public size: number;
  /** color of the ball. Can be any acceptable color string. */
  public col: p5.Color; // default value
  /** speed in x direction of the ball. */
  public speedX: number;
  /** speed in y direction of the ball. positive is DOWN. */
  public speedY: number;

  /* ============ TASK 1 ============
   * Add a new public property of type string called 'borderColor'
   * Add a comment to document that it represents the color of the ball's border.
   */

  /* ------------ METHODS ------------------
   * Objects also have functions associated with them, called *methods*. Just like
   * properties, these are accessed using a dot. You can make them private or public as well.
   *
   * Every class has one SPECIAL public function called a *constructor*. This is the function
   * that is called when you use the `new` command. So `let ball1 = new Ball(30,30,30);` uses
   * the constructor function below to build the ball1 object.
   *
   * Because constructors often have many parameters, it is common to format them so there is
   * one parameter per line, with documentation, as seen below.
   *
   * It is extremely common for a constructor function to take arguments that let you set
   * various PROPERTIES of an object. That's what we do here. There are some shortcuts to make this
   * quicker we might see later, but this is the most readable way (and the closest to java).
   */

  /**
   * Construct a new ball
   * @param x initial x-value
   * @param y  initial y-value
   * @param size initial size
   * @param col OPTIONAL initial color. Default is red.
   * @param speedX OPTIONAL initial speed x-direction. Default is random.
   * @param speedY OPTIONAL initial speed y-direction. Default is random.
   */
  constructor(
    x: number,
    y: number,
    size: number,
    col: p5.Color = color("red"),
    speedX: number = Math.random() * 10 - 5,
    speedY: number = Math.random() * 10 - 5,
  ) {
    // We want to set the properties of the SPECIFIC OBJECT we are building. This is a common pattern.
    // the standalone `x` on the right side returns to the x from this function - the one called in.
    // `this.x` refers to the value of x we declared above - the PROPERTY - of this particular ball.
    this.x = x;
    this.y = y;
    this.size = size;
    this.col = col;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  /* ========= TASK 2 ==========
   * Edit the constructor function so that it has a new parameter (at the end), `borderColor`,
     with a default value of black and correctly updates the borderColor property
     of the ball object when it runs. Update the documentatino at the same time.
  */

  /** This method  below moves the ball. If the ball is on the edge, it reverses
   * the speed property so the ball will bounce.
   */
  public move(): void {
    // don't worry about the math here unless you want
    this.y = this.y + this.speedY;
    this.x = this.x + this.speedX;
    if (this.onXEdge()) {
      this.speedX = -this.speedX;
    }
    if (this.onYEdge()) {
      this.speedY = -this.speedY;
    }
  }

  /** Draws the ball in the proper place, in the proper color. */
  public draw(): void {
    stroke(0); // sets the border color to black
    fill(this.col); // sets the fill color to our ball's color
    if (this.onXEdge() || this.onYEdge()) {
      fill("white"); // make the ball flash if we hit the edge.
    }
    ellipse(this.x, this.y, this.size); // p5 command to draw a circle
  }

  /* ========= TASK 3 ===========
   * Edit the draw function above so that it sets the `stroke` to the `borderColor` property value,
   * instead of always using black.
   */

  /* ========= TASK 4 ============
   * Go back to sketch.ts and modify ball[2] (when it is made) so that its border color is purple.
   * Then look at the built website. Did it work?
   */

  /** This PRIVATE method determines if a ball is on the edge of the screen vertically.
   *  You do not need to understand it right now, other than that it returns a boolean.
   *  You CAN'T access this method outside of this class!
   */
  private onYEdge(): boolean {
    if (this.y <= this.size / 2 || this.y >= height - this.size / 2) {
      return true;
    } else {
      return false;
    }
  }
  /** Private. Determines if a ball is on the edge of the screen horizontally */
  private onXEdge(): boolean {
    if (this.x <= this.size / 2 || this.x >= width - this.size / 2) {
      return true;
    } else {
      return false;
    }
  }
}
