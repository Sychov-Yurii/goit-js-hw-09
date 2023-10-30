import Notiflix from 'notiflix';

// Notiflix.Notify.success('This is a success message');
// Notiflix.Notify.failure('This is a failure message');


const dateTimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('button[data-start]');
const timerFields = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

startButton.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        if (selectedDate <= Date.now()) {
            Notiflix.Notify.failure('Please choose a date in the future');
            dateTimePicker.value = '';
            startButton.disabled = true;
        } else {
            startButton.disabled = false;
        }
    },
};

flatpickr(dateTimePicker, options);

let countdownInterval;

startButton.addEventListener('click', () => {
    const selectedDate = new Date(dateTimePicker.value);
    const currentTime = Date.now();
    if (selectedDate <= currentTime) {
      startButton.disabled = true;
        Notiflix.Notify.failure('Please choose a date in the future');
    } else {
        countdownInterval = setInterval(() => {
          updateTimer(selectedDate);
        }, 1000);
    }
});

function updateTimer(endTime) {
    const now = Date.now();
    const timeRemaining = endTime - now;

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        updateTimerDisplay(0, 0, 0, 0);
        return;
    } 

    const { days, hours, minutes, seconds } = convertMs(timeRemaining);
    updateTimerDisplay(days, hours, minutes, seconds);
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}

function updateTimerDisplay(days, hours, minutes, seconds) {
    timerFields.days.textContent = addLeadingZero(days);
    timerFields.hours.textContent = addLeadingZero(hours);
    timerFields.minutes.textContent = addLeadingZero(minutes);
    timerFields.seconds.textContent = addLeadingZero(seconds);
}
