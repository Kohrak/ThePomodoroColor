var worktime = 25 * 60;
var breaktime = 5 * 60;
var currentTime = worktime;
var currentMode = "Work";
var timerID = "";
var running = false;
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
  break: document.querySelector("#breakInput")
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

function restart(){
  clearInterval(timerID);
  currentTime = worktime;
  updateDisplay(currentTime);
  displays.mode.textContent = "Work";
}

buttons.start.addEventListener("click", function(){
  timerID = startTimer();
})

buttons.pause.addEventListener("click", function(){
  clearInterval(timerID);
})

buttons.reset.addEventListener("click", restart)

inputs.work.addEventListener("change", function(){
  worktime = parseInt(this.value);
  var msg = (worktime > 9 ? worktime : "0" + worktime) + ":00"
  displays.workOption.textContent = msg;
  worktime *= 60;
  restart();
})

inputs.break.addEventListener("change", function(){
  breaktime = parseInt(this.value);
  var msg = (breaktime > 9 ? breaktime : "0" + breaktime) + ":00"
  displays.breakOption.textContent = msg;
  breaktime *= 60;
  restart();
})
