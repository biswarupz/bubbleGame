let scr = 0;
var setTime = 30;

restart = document.querySelector("#restart");
restart.addEventListener("click", () => {
  location.reload();
});

let button = document.querySelector("#startBtn");
button.addEventListener("click", function () {
  alert("click the Hit number on Bubbles");
  button.style.display = "none";
  timeRun();
  makeBubble();
  hit();
});

function score() {
  scr += 10;
  document.querySelector("#score").textContent = scr;
}

function hit() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = rn;
}

function makeBubble() {
  var clutter = "";
  for (let i = 1; i <= 135; i++) {
    clutter += `<div class="buble">${Math.floor(Math.random() * 10)}</div>;`;
  }
  document.querySelector("#game").innerHTML = clutter;
}
scoreBoard = document.querySelector("#scoreBoard");
function showScore() {
  endScore = document.querySelector("#endScore");
  endScore.textContent = scr;
  scoreBoard.style.display = "block";
}

function timeRun() {
  let time = setInterval(function () {
    if (setTime > 0) {
      setTime--;
      document.querySelector("#timer").textContent = setTime;
    } else {
      clearInterval(time);
      showScore();
      //location.reload();
    }
  }, 1000);
}

document.querySelector("#game").addEventListener("click", function (details) {
  numClick = details.target.textContent;
  if (numClick == rn) {
    score();
    hit();
    makeBubble();
  }
  console.log(numClick);
});
