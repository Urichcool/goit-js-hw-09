import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const inputPickerEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
const timerDaysEl = document.queryCommandValue(['[data-days]']);
const timerHoursEl = document.queryCommandValue(['[data-hours]']);
const timerMinutesEl = document.queryCommandValue(['[data-minutes]']);
const timerSecoundsEl = document.queryCommandValue(['[data-secounds]']);
startBtnEl.disabled = true;

const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

const convertMs = (ms) => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      window.alert('Please choose a date in the future');
      startBtnEl.disabled = true;
    } else {
      startBtnEl.disabled = false;
    }
    startBtnEl.addEventListener('click', event => {
      const startTime = selectedDates[0];
      setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = startTime - currentTime;
        const timeComponents = convertMs(deltaTime);
        console.log(timeComponents);
      }, 1000);
      startBtnEl.disabled = true;
    })     
  },
  };

flatpickr(inputPickerEl, options);

