console.log("hello world");
$("button").on("click", function () {
  console.log("button clicked");
//   let x = prompt("How many squares wide?");
// turn the string into a number

});

// create a grix where x length is equal to y length
let x;
let y;
let grid = [];
let $EAS = $(".etch-a-sketch");

function makeGrid(x, y) {
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
  return $square;
}

function displayGrid() {
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      createSquare();
    }
  }
}

// Todo get user input
// Todo create a grid based on user input
// Todo add event listener to each square
// *first try with the hover
// Todo change color of square when clicked