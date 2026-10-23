/* Carnavarium — "minutes left" reading indicator for articles & specials */
(function(){
var L={es:"min faltan",en:"min left",de:"Min. übrig"};
var css='.read-left{position:fixed;right:clamp(14px,2vw,28px);top:50%;z-index:40;display:flex;flex-direction:column;align-items:center;gap:8px;padding:12px 10px;border-radius:999px;background:var(--ink);color:var(--canvas);font-family:var(--mono);text-align:center;box-shadow:0 6px 20px rgba(28,26,22,.18);opacity:0;transform:translate(16px,-50%);transition:opacity .35s,transform .35s;pointer-events:none}'+
'.read-left.on{opacity:1;transform:translate(0,-50%)}.read-left b{font-size:1.15rem;font-weight:600;line-height:1}'+
'.read-left .rl-t{font-size:.56rem;letter-spacing:.14em;text-transform:uppercase;line-height:1.3;max-width:6ch}'+
'.read-left .bar{width:3px;height:64px;border-radius:2px;background:rgba(241,233,214,.25);position:relative;overflow:hidden}'+
'.read-left .bar i{position:absolute;left:0;right:0;top:0;height:var(--p,0%);background:var(--amber)}'+
'@media(max-width:720px){.read-left{top:auto;bottom:16px;flex-direction:row;padding:8px 14px;transform:translateY(16px)}.read-left.on{transform:none}.read-left .bar{display:none}.read-left .rl-t{max-width:none}}';
function init(){
var st=document.createElement("style");st.textContent=css;document.head.appendChild(st);
var el=document.createElement("div");el.className="read-left";el.setAttribute("aria-hidden","true");
el.innerHTML='<b></b><span class="rl-t"></span><div class="bar"><i></i></div>';document.body.appendChild(el);
var n=el.querySelector("b"),t=el.querySelector(".rl-t"),bar=el.querySelector("i");
var head=document.querySelector("body > header, .art-hero, .art-head"),end=document.querySelector(".art-end, .sp-end, footer");
var T=1;
function words(x){return x?(x.innerText||"").split(/\s+/).filter(Boolean).length:0}
function count(){
  var w=words(document.body)-words(head)-words(document.querySelector("footer"));
  [].forEach.call(document.querySelectorAll("body > nav, .read-left, .art-refs"),function(x){w-=words(x)});
  var media=document.querySelectorAll("main iframe, main figure img, section iframe").length;
  T=Math.max(1,Math.round(w/230+media*.25));
  var l=document.documentElement.getAttribute("data-lang")||"en";t.textContent=L[l]||L.en;up();
}
function up(){
  var s=head?head.getBoundingClientRect().bottom+scrollY:0,e=end?end.getBoundingClientRect().top+scrollY:document.body.scrollHeight;
  var span=Math.max(1,e-s-innerHeight*.6),done=Math.min(1,Math.max(0,(scrollY+innerHeight*.4-s)/span));
  n.textContent=Math.max(1,Math.ceil(T*(1-done)));bar.style.setProperty("--p",(done*100)+"%");
  el.classList.toggle("on",scrollY+innerHeight*.65>s&&done<.995);
}
addEventListener("scroll",up,{passive:true});addEventListener("resize",count);
new MutationObserver(count).observe(document.documentElement,{attributes:true,attributeFilter:["data-lang"]});
count();setTimeout(count,1500);
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
