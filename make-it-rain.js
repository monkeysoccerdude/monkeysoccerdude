new p5();

function setup() {
  createCanvas(400, 400);
}

var xPositions = [200];
var yPositions = [0];
var colors = [color(191, 69, 191),
color(0, 250, 108),
color(255, 230, 0),
color(255, 0, 0),
color(255, 255, 0)];
var speeds = [12, 3, 4, 6];

var drawEllipse = function (f) {
  return function (x, y) {
    f(x, y, 10, 10);
  };
};

var drawDragon = function (rect) {
  return function (x, y) {
    rect(x, y, 10, 10);
  };
};

var shapes = [drawEllipse(ellipse), drawDragon(rect)];

draw = function () {
  background(204, 247, 255);

  noStroke();
  fill(0, 213, 255);

  for (var i = 0; i < xPositions.length; i++) {
    fill(colors[i % colors.length]);
    shapes[i % shapes.length](xPositions[i], yPositions[i], 10, 10);
    //ellipse(xPositions[i], yPositions[i], 10, 10);
    yPositions[i] += speeds[i % speeds.length];
    if (yPositions[i] > 400) {
      yPositions[i] = 0;
    }
  }
  // this defines a function called "drawWinston"
};


mouseClicked = function () {

  xPositions.push(mouseX);
  yPositions.push(mouseY);
};