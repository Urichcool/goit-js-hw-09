import Notiflix from 'notiflix';
const formEl = document.querySelector('.form');
const firstDelay = document.querySelector('[name = delay]');
const delayStep = document.querySelector('[name = step]');
const amount = document.querySelector('[name = amount]');
let timerId = null;

formEl.addEventListener('submit', event => {
  let positionCount = 0;
  let delayCount = Number(firstDelay.value) - Number(delayStep.value);
  event.preventDefault();
    setTimeout(() => {
    timerId = setInterval(() => {
      delayCount += Number(delayStep.value);
      positionCount += 1;
      createPromise(positionCount, delayCount)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        });
      if (positionCount === Number(amount.value)) {
        clearInterval(timerId);
        positionCount = 0;
        delayCount = 0;
      }
    }, Number(delayStep.value));
  }, Number(firstDelay.value) - Number(delayStep.value));
});

function createPromise(position, delay) {
  return new Promise((resole, reject) => {
    const shouldResolve = Math.random() > 0.3;
     if (shouldResolve) {
        resole({position, delay});
      } else {
        reject({position, delay});
      }
    });
};