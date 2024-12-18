import{Q as u,ak as f,au as R,al as d,Z as g,aT as G,ax as T,a8 as _,b as B,ci as c,cj as y,j as V,ck as j}from"./index-BNLS94iF.js";const I=u({fluid:{type:Boolean,default:!1},...f(),...R(),...d()},"VContainer"),Y=g()({name:"VContainer",props:I(),setup(e,a){let{slots:t}=a;const{rtlClasses:s}=G(),{dimensionStyles:n}=T(e);return _(()=>B(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},s.value,e.class],style:[n.value,e.style]},t)),{}}}),v=c.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}),N=c.reduce((e,a)=>{const t="offset"+y(a);return e[t]={type:[String,Number],default:null},e},{}),L=c.reduce((e,a)=>{const t="order"+y(a);return e[t]={type:[String,Number],default:null},e},{}),b={col:Object.keys(v),offset:Object.keys(N),order:Object.keys(L)};function U(e,a,t){let s=e;if(!(t==null||t===!1)){if(a){const n=a.replace(e,"");s+=`-${n}`}return e==="col"&&(s="v-"+s),e==="col"&&(t===""||t===!0)||(s+=`-${t}`),s.toLowerCase()}}const M=["auto","start","end","center","baseline","stretch"],x=u({cols:{type:[Boolean,String,Number],default:!1},...v,offset:{type:[String,Number],default:null},...N,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:e=>M.includes(e)},...f(),...d()},"VCol"),Z=g()({name:"VCol",props:x(),setup(e,a){let{slots:t}=a;const s=V(()=>{const n=[];let l;for(l in b)b[l].forEach(o=>{const i=e[o],S=U(l,o,i);S&&n.push(S)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return j(e.tag,{class:[s.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}}),m=["start","end","center"],P=["space-between","space-around","space-evenly"];function C(e,a){return c.reduce((t,s)=>{const n=e+y(s);return t[n]=a(),t},{})}const F=[...m,"baseline","stretch"],$=e=>F.includes(e),h=C("align",()=>({type:String,default:null,validator:$})),K=[...m,...P],w=e=>K.includes(e),E=C("justify",()=>({type:String,default:null,validator:w})),D=[...m,...P,"stretch"],A=e=>D.includes(e),O=C("alignContent",()=>({type:String,default:null,validator:A})),k={align:Object.keys(h),justify:Object.keys(E),alignContent:Object.keys(O)},z={align:"align",justify:"justify",alignContent:"align-content"};function J(e,a,t){let s=z[e];if(t!=null){if(a){const n=a.replace(e,"");s+=`-${n}`}return s+=`-${t}`,s.toLowerCase()}}const Q=u({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:$},...h,justify:{type:String,default:null,validator:w},...E,alignContent:{type:String,default:null,validator:A},...O,...f(),...d()},"VRow"),q=g()({name:"VRow",props:Q(),setup(e,a){let{slots:t}=a;const s=V(()=>{const n=[];let l;for(l in k)k[l].forEach(r=>{const o=e[r],i=J(l,r,o);i&&n.push(i)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return j(e.tag,{class:["v-row",s.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}});export{q as V,Z as a,Y as b};
