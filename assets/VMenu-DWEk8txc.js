import{p as L,ag as M,ah as S,b7 as O,s as K,ai as U,ak as B,bi as N,az as j,G as w,r as z,v as F,bj as E,am as H,T as G,bk as J,bl as W,bm as $,ay as q,bn as k,ar as Q,b1 as A,av as V,y as X,g as P,b as h,J as Y,aw as Z,bo as _,bp as b}from"./index-BAP3-OWr.js";const ee=L({id:String,submenu:Boolean,...M(S({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",location:void 0,openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:O}}),["absolute"])},"VMenu"),ae=K()({name:"VMenu",props:ee(),emits:{"update:modelValue":a=>!0},setup(a,p){let{slots:c}=p;const s=U(a,"modelValue"),{scopeId:C}=B(),{isRtl:f}=N(),d=j(),m=w(()=>a.id||`v-menu-${d}`),o=z(),n=F(E,null),v=H(new Set);G(E,{register(){v.value.add(d)},unregister(){v.value.delete(d)},closeParents(e){setTimeout(()=>{var t;!v.value.size&&!a.persistent&&(e==null||(t=o.value)!=null&&t.contentEl&&!J(e,o.value.contentEl))&&(s.value=!1,n==null||n.closeParents())},40)}}),W(()=>{n==null||n.unregister(),document.removeEventListener("focusin",g)}),$(()=>s.value=!1);async function g(e){var u,r,i;const t=e.relatedTarget,l=e.target;await q(),s.value&&t!==l&&((u=o.value)!=null&&u.contentEl)&&((r=o.value)!=null&&r.globalTop)&&![document,o.value.contentEl].includes(l)&&!o.value.contentEl.contains(l)&&((i=k(o.value.contentEl)[0])==null||i.focus())}Q(s,e=>{e?(n==null||n.register(),A&&document.addEventListener("focusin",g,{once:!0})):(n==null||n.unregister(),A&&document.removeEventListener("focusin",g))},{immediate:!0});function D(e){n==null||n.closeParents(e)}function T(e){var t,l,u,r,i;if(!a.disabled)if(e.key==="Tab"||e.key==="Enter"&&!a.closeOnContentClick){if(e.key==="Enter"&&(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement&&e.target.closest("form")))return;e.key==="Enter"&&e.preventDefault(),_(k((t=o.value)==null?void 0:t.contentEl,!1),e.shiftKey?"prev":"next",I=>I.tabIndex>=0)||(s.value=!1,(u=(l=o.value)==null?void 0:l.activatorEl)==null||u.focus())}else a.submenu&&e.key===(f.value?"ArrowRight":"ArrowLeft")&&(s.value=!1,(i=(r=o.value)==null?void 0:r.activatorEl)==null||i.focus())}function y(e){var l;if(a.disabled)return;const t=(l=o.value)==null?void 0:l.contentEl;t&&s.value?e.key==="ArrowDown"?(e.preventDefault(),e.stopImmediatePropagation(),b(t,"next")):e.key==="ArrowUp"?(e.preventDefault(),e.stopImmediatePropagation(),b(t,"prev")):a.submenu&&(e.key===(f.value?"ArrowRight":"ArrowLeft")?s.value=!1:e.key===(f.value?"ArrowLeft":"ArrowRight")&&(e.preventDefault(),b(t,"first"))):(a.submenu?e.key===(f.value?"ArrowLeft":"ArrowRight"):["ArrowDown","ArrowUp"].includes(e.key))&&(s.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>y(e))))}const x=w(()=>V({"aria-haspopup":"menu","aria-expanded":String(s.value),"aria-owns":m.value,onKeydown:y},a.activatorProps));return X(()=>{const e=P.filterProps(a);return h(P,V({ref:o,id:m.value,class:["v-menu",a.class],style:a.style},e,{modelValue:s.value,"onUpdate:modelValue":t=>s.value=t,absolute:!0,activatorProps:x.value,location:a.location??(a.submenu?"end":"bottom"),"onClick:outside":D,onKeydown:T},C),{activator:c.activator,default:function(){for(var t=arguments.length,l=new Array(t),u=0;u<t;u++)l[u]=arguments[u];return h(Y,{root:"VMenu"},{default:()=>{var r;return[(r=c.default)==null?void 0:r.call(c,...l)]}})}})}),Z({id:m,ΨopenChildren:v},o)}});export{ae as V};
