const form = document.querySelector('.form');

        form.addEventListener('submit', (e) => {
          e.preventDefault();

          const delayInput = form.querySelector('input[name="delay"]');
          const stepInput = form.querySelector('input[name="step"]');
          const amountInput = form.querySelector('input[name="amount"]');

          const delay = parseInt(delayInput.value, 10);
          const step = parseInt(stepInput.value, 10);
          const amount = parseInt(amountInput.value, 10);

          createPromises(amount, delay, step);
        });

        function createPromise(position, delay) {
          return new Promise((resolve, reject) => {
            const shouldResolve = Math.random() > 0.3;
            const timeoutId = setTimeout(() => {
              if (shouldResolve) {
                resolve({ position, delay });
              } else {
                reject({ position, delay });
              }
              clearTimeout(timeoutId);
            }, delay);
          });
        }

        function createPromises(amount, initialDelay, step) {
          let currentDelay = initialDelay;

          for (let i = 1; i <= amount; i++) {
            createPromise(i, currentDelay)
              .then(({ position, delay }) => {
                Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
              })
              .catch(({ position, delay }) => {
                Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
              });

            currentDelay += step;
          }
        }