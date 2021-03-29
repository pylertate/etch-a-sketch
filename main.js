const sketchBox = document.querySelector("#sketchBox");
const sketchColumn = sketchBox.style["grid-template-column"];
const sketchRange = document.querySelector("#sketchRange");

sketchRange.addEventListener("input", () => {
  let number = event.target.value
  createGrid(number)
}
 
);

const createGrid = function (number){
    removeSketch();
  let gridArea = (number)*(number)
  sketchBox.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  sketchBox.style.gridTemplateRows = `repeat(${number}, 1fr)`;
 
  for (let i = 1; i <= gridArea; i++) {
    let sketch = document.createElement("div");
    sketch.classList = "sketch";
    sketch.addEventListener("mouseover", ()=> sketch.style.backgroundColor = "black")
    sketchBox.appendChild(sketch)

}};


const sketchCreate = function () {};
const removeMe = document.getElementsByClassName("sketch");

const removeSketch = function () {
  while (sketchBox.firstChild) {
    sketchBox.removeChild(sketchBox.firstChild);
  }
};
createGrid(16)