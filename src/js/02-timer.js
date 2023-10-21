import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      // Вибрана дата в минулому
      alert("Please choose a date in the future");
      document.querySelector('[data-start]').disabled = true;
    } else {
      // Вибрана дата в майбутньому
      document.querySelector('[data-start]').disabled = false;
    }
  },
};

const countdownTimer = document.querySelector('.timer');
const daysElement = countdownTimer.querySelector('[data-days]');
const hoursElement = countdownTimer.querySelector('[data-hours]');
const minutesElement = countdownTimer.querySelector('[data-minutes]');
const secondsElement = countdownTimer.querySelector('[data-seconds]');

let countdownInterval;

function updateTimerDisplay(time) {
  daysElement.textContent = addLeadingZero(time.days);
  hoursElement.textContent = addLeadingZero(time.hours);
  minutesElement.textContent = addLeadingZero(time.minutes);
  secondsElement.textContent = addLeadingZero(time.seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

document.querySelector('[data-start]').addEventListener('click', () => {
  const selectedDate = new Date(document.querySelector('#datetime-picker').value);
  const currentTime = new Date();
  if (selectedDate <= currentTime) {
    alert("Please choose a date in the future");
    return;
  }

  const timeDifference = selectedDate - currentTime;

  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const time = convertMs(timeDifference);
    updateTimerDisplay(time);
    timeDifference -= 1000;
  }, 1000);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}
