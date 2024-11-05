import{p as C,ax as te,n as p,C as ae,L as oe,br as le,bs as re,N as se,O as ne,X as ie,s as ce,Z as ue,D as de,$ as ve,aC as he,E as me,Q as be,bt as ge,bu as ke,S as fe,y as w,b as r,bv as x,aO as A,r as D,G as V,aR as E,aY as P,aM as ye,an as B,o as I,bw as Ce,bx as T,by as R,bz as $,bA as W,bB as z,bC as we,bD as X,a5 as Y,bE as Se,bF as L,bG as q,bH as J,bI as Pe,as as Ve,K as pe,bJ as xe,bp as _e,ad as He,af as j,ba as Ee,_ as Re,ai as Be}from"./index-BSLVzZ3R.js";import{b as F}from"./VSlider-CwswvJ2w.js";const K=C({color:String,...te(),...p(),...ae(),...oe(),...le(),...re(),...se(),...ne(),...ie()},"VSheet"),G=ce()({name:"VSheet",props:K(),setup(e,t){let{slots:a}=t;const{themeClasses:i}=ue(e),{backgroundColorClasses:u,backgroundColorStyles:o}=de(ve(e,"color")),{borderClasses:l}=he(e),{dimensionStyles:c}=me(e),{elevationClasses:n}=be(e),{locationStyles:m}=ge(e),{positionClasses:g}=ke(e),{roundedClasses:S}=fe(e);return w(()=>r(e.tag,{class:["v-sheet",i.value,u.value,l.value,n.value,g.value,S.value,e.class],style:[o.value,c.value,m.value,e.style]},a)),{}}}),Me=C({color:{type:Object},disabled:Boolean,dotSize:{type:[Number,String],default:10},height:{type:[Number,String],default:150},width:{type:[Number,String],default:300},...p()},"VColorPickerCanvas"),Ae=x({name:"VColorPickerCanvas",props:Me(),emits:{"update:color":e=>!0,"update:position":e=>!0},setup(e,t){let{emit:a}=t;const i=A(!1),u=D(),o=A(parseFloat(e.width)),l=A(parseFloat(e.height)),c=D({x:0,y:0}),n=V({get:()=>c.value,set(s){var h,k;if(!u.value)return;const{x:d,y:v}=s;c.value=s,a("update:color",{h:((h=e.color)==null?void 0:h.h)??0,s:E(d,0,o.value)/o.value,v:1-E(v,0,l.value)/l.value,a:((k=e.color)==null?void 0:k.a)??1})}}),m=V(()=>{const{x:s,y:d}=n.value,v=parseInt(e.dotSize,10)/2;return{width:P(e.dotSize),height:P(e.dotSize),transform:`translate(${P(s-v)}, ${P(d-v)})`}}),{resizeRef:g}=ye(s=>{var h;if(!((h=g.el)!=null&&h.offsetParent))return;const{width:d,height:v}=s[0].contentRect;o.value=d,l.value=v});function S(s,d,v){const{left:h,top:k,width:Z,height:ee}=v;n.value={x:E(s-h,0,Z),y:E(d-k,0,ee)}}function _(s){s.type==="mousedown"&&s.preventDefault(),!e.disabled&&(b(s),window.addEventListener("mousemove",b),window.addEventListener("mouseup",H),window.addEventListener("touchmove",b),window.addEventListener("touchend",H))}function b(s){if(e.disabled||!u.value)return;i.value=!0;const d=Ce(s);S(d.clientX,d.clientY,u.value.getBoundingClientRect())}function H(){window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",H),window.removeEventListener("touchmove",b),window.removeEventListener("touchend",H)}function M(){var k;if(!u.value)return;const s=u.value,d=s.getContext("2d");if(!d)return;const v=d.createLinearGradient(0,0,s.width,0);v.addColorStop(0,"hsla(0, 0%, 100%, 1)"),v.addColorStop(1,`hsla(${((k=e.color)==null?void 0:k.h)??0}, 100%, 50%, 1)`),d.fillStyle=v,d.fillRect(0,0,s.width,s.height);const h=d.createLinearGradient(0,0,0,s.height);h.addColorStop(0,"hsla(0, 0%, 0%, 0)"),h.addColorStop(1,"hsla(0, 0%, 0%, 1)"),d.fillStyle=h,d.fillRect(0,0,s.width,s.height)}return B(()=>{var s;return(s=e.color)==null?void 0:s.h},M,{immediate:!0}),B(()=>[o.value,l.value],(s,d)=>{M(),c.value={x:n.value.x*s[0]/d[0],y:n.value.y*s[1]/d[1]}},{flush:"post"}),B(()=>e.color,()=>{if(i.value){i.value=!1;return}c.value=e.color?{x:e.color.s*o.value,y:(1-e.color.v)*l.value}:{x:0,y:0}},{deep:!0,immediate:!0}),I(()=>M()),w(()=>r("div",{ref:g,class:["v-color-picker-canvas",e.class],style:e.style,onMousedown:_,onTouchstartPassive:_},[r("canvas",{ref:u,width:o.value,height:l.value},null),e.color&&r("div",{class:["v-color-picker-canvas__dot",{"v-color-picker-canvas__dot--disabled":e.disabled}],style:m.value},null)])),{}}});function De(e,t){if(t){const{a,...i}=e;return i}return e}function Ne(e,t){if(t==null||typeof t=="string"){const a=T(e);return e.a===1?a.slice(0,7):a}if(typeof t=="object"){let a;return R(t,["r","g","b"])?a=$(e):R(t,["h","s","l"])?a=W(e):R(t,["h","s","v"])&&(a=e),De(a,!R(t,["a"])&&e.a===1)}return e}const y={h:0,s:0,v:0,a:1},N={inputProps:{type:"number",min:0},inputs:[{label:"R",max:255,step:1,getValue:e=>Math.round(e.r),getColor:(e,t)=>({...e,r:Number(t)})},{label:"G",max:255,step:1,getValue:e=>Math.round(e.g),getColor:(e,t)=>({...e,g:Number(t)})},{label:"B",max:255,step:1,getValue:e=>Math.round(e.b),getColor:(e,t)=>({...e,b:Number(t)})},{label:"A",max:1,step:.01,getValue:e=>{let{a:t}=e;return t!=null?Math.round(t*100)/100:1},getColor:(e,t)=>({...e,a:Number(t)})}],to:$,from:z};var U;const Oe={...N,inputs:(U=N.inputs)==null?void 0:U.slice(0,3)},O={inputProps:{type:"number",min:0},inputs:[{label:"H",max:360,step:1,getValue:e=>Math.round(e.h),getColor:(e,t)=>({...e,h:Number(t)})},{label:"S",max:1,step:.01,getValue:e=>Math.round(e.s*100)/100,getColor:(e,t)=>({...e,s:Number(t)})},{label:"L",max:1,step:.01,getValue:e=>Math.round(e.l*100)/100,getColor:(e,t)=>({...e,l:Number(t)})},{label:"A",max:1,step:.01,getValue:e=>{let{a:t}=e;return t!=null?Math.round(t*100)/100:1},getColor:(e,t)=>({...e,a:Number(t)})}],to:W,from:we},ze={...O,inputs:O.inputs.slice(0,3)},Q={inputProps:{type:"text"},inputs:[{label:"HEXA",getValue:e=>e,getColor:(e,t)=>t}],to:T,from:X},Le={...Q,inputs:[{label:"HEX",getValue:e=>e.slice(0,7),getColor:(e,t)=>t}]},f={rgb:Oe,rgba:N,hsl:ze,hsla:O,hex:Le,hexa:Q},je=e=>{let{label:t,...a}=e;return r("div",{class:"v-color-picker-edit__input"},[r("input",a,null),r("span",null,[t])])},Fe=C({color:Object,disabled:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(f).includes(e)},modes:{type:Array,default:()=>Object.keys(f),validator:e=>Array.isArray(e)&&e.every(t=>Object.keys(f).includes(t))},...p()},"VColorPickerEdit"),Ge=x({name:"VColorPickerEdit",props:Fe(),emits:{"update:color":e=>!0,"update:mode":e=>!0},setup(e,t){let{emit:a}=t;const i=V(()=>e.modes.map(o=>({...f[o],name:o}))),u=V(()=>{var c;const o=i.value.find(n=>n.name===e.mode);if(!o)return[];const l=e.color?o.to(e.color):null;return(c=o.inputs)==null?void 0:c.map(n=>{let{getValue:m,getColor:g,...S}=n;return{...o.inputProps,...S,disabled:e.disabled,value:l&&m(l),onChange:_=>{const b=_.target;b&&a("update:color",o.from(g(l??o.to(y),b.value)))}}})});return w(()=>{var o;return r("div",{class:["v-color-picker-edit",e.class],style:e.style},[(o=u.value)==null?void 0:o.map(l=>r(je,l,null)),i.value.length>1&&r(Y,{icon:"$unfold",size:"x-small",variant:"plain",onClick:()=>{const l=i.value.findIndex(c=>c.name===e.mode);a("update:mode",i.value[(l+1)%i.value.length].name)}},null)])}),{}}}),Ue=C({color:{type:Object},disabled:Boolean,hideAlpha:Boolean,...p()},"VColorPickerPreview"),Ie=x({name:"VColorPickerPreview",props:Ue(),emits:{"update:color":e=>!0},setup(e,t){let{emit:a}=t;const i=new AbortController;Se(()=>i.abort());async function u(){if(!L)return;const o=new window.EyeDropper;try{const l=await o.open({signal:i.signal}),c=X(l.sRGBHex);a("update:color",{...e.color??y,...c})}catch{}}return w(()=>{var o,l;return r("div",{class:["v-color-picker-preview",{"v-color-picker-preview--hide-alpha":e.hideAlpha},e.class],style:e.style},[L&&r("div",{class:"v-color-picker-preview__eye-dropper",key:"eyeDropper"},[r(Y,{onClick:u,icon:"$eyeDropper",variant:"plain",density:"comfortable"},null)]),r("div",{class:"v-color-picker-preview__dot"},[r("div",{style:{background:q(e.color??y)}},null)]),r("div",{class:"v-color-picker-preview__sliders"},[r(F,{class:"v-color-picker-preview__track v-color-picker-preview__hue",modelValue:(o=e.color)==null?void 0:o.h,"onUpdate:modelValue":c=>a("update:color",{...e.color??y,h:c}),step:0,min:0,max:360,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null),!e.hideAlpha&&r(F,{class:"v-color-picker-preview__track v-color-picker-preview__alpha",modelValue:((l=e.color)==null?void 0:l.a)??1,"onUpdate:modelValue":c=>a("update:color",{...e.color??y,a:c}),step:1/256,min:0,max:1,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null)])])}),{}}}),Te=C({swatches:{type:Array,default:()=>$e(_e)},disabled:Boolean,color:Object,maxHeight:[Number,String],...p()},"VColorPickerSwatches");function $e(e){return Object.keys(e).map(t=>{const a=e[t];return a.base?[a.base,a.darken4,a.darken3,a.darken2,a.darken1,a.lighten1,a.lighten2,a.lighten3,a.lighten4,a.lighten5]:[a.black,a.white,a.transparent]})}const We=x({name:"VColorPickerSwatches",props:Te(),emits:{"update:color":e=>!0},setup(e,t){let{emit:a}=t;return w(()=>r("div",{class:["v-color-picker-swatches",e.class],style:[{maxHeight:P(e.maxHeight)},e.style]},[r("div",null,[e.swatches.map(i=>r("div",{class:"v-color-picker-swatches__swatch"},[i.map(u=>{const o=J(u),l=z(o),c=Pe(o);return r("div",{class:"v-color-picker-swatches__color",onClick:()=>l&&a("update:color",l)},[r("div",{style:{background:c}},[e.color&&Ve(e.color,l)?r(pe,{size:"x-small",icon:"$success",color:xe(u,"#FFFFFF")>2?"white":"black"},null):void 0])])})]))])])),{}}}),Xe=C({canvasHeight:{type:[String,Number],default:150},disabled:Boolean,dotSize:{type:[Number,String],default:10},hideCanvas:Boolean,hideSliders:Boolean,hideInputs:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(f).includes(e)},modes:{type:Array,default:()=>Object.keys(f),validator:e=>Array.isArray(e)&&e.every(t=>Object.keys(f).includes(t))},showSwatches:Boolean,swatches:Array,swatchesMaxHeight:{type:[Number,String],default:150},modelValue:{type:[Object,String]},...He(K({width:300}),["height","location","minHeight","maxHeight","minWidth","maxWidth"])},"VColorPicker"),Je=x({name:"VColorPicker",props:Xe(),emits:{"update:modelValue":e=>!0,"update:mode":e=>!0},setup(e){const t=j(e,"mode"),a=D(null),i=j(e,"modelValue",void 0,n=>{if(n==null||n==="")return null;let m;try{m=z(J(n))}catch{return null}return m},n=>n?Ne(n,e.modelValue):null),u=V(()=>i.value?{...i.value,h:a.value??i.value.h}:null),{rtlClasses:o}=Ee();let l=!0;B(i,n=>{if(!l){l=!0;return}n&&(a.value=n.h)},{immediate:!0});const c=n=>{l=!1,a.value=n.h,i.value=n};return I(()=>{e.modes.includes(t.value)||(t.value=e.modes[0])}),Re({VSlider:{color:void 0,trackColor:void 0,trackFillColor:void 0}}),w(()=>{const n=G.filterProps(e);return r(G,Be({rounded:e.rounded,elevation:e.elevation,theme:e.theme,class:["v-color-picker",o.value,e.class],style:[{"--v-color-picker-color-hsv":q({...u.value??y,a:1})},e.style]},n,{maxWidth:e.width}),{default:()=>[!e.hideCanvas&&r(Ae,{key:"canvas",color:u.value,"onUpdate:color":c,disabled:e.disabled,dotSize:e.dotSize,width:e.width,height:e.canvasHeight},null),(!e.hideSliders||!e.hideInputs)&&r("div",{key:"controls",class:"v-color-picker__controls"},[!e.hideSliders&&r(Ie,{key:"preview",color:u.value,"onUpdate:color":c,hideAlpha:!t.value.endsWith("a"),disabled:e.disabled},null),!e.hideInputs&&r(Ge,{key:"edit",modes:e.modes,mode:t.value,"onUpdate:mode":m=>t.value=m,color:u.value,"onUpdate:color":c,disabled:e.disabled},null)]),e.showSwatches&&r(We,{key:"swatches",color:u.value,"onUpdate:color":c,maxHeight:e.swatchesMaxHeight,swatches:e.swatches,disabled:e.disabled},null)]})}),{}}});export{Je as V,G as a};
