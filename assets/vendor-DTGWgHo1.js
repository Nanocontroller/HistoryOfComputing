const c="./images";function a(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function u(e,t,o=""){const n=c+(r=>r.replace(/\.[^.]+$/,""))(e),s=c+e;return`
  <div class='image-container'>
    <picture>
      <source media="(max-width:480px)" srcset="${n}@0.25x.jpg">
      <source media="(max-width:992px)" srcset="${n}@0.5x.jpg">
      <img class="${t} zoom-image" src="${s}" alt="${a(o)}" loading="lazy">
    </picture>
  </div>
  `}function m(e,t){let o;return function(...n){const s=()=>{clearTimeout(o),e(...n)};clearTimeout(o),o=setTimeout(s,t)}}function l(e,t="smooth"){e&&(e.scrollIntoView({behavior:t,block:"start",inline:"start"}),e.focus())}export{m as d,a as e,u as g,l as s};
