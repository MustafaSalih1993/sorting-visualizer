const canvas = document.querySelector("canvas");
const delay = document.getElementById("delay");
const generateBtn = document.getElementById("gen");
const select = document.getElementById("selectAlgo");

const ctx = canvas.getContext("2d");
canvas.style.backgroundColor = "#F5FBEF";
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight / 2;

//bar colors
const barColor = "#748B75";
const iColor = "#503D42";
const jColor = "#84C318";

let ms = delay.value; //ms for millisecons

let arr = [];
// generating values on startup
genArr();

let w = (canvas.width - 20) / arr.length; //bars width

//change active bars color
function colorBars(a, b) {
  a.color = iColor;
  b.color = jColor;
}

//remove active bars color
function remColor(a, b) {
  a.color = barColor;
  b.color = barColor;
}

//control the speed with this function
function sleep() {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//generate random numbers between 2 values
function ran(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate new bars
function genArr() {
  arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push({
      h: ran(0, canvas.height),
      color: barColor,
    });
  }
  select.disabled = false;
}

//draw the bars in the array arr
function draw() {
  let x = 0;
  arr.forEach((col) => {
    ctx.beginPath();
    ctx.rect(x, canvas.height, w, -col.h);
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = col.color;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    x = x + w;
  });
}

//init the event listeners and its behavior
async function init() {
  //NOTE Event Listeners for all the selecting options
  generateBtn.addEventListener("click", genArr);

  select.addEventListener("change", async (e) => {
    select.disabled = true;
    switch (e.target.value) {
      case "Bubble Sort":
        await bubbleSort(arr);
        break;
      case "Odd Even Sort":
        await oddEvenSort(arr);
        break;
      case "Insertion Sort":
        await insertionSort(arr);
        break;
      case "Selection Sort":
        await selectionSort(arr);
        break;
      case "Quick Sort":
        await quickSort(arr, 0, arr.length - 1);
        break;
      case "Comp Sort":
        await compSort(arr);
        break;
      case "Shell Sort":
        await shellSort(arr);
        break;
      case "Cocktail shaker Sort":
        await cocktailShakerSort(arr);
        break;
      case "Counting Sort":
        await countingSort(arr);
        break;
      default:
        break;
    }
  });

  delay.addEventListener("change", (e) => {
    // this is for the speed slider
    ms = e.target.value;
  });
}

// Animation frame drawing
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);
  draw();
}

//Updating variables for window resize
function windowResize() {
  canvas.width = window.innerWidth - 10;
  canvas.height = window.innerHeight / 2;

  w = (canvas.width - 20) / arr.length;
}

//init the event listeners for window resize
window.addEventListener('resize', windowResize);

//FUNCTIONS CALL HERE
init();
animate();
