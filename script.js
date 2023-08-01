// Timer
let timerInterval;
let timerRunning = false;
let timerSeconds = 0;

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateTimerDisplay() {
  document.getElementById('timerDisplay').innerText = formatTime(timerSeconds);
}

function startStopTimer() {
  if (timerRunning) {
    clearInterval(timerInterval);
    document.getElementById('startStopTimer').innerText = 'Start';
  } else {
    timerInterval = setInterval(() => {
      timerSeconds++;
      updateTimerDisplay();
    }, 1000);
    document.getElementById('startStopTimer').innerText = 'Stop';
  }
  timerRunning = !timerRunning;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerSeconds = 0;
  updateTimerDisplay();
  document.getElementById('startStopTimer').innerText = 'Start';
  timerRunning = false;
}

document.getElementById('startStopTimer').addEventListener('click', startStopTimer);
document.getElementById('resetTimer').addEventListener('click', resetTimer);

// Stopwatch
let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchSeconds = 0;

function updateStopwatchDisplay() {
  document.getElementById('stopwatchDisplay').innerText = formatTime(stopwatchSeconds);
}

function startStopStopwatch() {
  if (stopwatchRunning) {
    clearInterval(stopwatchInterval);
    document.getElementById('startStopStopwatch').innerText = 'Start';
  } else {
    stopwatchInterval = setInterval(() => {
      stopwatchSeconds++;
      updateStopwatchDisplay();
    }, 1000);
    document.getElementById('startStopStopwatch').innerText = 'Stop';
  }
  stopwatchRunning = !stopwatchRunning;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchSeconds = 0;
  updateStopwatchDisplay();
  document.getElementById('startStopStopwatch').innerText = 'Start';
  stopwatchRunning = false;
}

document.getElementById('startStopStopwatch').addEventListener('click', startStopStopwatch);
document.getElementById('resetStopwatch').addEventListener('click', resetStopwatch);
