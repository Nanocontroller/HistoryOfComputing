import{s as A,e as l,g as w,d as D}from"./vendor-CkO1_4IM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const d={data:[],popupData:[],currentFilter:"",theme:localStorage.getItem("theme")||"dark"};function y(e,t){d[e]=t,e==="theme"&&(localStorage.setItem("theme",t),document.documentElement.setAttribute("data-theme",t))}function B(e){e.innerHTML=`
    <div class="loading-state" role="status" aria-live="polite">
      <div class="loading-spinner"></div>
      <p>Loading timeline data...</p>
    </div>
  `}function N(e,t){e.innerHTML=`
    <div class="error-state" role="alert">
      <h2>Error Loading Timeline</h2>
      <p>${l(t)}</p>
      <button onclick="location.reload()">Retry</button>
    </div>
  `}function H(e){const t=document.createElement("button");return t.textContent=e,t.className="decade-button",t.setAttribute("aria-label",`Jump to ${e}s`),t.onclick=()=>{const n=document.getElementById(`section-${e}`);n&&A(n)},t}function P(e,t){const n=document.createDocumentFragment();e.forEach((o,r)=>{if(o.year%10===0){const a=M(o);n.appendChild(a)}const s=C(o,r);n.appendChild(s)}),t.innerHTML="",t.appendChild(n)}function M(e){const t=document.createElement("div");return t.className="decade-intro",t.id=`section-${e.year}`,t.setAttribute("tabindex","-1"),t.setAttribute("aria-label",`${e.decade} section`),t.innerHTML=`
    <div class='decade-intro-main'>
      <h1><span class="circle" aria-hidden="true"></span>${l(e.year+"s")}</h1>
      ${w(`/FeatureImages/${e.featureimg}`,"decade-intro-img",`${e.decade} featured image`)}
    </div>
    <p class='decade-intro-p'>${l(e.featuretext)}</p>
  `,t}function C(e,t){const n=document.createElement("div");return n.className="decade-data timeline-card",n.setAttribute("data-year",e.year),n.setAttribute("data-searchable",JSON.stringify({year:e.year,text:e.featuretext,people:[e.person1name,e.person2name].filter(Boolean).join(" "),events:[e.event1text,e.event2text].filter(Boolean).join(" ")}).toLowerCase()),n.innerHTML=`
    <div class='decade-main'>
      <h2>${l(String(e.year))}</h2>
      ${w(`/FeatureImages/${e.featureimg}`,"decade-img",`Year ${e.year} featured image`)}
      <p>${l(e.featuretext)}</p>
      ${W(e,t)}
    </div>
  `,n}function W(e,t){const n=[];if(e.person1name!==""){let o=`<div class="popup-section people-section" role="region" aria-label="People">
      <h3>People</h3>
      ${x(e.person1name,e.person1img,e.person1title)}`;e.person2name!==""&&(o+=x(e.person2name,e.person2img,e.person2title)),o+="</div>",n.push(o)}if(e.event1text!==""){let o=`<div class="popup-section event-section" role="region" aria-label="Events">
      <h3>Events</h3>
      ${m(e.event1text)}`;e.event2text!==""&&(o+=m(e.event2text)),o+="</div>",n.push(o)}if(e.software1text!==""){let o=`<div class="popup-section event-section" role="region" aria-label="Software">
      <h3>Software</h3>
      ${m(e.software1text)}`;e.software2text!==""&&(o+=m(e.software2text)),o+="</div>",n.push(o)}if(e.system1text!==""){let o=`<div class="popup-section event-section" role="region" aria-label="Systems">
      <h3>Systems</h3>
      ${m(e.system1text)}`;[e.system2text,e.system3text,e.system4text,e.system5text].forEach(s=>{s!==""&&(o+=m(s))}),o+="</div>",n.push(o)}if(n.length>0){const o=`<div><h1>${l(String(e.year))}</h1>${n.join("")}</div>`;return d.popupData[t]=o,`<button 
      class="read-more-btn" 
      data-index="${t}"
      aria-label="Read more about ${e.year}"
      type="button">
      <span class="read-more-icon" aria-hidden="true"></span>
      <span>Read more</span>
    </button>`}return""}function m(e){return`
  <div class='popup-box'>
    <h3>${l(e)}</h3>
  </div>
  `}function x(e,t,n){return`
  <div class='popup-box'>
    <div class="tittle">
      <h2>${l(e)}</h2>
      <p>${l(n)}</p>
    </div>
    ${w(`/PeopleIcon/${t}`,"popup-people-img",e)}
  </div>
  `}let i,T,c,g;function O(){i=document.getElementById("popup-container"),T=document.getElementById("popup-data"),c=document.getElementById("overlay"),g=document.getElementById("close-popup"),g&&g.addEventListener("click",v),c&&c.addEventListener("click",v),document.addEventListener("click",e=>{const t=e.target.closest(".read-more-btn");if(t){const n=parseInt(t.getAttribute("data-index"));F(n)}})}function F(e){d.popupData[e]&&(T.innerHTML=d.popupData[e],i.classList.add("modal-opening"),c.classList.add("overlay-opening"),c.style.display="block",i.style.display="block",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),document.body.style.overflow="hidden",setTimeout(()=>{i.classList.remove("modal-opening"),c.classList.remove("overlay-opening")},300),setTimeout(()=>{g.focus()},100),R(i))}function v(){i.classList.add("modal-closing"),c.classList.add("overlay-closing"),setTimeout(()=>{i.style.display="none",T.innerHTML="",c.style.display="none",document.body.style.overflow="auto",i.removeAttribute("role"),i.removeAttribute("aria-modal"),i.classList.remove("modal-closing"),c.classList.remove("overlay-closing")},300)}function R(e){const t=e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=t[0],o=t[t.length-1],r=s=>{if(!(s.key!=="Tab"&&s.key!=="Escape")){if(s.key==="Escape"){v();return}s.shiftKey?document.activeElement===n&&(o.focus(),s.preventDefault()):document.activeElement===o&&(n.focus(),s.preventDefault())}};e.addEventListener("keydown",r)}window.hidePopup=v;function q(){const e=document.createElement("div");e.className="search-container collapsed",e.innerHTML=`
    <button 
      id="search-toggle" 
      class="search-toggle-btn" 
      aria-label="Toggle search"
      type="button"
      title="Search timeline"
    >
      🔍
    </button>
    <div class="search-expandable">
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
    </div>
  `;const t=document.querySelector(".header");t.insertBefore(e,t.lastElementChild);const n=document.getElementById("search-toggle"),o=document.getElementById("timeline-search"),r=document.getElementById("clear-search"),s=document.getElementById("search-results");n.addEventListener("click",()=>{e.classList.toggle("collapsed"),e.classList.contains("collapsed")||o.focus()});const a=D(u=>{b(u,s)},300);o.addEventListener("input",u=>{const f=u.target.value.trim();r.style.display=f?"block":"none",a(f)}),r.addEventListener("click",()=>{o.value="",r.style.display="none",b("",s),o.focus()}),o.addEventListener("keydown",u=>{u.key==="Escape"&&(o.value="",r.style.display="none",b("",s))})}function b(e,t){const n=document.querySelectorAll(".decade-data");if(!e){n.forEach(s=>{s.style.display="",s.classList.remove("search-result")}),t.textContent="";return}const o=e.toLowerCase();let r=0;n.forEach(s=>{const a=s.getAttribute("data-searchable");a&&a.includes(o)?(s.style.display="",s.classList.add("search-result"),r++):(s.style.display="none",s.classList.remove("search-result"))}),r===0?(t.textContent="No results found",t.className="search-results no-results"):(t.textContent=`${r} result${r!==1?"s":""} found`,t.className="search-results has-results")}function j(){if(!localStorage.getItem("timeline-theme")){const e=window.matchMedia("(prefers-color-scheme: dark)").matches;y("theme",e?"dark":"light")}document.documentElement.setAttribute("data-theme",d.theme),K(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{if(!localStorage.getItem("timeline-theme")){const t=e.matches?"dark":"light";y("theme",t),document.documentElement.setAttribute("data-theme",t);const n=document.getElementById("theme-toggle");n&&S(n)}})}function K(){const e=document.createElement("button");e.id="theme-toggle",e.className="theme-toggle",e.setAttribute("aria-label","Toggle theme"),e.setAttribute("type","button"),e.title=d.theme==="dark"?"Switch to light mode":"Switch to dark mode",S(e),e.addEventListener("click",Y),document.body.appendChild(e)}function Y(){const e=d.theme==="dark"?"light":"dark";y("theme",e);const t=document.getElementById("theme-toggle");S(t),t.title=e==="dark"?"Switch to light mode":"Switch to dark mode",document.body.classList.add("theme-transitioning"),setTimeout(()=>{document.body.classList.remove("theme-transitioning")},300)}function S(e){e.innerHTML=d.theme==="dark"?'<span aria-hidden="true">☀️</span><span class="sr-only">Light mode</span>':'<span aria-hidden="true">🌙</span><span class="sr-only">Dark mode</span>'}function z(e){e.addEventListener("wheel",t=>{t.deltaY!==0&&(t.preventDefault(),e.scrollLeft+=t.deltaY)}),document.addEventListener("keydown",t=>{if(t.target.tagName==="INPUT"||t.target.tagName==="TEXTAREA")return;const n=300;switch(t.key){case"ArrowLeft":e.scrollLeft-=n,t.preventDefault();break;case"ArrowRight":e.scrollLeft+=n,t.preventDefault();break;case"Home":e.scrollLeft=0,t.preventDefault();break;case"End":e.scrollLeft=e.scrollWidth,t.preventDefault();break}})}function J(e,t){!e||!t||(e.addEventListener("scroll",()=>{E(e,t)}),E(e,t),window.addEventListener("resize",()=>{E(e,t)}))}function E(e,t){const n=e.scrollLeft,o=e.scrollWidth,r=e.clientWidth,s=o-r,a=s>0?n/s:0;if(t.querySelectorAll(".decade-button").length===0)return;const f=t.clientWidth,k=a*(f-50);t.style.setProperty("--indicator-position",`${k}px`)}let L=0,h=!1;function _(){const e=document.querySelector(".header");if(!e||window.innerWidth>768)return;const t=document.getElementById("data-container");t&&(t.addEventListener("scroll",()=>{U(e,t)}),window.addEventListener("resize",()=>{window.innerWidth>768&&(e.classList.remove("header-hidden"),h=!1)}))}function U(e,t){const n=t.scrollTop;n>L&&n>100&&!h?(e.classList.add("header-hidden"),h=!0):n<L-50&&h&&(e.classList.remove("header-hidden"),h=!1),L=n}const I=document.getElementById("decades-container"),p=document.getElementById("data-container");async function $(){try{j(),B(p);const e=await fetch("./data.json");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const t=await e.json();y("data",t);const n=document.createDocumentFragment();t.forEach(o=>{if(o.year%10===0){const r=H(o.year);n.appendChild(r)}}),I.appendChild(n),P(t,p),q(),O(),z(p),J(p,I),_(),document.body.classList.add("loaded")}catch(e){console.error("Error loading timeline data:",e),N(p,e.message)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",$):$();
