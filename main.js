// Selectors!
// box that holds the main sketch area
const sketchBox = document.querySelector("#sketchBox");
// this var contains all of the actual boxes in the sketchBox
const sketch = document.querySelectorAll(".sketch");
// range for resizing grid
const sketchRange = document.querySelector("#sketchRange");
// reset button
const resetBtn = document.querySelector("#resetBtn");
// toggle button
const toggleBtn = document.querySelector("#toggleBtn");

// eraser button
const eraserBtn = document.querySelector("#eraserBtn");
// this is the defalut color that is read by the various color funtions
let color = "rgb(5 5 87)";

let revertColor = color;

let eraserOn = false;

// Functions /////////////////////////////////////////////////

// function that lets you draw on each sketch and adds functionality to the reset button
let sketchColor = function (sketch) {
  sketch.addEventListener(
    "mouseover",
    () => (sketch.style.backgroundColor = `${color}`)
  );

  resetBtn.addEventListener("click", () => {
    sketch.style.backgroundColor = "#f4f4f4";
  });
};

// function called in createGrid that removes all of the sketches in the
// sketchbox before creating new ones
const removeSketch = function () {
  while (sketchBox.firstChild) {
    sketchBox.removeChild(sketchBox.firstChild);
  }
};

toggleBtn.addEventListener("click", () => {
  switch (eraserOn) {
    case (eraserOn = true):
      break;
    case (eraserOn = false):
      switch (color) {
        case (color = "rgb(5 5 87)"):
          color = "green";

          break;
        case (color = "green"):
          color = "purple";

          break;
        case (color = "purple"):
          color = "rgb(5 5 87)";
          break;
      }
      revertColor = color;
      break;
  }
});

// changes grid size this is called back in the range event listener
const createGrid = function (number) {
  removeSketch();
  let gridArea = number * number;
  sketchBox.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  sketchBox.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  for (let i = 1; i <= gridArea; i++) {
    let sketch = document.createElement("div");
    sketch.classList = "sketch";
    sketchBox.appendChild(sketch);
    sketchColor(sketch);
  }
};

// creates 16 x 16 grid by default

// adds function ot range that allows resize of grids
sketchRange.addEventListener("input", () => {
  let number = event.target.value;
  createGrid(number);
});

eraserBtn.addEventListener("click", () => {
  switch (eraserOn) {
    case (eraserOn = false):
      color = "#f4f4f4";
      eraserOn = true;
      eraserBtn.style.cssText = "background-color: rgb(5 5 87);color: gold";
      break;
    case (eraserOn = true):
      color = revertColor;
      eraserOn = false;
      eraserBtn.style.cssText = "background-color: gold; color: rgb(5 5 87)";
      break;
  }
  return color;
});

createGrid(16);

// add functionality to reset button
