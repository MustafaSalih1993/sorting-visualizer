const canvas = document.querySelector("canvas")
const optionButtons = document.querySelectorAll(".opt")
const delay = document.getElementById("delay")
const randArr = document.getElementById("gen")
const bbsBtn = document.getElementById("bbs")
const isBtn = document.getElementById("is")
const qsBtn = document.getElementById("qs")
const ssBtn = document.getElementById("ss")
const oesBtn = document.getElementById("oes")
const csBtn = document.getElementById("cs")
const shsBtn = document.getElementById("shs")
const cssBtn = document.getElementById("css")
const contBtn = document.getElementById("cont")

const ctx = canvas.getContext("2d")

canvas.style.backgroundColor = "#000000"
canvas.width = window.innerWidth - 10
canvas.height = window.innerHeight / 2

//bar colors
const barColor = "#559BD5"
const iColor = "#73D248"
const jColor = "#FF83F4"

let ms = delay.value //ms for millisecons
let arr = []

genArr()
const w = (canvas.width - 20) / arr.length //bars width

//change active bars color
function colorBars(a, b) {
  a.color = iColor
  b.color = jColor
}

//remove active bars color
function remColor(a, b) {
  a.color = barColor
  b.color = barColor
}

//control the speed with this function
function sleep() {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

//generate random numbers between 2 values
function ran(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//disable the buttons after sort start
function disableBtns() {
  optionButtons.forEach((btn) => {
    btn.disabled = true
  })
}

//enable the buttons after generate new unsorted values
function enableBtns() {
  optionButtons.forEach((btn) => {
    btn.disabled = false
  })
}

// Generate new bars
function genArr() {
  arr = []
  for (let i = 0; i < 100; i++) {
    arr.push({
      h: ran(0, canvas.height),
      color: barColor,
    })
  }
  enableBtns()
}

//draw the bars in the array arr
function draw() {
  let x = 0
  arr.forEach((col) => {
    ctx.beginPath()
    ctx.rect(x, canvas.height, w, -col.h)
    ctx.strokeStyle = "#000000"
    ctx.fillStyle = col.color
    ctx.stroke()
    ctx.fill()
    ctx.closePath()
    x = x + w
  })
}

//init the event listeners and its behavior
function init() {
  //NOTE Event Listeners for all the selecting options
  randArr.addEventListener("click", genArr)
  qsBtn.addEventListener("click", qs)
  ssBtn.addEventListener("click", ss)
  oesBtn.addEventListener("click", oes)
  bbsBtn.addEventListener("click", bbs)
  isBtn.addEventListener("click", is)
  csBtn.addEventListener("click", cs)
  shsBtn.addEventListener("click", shs)
  cssBtn.addEventListener("click", css)
  contBtn.addEventListener("click", conts)

  delay.addEventListener("change", (e) => {
    // this is for the speed slider
    ms = e.target.value
  })

  // quick sort call
  function qs() {
    quickSort(arr, 0, arr.length - 1)
    disableBtns()
  }
  // selection sort call
  function ss() {
    selectionSort(arr)
    disableBtns()
  }
  // odd even sort call
  function oes() {
    oddEvenSort(arr)
    disableBtns()
  }
  // bubble sort call
  function bbs() {
    bubbleSort(arr)
    disableBtns()
  }
  // insertion sort call
  function is() {
    insertionSort(arr)
    disableBtns()
  }
  // comp sort call
  function cs() {
    compSort(arr)
    disableBtns()
  }
  // shell sort call
  function shs() {
    shellSort(arr)
    disableBtns()
  }
  // cocktail shaker sort call
  function css() {
    cocktailShakerSort(arr)
    disableBtns()
  }
  // counting sort call
  function conts() {
    countingSort(arr)
    disableBtns()
  }
}

// Animation frame drawing
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  requestAnimationFrame(animate)
  draw()
}
//FUNCTIONS CALL HERE
init()
animate()
