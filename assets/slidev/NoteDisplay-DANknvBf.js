import{d as b,y as q,t as M,D as H,ac as B,b as m,i as p,e as L,x as A,n as T,o as d}from"../modules/vue-BvuM7Cwn.js";import{C as D,_ as $}from"../index-C1QiNL_W.js";const I=["innerHTML"],P=["textContent"],R=["textContent"],k="slidev-note-fade",r="slidev-note-click-mark",K=b({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1},clicksContext:{type:null,required:!1},autoScroll:{type:Boolean,required:!1}},emits:["markerDblclick","markerClick"],setup(w,{emit:E}){const n=w,v=E,g=q(()=>{var o;return n.clicksContext!=null&&((o=n.noteHtml)==null?void 0:o.includes("slidev-note-click-mark"))}),a=M(null);function y(){var S;if(!a.value||!g.value)return;const o=Array.from(a.value.querySelectorAll(`.${r}`)),l=+(((S=n.clicksContext)==null?void 0:S.current)??D),c=l<0||l>=D,h=new Set;function C(e){!e||e===a.value||(h.add(e),e.parentElement&&C(e.parentElement))}const _=new Map;for(const e of o){const t=e.parentElement,s=Number(e.dataset.clicks);_.set(s,e),C(t),Array.from(t.childNodes).forEach(f=>{if(f.nodeType===3){const x=document.createElement("span");x.textContent=f.textContent,t.insertBefore(x,f),f.remove()}})}const N=Array.from(a.value.querySelectorAll("*"));let i=0;const u=new Map;for(const e of N)u.has(i)||u.set(i,[]),u.get(i).push(e),e.classList.contains(r)&&(i=Number(e.dataset.clicks)||i+1);for(const[e,t]of u)c?t.forEach(s=>s.classList.remove(k)):t.forEach(s=>s.classList.toggle(k,h.has(s)?!1:e!==l));for(const[e,t]of _)t.classList.remove(k),t.classList.toggle(`${r}-past`,c?!1:e<l),t.classList.toggle(`${r}-active`,c?!1:e===l),t.classList.toggle(`${r}-next`,c?!1:e===l+1),t.classList.toggle(`${r}-future`,c?!1:e>l+1),t.ondblclick=s=>{v("markerDblclick",s,e),!s.defaultPrevented&&(n.clicksContext.current=e,s.stopPropagation(),s.stopImmediatePropagation())},t.onclick=s=>{v("markerClick",s,e)},n.autoScroll&&e===l&&t.scrollIntoView({block:"center",behavior:"smooth"})}return H(()=>{var o;return[n.noteHtml,(o=n.clicksContext)==null?void 0:o.current]},()=>{T(()=>{y()})},{immediate:!0}),B(()=>{y()}),(o,l)=>o.noteHtml?(d(),m("div",{key:0,ref_key:"noteDisplay",ref:a,class:p(["prose overflow-auto outline-none slidev-note",[n.class,g.value?"slidev-note-with-clicks":""]]),innerHTML:o.noteHtml},null,10,I)):o.note?(d(),m("div",{key:1,class:p(["prose overflow-auto outline-none slidev-note",n.class])},[L("p",{textContent:A(o.note)},null,8,P)],2)):(d(),m("div",{key:2,class:p(["prose overflow-auto outline-none opacity-50 italic select-none slidev-note",n.class])},[L("p",{textContent:A(n.placeholder||"No notes.")},null,8,R)],2))}}),F=$(K,[["__file","C:/Users/20113/AppData/Roaming/npm/node_modules/@slidev/cli/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{F as N};
