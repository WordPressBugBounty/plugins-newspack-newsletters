(()=>{"use strict";let e;var t;t=function(){document.querySelectorAll(".newspack-newsletters-subscribe").forEach((t=>{const s=t.querySelector("form");if(!s)return;const n=t.querySelector(".newspack-newsletters-subscribe__response"),r=t.querySelector(".newspack-newsletters-subscribe__message"),a=t.querySelector('input[type="email"]'),c=t.querySelector('button[type="submit"]'),i=document.createElement("span");i.classList.add("spinner"),s.endFlow=(e,l=500,o=!1)=>{t.setAttribute("data-status",l);const d=document.createElement("p");a.removeAttribute("disabled"),c.removeChild(i),c.removeAttribute("disabled"),s.classList.remove("in-progress"),d.innerHTML=o?t.getAttribute("data-success-message"):e,r.appendChild(d),d.className=`message status-${l}`,200===l&&t.replaceChild(n,s)},s.addEventListener("submit",(t=>{if(t.preventDefault(),r.innerHTML="",s.classList.add("in-progress"),c.disabled=!0,c.appendChild(i),!s.npe?.value)return s.endFlow(newspack_newsletters_subscribe_block.invalid_email,400);const n=window.newspack_grecaptcha||null;(n?n?.getCaptchaV3Token:()=>new Promise((e=>e(""))))().then((e=>{if(!e)return;let t=s["g-recaptcha-response"];t||(t=document.createElement("input"),t.setAttribute("type","hidden"),t.setAttribute("name","g-recaptcha-response"),t.setAttribute("autocomplete","off"),s.appendChild(t)),t.value=e})).catch((e=>{s.endFlow(e,400)})).finally((()=>{const t=new FormData(s);if(!t.has("npe")||!t.get("npe"))return s.endFlow(newspack_newsletters_subscribe_block.invalid_email,400);e&&t.set("newspack_newsletters_subscribe",e),a.setAttribute("disabled","true"),c.setAttribute("disabled","true"),fetch(s.getAttribute("action")||window.location.pathname,{method:"POST",headers:{Accept:"application/json"},body:t}).then((t=>{t.json().then((({message:n,newspack_newsletters_subscribed:r,newspack_newsletters_subscribe:a})=>{e=a,s.endFlow(n,t.status,r)}))}))}))}))}))},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",t):t())})();