alert("connected");
var worktime = 5;
var breaktime = 5;
var currentTime = worktime;
var currentMode = "Work";
var timerID = "";

var displays = {
  breakOption: document.querySelector("#breakOptionDisplay"),
  workOption: document.querySelector("#workOptionDisplay"),
  timer: document.querySelector("#timerDisplay"),
  mode: document.querySelector("#modeDisplay")
}
var buttons = {
  start: document.querySelector("#start"),
  pause: document.querySelector("#pause"),
  reset: document.querySelector("#reset")
}

var inputs = {
  work: document.querySelector("#workInput"),
  work: document.querySelector("#breakInput")
}

function startTimer(){
  var timer = setInterval(function(){
    currentTime--;
    updateDisplay(currentTime);
    console.log(currentTime);
    if (currentTime == 0){
      changemode(currentMode);
    }
  }, 1000)
  return timer;
}

function updateDisplay(time){
  var minutes = Math.floor(time / 60);
  var seconds = time - (minutes * 60);
  var msg = (minutes > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ?  seconds : "0" + seconds);
  displays.timer.textContent = msg;
}

function changemode(mode){
  currentMode = mode == "Work" ? "Break" : "Work";
  displays.mode.textContent = currentMode;
  currentTime = currentMode == "Break" ? breaktime : worktime;
  updateDisplay(currentTime);
}
