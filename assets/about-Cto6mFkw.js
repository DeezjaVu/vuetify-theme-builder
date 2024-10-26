import{b as Se,s as je,m as k,r as ze,o as Ke,a as Je,c as We,p as Fe,R as j,l as te,d as ue}from"./bootstrap-colors-B4LCXwTh.js";import{p as se,I as De,m as Ge,h as he,u as me,i as E,j as ge,k as Ne,l as _e,b as s,n as Y,q as Me,r as He,s as Z,F as G,t as Xe,v as Q,x as Ie,y as I,z as Le,A as Ve,B as Ye,C as Ee,D as we,E as Qe,G as Ze,H as el,J as ll,K as tl,o as ke,L as al,M as de,N as nl,O as ol,P as sl,Q as ul,R as rl,S as il,T as Pe,U as cl,W as Ae,X as dl,Y as vl,Z as re,_ as fl,$ as Te,a0 as Be,a1 as ml,a as K,c as ne,w as S,V as hl,f as gl,a2 as pl,a3 as Oe,a4 as ve,a5 as fe,a6 as z,a7 as Re}from"./index-DFoYSqcB.js";import{u as bl}from"./builder-colors-CMGZdxK5.js";import{V as Vl,a as ae,b as Cl}from"./VRow-CDhdOwbk.js";import{m as wl,u as kl,V as ie,a as oe}from"./VSlider-B4fuEWDY.js";import{V as yl}from"./VMenu-BHylTDJM.js";import{V as xl}from"./VChip-B9Mr7Zd9.js";import{V as Sl}from"./VColorPicker-B2rlEfn2.js";const Fl=se({indeterminate:Boolean,indeterminateIcon:{type:De,default:"$checkboxIndeterminate"},...Ge({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),_l=he()({name:"VCheckboxBtn",props:Fl(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,h){let{slots:a}=h;const d=me(e,"indeterminate"),i=me(e,"modelValue");function g(n){d.value&&(d.value=!1)}const v=E(()=>d.value?e.indeterminateIcon:e.falseIcon),r=E(()=>d.value?e.indeterminateIcon:e.trueIcon);return ge(()=>{const n=Ne(_e.filterProps(e),["modelValue"]);return s(_e,Y(n,{modelValue:i.value,"onUpdate:modelValue":[b=>i.value=b,g],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:v.value,trueIcon:r.value,"aria-checked":d.value?"mixed":void 0}),a)}),{}}}),Il=se({renderless:Boolean,...Me()},"VVirtualScrollItem"),Pl=he()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Il(),emits:{"update:height":e=>!0},setup(e,h){let{attrs:a,emit:d,slots:i}=h;const{resizeRef:g,contentRect:v}=He(void 0,"border");Z(()=>{var r;return(r=v.value)==null?void 0:r.height},r=>{r!=null&&d("update:height",r)}),ge(()=>{var r,n;return e.renderless?s(G,null,[(r=i.default)==null?void 0:r.call(i,{itemRef:g})]):s("div",Y({ref:g,class:["v-virtual-scroll__item",e.class],style:e.style},a),[(n=i.default)==null?void 0:n.call(i)])})}}),Al=-1,Tl=1,Ce=100,Bl=se({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function Ol(e,h){const a=Xe(),d=Q(0);Ie(()=>{d.value=parseFloat(e.itemHeight||0)});const i=Q(0),g=Q(Math.ceil((parseInt(e.height)||a.height.value)/(d.value||16))||1),v=Q(0),r=Q(0),n=I(),b=I();let R=0;const{resizeRef:M,contentRect:u}=He();Ie(()=>{M.value=n.value});const C=E(()=>{var l;return n.value===document.documentElement?a.height.value:((l=u.value)==null?void 0:l.height)||parseInt(e.height)||0}),T=E(()=>!!(n.value&&b.value&&C.value&&d.value));let U=Array.from({length:h.value.length}),V=Array.from({length:h.value.length});const F=Q(0);let P=-1;function J(l){return U[l]||d.value}const D=Ye(()=>{const l=performance.now();V[0]=0;const o=h.value.length;for(let p=1;p<=o-1;p++)V[p]=(V[p-1]||0)+J(p-1);F.value=Math.max(F.value,performance.now()-l)},F),ee=Z(T,l=>{l&&(ee(),R=b.value.offsetTop,D.immediate(),W(),~P&&Ee(()=>{we&&window.requestAnimationFrame(()=>{ce(P),P=-1})}))});Le(()=>{D.clear()});function w(l,o){const p=U[l],x=d.value;d.value=x?Math.min(d.value,o):o,(p!==o||x!==d.value)&&(U[l]=o,D())}function t(l){return l=Ve(l,0,h.value.length-1),V[l]||0}function c(l){return Rl(V,l)}let f=0,y=0,H=0;Z(C,(l,o)=>{o&&(W(),l<o&&requestAnimationFrame(()=>{y=0,W()}))});function _(){if(!n.value||!b.value)return;const l=n.value.scrollTop,o=performance.now();o-H>500?(y=Math.sign(l-f),R=b.value.offsetTop):y=l-f,f=l,H=o,W()}function B(){!n.value||!b.value||(y=0,H=0,W())}let L=-1;function W(){cancelAnimationFrame(L),L=requestAnimationFrame(pe)}function pe(){if(!n.value||!C.value)return;const l=f-R,o=Math.sign(y),p=Math.max(0,l-Ce),x=Ve(c(p),0,h.value.length),$=l+C.value+Ce,m=Ve(c($)+1,x+1,h.value.length);if((o!==Al||x<i.value)&&(o!==Tl||m>g.value)){const A=t(i.value)-t(x),O=t(m)-t(g.value);Math.max(A,O)>Ce?(i.value=x,g.value=m):(x<=0&&(i.value=x),m>=h.value.length&&(g.value=m))}v.value=t(i.value),r.value=t(h.value.length)-t(g.value)}function ce(l){const o=t(l);!n.value||l&&!o?P=l:n.value.scrollTop=o}const be=E(()=>h.value.slice(i.value,g.value).map((l,o)=>({raw:l,index:o+i.value})));return Z(h,()=>{U=Array.from({length:h.value.length}),V=Array.from({length:h.value.length}),D.immediate(),W()},{deep:!0}),{calculateVisibleItems:W,containerRef:n,markerRef:b,computedItems:be,paddingTop:v,paddingBottom:r,scrollToIndex:ce,handleScroll:_,handleScrollend:B,handleItemResize:w}}function Rl(e,h){let a=e.length-1,d=0,i=0,g=null,v=-1;if(e[a]<h)return a;for(;d<=a;)if(i=d+a>>1,g=e[i],g>h)a=i-1;else if(g<h)v=i,d=i+1;else return g===h?i:d;return v}const Ul=se({items:{type:Array,default:()=>[]},renderless:Boolean,...Bl(),...Me(),...Qe()},"VVirtualScroll"),Dl=he()({name:"VVirtualScroll",props:Ul(),setup(e,h){let{slots:a}=h;const d=Ze("VVirtualScroll"),{dimensionStyles:i}=el(e),{calculateVisibleItems:g,containerRef:v,markerRef:r,handleScroll:n,handleScrollend:b,handleItemResize:R,scrollToIndex:M,paddingTop:u,paddingBottom:C,computedItems:T}=Ol(e,ll(e,"items"));return tl(()=>e.renderless,()=>{function U(){var P,J;const F=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";v.value===document.documentElement?(document[F]("scroll",n,{passive:!0}),document[F]("scrollend",b)):((P=v.value)==null||P[F]("scroll",n,{passive:!0}),(J=v.value)==null||J[F]("scrollend",b))}ke(()=>{v.value=al(d.vnode.el,!0),U(!0)}),Le(U)}),ge(()=>{const U=T.value.map(V=>s(Pl,{key:V.index,renderless:e.renderless,"onUpdate:height":F=>R(V.index,F)},{default:F=>{var P;return(P=a.default)==null?void 0:P.call(a,{item:V.raw,index:V.index,...F})}}));return e.renderless?s(G,null,[s("div",{ref:r,class:"v-virtual-scroll__spacer",style:{paddingTop:de(u.value)}},null),U,s("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:de(C.value)}},null)]):s("div",{ref:v,class:["v-virtual-scroll",e.class],onScrollPassive:n,onScrollend:b,style:[i.value,e.style]},[s("div",{ref:r,class:"v-virtual-scroll__container",style:{paddingTop:de(u.value),paddingBottom:de(C.value)}},[U])])}),{calculateVisibleItems:g,scrollToIndex:M}}});function Nl(e,h){const a=Q(!1);let d;function i(r){cancelAnimationFrame(d),a.value=!0,d=requestAnimationFrame(()=>{d=requestAnimationFrame(()=>{a.value=!1})})}async function g(){await new Promise(r=>requestAnimationFrame(r)),await new Promise(r=>requestAnimationFrame(r)),await new Promise(r=>requestAnimationFrame(r)),await new Promise(r=>{if(a.value){const n=Z(a,()=>{n(),r()})}else r()})}async function v(r){var R,M;if(r.key==="Tab"&&((R=h.value)==null||R.focus()),!["PageDown","PageUp","Home","End"].includes(r.key))return;const n=(M=e.value)==null?void 0:M.$el;if(!n)return;(r.key==="Home"||r.key==="End")&&n.scrollTo({top:r.key==="Home"?0:n.scrollHeight,behavior:"smooth"}),await g();const b=n.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(r.key==="PageDown"||r.key==="Home"){const u=n.getBoundingClientRect().top;for(const C of b)if(C.getBoundingClientRect().top>=u){C.focus();break}}else{const u=n.getBoundingClientRect().bottom;for(const C of[...b].reverse())if(C.getBoundingClientRect().bottom<=u){C.focus();break}}}return{onScrollPassive:i,onKeydown:v}}const Ml=se({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:De,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...wl({itemChildren:!1})},"Select"),Hl=se({...Ml(),...Ne(nl({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...ol({transition:{component:sl}})},"VSelect"),Ue=he()({name:"VSelect",props:Hl(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,h){let{slots:a}=h;const{t:d}=ul(),i=I(),g=I(),v=I(),r=me(e,"menu"),n=E({get:()=>r.value,set:l=>{var o;r.value&&!l&&((o=g.value)!=null&&o.ΨopenChildren.size)||(r.value=l)}}),{items:b,transformIn:R,transformOut:M}=kl(e),u=me(e,"modelValue",[],l=>R(l===null?[null]:rl(l)),l=>{const o=M(l);return e.multiple?o:o[0]??null}),C=E(()=>typeof e.counterValue=="function"?e.counterValue(u.value):typeof e.counterValue=="number"?e.counterValue:u.value.length),T=il(),U=E(()=>u.value.map(l=>l.value)),V=Q(!1),F=E(()=>n.value?e.closeText:e.openText);let P="",J;const D=E(()=>e.hideSelected?b.value.filter(l=>!u.value.some(o=>e.valueComparator(o,l))):b.value),ee=E(()=>e.hideNoData&&!D.value.length||e.readonly||(T==null?void 0:T.isReadonly.value)),w=E(()=>{var l;return{...e.menuProps,activatorProps:{...((l=e.menuProps)==null?void 0:l.activatorProps)||{},"aria-haspopup":"listbox"}}}),t=I(),c=Nl(t,i);function f(l){e.openOnClear&&(n.value=!0)}function y(){ee.value||(n.value=!n.value)}function H(l){Te(l)&&_(l)}function _(l){var $,m;if(!l.key||e.readonly||T!=null&&T.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(l.key)&&l.preventDefault(),["Enter","ArrowDown"," "].includes(l.key)&&(n.value=!0),["Escape","Tab"].includes(l.key)&&(n.value=!1),l.key==="Home"?($=t.value)==null||$.focus("first"):l.key==="End"&&((m=t.value)==null||m.focus("last"));const o=1e3;if(e.multiple||!Te(l))return;const p=performance.now();p-J>o&&(P=""),P+=l.key.toLowerCase(),J=p;const x=b.value.find(A=>A.title.toLowerCase().startsWith(P));if(x!==void 0){u.value=[x];const A=D.value.indexOf(x);we&&window.requestAnimationFrame(()=>{var O;A>=0&&((O=v.value)==null||O.scrollToIndex(A))})}}function B(l){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!l.props.disabled)if(e.multiple){const p=u.value.findIndex($=>e.valueComparator($.value,l.value)),x=o??!~p;if(~p){const $=x?[...u.value,l]:[...u.value];$.splice(p,1),u.value=$}else x&&(u.value=[...u.value,l])}else{const p=o!==!1;u.value=p?[l]:[],Ee(()=>{n.value=!1})}}function L(l){var o;(o=t.value)!=null&&o.$el.contains(l.relatedTarget)||(n.value=!1)}function W(){var l;e.eager&&((l=v.value)==null||l.calculateVisibleItems())}function pe(){var l;V.value&&((l=i.value)==null||l.focus())}function ce(l){V.value=!0}function be(l){if(l==null)u.value=[];else if(Be(i.value,":autofill")||Be(i.value,":-webkit-autofill")){const o=b.value.find(p=>p.title===l);o&&B(o)}else i.value&&(i.value.value="")}return Z(n,()=>{if(!e.hideSelected&&n.value&&u.value.length){const l=D.value.findIndex(o=>u.value.some(p=>e.valueComparator(p.value,o.value)));we&&window.requestAnimationFrame(()=>{var o;l>=0&&((o=v.value)==null||o.scrollToIndex(l))})}}),Z(()=>e.items,(l,o)=>{n.value||V.value&&!o.length&&l.length&&(n.value=!0)}),ge(()=>{const l=!!(e.chips||a.chip),o=!!(!e.hideNoData||D.value.length||a["prepend-item"]||a["append-item"]||a["no-data"]),p=u.value.length>0,x=Pe.filterProps(e),$=p||!V.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return s(Pe,Y({ref:i},x,{modelValue:u.value.map(m=>m.props.value).join(", "),"onUpdate:modelValue":be,focused:V.value,"onUpdate:focused":m=>V.value=m,validationValue:u.externalValue,counterValue:C.value,dirty:p,class:["v-select",{"v-select--active-menu":n.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":u.value.length,"v-select--selection-slot":!!a.selection},e.class],style:e.style,inputmode:"none",placeholder:$,"onClick:clear":f,"onMousedown:control":y,onBlur:L,onKeydown:_,"aria-label":d(F.value),title:d(F.value)}),{...a,default:()=>s(G,null,[s(yl,Y({ref:g,modelValue:n.value,"onUpdate:modelValue":m=>n.value=m,activator:"parent",contentClass:"v-select__content",disabled:ee.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:W,onAfterLeave:pe},w.value),{default:()=>[o&&s(ie,Y({ref:t,selected:U.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:m=>m.preventDefault(),onKeydown:H,onFocusin:ce,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},c,e.listProps),{default:()=>{var m,A,O;return[(m=a["prepend-item"])==null?void 0:m.call(a),!D.value.length&&!e.hideNoData&&(((A=a["no-data"])==null?void 0:A.call(a))??s(oe,{title:d(e.noDataText)},null)),s(Dl,{ref:v,renderless:!0,items:D.value},{default:X=>{var xe;let{item:q,index:le,itemRef:N}=X;const ye=Y(q.props,{ref:N,key:le,onClick:()=>B(q,null)});return((xe=a.item)==null?void 0:xe.call(a,{item:q,index:le,props:ye}))??s(oe,Y(ye,{role:"option"}),{prepend:$e=>{let{isSelected:qe}=$e;return s(G,null,[e.multiple&&!e.hideSelected?s(_l,{key:q.value,modelValue:qe,ripple:!1,tabindex:"-1"},null):void 0,q.props.prependAvatar&&s(cl,{image:q.props.prependAvatar},null),q.props.prependIcon&&s(Ae,{icon:q.props.prependIcon},null)])}})}}),(O=a["append-item"])==null?void 0:O.call(a)]}})]}),u.value.map((m,A)=>{function O(N){N.stopPropagation(),N.preventDefault(),B(m,!1)}const X={"onClick:close":O,onKeydown(N){N.key!=="Enter"&&N.key!==" "||(N.preventDefault(),N.stopPropagation(),O(N))},onMousedown(N){N.preventDefault(),N.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},q=l?!!a.chip:!!a.selection,le=q?dl(l?a.chip({item:m,index:A,props:X}):a.selection({item:m,index:A})):void 0;if(!(q&&!le))return s("div",{key:m.value,class:"v-select__selection"},[l?a.chip?s(vl,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:m.title}}},{default:()=>[le]}):s(xl,Y({key:"chip",closable:e.closableChips,size:"small",text:m.title,disabled:m.props.disabled},X),null):le??s("span",{class:"v-select__selection-text"},[m.title,e.multiple&&A<u.value.length-1&&s("span",{class:"v-select__selection-comma"},[re(",")])])])})]),"append-inner":function(){var X;for(var m=arguments.length,A=new Array(m),O=0;O<m;O++)A[O]=arguments[O];return s(G,null,[(X=a["append-inner"])==null?void 0:X.call(a,...A),e.menuIcon?s(Ae,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),fl({isFocused:V,menu:n,select:B},i)}}),Ll={class:"text-body-1 my-7"},El={class:"text-body-1 my-7"},$l={__name:"AboutView",setup(e){const h=ml(),a=bl();h.flatColorsHex;const d=a.materialColors;console.log("AboutView ::: materialColors: ",d);const i=Object.keys(d);console.log("AboutView ::: materialColorsNames: ",i);const g=I(Se);console.log("AboutView ::: selectedBSColor: ",g);const v=I(d.red);console.log("AboutView ::: selectedMatColor: ",v);const r=I(Se),n=I(d.red),b=Je;console.log("AboutView ::: bsColorNames: ",b);const R=I("blue"),M=I("red"),u=I("#0d6efd"),C=I(""),T=I(je);console.log("AboutView ::: bsColorsHex: ",T),I("");const U={lighten5:k("FFFFFF","0d6efd",90),lighten4:k("FFFFFF","0d6efd",80),lighten3:k("FFFFFF","0d6efd",60),lighten2:k("FFFFFF","0d6efd",40),lighten1:k("FFFFFF","0d6efd",20)};console.log("AboutView ::: mixedLighten: ",JSON.stringify(U,null,2));const V={darken4:k("000000","0d6efd",80),darken3:k("000000","0d6efd",60),darken2:k("000000","0d6efd",40),darken1:k("000000","0d6efd",20)};console.log("AboutView ::: mixedDarken: ",JSON.stringify(V,null,2)),console.log("AboutView ::: bootstrap red: ",ze),console.log("AboutView ::: bootstrap orange: ",Ke),I(""),ke(()=>{console.log("AboutView ::: onMounted")});function F(w,t){console.log("AboutView ::: setSelection"),console.log(" - clr: ",w),console.log(" - key: ",t),u.value=w.toUpperCase(),C.value=t}function P(w){console.log("AboutView ::: colorPickerUpdateHandler"),console.log(" - value:",w);let t=String(w).toUpperCase();console.log(" - val: ",t),console.log(" - selectedColor: ",u.value),console.log(" - selectedItem value: ",C.value)}function J(w){console.log("AboutView ::: bsNameUpdateHandler"),console.log(" - value: ",w),console.log(" - selectedBootstrapName: ",R.value),g.value=We[w],D()}function D(){console.log("AboutView ::: generateVColors");const w=g.value.base,t=Fe(w);console.log(" - base: ",w),console.log(" - parsed base: ",t);const c={lighten5:j(te(t,6.25)),lighten4:j(te(t,5)),lighten3:j(te(t,3.75)),lighten2:j(te(t,2.5)),lighten1:j(te(t,1.25)),base:w,darken1:j(ue(t,1.25)),darken2:j(ue(t,2.5)),darken3:j(ue(t,3.75)),darken4:j(ue(t,5)),base:w};console.log(" - colors: ",JSON.stringify(c,null,2)),r.value=c;let f={};for(let _=1;_<20;_++){let B=_/10,L=j(ue(t,B));if(L!=="#000000")f["darken"+_]=L;else break}let y={};for(let _=1;_<20;_++){let B=_/10,L=j(te(t,B));if(L!=="#FFFFFF")y["lighten"+_]=L;else break}console.log(" - dark shades: ",JSON.stringify(f,null,2)),console.log(" - light shades: ",JSON.stringify(y,null,2));const H=[Object.values(g.value).reverse(),Object.values(c).reverse(),Object.values(f).reverse(),Object.values(y)];console.log(" - swatches: ",JSON.stringify(H,null,2)),T.value=H}function ee(w){console.log("AboutView ::: materialNameUpdateHandler"),console.log(" - value: ",w),console.log(" - selectedMaterialName: ",M.value),v.value=d[w];const t=v.value.base,c=Fe(t);console.log(" - base: ",t),console.log(" - parsed base: ",c);const f="#FFFFFF",y="#000000",H={base:t,lighten5:k(f,t,89),lighten4:k(f,t,74),lighten3:k(f,t,53),lighten2:k(f,t,36),lighten1:k(f,t,14),darken1:k(y,t,6),darken2:k(y,t,13),darken3:k(y,t,19),darken4:k(y,t,25),accent1:k(f,t,36),accent2:k(f,t,14)};v.value.lighten1,v.value.lighten2,v.value.lighten3,v.value.lighten4,v.value.lighten5;for(let B=74;B<=95;B++){let L=k(f,t,B);console.log(" - lighten: ",B,L)}const _=[Object.values(v.value),Object.values(H)];console.log(" - swatches: ",JSON.stringify(_,null,2)),T.value=_,console.log(" - colors: ",JSON.stringify(H,null,2)),n.value=H}return(w,t)=>(K(),ne(Cl,{class:"fill-height px-12 mx-auto"},{default:S(()=>[s(hl,{class:"align-centerfill-height mx-auto"},{default:S(()=>[s(gl,{color:"primary",height:"auto"},{default:S(()=>[s(pl,null,{default:S(()=>[s(Vl,null,{default:S(()=>[s(ae,null,{default:S(()=>[s(Ue,{"min-width":"200",items:Oe(b),modelValue:R.value,"onUpdate:modelValue":[t[0]||(t[0]=c=>R.value=c),J],label:"Bootstrap Colors","item-title":"title","item-value":"name"},null,8,["items","modelValue"]),s(ie,{"min-width":"200",color:"surface-variant"},{default:S(()=>[(K(!0),ve(G,null,fe(g.value,(c,f)=>(K(),ne(oe,{value:c.toUpperCase(),"base-color":c,active:u.value===c.toUpperCase(),onClick:y=>F(c,f)},{default:S(()=>[re(z(f)+" - "+z(c),1)]),_:2},1032,["value","base-color","active","onClick"]))),256))]),_:1})]),_:1}),s(ae,null,{default:S(()=>[Re("div",Ll,"Base Color: "+z(g.value.base),1),s(ie,{"min-width":"200",color:"surface-variant"},{default:S(()=>[(K(!0),ve(G,null,fe(r.value,(c,f)=>(K(),ne(oe,{value:c.toUpperCase(),"base-color":c,active:u.value===c.toUpperCase(),onClick:y=>{C.value=f,u.value=c.toUpperCase()}},{default:S(()=>[re(z(f)+" - "+z(c),1)]),_:2},1032,["value","base-color","active","onClick"]))),256))]),_:1})]),_:1}),s(ae,null,{default:S(()=>[s(Sl,{mode:"hex",modelValue:u.value,"onUpdate:modelValue":[t[1]||(t[1]=c=>u.value=c),P],swatches:T.value,"hide-sliders":"","show-swatches":"","swatches-max-height":"300"},null,8,["modelValue","swatches"])]),_:1}),s(ae,null,{default:S(()=>[s(Ue,{"min-width":"200",items:Oe(i),modelValue:M.value,"onUpdate:modelValue":[t[2]||(t[2]=c=>M.value=c),ee],label:"Material Colors","item-title":"name","item-value":"name"},null,8,["items","modelValue"]),s(ie,{"min-width":"200",color:"surface-variant"},{default:S(()=>[(K(!0),ve(G,null,fe(v.value,(c,f)=>(K(),ne(oe,{value:c.toUpperCase(),active:u.value===c.toUpperCase(),"base-color":c,onClick:y=>{C.value=f,u.value=c.toUpperCase()}},{default:S(()=>[re(z(f)+": "+z(c.toUpperCase()),1)]),_:2},1032,["value","active","base-color","onClick"]))),256))]),_:1})]),_:1}),s(ae,null,{default:S(()=>[Re("div",El,"Base Color: "+z(v.value.base),1),s(ie,{"min-width":"200",color:"surface-variant"},{default:S(()=>[(K(!0),ve(G,null,fe(n.value,(c,f)=>(K(),ne(oe,{value:c.toUpperCase(),active:u.value===c.toUpperCase(),"base-color":c,onClick:y=>{C.value=f,u.value=c.toUpperCase()}},{default:S(()=>[re(z(f)+" - "+z(c),1)]),_:2},1032,["value","active","base-color","onClick"]))),256))]),_:1})]),_:1}),s(ae)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Yl={__name:"about",setup(e){return ke(()=>{console.log("ABOUT ::: onMounted")}),(h,a)=>{const d=$l;return K(),ne(d)}}};export{Yl as default};
