function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  
let intervalId;
const refs = {
    start: document.querySelector('[data-start]'), 
    stop: document.querySelector('[data-stop]'),
};

console.log(refs.start, refs.stop);

refs.start.addEventListener('click', () => {
    if (!intervalId) {
        refs.start.disabled = true;
        intervalId = setInterval(changeBackgroundColor, 1000);        
    }
});

refs.stop.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    refs.start.disabled = false;
});

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

