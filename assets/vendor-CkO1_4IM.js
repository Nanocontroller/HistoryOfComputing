const s="./images";function a(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function r(t,e,n=""){const o=s+t;return`
  <div class='image-container'>
    <img class="${e} zoom-image" src="${o}" alt="${a(n)}" loading="lazy">
  </div>
  `}function u(t,e){let n;return function(...i){const c=()=>{clearTimeout(n),t(...i)};clearTimeout(n),n=setTimeout(c,e)}}function l(t,e="smooth"){t&&(t.scrollIntoView({behavior:e,block:"start",inline:"start"}),t.focus())}export{u as d,a as e,r as g,l as s};
