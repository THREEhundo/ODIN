!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);(()=>{const e=document.querySelector("#content"),t=document.createElement("h1");t.id="bannerHeader",t.innerHTML="COALS & SLABS";const n=document.createElement("img");n.classList.add("banner"),n.src="../img/coals.png",e.appendChild(t),e.appendChild(n);const o=document.createElement("div");o.id="tabsContainer";const r=document.createElement("div");r.id="titleContainer",["home","about","menu","contact"].forEach((e,t)=>{const n=document.createElement("div");n.innerHTML=e,n.classList.add("tabTitle","tab"),n.id="title"+t,r.appendChild(n);const a=document.createElement("div");a.classList.add("tab"),a.classList.add(e),o.appendChild(a),a.addEventListener("mouseover",e=>{console.log(n),n.setTimeout(()=>n.style.opactiy=100,1e3),n.classList.add("tracking-in-expand-fwd-bottom"),a.classList.contains("scale-down-ver-bottom")&&a.classList.remove("scale-down-ver-bottom"),a.classList.add("scale-up-ver-bottom"),n.classList.contains("tracking-in-expand-fwd-bottom")&&n.classList.remove("tracking-in-expand-fwd-bottom")}),a.addEventListener("mouseout",e=>{n.style.opacity=0,a.classList.add("scale-down-ver-bottom"),a.classList.remove("scale-up-ver-bottom")})}),e.appendChild(r),e.appendChild(o)})()}]);