!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.id="homeContainer";const n=document.createElement("h1");n.id="bannerHeader",n.innerHTML="COALS & SLABS";const o=document.createElement("img");o.classList.add("banner"),o.src="../img/coals.png",t.appendChild(n),t.appendChild(o);const r=document.createElement("div");r.id="tabsContainer";const c=document.createElement("div");c.id="titleContainer",["home","about","menu","contact"].forEach((e,t)=>{const n=document.createElement("div");n.innerHTML=e,n.classList.add("tabTitle","tab"),n.id="title"+t,c.appendChild(n);const o=document.createElement("div");o.classList.add("tab"),o.classList.add(e),r.appendChild(o),o.addEventListener("mouseover",e=>{o.classList.contains("scale-down-ver-bottom")&&o.classList.remove("scale-down-ver-bottom"),o.classList.add("scale-up-ver-bottom"),n.classList.contains("fade-out")&&n.classList.remove("fade-out"),n.classList.add("fade-in")}),o.addEventListener("mouseout",e=>{o.classList.add("scale-down-ver-bottom"),o.classList.remove("scale-up-ver-bottom"),n.classList.contains("fade-in")&&n.classList.remove("fade-in"),n.classList.add("fade-out")})}),e.appendChild(t),e.appendChild(c),e.appendChild(r)})();const o=document.querySelector(".home"),r=(document.querySelector(".about"),document.querySelector(".menu"),document.querySelector(".contact"),document.querySelector("#homeContainer"));document.querySelector("#aboutContainer"),document.querySelector("#menuContainer"),document.querySelector("#contactContainer");o.addEventListener("click",()=>{r.style.display="block"})}]);