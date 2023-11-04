function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  
let intervalId;
const refs = {
    start: document.querySelector('[data-start]'), 
    stop: document.querySelector('[data-stop]'),
};

refs.stop.disabled = true;

refs.start.addEventListener('click', () => {
    if (!intervalId) {
        refs.start.disabled = true;
        refs.stop.disabled = false;
        intervalId = setInterval(changeBackgroundColor, 1000);        
    }
});

refs.stop.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    refs.start.disabled = false;
    refs.stop.disabled = true;
    
});

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

