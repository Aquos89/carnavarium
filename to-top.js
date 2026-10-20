(function(){
if(document.getElementById("cv-top"))return;
var st=document.createElement("style");
st.textContent="#cv-top{position:fixed;right:clamp(14px,2.5vw,32px);bottom:clamp(14px,2.5vw,32px);z-index:90;display:flex;align-items:center;gap:8px;height:48px;padding:0 16px 0 14px;border-radius:999px;border:1px solid var(--ink,#1c1a16);background:var(--pink,#e85898);color:var(--ink,#1c1a16);font-family:var(--mono,ui-monospace,monospace);font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;cursor:pointer;box-shadow:0 8px 20px -10px rgba(28,26,22,.6);opacity:0;transform:translateY(12px);pointer-events:none;transition:opacity .3s,transform .3s,background .2s}#cv-top.on{opacity:1;transform:none;pointer-events:auto}#cv-top:hover{background:var(--ink,#1c1a16);color:var(--canvas,#f1e9d6)}#cv-top i{font-style:normal;font-size:1rem;line-height:1}#cv-top [data-l]{display:none}html[data-lang=es] #cv-top [data-l=es],html[data-lang=en] #cv-top [data-l=en],html[data-lang=de] #cv-top [data-l=de],html:not([data-lang]) #cv-top [data-l=en]{display:inline}@media(max-width:620px){#cv-top{width:48px;padding:0;justify-content:center}#cv-top [data-l]{display:none!important}}@media print{#cv-top{display:none}}";
document.head.appendChild(st);
var b=document.createElement("button");
b.id="cv-top";b.type="button";
b.setAttribute("aria-label","Ir arriba / Back to top / Nach oben");
b.innerHTML='<i aria-hidden="true">↑</i><span data-l="es">Arriba</span><span data-l="en">Top</span><span data-l="de">Nach oben</span>';
b.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
document.body.appendChild(b);
function u(){b.classList.toggle("on",window.scrollY>window.innerHeight*.6)}
window.addEventListener("scroll",u,{passive:true});u();
})();
