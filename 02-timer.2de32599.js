function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var a=r("7Y9D8");const d=document.getElementById("datetime-picker"),u=document.querySelector("button[data-start]"),s={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};u.disabled=!0;const i={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<=Date.now()?(e(a).Notify.failure("Please choose a date in the future"),d.value="",u.disabled=!0):u.disabled=!1}};let l;function c(e){return e.toString().padStart(2,"0")}function f(e,t,n,o){s.days.textContent=c(e),s.hours.textContent=c(t),s.minutes.textContent=c(n),s.seconds.textContent=c(o)}flatpickr(d,i),u.addEventListener("click",(()=>{const t=new Date(d.value),n=Date.now();t<=n?(u.disabled=!0,e(a).Notify.failure("Please choose a date in the future")):l=setInterval((()=>{!function(e){const t=Date.now(),n=e-t;if(n<=0)return clearInterval(l),void f(0,0,0,0);const{days:o,hours:r,minutes:a,seconds:d}=function(e){const t=1e3,n=60*t,o=60*n,r=24*o,a=Math.floor(e/r),d=Math.floor(e%r/o),u=Math.floor(e%r%o/n),s=Math.floor(e%r%o%n/t);return{days:a,hours:d,minutes:u,seconds:s}}(n);f(o,r,a,d)}(t)}),1e3)}));
//# sourceMappingURL=02-timer.2de32599.js.map