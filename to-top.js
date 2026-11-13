(function(){
if(document.getElementById("cv-top"))return;
var st=document.createElement("style");
st.textContent="#cv-top{position:fixed;right:clamp(14px,2.5vw,32px);bottom:clamp(14px,2.5vw,32px);z-index:90;width:60px;height:60px;padding:0;border:0;border-radius:50%;background:var(--canvas,#f1e9d6);cursor:pointer;box-shadow:0 10px 24px -12px rgba(28,26,22,.55);opacity:0;transform:translateY(14px) scale(.9);pointer-events:none;transition:opacity .3s,transform .3s}"+
"#cv-top.on{opacity:1;transform:none;pointer-events:auto}"+
"#cv-top svg.ring{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg)}"+
"#cv-top .trk{fill:none;stroke:var(--ink,#1c1a16);stroke-width:1.2}"+
"#cv-top .prg{fill:none;stroke:var(--pink,#e85898);stroke-width:3.2;stroke-linecap:round;transition:stroke-dashoffset .15s linear}"+
"#cv-top img{position:absolute;left:50%;top:50%;width:34px;height:34px;margin:-19px 0 0 -17px;transition:transform .45s cubic-bezier(.16,.84,.3,1)}"+
"#cv-top .up{position:absolute;right:-3px;top:-3px;width:22px;height:22px;border-radius:50%;background:var(--ink,#1c1a16);color:var(--canvas,#f1e9d6);font:600 12px/22px var(--mono,ui-monospace,monospace);text-align:center;transition:background .2s,color .2s,transform .3s}"+
"#cv-top .tip{position:absolute;right:calc(100% + 10px);top:50%;transform:translate(6px,-50%);white-space:nowrap;background:var(--ink,#1c1a16);color:var(--canvas,#f1e9d6);font-family:var(--mono,ui-monospace,monospace);font-size:.62rem;letter-spacing:.16em;text-transform:uppercase;padding:6px 10px;border-radius:3px;opacity:0;pointer-events:none;transition:opacity .2s,transform .2s}"+
"#cv-top:hover img,#cv-top:focus-visible img{transform:translateY(-6px)}"+
"#cv-top:hover .up,#cv-top:focus-visible .up{background:var(--pink,#e85898);color:var(--ink,#1c1a16);transform:translateY(-2px)}"+
"#cv-top:hover .tip,#cv-top:focus-visible .tip{opacity:1;transform:translate(0,-50%)}"+
"#cv-top [data-l]{display:none}html[data-lang=es] #cv-top [data-l=es],html[data-lang=en] #cv-top [data-l=en],html[data-lang=de] #cv-top [data-l=de],html:not([data-lang]) #cv-top [data-l=en]{display:inline}"+
"@media(max-width:620px){#cv-top{width:52px;height:52px}#cv-top img{width:30px;height:30px;margin:-17px 0 0 -15px}#cv-top .tip{display:none}}"+
"@media(prefers-reduced-motion:reduce){#cv-top,#cv-top img,#cv-top .prg{transition:none}}@media print{#cv-top{display:none}}";
document.head.appendChild(st);
var b=document.createElement("button");
b.id="cv-top";b.type="button";
b.setAttribute("aria-label","Ir arriba / Back to top / Nach oben");
var C=2*Math.PI*28;
b.innerHTML='<svg class="ring" viewBox="0 0 60 60" aria-hidden="true"><circle class="trk" cx="30" cy="30" r="29.2"/><circle class="prg" cx="30" cy="30" r="28" stroke-dasharray="'+C.toFixed(2)+'" stroke-dashoffset="'+C.toFixed(2)+'"/></svg><img src="images/logo-mark.png" alt="" aria-hidden="true"><span class="up" aria-hidden="true">↑</span><span class="tip"><span data-l="es">Volver arriba</span><span data-l="en">Back to top</span><span data-l="de">Nach oben</span></span>';
b.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
document.body.appendChild(b);
var prg=b.querySelector(".prg");
function u(){var y=window.scrollY,h=document.documentElement.scrollHeight-window.innerHeight;b.classList.toggle("on",y>window.innerHeight*.6);prg.style.strokeDashoffset=(C*(1-(h>0?Math.min(1,y/h):0))).toFixed(2)}
window.addEventListener("scroll",u,{passive:true});window.addEventListener("resize",u);u();
})();

/* Encabezado de celular/tablet igual al de la portada: barra oscura con idiomas + logo y menú ☰ */
(function(){
if(document.getElementById("cv-mh-css"))return;
var css=document.createElement("style");css.id="cv-mh-css";
css.textContent=".mh-util,.mh-toggle,.nav-links .mh-cta{display:none}@media(max-width:980px){"+
".mh-util{display:block;position:sticky;top:0;z-index:49;height:32px;background:var(--ink,#1c1a16)}"+
".legal-nav{top:32px!important;background:var(--canvas,#f1e9d6)!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important}"+
".legal-nav .row{position:relative;height:62px!important}"+
".legal-nav .nav-links,.legal-nav .nav-sp,.legal-nav a.back{display:none!important}"+
".legal-nav .lang-sw{position:fixed!important;top:16px;right:var(--gutter,20px);transform:translateY(-50%);z-index:61;display:flex!important;gap:2px;border:1px solid var(--canvas,#f1e9d6)!important;border-radius:999px;padding:2px!important;background:var(--ink,#1c1a16)}"+
".legal-nav .lang-sw button{font-family:var(--mono,monospace)!important;font-size:.62rem!important;letter-spacing:.14em;text-transform:uppercase;background:none!important;border:0;color:var(--canvas,#f1e9d6)!important;opacity:.7;padding:3px 9px!important;border-radius:999px;cursor:pointer}"+
".legal-nav .lang-sw button[aria-pressed=true]{background:var(--canvas,#f1e9d6)!important;color:var(--ink,#1c1a16)!important;opacity:1}"+
".mh-toggle{display:inline-flex;width:44px;height:44px;border-radius:50%;border:1px solid var(--rule,#cfc4ab);background:none;flex-direction:column;align-items:center;justify-content:center;gap:5px;flex:none;margin-left:auto;cursor:pointer;padding:0}"+
".mh-toggle span{display:block;width:18px;height:1.5px;background:var(--ink,#1c1a16);transition:transform .2s,opacity .2s}"+
".legal-nav.mh-open .mh-toggle span:nth-child(1){transform:translateY(6.5px) rotate(45deg)}.legal-nav.mh-open .mh-toggle span:nth-child(2){opacity:0}.legal-nav.mh-open .mh-toggle span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg)}"+
".legal-nav.mh-open .nav-links{display:flex!important;flex-direction:column;align-items:stretch;gap:0;position:absolute;top:100%;left:calc(var(--gutter,20px) * -1);right:calc(var(--gutter,20px) * -1);background:var(--canvas,#f1e9d6);border-bottom:1px solid var(--rule,#cfc4ab);box-shadow:0 18px 30px -18px rgba(0,0,0,.25);padding:8px var(--gutter,20px) 20px;max-height:calc(100svh - 100px);overflow-y:auto;font-family:var(--mono,monospace);letter-spacing:.16em;text-transform:uppercase}"+
".legal-nav.mh-open .nav-links a{padding:15px 0;border-bottom:1px solid var(--rule,#cfc4ab);font-size:.8rem}"+
".legal-nav.mh-open .nav-links a.mh-cta{display:flex;justify-content:center;gap:8px;margin-top:16px;padding:14px 18px;border:0;border-radius:999px;background:var(--ink,#1c1a16);color:var(--canvas,#f1e9d6)}"+
"}";
document.head.appendChild(css);
function init(nav){
 if(nav.dataset.mh)return;nav.dataset.mh="1";
 var row=nav.querySelector(".row")||nav.firstElementChild,links=nav.querySelector(".nav-links");if(!row||!links)return;
 var u=document.createElement("div");u.className="mh-util";u.setAttribute("aria-hidden","true");nav.parentNode.insertBefore(u,nav);
 var tri=!!nav.querySelector(".lang-sw"),cta=document.createElement("a");cta.className="mh-cta";cta.href="support.html";
 cta.innerHTML=tri?'<span data-l="es">Apoya el proyecto</span><span data-l="en">Support the project</span><span data-l="de">Projekt unterstützen</span> <span>→</span>':'Projekt unterstützen <span>→</span>';
 if(!/apoyar\.html/.test(location.pathname))links.appendChild(cta);
 var b=document.createElement("button");b.type="button";b.className="mh-toggle";b.setAttribute("aria-expanded","false");b.setAttribute("aria-label","Menú / Menu / Menü");b.innerHTML="<span></span><span></span><span></span>";row.appendChild(b);
 function set(o){nav.classList.toggle("mh-open",o);b.setAttribute("aria-expanded",o?"true":"false")}
 b.addEventListener("click",function(){set(!nav.classList.contains("mh-open"))});
 links.addEventListener("click",function(e){if(e.target.closest("a"))set(false)});
 document.addEventListener("keydown",function(e){if(e.key==="Escape")set(false)});
 document.addEventListener("click",function(e){if(!nav.contains(e.target))set(false)});
 window.addEventListener("resize",function(){if(window.innerWidth>980)set(false)});
}
function go(){var n=document.querySelector("nav.legal-nav");if(n){init(n);return true}return false}
if(!go()){var mo=new MutationObserver(function(){if(go())mo.disconnect()});mo.observe(document.body,{childList:true,subtree:true});setTimeout(function(){mo.disconnect()},15000)}
})();
