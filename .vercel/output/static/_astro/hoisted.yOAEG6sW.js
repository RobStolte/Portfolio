import"./hoisted.9hv4TG4Z.js";import"./index.ndQGbBLU.js";class i extends HTMLElement{constructor(){super();const t=this.querySelector("button");if(t){const e=t.dataset.classname;t.addEventListener("click",()=>{(l=>{document.querySelectorAll("."+l).forEach(c=>{c.classList.toggle("hidden")})})(e),this.classList.toggle("toggled_active"),r()})}}}customElements.define("button-class-hide",i);function r(){const t=Array.from(document.querySelectorAll(".education__time")).filter(e=>e.offsetParent!==null);for(let e=0;e<t.length;e++){const s=t[e];if(!t[e+1]){const n=s.querySelector(".education__line");n&&(n.style.display="none")}}}