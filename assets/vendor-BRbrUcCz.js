const c="https://raw.githubusercontent.com/Nanocontroller/HistoryOfComputing/main/images";function a(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function u(t,e,o=""){const n=c+(r=>r.replace(/\.[^.]+$/,""))(t),s=c+t;return`
  <div class='image-container'>
    <picture>
      <source media="(max-width:480px)" srcset="${n}@0.25x.jpg">
      <source media="(max-width:992px)" srcset="${n}@0.5x.jpg">
      <img class="${e} zoom-image" src="${s}" alt="${a(o)}" loading="lazy">
    </picture>
  </div>
  `}function m(t,e){let o;return function(...n){const s=()=>{clearTimeout(o),t(...n)};clearTimeout(o),o=setTimeout(s,e)}}function l(t,e="smooth"){t&&(t.scrollIntoView({behavior:e,block:"start",inline:"start"}),t.focus())}export{m as d,a as e,u as g,l as s};
