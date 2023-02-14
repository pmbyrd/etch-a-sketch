// create an array of colors for the user to pick from of 24 crayola colors objects
let colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "brown",
  "black",
  "white",
  "gray",
  "pink",
  "violet",
  "indigo",
  "teal",
  "aqua",
  "lime",
  "maroon",
  "navy",
  "olive",
  "silver",
  "gold",
  "magenta",
  "fuchsia",
  "crimson",
];

// Todo display colors for the user to pick from
// Todo create color
function makeDiv(colors) {
  $(".colors").empty();
  for (let i = 0; i < colors.length; i++) {
    let $color = $("<div>")
      .addClass("color")
    //   set the text
        .text(colors[i])
      .css("background-color", colors[i]);
    $(".colors").append($color);
  }
  $(".colors").show();
}

makeDiv(colors);

console.log("hello world");
// Todo get user input func (prompt)
// the user will input the number of squares and that creates a board
$("button").on("click", function () {
  let x = getUserInput();
  makeGrid(x, x);
  displayGrid(x, x);
});
// create a grix where x length is equal to y length
let x = 16;
let y = 16;
let grid = [];
let $EAS = $(".etch-a-sketch");
makeGrid(x, y);
displayGrid(x, y);

function makeGrid() {
  for (let i = 0; i < x; i++) {
    grid.push([]);
    for (let j = 0; j < y; j++) {
      grid[i].push(0);
    }
  }
}

function createSquare() {
  let $square = $("<div>")
    .addClass("square")
    .css("width", 100 / x + "%")
    .css("height", 100 / y + "%");
  $EAS.append($square);
  $square.on("mouseenter", changeColor);
  return $square;
}

function displayGrid(x, y) {
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      createSquare();
      console.log("square created");
    }
  }
}

// Todo get user input
function getUserInput() {
  x = prompt("How many squares wide?");
  x = parseInt(x);
  return x;
}
// Todo add event listener to each square
// Todo make a function to change color on hover
function changeColor() {
  if ($(this).hasClass("square")) {
    // make the css change to black when hovered over but must hover for 800ms
    // $(this).css("background-color", "black");
    // add a time to change color
  }
}

// *first try with the hover
// Todo change color of square when clicked
