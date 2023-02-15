console.log("hello world");
let x = 16;
let y = 16;
let grid = [];
let $EAS = $(".etch-a-sketch");
let currentColor = "black";
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
  "darkgreen",
  "crimson",
];

makeDiv(colors);
makeGrid(x, y);
displayGrid(x, y);

$(".square").on("mouseover", function () {
    $(this).css("background-color", currentColor);
    updateColor();
});

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

function makeGrid() {
  for (let i = 0; i < x; i++) {
    grid.push([]);
    for (let j = 0; j < y; j++) {
      grid[i].push(0);
    }
  }

}
y
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
      console.log("square created");
    }
  }
}

// Todo get user input func (prompt)
function getNumberOfSquares() {
    x = parseInt(prompt("How many squares wide?"));
    y = x
    if (x > 0 && x <= 100) {
        $EAS.empty(); // clear the grid
        grid = []; // reset the grid
        makeGrid(x, y);
        // Set the container width to the same number of pixels as before (960px)
        displayGrid(x, y)

        $EAS.css("width", 960 + "px");
        $(".square").on("mouseover", function () {
            $(this).css("background-color", currentColor);
            updateColor();
          });
               
    } else {
        alert("Please enter a number between 1 and 100");
    }
}


function updateColor() {
  $(".color").on("click", function () {
    currentColor = $(this).text();
    console.log(currentColor);
  });
}
