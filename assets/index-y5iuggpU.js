import{s as k,e as d,g as w,d as B}from"./vendor-BRbrUcCz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const u={data:[],popupData:[],currentFilter:"",theme:localStorage.getItem("theme")||"dark"};function $(e,t){u[e]=t,e==="theme"&&(localStorage.setItem("theme",t),document.documentElement.setAttribute("data-theme",t))}function H(e){e.innerHTML=`
    <div class="loading-state" role="status" aria-live="polite">
      <div class="loading-spinner"></div>
      <p>Loading timeline data...</p>
    </div>
  `}function N(e,t){e.innerHTML=`
    <div class="error-state" role="alert">
      <h2>Error Loading Timeline</h2>
      <p>${d(t)}</p>
      <button onclick="location.reload()">Retry</button>
    </div>
  `}function P(e){const t=document.createElement("button");return t.textContent=e,t.className="decade-button",t.setAttribute("aria-label",`Jump to ${e}s`),t.onclick=()=>{const n=document.getElementById(`section-${e}`);n&&k(n)},t}function M(e,t){const n=document.createDocumentFragment();e.forEach((o,r)=>{if(o.year%10===0){const a=F(o);n.appendChild(a)}const s=O(o,r);n.appendChild(s)}),t.innerHTML="",t.appendChild(n)}function F(e){const t=document.createElement("div");return t.className="decade-intro",t.id=`section-${e.year}`,t.setAttribute("tabindex","-1"),t.setAttribute("aria-label",`${e.decade} section`),t.innerHTML=`
    <div class='decade-intro-main'>
      <h1><span class="circle" aria-hidden="true"></span>${d(e.year+"s")}</h1>
      ${w(`/FeatureImages/${e.featureimg}`,"decade-intro-img",`${e.decade} featured image`)}
    </div>
    <p class='decade-intro-p'>${d(e.featuretext)}</p>
  `,t}function O(e,t){const n=document.createElement("div");return n.className="decade-data timeline-card",n.setAttribute("data-year",e.year),n.setAttribute("data-searchable",JSON.stringify({year:e.year,text:e.featuretext,people:[e.person1name,e.person2name].filter(Boolean).join(" "),events:[e.event1text,e.event2text].filter(Boolean).join(" ")}).toLowerCase()),n.innerHTML=`
    <div class='decade-main'>
      <h2>${d(String(e.year))}</h2>
      ${w(`/FeatureImages/${e.featureimg}`,"decade-img",`Year ${e.year} featured image`)}
      <p>${d(e.featuretext)}</p>
      ${q(e,t)}
    </div>
  `,n}function q(e,t){const n=[];if(e.person1name!==""){let o=`<div class="popup-section people-section" role="region" aria-label="People">
      <h3>People</h3>
      ${S(e.person1name,e.person1img,e.person1title)}`;e.person2name!==""&&(o+=S(e.person2name,e.person2img,e.person2title)),o+="</div>",n.push(o)}if(e.event1text!==""){let o=`<div class="popup-section event-section" role="region" aria-label="Events">
      <h3>Events</h3>
      ${m(e.event1text)}`;e.event2text!==""&&(o+=m(e.event2text)),o+="</div>",n.push(o)}if(e.software1text!==""){let o=`<div class="popup-section event-section" role="region" aria-label="Software">
      <h3>Software</h3>
      ${m(e.software1text)}`;e.software2text!==""&&(o+=m(e.software2text)),o+="</div>",n.push(o)}if(e.system1text!==""){let o=`<div class="popup-section event-section" role="region" aria-label="Systems">
      <h3>Systems</h3>
      ${m(e.system1text)}`;[e.system2text,e.system3text,e.system4text,e.system5text].forEach(s=>{s!==""&&(o+=m(s))}),o+="</div>",n.push(o)}if(n.length>0){const o=`<div><h1>${d(String(e.year))}</h1>${n.join("")}</div>`;return u.popupData[t]=o,`<button 
      class="read-more-btn" 
      data-index="${t}"
      aria-label="Read more about ${e.year}"
      type="button">
      <span class="read-more-icon" aria-hidden="true"></span>
      <span>Read more</span>
    </button>`}return""}function m(e){return`
  <div class='popup-box'>
    <h3>${d(e)}</h3>
  </div>
  `}function S(e,t,n){return`
  <div class='popup-box'>
    <div class="tittle">
      <h2>${d(e)}</h2>
      <p>${d(n)}</p>
    </div>
    ${w(`/PeopleIcon/${t}`,"popup-people-img",e)}
  </div>
  `}let c,x,l,v;function C(){c=document.getElementById("popup-container"),x=document.getElementById("popup-data"),l=document.getElementById("overlay"),v=document.getElementById("close-popup"),v&&v.addEventListener("click",b),l&&l.addEventListener("click",b),document.addEventListener("click",e=>{const t=e.target.closest(".read-more-btn");if(t){const n=parseInt(t.getAttribute("data-index"));W(n)}})}function W(e){u.popupData[e]&&(x.innerHTML=u.popupData[e],c.classList.add("modal-opening"),l.classList.add("overlay-opening"),l.style.display="block",c.style.display="block",c.setAttribute("role","dialog"),c.setAttribute("aria-modal","true"),document.body.style.overflow="hidden",setTimeout(()=>{c.classList.remove("modal-opening"),l.classList.remove("overlay-opening")},300),setTimeout(()=>{v.focus()},100),R(c))}function b(){c.classList.add("modal-closing"),l.classList.add("overlay-closing"),setTimeout(()=>{c.style.display="none",x.innerHTML="",l.style.display="none",document.body.style.overflow="auto",c.removeAttribute("role"),c.removeAttribute("aria-modal"),c.classList.remove("modal-closing"),l.classList.remove("overlay-closing")},300)}function R(e){const t=e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=t[0],o=t[t.length-1],r=s=>{if(!(s.key!=="Tab"&&s.key!=="Escape")){if(s.key==="Escape"){b();return}s.shiftKey?document.activeElement===n&&(o.focus(),s.preventDefault()):document.activeElement===o&&(n.focus(),s.preventDefault())}};e.addEventListener("keydown",r)}window.hidePopup=b;function j(){const e=document.createElement("div");e.className="search-container",e.innerHTML=`
    <label for="timeline-search" class="search-label">Search Timeline</label>
    <div class="search-input-wrapper">
      <input 
        type="text" 
        id="timeline-search" 
        class="search-input" 
        placeholder="Search by year, person, event..."
        aria-label="Search timeline by year, person, or event"
      />
      <button 
        id="clear-search" 
        class="clear-search-btn" 
        aria-label="Clear search"
        style="display: none;"
        type="button"
      >
        ✕
      </button>
    </div>
    <div id="search-results" class="search-results" aria-live="polite"></div>
  `;const t=document.querySelector(".header");t.insertBefore(e,t.lastElementChild);const n=document.getElementById("timeline-search"),o=document.getElementById("clear-search"),r=document.getElementById("search-results"),s=B(a=>{L(a,r)},300);n.addEventListener("input",a=>{const i=a.target.value.trim();o.style.display=i?"block":"none",s(i)}),o.addEventListener("click",()=>{n.value="",o.style.display="none",L("",r),n.focus()}),n.addEventListener("keydown",a=>{a.key==="Escape"&&(n.value="",o.style.display="none",L("",r))})}function L(e,t){const n=document.querySelectorAll(".decade-data");if(!e){n.forEach(s=>{s.style.display="",s.classList.remove("search-result")}),t.textContent="";return}const o=e.toLowerCase();let r=0;n.forEach(s=>{const a=s.getAttribute("data-searchable");a&&a.includes(o)?(s.style.display="",s.classList.add("search-result"),r++):(s.style.display="none",s.classList.remove("search-result"))}),r===0?(t.textContent="No results found",t.className="search-results no-results"):(t.textContent=`${r} result${r!==1?"s":""} found`,t.className="search-results has-results")}function K(){document.documentElement.setAttribute("data-theme",u.theme),Y()}function Y(){const e=document.createElement("button");e.id="theme-toggle",e.className="theme-toggle",e.setAttribute("aria-label","Toggle theme"),e.setAttribute("type","button"),e.title=u.theme==="dark"?"Switch to light mode":"Switch to dark mode",I(e),e.addEventListener("click",z);const n=document.querySelector(".header").querySelector(".main-heading");n&&n.appendChild(e)}function z(){const e=u.theme==="dark"?"light":"dark";$("theme",e);const t=document.getElementById("theme-toggle");I(t),t.title=e==="dark"?"Switch to light mode":"Switch to dark mode",document.body.classList.add("theme-transitioning"),setTimeout(()=>{document.body.classList.remove("theme-transitioning")},300)}function I(e){e.innerHTML=u.theme==="dark"?'<span aria-hidden="true">☀️</span><span class="sr-only">Light mode</span>':'<span aria-hidden="true">🌙</span><span class="sr-only">Dark mode</span>'}function J(e){e.addEventListener("wheel",t=>{if(t.deltaY!==0){t.preventDefault();const n=t.deltaY;y(e,n,300)}}),e.addEventListener("keydown",t=>{switch(t.key){case"ArrowLeft":y(e,-300,300),t.preventDefault();break;case"ArrowRight":y(e,300,300),t.preventDefault();break;case"Home":y(e,-e.scrollLeft,500),t.preventDefault();break;case"End":y(e,e.scrollWidth-e.scrollLeft,500),t.preventDefault();break}})}function y(e,t,n){const o=e.scrollLeft,r=performance.now();function s(i){return i<.5?2*i*i:-1+(4-2*i)*i}function a(i){const f=i-r,p=Math.min(f/n,1),h=s(p);e.scrollLeft=o+t*h,p<1&&requestAnimationFrame(a)}requestAnimationFrame(a)}function _(e,t){!e||!t||(e.addEventListener("scroll",()=>{E(e,t)}),E(e,t),window.addEventListener("resize",()=>{E(e,t)}))}function E(e,t){const n=e.scrollLeft;e.scrollWidth,e.clientWidth;const o=t.querySelectorAll(".decade-button");if(o.length===0)return;const r=e.querySelectorAll('[id^="section-"]');if(r.length===0)return;let s=0,a=1/0;if(r.forEach((i,f)=>{const p=i.offsetLeft,h=Math.abs(p-n);h<a&&(a=h,s=f)}),o[s]){const i=o[s],f=i.offsetLeft,p=i.offsetWidth,D=f+p/2-50/2;t.style.setProperty("--indicator-position",`${D}px`)}}const A=document.getElementById("decades-container"),g=document.getElementById("data-container");async function T(){try{K(),H(g);const e=await fetch("./data.json");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const t=await e.json();$("data",t);const n=document.createDocumentFragment();t.forEach(o=>{if(o.year%10===0){const r=P(o.year);n.appendChild(r)}}),A.appendChild(n),M(t,g),j(),C(),J(g),_(g,A),document.body.classList.add("loaded")}catch(e){console.error("Error loading timeline data:",e),N(g,e.message)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",T):T();
