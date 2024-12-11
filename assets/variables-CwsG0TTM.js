import{u as X}from"./builder-colors-lX_PUAvy.js";import{t as g,m as x}from"./metro-colors-DDyPiREK.js";import{V as Y,f as h,g as k}from"./VColorPicker-BqX9GfpV.js";import{r as B,o as W,a as t,c,w as a,b as e,V as q,f as U,j as H,k as I,l as m,F as f,m as V,u as M,n as P,p as d,t as u,b0 as J,b3 as K,e as R,bV as O,bW as Q,A as D,bX as Z,bY as ee,z as ae,C as $,D as le}from"./index-DCPKev4k.js";import{V as F,a as b,b as L}from"./VRow-CbgOCGHy.js";import"./VSlider-C0d3bjVI.js";const oe={__name:"VariablesView",setup(A){const p=X(),y=g.baseColors;console.log("VariablesView ::: twBaseColors: ",y),g.swatches;const v=h.baseColors;console.log("VariablesView ::: bsBaseColors: ",v),h.swatches;const E=k.baseColors;console.log("VariablesView ::: flatBaseColors: ",E),k.swatches;const N=x.baseColors;console.log("VariablesView ::: metroBaseColors: ",N),x.swatches;const T=p.materialColors;console.log("VariablesView ::: materialColors: ",T);const w=T.red;console.log("VariablesView ::: materialRed: ",w),p.materialBaseHex,p.materialRedHex,p.bsDarklyHex;const r=B(""),_=B(""),j=[{title:"Tailwind",value:"tailwind"},{title:"Bootstrap",value:"bootstrap"},{title:"Flat Colors",value:"flat"},{title:"Metro UI",value:"metro"}],S={tailwind:g,bootstrap:h,flat:k,metro:x},n=B("tailwind");W(()=>{console.log("VariablesView ::: onMounted")});function z(i){console.log("VariablesView ::: colorPickerUpdateHandler"),console.log(" - value:",i);let o=String(i).toUpperCase();console.log(" - val: ",o),console.log(" - selectedColor value: ",r.value),console.log(" - selectedItem value: ",_.value)}function G(i,o){console.log("VariablesView ::: paletteButtonClickHandler"),console.log(" - clr: ",i),console.log(" - key: ",o),r.value=i.toUpperCase()}return(i,o)=>(t(),c(L,{class:"fill-height px-2 px-sm-12 mx-auto"},{default:a(()=>[e(q,{class:"align-centerfill-height mx-auto",style:{"max-width":"75vw"}},{default:a(()=>[e(U,null,{default:a(()=>[e(H,null,{default:a(()=>[e(F,null,{default:a(()=>[e(b,{cols:"4"},{default:a(()=>[e(Y,{modelValue:r.value,"onUpdate:modelValue":[o[0]||(o[0]=l=>r.value=l),z],mode:"hex","hide-sliders":"","show-swatches":"","swatches-max-height":"420"},null,8,["modelValue"])]),_:1}),e(b,{cols:"2"},{default:a(()=>[e(I,{width:"200","max-width":"200",color:"surface-variant"},{default:a(()=>[(t(!0),m(f,null,V(M(w),(l,s)=>(t(),c(P,{value:l.toUpperCase(),"base-color":l,active:r.value===l.toUpperCase(),onClick:C=>{_.value=s,r.value=l.toUpperCase()}},{default:a(()=>[d(u(s)+": "+u(l.toUpperCase()),1)]),_:2},1032,["value","base-color","active","onClick"]))),256))]),_:1})]),_:1}),e(b,{cols:"2"},{default:a(()=>[e(I,{width:"200","max-width":"200",color:"surface-variant"},{default:a(()=>[(t(!0),m(f,null,V(M(w),(l,s)=>(t(),c(P,{value:l.toUpperCase(),"base-color":l,active:r.value===l.toUpperCase(),onClick:C=>{_.value=s.toUpperCase(),r.value=l.toUpperCase()}},{default:a(()=>[d(u(s)+": "+u(l.toUpperCase()),1)]),_:2},1032,["value","base-color","active","onClick"]))),256))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(U,null,{default:a(()=>[e(J,{"align-tabs":"center"},{default:a(()=>[e(K,{class:"text-uppercase"},{default:a(()=>o[3]||(o[3]=[d(" Color Palettes ")])),_:1}),e(R),e(O,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=l=>n.value=l)},{default:a(()=>[(t(),m(f,null,V(j,l=>e(Q,{class:"font-weight-light",key:l,text:l.title,value:l.value},null,8,["text","value"])),64))]),_:1},8,["modelValue"]),e(R),e(D,{icon:"mdi-dots-vertical"})]),_:1}),e(H,null,{default:a(()=>[e(Z,{modelValue:n.value,"onUpdate:modelValue":o[2]||(o[2]=l=>n.value=l)},{default:a(()=>[e(ee,{value:n.value},{default:a(()=>[(t(!0),m(f,null,V(S[n.value].baseColors,l=>(t(),c(L,{key:l,class:"text-body-2 font-mono",style:{"padding-top":"2px","padding-bottom":"2px"}},{default:a(()=>[e(U,{class:"my-0",density:"compact",style:{"max-width":"fit-content",margin:"0 auto"}},{default:a(()=>[e(ae,{class:"pt-1 pb-0 pl-1"},{default:a(()=>[e($,{class:"text-body-2 font-mono"},{default:a(()=>[d(u(l.title),1)]),_:2},1024)]),_:2},1024),e(F,null,{default:a(()=>[(t(!0),m(f,null,V(S[n.value][l.name],(s,C)=>(t(),c(b,{class:"text-center",key:s,cols:"auto",md:"2",xl:"auto"},{default:a(()=>[e(D,{class:"btn-hover-text font-mono",color:s,density:"comfortable",style:{"min-width":"100%"},onClick:te=>G(s,C)},{default:a(()=>[d(u(s),1)]),_:2},1032,["color","onClick"]),e($,{class:"text-body-2 font-mono pt-1 pb-2"},{default:a(()=>[d(u(C),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024),e(le)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["value"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}))}},ce={__name:"variables",setup(A){return W(()=>{console.log("PAGES ::: /builder/variables ::: onMounted")}),(p,y)=>{const v=oe;return t(),c(v)}}};export{ce as default};
