let t;const e={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};function a(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}console.log(e.start,e.stop),e.stop.disabled=!0,e.start.addEventListener("click",(()=>{t||(e.start.disabled=!0,e.stop.disabled=!1,t=setInterval(a,1e3))})),e.stop.addEventListener("click",(()=>{clearInterval(t),t=null,e.start.disabled=!1,fs.stop.disabled=!0}));
//# sourceMappingURL=01-color-switcher.51071f06.js.map
