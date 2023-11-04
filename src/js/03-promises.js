import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');
const createPromisesButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', e => {
  e.preventDefault(); 

  createPromisesButton.disabled = true; 

  const delayInput = +e.target.elements.delay.value;
  const stepInput = +e.target.elements.step.value;
  const amountInput = +e.target.elements.amount.value;

  const promises = [];

  for (let i = 1; i <= amountInput; i++) {
    const currentDelay = delayInput + stepInput * (i - 1);
    const promise = createPromise(i, currentDelay);
    promise
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      })
      .finally(() => {
        if (i === amountInput) {
          createPromisesButton.disabled = false;
        }
      });

    promises.push(promise);
  }

  Promise.all(promises)
    .finally(() => {
      createPromisesButton.disabled = false;
    });
});
