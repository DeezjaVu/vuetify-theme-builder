import{N as H,bx as $e,by as qe,ah as ie,bo as Ne,ai as De,S as Re,R as Be,W as J,_ as Le,bq as Ge,al as je,am as ae,a9 as le,bz as ye,b as i,ad as B,ap as ne,bA as ke,bB as We,aq as Qe,as as Xe,bl as Je,Q as Ze,bC as Ye,aL as et,bj as tt,ay as Oe,bD as lt,$ as at,at as nt,av as ot,a0 as st,aM as ut,X as te,bm as it,bE as ct,i as S,I as Ve,bk as rt,aa as dt,bF as vt,az as Y,ac as ee,J as ft,F as X,aZ as me,T as he,U as mt,bG as Fe,Z as ht,aQ as pt,aC as gt,r as Q,a2 as bt,bH as Ce,a1 as U,bn as yt,bI as kt,bJ as Vt,bK as Ct,ag as pe,bL as Ie,a7 as N,b3 as oe,g as Pe,ae as Me,bM as It,bN as de,bO as Pt,bP as we,aV as _e,ba as wt,a6 as Se,af as Ue,bQ as ve,bR as St,ar as xt,bS as At,au as Tt,a4 as Et,o as Dt,bT as Rt,aO as ue,bU as Bt,b0 as Lt,aU as Ot,b1 as Ft,aj as Mt,b2 as _t,G as xe,k as Ut,n as Ae,b4 as Ht,p as zt,b6 as Te,b7 as Ee}from"./index-Cy5virOR.js";const He=Symbol.for("vuetify:v-chip-group"),Kt=H({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:$e},...qe(),...ie(),...Ne({selectedClass:"v-chip--selected"}),...De(),...Re(),...Be({variant:"tonal"})},"VChipGroup");J()({name:"VChipGroup",props:Kt(),emits:{"update:modelValue":e=>!0},setup(e,f){let{slots:n}=f;const{themeClasses:s}=Le(e),{isSelected:o,select:m,next:p,prev:c,selected:a}=Ge(e,He);return je({VChip:{color:ae(e,"color"),disabled:ae(e,"disabled"),filter:ae(e,"filter"),variant:ae(e,"variant")}}),le(()=>{const d=ye.filterProps(e);return i(ye,B(d,{class:["v-chip-group",{"v-chip-group--column":e.column},s.value,e.class],style:e.style}),{default:()=>{var C;return[(C=n.default)==null?void 0:C.call(n,{isSelected:o,select:m,next:p,prev:c,selected:a.value})]}})}),{}}});const $t=H({activeClass:String,appendAvatar:String,appendIcon:ne,closable:Boolean,closeIcon:{type:ne,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:ne,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ke(),onClickOnce:ke(),...We(),...ie(),...Qe(),...Xe(),...Je(),...Ze(),...Ye(),...et(),...De({tag:"span"}),...Re(),...Be({variant:"tonal"})},"VChip"),qt=J()({name:"VChip",directives:{Ripple:tt},props:$t(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,f){let{attrs:n,emit:s,slots:o}=f;const{t:m}=Oe(),{borderClasses:p}=lt(e),{colorClasses:c,colorStyles:a,variantClasses:d}=at(e),{densityClasses:C}=nt(e),{elevationClasses:E}=ot(e),{roundedClasses:v}=st(e),{sizeClasses:I}=ut(e),{themeClasses:A}=Le(e),w=te(e,"modelValue"),l=it(e,He,!1),r=ct(e,n),b=S(()=>e.link!==!1&&r.isLink.value),k=S(()=>!e.disabled&&e.link!==!1&&(!!l||e.link||r.isClickable.value)),V=S(()=>({"aria-label":m(e.closeLabel),onClick(g){g.preventDefault(),g.stopPropagation(),w.value=!1,s("click:close",g)}}));function D(g){var M;s("click",g),k.value&&((M=r.navigate)==null||M.call(r,g),l==null||l.toggle())}function G(g){(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),D(g))}return()=>{const g=r.isLink.value?"a":e.tag,M=!!(e.appendIcon||e.appendAvatar),z=!!(M||o.append),_=!!(o.close||e.closable),K=!!(o.filter||e.filter)&&l,j=!!(e.prependIcon||e.prependAvatar),$=!!(j||o.prepend),W=!l||l.isSelected.value;return w.value&&Ve(i(g,B({class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":k.value,"v-chip--filter":K,"v-chip--pill":e.pill},A.value,p.value,W?c.value:void 0,C.value,E.value,v.value,I.value,d.value,l==null?void 0:l.selectedClass.value,e.class],style:[W?a.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,tabindex:k.value?0:void 0,onClick:D,onKeydown:k.value&&!b.value&&G},r.linkProps),{default:()=>{var L;return[dt(k.value,"v-chip"),K&&i(vt,{key:"filter"},{default:()=>[Ve(i("div",{class:"v-chip__filter"},[o.filter?i(ee,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):i(Y,{key:"filter-icon",icon:e.filterIcon},null)]),[[ft,l.isSelected.value]])]}),$&&i("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?i(ee,{key:"prepend-defaults",disabled:!j,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):i(X,null,[e.prependIcon&&i(Y,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&i(me,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),i("div",{class:"v-chip__content","data-no-activator":""},[((L=o.default)==null?void 0:L.call(o,{isSelected:l==null?void 0:l.isSelected.value,selectedClass:l==null?void 0:l.selectedClass.value,select:l==null?void 0:l.select,toggle:l==null?void 0:l.toggle,value:l==null?void 0:l.value.value,disabled:e.disabled}))??e.text]),z&&i("div",{key:"append",class:"v-chip__append"},[o.append?i(ee,{key:"append-defaults",disabled:!M,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):i(X,null,[e.appendIcon&&i(Y,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&i(me,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),_&&i("button",B({key:"close",class:"v-chip__close",type:"button","data-testid":"close-chip"},V.value),[o.close?i(ee,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):i(Y,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[rt("ripple"),k.value&&e.ripple,null]])}}}),Nt=H({id:String,submenu:Boolean,...he(mt({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",location:void 0,openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Fe}}),["absolute"])},"VMenu"),Gt=J()({name:"VMenu",props:Nt(),emits:{"update:modelValue":e=>!0},setup(e,f){let{slots:n}=f;const s=te(e,"modelValue"),{scopeId:o}=ht(),{isRtl:m}=pt(),p=gt(),c=S(()=>e.id||`v-menu-${p}`),a=Q(),d=bt(Ce,null),C=U(new Set);yt(Ce,{register(){C.value.add(p)},unregister(){C.value.delete(p)},closeParents(l){setTimeout(()=>{var r;!C.value.size&&!e.persistent&&(l==null||(r=a.value)!=null&&r.contentEl&&!kt(l,a.value.contentEl))&&(s.value=!1,d==null||d.closeParents())},40)}}),Vt(()=>{d==null||d.unregister(),document.removeEventListener("focusin",E)}),Ct(()=>s.value=!1);async function E(l){var k,V,D;const r=l.relatedTarget,b=l.target;await pe(),s.value&&r!==b&&((k=a.value)!=null&&k.contentEl)&&((V=a.value)!=null&&V.globalTop)&&![document,a.value.contentEl].includes(b)&&!a.value.contentEl.contains(b)&&((D=Ie(a.value.contentEl)[0])==null||D.focus())}N(s,l=>{l?(d==null||d.register(),oe&&document.addEventListener("focusin",E,{once:!0})):(d==null||d.unregister(),oe&&document.removeEventListener("focusin",E))},{immediate:!0});function v(l){d==null||d.closeParents(l)}function I(l){var r,b,k,V,D;if(!e.disabled)if(l.key==="Tab"||l.key==="Enter"&&!e.closeOnContentClick){if(l.key==="Enter"&&(l.target instanceof HTMLTextAreaElement||l.target instanceof HTMLInputElement&&l.target.closest("form")))return;l.key==="Enter"&&l.preventDefault(),It(Ie((r=a.value)==null?void 0:r.contentEl,!1),l.shiftKey?"prev":"next",g=>g.tabIndex>=0)||(s.value=!1,(k=(b=a.value)==null?void 0:b.activatorEl)==null||k.focus())}else e.submenu&&l.key===(m.value?"ArrowRight":"ArrowLeft")&&(s.value=!1,(D=(V=a.value)==null?void 0:V.activatorEl)==null||D.focus())}function A(l){var b;if(e.disabled)return;const r=(b=a.value)==null?void 0:b.contentEl;r&&s.value?l.key==="ArrowDown"?(l.preventDefault(),l.stopImmediatePropagation(),de(r,"next")):l.key==="ArrowUp"?(l.preventDefault(),l.stopImmediatePropagation(),de(r,"prev")):e.submenu&&(l.key===(m.value?"ArrowRight":"ArrowLeft")?s.value=!1:l.key===(m.value?"ArrowLeft":"ArrowRight")&&(l.preventDefault(),de(r,"first"))):(e.submenu?l.key===(m.value?"ArrowLeft":"ArrowRight"):["ArrowDown","ArrowUp"].includes(l.key))&&(s.value=!0,l.preventDefault(),setTimeout(()=>setTimeout(()=>A(l))))}const w=S(()=>B({"aria-haspopup":"menu","aria-expanded":String(s.value),"aria-owns":c.value,onKeydown:A},e.activatorProps));return le(()=>{const l=Pe.filterProps(e);return i(Pe,B({ref:a,id:c.value,class:["v-menu",e.class],style:e.style},l,{modelValue:s.value,"onUpdate:modelValue":r=>s.value=r,absolute:!0,activatorProps:w.value,location:e.location??(e.submenu?"end":"bottom"),"onClick:outside":v,onKeydown:I},o),{activator:n.activator,default:function(){for(var r=arguments.length,b=new Array(r),k=0;k<r;k++)b[k]=arguments[k];return i(ee,{root:"VMenu"},{default:()=>{var V;return[(V=n.default)==null?void 0:V.call(n,...b)]}})}})}),Me({id:c,ΨopenChildren:C},a)}}),jt=H({indeterminate:Boolean,indeterminateIcon:{type:ne,default:"$checkboxIndeterminate"},...Pt({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),Wt=J()({name:"VCheckboxBtn",props:jt(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,f){let{slots:n}=f;const s=te(e,"indeterminate"),o=te(e,"modelValue");function m(a){s.value&&(s.value=!1)}const p=S(()=>s.value?e.indeterminateIcon:e.falseIcon),c=S(()=>s.value?e.indeterminateIcon:e.trueIcon);return le(()=>{const a=he(we.filterProps(e),["modelValue"]);return i(we,B(a,{modelValue:o.value,"onUpdate:modelValue":[d=>o.value=d,m],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:p.value,trueIcon:c.value,"aria-checked":s.value?"mixed":void 0}),n)}),{}}}),Qt=H({renderless:Boolean,...ie()},"VVirtualScrollItem"),Xt=J()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Qt(),emits:{"update:height":e=>!0},setup(e,f){let{attrs:n,emit:s,slots:o}=f;const{resizeRef:m,contentRect:p}=_e(void 0,"border");N(()=>{var c;return(c=p.value)==null?void 0:c.height},c=>{c!=null&&s("update:height",c)}),le(()=>{var c,a;return e.renderless?i(X,null,[(c=o.default)==null?void 0:c.call(o,{itemRef:m})]):i("div",B({ref:m,class:["v-virtual-scroll__item",e.class],style:e.style},n),[(a=o.default)==null?void 0:a.call(o)])})}}),Jt=-1,Zt=1,fe=100,Yt=H({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function el(e,f){const n=wt(),s=U(0);Se(()=>{s.value=parseFloat(e.itemHeight||0)});const o=U(0),m=U(Math.ceil((parseInt(e.height)||n.height.value)/(s.value||16))||1),p=U(0),c=U(0),a=Q(),d=Q();let C=0;const{resizeRef:E,contentRect:v}=_e();Se(()=>{E.value=a.value});const I=S(()=>{var t;return a.value===document.documentElement?n.height.value:((t=v.value)==null?void 0:t.height)||parseInt(e.height)||0}),A=S(()=>!!(a.value&&d.value&&I.value&&s.value));let w=Array.from({length:f.value.length}),l=Array.from({length:f.value.length});const r=U(0);let b=-1;function k(t){return w[t]||s.value}const V=St(()=>{const t=performance.now();l[0]=0;const u=f.value.length;for(let y=1;y<=u-1;y++)l[y]=(l[y-1]||0)+k(y-1);r.value=Math.max(r.value,performance.now()-t)},r),D=N(A,t=>{t&&(D(),C=d.value.offsetTop,V.immediate(),L(),~b&&pe(()=>{oe&&window.requestAnimationFrame(()=>{se(b),b=-1})}))});Ue(()=>{V.clear()});function G(t,u){const y=w[t],P=s.value;s.value=P?Math.min(s.value,u):u,(y!==u||P!==s.value)&&(w[t]=u,V())}function g(t){return t=ve(t,0,f.value.length-1),l[t]||0}function M(t){return tl(l,t)}let z=0,_=0,K=0;N(I,(t,u)=>{u&&(L(),t<u&&requestAnimationFrame(()=>{_=0,L()}))});function j(){if(!a.value||!d.value)return;const t=a.value.scrollTop,u=performance.now();u-K>500?(_=Math.sign(t-z),C=d.value.offsetTop):_=t-z,z=t,K=u,L()}function $(){!a.value||!d.value||(_=0,K=0,L())}let W=-1;function L(){cancelAnimationFrame(W),W=requestAnimationFrame(ce)}function ce(){if(!a.value||!I.value)return;const t=z-C,u=Math.sign(_),y=Math.max(0,t-fe),P=ve(M(y),0,f.value.length),O=t+I.value+fe,h=ve(M(O)+1,P+1,f.value.length);if((u!==Jt||P<o.value)&&(u!==Zt||h>m.value)){const x=g(o.value)-g(P),T=g(h)-g(m.value);Math.max(x,T)>fe?(o.value=P,m.value=h):(P<=0&&(o.value=P),h>=f.value.length&&(m.value=h))}p.value=g(o.value),c.value=g(f.value.length)-g(m.value)}function se(t){const u=g(t);!a.value||t&&!u?b=t:a.value.scrollTop=u}const re=S(()=>f.value.slice(o.value,m.value).map((t,u)=>({raw:t,index:u+o.value})));return N(f,()=>{w=Array.from({length:f.value.length}),l=Array.from({length:f.value.length}),V.immediate(),L()},{deep:!0}),{calculateVisibleItems:L,containerRef:a,markerRef:d,computedItems:re,paddingTop:p,paddingBottom:c,scrollToIndex:se,handleScroll:j,handleScrollend:$,handleItemResize:G}}function tl(e,f){let n=e.length-1,s=0,o=0,m=null,p=-1;if(e[n]<f)return n;for(;s<=n;)if(o=s+n>>1,m=e[o],m>f)n=o-1;else if(m<f)p=o,s=o+1;else return m===f?o:s;return p}const ll=H({items:{type:Array,default:()=>[]},renderless:Boolean,...Yt(),...ie(),...xt()},"VVirtualScroll"),al=J()({name:"VVirtualScroll",props:ll(),setup(e,f){let{slots:n}=f;const s=At("VVirtualScroll"),{dimensionStyles:o}=Tt(e),{calculateVisibleItems:m,containerRef:p,markerRef:c,handleScroll:a,handleScrollend:d,handleItemResize:C,scrollToIndex:E,paddingTop:v,paddingBottom:I,computedItems:A}=el(e,ae(e,"items"));return Et(()=>e.renderless,()=>{function w(){var b,k;const r=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";p.value===document.documentElement?(document[r]("scroll",a,{passive:!0}),document[r]("scrollend",d)):((b=p.value)==null||b[r]("scroll",a,{passive:!0}),(k=p.value)==null||k[r]("scrollend",d))}Dt(()=>{p.value=Rt(s.vnode.el,!0),w(!0)}),Ue(w)}),le(()=>{const w=A.value.map(l=>i(Xt,{key:l.index,renderless:e.renderless,"onUpdate:height":r=>C(l.index,r)},{default:r=>{var b;return(b=n.default)==null?void 0:b.call(n,{item:l.raw,index:l.index,...r})}}));return e.renderless?i(X,null,[i("div",{ref:c,class:"v-virtual-scroll__spacer",style:{paddingTop:ue(v.value)}},null),w,i("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:ue(I.value)}},null)]):i("div",{ref:p,class:["v-virtual-scroll",e.class],onScrollPassive:a,onScrollend:d,style:[o.value,e.style]},[i("div",{ref:c,class:"v-virtual-scroll__container",style:{paddingTop:ue(v.value),paddingBottom:ue(I.value)}},[w])])}),{calculateVisibleItems:m,scrollToIndex:E}}});function nl(e,f){const n=U(!1);let s;function o(c){cancelAnimationFrame(s),n.value=!0,s=requestAnimationFrame(()=>{s=requestAnimationFrame(()=>{n.value=!1})})}async function m(){await new Promise(c=>requestAnimationFrame(c)),await new Promise(c=>requestAnimationFrame(c)),await new Promise(c=>requestAnimationFrame(c)),await new Promise(c=>{if(n.value){const a=N(n,()=>{a(),c()})}else c()})}async function p(c){var C,E;if(c.key==="Tab"&&((C=f.value)==null||C.focus()),!["PageDown","PageUp","Home","End"].includes(c.key))return;const a=(E=e.value)==null?void 0:E.$el;if(!a)return;(c.key==="Home"||c.key==="End")&&a.scrollTo({top:c.key==="Home"?0:a.scrollHeight,behavior:"smooth"}),await m();const d=a.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(c.key==="PageDown"||c.key==="Home"){const v=a.getBoundingClientRect().top;for(const I of d)if(I.getBoundingClientRect().top>=v){I.focus();break}}else{const v=a.getBoundingClientRect().bottom;for(const I of[...d].reverse())if(I.getBoundingClientRect().bottom<=v){I.focus();break}}}return{onScrollPassive:o,onKeydown:p}}const ol=H({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:ne,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Bt({itemChildren:!1})},"Select"),sl=H({...ol(),...he(Lt({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Ot({transition:{component:Fe}})},"VSelect"),il=J()({name:"VSelect",props:sl(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,f){let{slots:n}=f;const{t:s}=Oe(),o=Q(),m=Q(),p=Q(),c=te(e,"menu"),a=S({get:()=>c.value,set:t=>{var u;c.value&&!t&&((u=m.value)!=null&&u.ΨopenChildren.size)||(c.value=t)}}),{items:d,transformIn:C,transformOut:E}=Ft(e),v=te(e,"modelValue",[],t=>C(t===null?[null]:Mt(t)),t=>{const u=E(t);return e.multiple?u:u[0]??null}),I=S(()=>typeof e.counterValue=="function"?e.counterValue(v.value):typeof e.counterValue=="number"?e.counterValue:v.value.length),A=_t(),w=S(()=>v.value.map(t=>t.value)),l=U(!1),r=S(()=>a.value?e.closeText:e.openText);let b="",k;const V=S(()=>e.hideSelected?d.value.filter(t=>!v.value.some(u=>e.valueComparator(u,t))):d.value),D=S(()=>e.hideNoData&&!V.value.length||e.readonly||(A==null?void 0:A.isReadonly.value)),G=S(()=>{var t;return{...e.menuProps,activatorProps:{...((t=e.menuProps)==null?void 0:t.activatorProps)||{},"aria-haspopup":"listbox"}}}),g=Q(),M=nl(g,o);function z(t){e.openOnClear&&(a.value=!0)}function _(){D.value||(a.value=!a.value)}function K(t){Te(t)&&j(t)}function j(t){var O,h;if(!t.key||e.readonly||A!=null&&A.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(t.key)&&t.preventDefault(),["Enter","ArrowDown"," "].includes(t.key)&&(a.value=!0),["Escape","Tab"].includes(t.key)&&(a.value=!1),t.key==="Home"?(O=g.value)==null||O.focus("first"):t.key==="End"&&((h=g.value)==null||h.focus("last"));const u=1e3;if(e.multiple||!Te(t))return;const y=performance.now();y-k>u&&(b=""),b+=t.key.toLowerCase(),k=y;const P=d.value.find(x=>x.title.toLowerCase().startsWith(b));if(P!==void 0){v.value=[P];const x=V.value.indexOf(P);oe&&window.requestAnimationFrame(()=>{var T;x>=0&&((T=p.value)==null||T.scrollToIndex(x))})}}function $(t){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!t.props.disabled)if(e.multiple){const y=v.value.findIndex(O=>e.valueComparator(O.value,t.value)),P=u??!~y;if(~y){const O=P?[...v.value,t]:[...v.value];O.splice(y,1),v.value=O}else P&&(v.value=[...v.value,t])}else{const y=u!==!1;v.value=y?[t]:[],pe(()=>{a.value=!1})}}function W(t){var u;(u=g.value)!=null&&u.$el.contains(t.relatedTarget)||(a.value=!1)}function L(){var t;e.eager&&((t=p.value)==null||t.calculateVisibleItems())}function ce(){var t;l.value&&((t=o.value)==null||t.focus())}function se(t){l.value=!0}function re(t){if(t==null)v.value=[];else if(Ee(o.value,":autofill")||Ee(o.value,":-webkit-autofill")){const u=d.value.find(y=>y.title===t);u&&$(u)}else o.value&&(o.value.value="")}return N(a,()=>{if(!e.hideSelected&&a.value&&v.value.length){const t=V.value.findIndex(u=>v.value.some(y=>e.valueComparator(y.value,u.value)));oe&&window.requestAnimationFrame(()=>{var u;t>=0&&((u=p.value)==null||u.scrollToIndex(t))})}}),N(()=>e.items,(t,u)=>{a.value||l.value&&!u.length&&t.length&&(a.value=!0)}),le(()=>{const t=!!(e.chips||n.chip),u=!!(!e.hideNoData||V.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),y=v.value.length>0,P=xe.filterProps(e),O=y||!l.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return i(xe,B({ref:o},P,{modelValue:v.value.map(h=>h.props.value).join(", "),"onUpdate:modelValue":re,focused:l.value,"onUpdate:focused":h=>l.value=h,validationValue:v.externalValue,counterValue:I.value,dirty:y,class:["v-select",{"v-select--active-menu":a.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":v.value.length,"v-select--selection-slot":!!n.selection},e.class],style:e.style,inputmode:"none",placeholder:O,"onClick:clear":z,"onMousedown:control":_,onBlur:W,onKeydown:j,"aria-label":s(r.value),title:s(r.value)}),{...n,default:()=>i(X,null,[i(Gt,B({ref:m,modelValue:a.value,"onUpdate:modelValue":h=>a.value=h,activator:"parent",contentClass:"v-select__content",disabled:D.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:L,onAfterLeave:ce},G.value),{default:()=>[u&&i(Ut,B({ref:g,selected:w.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:h=>h.preventDefault(),onKeydown:K,onFocusin:se,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},M,e.listProps),{default:()=>{var h,x,T;return[(h=n["prepend-item"])==null?void 0:h.call(n),!V.value.length&&!e.hideNoData&&(((x=n["no-data"])==null?void 0:x.call(n))??i(Ae,{title:s(e.noDataText)},null)),i(al,{ref:p,renderless:!0,items:V.value},{default:q=>{var be;let{item:F,index:Z,itemRef:R}=q;const ge=B(F.props,{ref:R,key:Z,onClick:()=>$(F,null)});return((be=n.item)==null?void 0:be.call(n,{item:F,index:Z,props:ge}))??i(Ae,B(ge,{role:"option"}),{prepend:ze=>{let{isSelected:Ke}=ze;return i(X,null,[e.multiple&&!e.hideSelected?i(Wt,{key:F.value,modelValue:Ke,ripple:!1,tabindex:"-1"},null):void 0,F.props.prependAvatar&&i(me,{image:F.props.prependAvatar},null),F.props.prependIcon&&i(Y,{icon:F.props.prependIcon},null)])}})}}),(T=n["append-item"])==null?void 0:T.call(n)]}})]}),v.value.map((h,x)=>{function T(R){R.stopPropagation(),R.preventDefault(),$(h,!1)}const q={"onClick:close":T,onKeydown(R){R.key!=="Enter"&&R.key!==" "||(R.preventDefault(),R.stopPropagation(),T(R))},onMousedown(R){R.preventDefault(),R.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},F=t?!!n.chip:!!n.selection,Z=F?Ht(t?n.chip({item:h,index:x,props:q}):n.selection({item:h,index:x})):void 0;if(!(F&&!Z))return i("div",{key:h.value,class:"v-select__selection"},[t?n.chip?i(ee,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:h.title}}},{default:()=>[Z]}):i(qt,B({key:"chip",closable:e.closableChips,size:"small",text:h.title,disabled:h.props.disabled},q),null):Z??i("span",{class:"v-select__selection-text"},[h.title,e.multiple&&x<v.value.length-1&&i("span",{class:"v-select__selection-comma"},[zt(",")])])])})]),"append-inner":function(){var q;for(var h=arguments.length,x=new Array(h),T=0;T<h;T++)x[T]=arguments[T];return i(X,null,[(q=n["append-inner"])==null?void 0:q.call(n,...x),e.menuIcon?i(Y,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Me({isFocused:l,menu:a,select:$},o)}});export{il as V,qt as a,Gt as b,Wt as c,al as d,jt as e,ol as m,nl as u};