function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=r.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){o[e]=r},r.parcelRequired7c6=n);var l=n("eWCmQ");const u=document.querySelector(".form"),i=document.querySelector("[name = delay]"),a=document.querySelector("[name = step]"),d=document.querySelector("[name = amount]");u.addEventListener("submit",(r=>{let t=0,o=Number(i.value)-Number(a.value);r.preventDefault(),setTimeout((()=>{timerId=setInterval((()=>{var r,n;o+=Number(a.value),t+=1,(r=t,n=o,new Promise(((e,t)=>{Math.random()>.3?e({position:r,delay:n}):t({position:r,delay:n})}))).then((({position:r,delay:t})=>{e(l).Notify.success(`Fulfilled promise ${r} in ${t}ms`)})).catch((({position:r,delay:t})=>{e(l).Notify.failure(`Rejected promise ${r} in ${t}ms`)})),t>=d.value&&(clearInterval(timerId),t=0,o=0)}),Number(a.value))}),Number(i.value)-Number(a.value))}));
//# sourceMappingURL=03-promises.5aaa344c.js.map
