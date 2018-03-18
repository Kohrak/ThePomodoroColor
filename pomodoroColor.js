alert("connected");
var worktime = 25 * 60;
var breaktime = 5 * 60;
var currentTime = worktime;
var displays = {
  breakOption: document.querySelector("#breakOptionDisplay"),
  workOption: document.querySelector("#workOptionDisplay"),
  timer: document.querySelector("#timerDisplay"),
  mode: document.querySelector("#timerDisplay")
}
var buttons = {
  start: document.querySelector("#start"),
  pause: document.querySelector("#pause"),
  reset: document.querySelector("#reset")
}

var inputs {
  work: document.querySelector("#workInput"),
  work: document.querySelector("#breakInput")
}
