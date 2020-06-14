function padZeroes(time) {
  return String(time).length == 1 ? `0${time}` : time;
}

function setClockDisplay(hours, minutes, seconds) {
  currentTime = `${hours}:${minutes}:${seconds}`;
  clockDisplay.textContent = currentTime;
  setTitleDisplay();
}

function setTitleDisplay() {
  if (focus) {
      titleDisplay.textContent = `(${this.currentTime}) Stopwatch`;
  } else titleDisplay.textContent = 'Stopwatch';
}

const clockDisplay = document.querySelector('#clock-display');
const titleDisplay = document.querySelector('title');

let clock = new Date();
clock.setSeconds(0);
clock.setMinutes(0);
clock.setHours(0);

let focus = false;
window.onfocus = () => focus = false;
window.onblur = () => focus = true;

window.onload = () => {
  setInterval(() => {
    clock.setSeconds(clock.getSeconds() + 1);
    seconds = padZeroes(clock.getSeconds());
    minutes = padZeroes(clock.getMinutes());
    hours = padZeroes(clock.getHours());
    setClockDisplay(hours, minutes, seconds);
  }, 1000);
}
