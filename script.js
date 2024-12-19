let countdown;
let isRunning = false;

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

startButton.addEventListener('click', () => {
    if (isRunning) return; // Prevent multiple intervals
    isRunning = true;

    let totalSeconds = 3600; // Set countdown time in seconds (1 hour)

    countdown = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(countdown);
            document.getElementById('timer').innerHTML = "TIME'S UP!";
            isRunning = false;
            return;
        }

        totalSeconds--;

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    }, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(countdown);
    isRunning = false;
});