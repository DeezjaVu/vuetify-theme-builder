import{o as S,a as d,c as y,w as t,b as o,h as x,j as F,F as v,k as b,a5 as B,f as k,ab as P,ac as X,p as Z,n as q,X as z,O as J,s as Q,Z as Y,r as g,a0 as ee,a4 as A,K as oe,l as f,t as T,a6 as I,a7 as D,i as H,a8 as te}from"./index-BSLVzZ3R.js";import{_ as re}from"./ColorDialog-Bx4gkPEM.js";import{b as ae,e as le}from"./bootstrap-colors-B4LCXwTh.js";import{_ as ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V,a as C,b as se}from"./VRow-Cyq4yzhQ.js";import{V as ce}from"./VMenu-BKxdS_1k.js";import{V as ie,a as ue,c as de}from"./VSlider-CwswvJ2w.js";import"./VColorPicker-1Vo_QrOM.js";const me={__name:"ColorButtonCard",props:["btn-variant"],setup(e){const s=[{text:"Primary",color:"primary"},{text:"Secondary",color:"secondary"},{text:"Success",color:"success"},{text:"Info",color:"info"},{text:"Warning",color:"warning"},{text:"Error",color:"error"}];return S(()=>{console.log("ColorButtonCard ::: onMounted")}),(l,c)=>(d(),y(k,{class:"elevation-2"},{default:t(()=>[o(x,{class:"d-flex flex-column ga-2"},{default:t(()=>[(d(),F(v,null,b(s,i=>o(B,{text:i.text,color:i.color,variant:l.btnVariant},null,8,["text","color","variant"])),64))]),_:1})]),_:1}))}},he=P("themeStore",{state:()=>({themeInstance:X(),currentThemeName:"builder-dark"}),getters:{builderDark(e){return console.log("ThemeStore ::: builderDark"),e.themeInstance.themes["builder-dark"]},builderLight(e){return console.log("ThemeStore ::: builderLight"),console.log(" - themes: ",e.themeInstance.themes),e.themeInstance.themes["builder-light"]},themes(e){return console.log("ThemeStore ::: themes"),e.themeInstance.themes},computedThemes(e){return console.log("ThemeStore ::: computedThemes"),console.log(" - computedThemes: ",e.themeInstance.computedThemes),e.themeInstance.computedThemes}}}),fe=P("builderTheme",{persist:!0,state:()=>({themeStore:he(),defaultColors:{light:{dark:!1,colors:{primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00",background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE"}},dark:{dark:!0,colors:{primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00",background:"#121212",surface:"#212121","surface-bright":"#CCBFD6","surface-light":"#424242","surface-variant":"#A3A3A3","on-surface-variant":"#424242"}}},defaultThemes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#A3A3A3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}),getters:{themeInstance(e){return console.log("BuilderThemeStore ::: getTheme"),e.themeStore.themeInstance},currentThemeName(e){return console.log("BuilderThemeStore ::: currentThemeName"),e.themeStore.currentThemeName},builderDark(e){return console.log("BuilderThemeStore ::: builderDark"),e.themeStore.builderDark},builderLight(e){return console.log("BuilderThemeStore ::: builderLight"),e.themeStore.builderLight},getDefaultColors(e){return e.defaultColors}},actions:{setTheme(e){this.currentTheme=e},setColors(e){},updateThemeColor(e,s,l){console.log("BuilderThemeStore ::: updateThemeColor"),console.log(" - themeName: ",e),console.log(" - colorName: ",s),console.log(" - colorValue: ",l);let i=this.themeStore.builderDark;console.log(" - builder dark: ",i),i.colors[s]=l}}}),pe=Z({withBackground:Boolean,...q(),...z(),...J()},"VThemeProvider"),ge=Q()({name:"VThemeProvider",props:pe(),setup(e,s){let{slots:l}=s;const{themeClasses:c}=Y(e);return()=>{var i;return e.withBackground?o(e.tag,{class:["v-theme-provider",c.value,e.class],style:e.style},{default:()=>{var u;return[(u=l.default)==null?void 0:u.call(l)]}}):(i=l.default)==null?void 0:i.call(l)}}}),Ce={__name:"ColorsView",setup(e){console.log("========================="),console.log("ColorsView ::: setup"),console.log("========================="),console.log("ColorsView ::: bsBlue: ",ae),console.log("ColorsView ::: bsBlueHex: ",le);const c=fe(),i=c.themeInstance;console.log("ColorsView ::: themeInstance: ",i);const u=g(!1),w=c.builderDark;c.builderLight;const m=w.colors,h=g(""),_=g(""),p=g(""),L=[{title:"Material Design (default)",value:"material"},{title:"Flat Colors",value:"flat"},{title:"Bootstrap Colors",value:"bootstrap"}],N=ee([{title:"Primary",name:"primary",hex:"#2196F3"},{title:"Secondary",name:"secondary",hex:"#54B6B2"},{title:"Surface",name:"surface",hex:"#212121"},{title:"Background",name:"background",hex:"#121212"},{title:"Success",name:"success",hex:"#4CAF50"},{title:"Info",name:"info",hex:"#2196F3"},{title:"Warning",name:"warning",hex:"#FB8C00"},{title:"Error",name:"error",hex:"#CF6679"}]),U=[{title:"Elevated Variant",variant:"elevated"},{title:"Flat Variant",variant:"flat"},{title:"Outlined Variant",variant:"outlined"},{title:"Plain Variant",variant:"plain"},{title:"Tonal Variant",variant:"tonal"},{title:"Text Variant",variant:"text"}];S(()=>{console.log("ColorsView onMounted"),w.colors,console.log(" - themeStore - currentThemeName: ",c.currentThemeName)});function M(r){console.log("ColorsView ::: presetSwatchesUpdateHandler"),console.log(" - value: ",r)}function $(r){console.log("ColorsView ::: presetSwatchesClickHandler"),console.log(" - value: ",r)}function O(r){console.log("ColorsView ::: editColorClickHandler"),console.log(" - editing color: ",r,m[r]),p.value=r,h.value=m[r],_.value=h.value,u.value=!0}function W(r){console.log("ColorsView ::: editColorChangeHandler"),console.log(" - modal color: ",r),console.log(" - selected color: ",h.value);let n=p.value;m[n]=r}function j(r){console.log("ColorsView ::: editColorUpdateHandler"),console.log(" - modal color: ",r),console.log(" - selected color: ",h.value),u.value=!1}function G(){console.log("ColorsView ::: editColorCancelHandler"),console.log(" - selectedColor: ",h.value),console.log(" - tempColor: ",_.value);let r=p.value;console.log(" - builderThemeDark.colors: ",r,m[r]),m[r]=_.value,u.value=!1}return(r,n)=>{const K=re,R=me;return d(),y(se,{class:"fill-height px-12 mx-auto"},{default:t(()=>[o(V,{class:"align-sm-stretch"},{default:t(()=>[o(C,{cols:"3",class:"d-flex flex-column"},{default:t(()=>[o(K,{id:"color-dialog",modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=a=>u.value=a),"color-name":p.value,"picker-color":h.value,"onUpdate:pickerColor":[n[1]||(n[1]=a=>h.value=a),W],onUpdate:j,onCancel:G},null,8,["modelValue","color-name","picker-color"]),o(k,{class:"bg-surface"},{default:t(()=>[o(A,null,{append:t(()=>[o(B,{icon:"",density:"compact",class:"mb-6"},{default:t(()=>[o(oe,null,{default:t(()=>n[4]||(n[4]=[f("mdi-dots-vertical")])),_:1}),o(ce,{activator:"parent",location:"end","open-on-hover":""},{default:t(()=>[o(ie,{density:"comfortable","onUpdate:selected":M},{default:t(()=>[(d(),F(v,null,b(L,(a,E)=>o(ue,{key:E,value:a.value,onClick:ve=>$(a.value)},{default:t(()=>[o(de,null,{default:t(()=>[f(T(a.title),1)]),_:2},1024)]),_:2},1032,["value","onClick"])),64))]),_:1})]),_:1})]),_:1})]),default:t(()=>[o(I,null,{default:t(()=>n[2]||(n[2]=[f(" Theme Colors ")])),_:1}),o(D,null,{default:t(()=>n[3]||(n[3]=[f(" Material Design ")])),_:1})]),_:1}),o(x,{class:"my-2"},{default:t(()=>[(d(!0),F(v,null,b(N,a=>(d(),y(V,{key:a.name},{default:t(()=>[o(C,{class:"py-1"},{default:t(()=>[o(k,{class:"rounded-e-pill rounded-s-pill",variant:"flat",color:"secondary",density:"compact"},{default:t(()=>[o(A,{class:"px-3"},{prepend:t(()=>[o(B,{class:"mr-4",color:H(m)[a.name],icon:"",onClick:E=>O(a.name)},null,8,["color","onClick"])]),default:t(()=>[o(I,{class:"text-body-1 font-weight-light d-sm-none d-md-none d-lg-flex"},{default:t(()=>[f(T(a.title),1)]),_:2},1024),o(D,{class:"text-subtitle-2 font-mono font-weight-light d-sm-none d-md-none d-lg-flex"},{default:t(()=>[f(T(H(m)[a.name]),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),o(C,{class:"flex-shrink-1 col-content"},{default:t(()=>[o(ge,{theme:"builder-dark","with-background":""},{default:t(()=>[o(k,{title:"Button Components",subtitle:"Dark Theme",variant:"outlined"},{default:t(()=>[o(x,null,{default:t(()=>[o(V,{class:"d-flex flex-wrap"},{default:t(()=>[(d(),F(v,null,b(U,a=>o(C,{key:a,lg:"4",xl:"2"},{default:t(()=>[o(R,{subtitle:a.title,"btn-variant":a.variant},null,8,["subtitle","btn-variant"])]),_:2},1024)),64))]),_:1})]),_:1}),o(te)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},Fe=ne(Ce,[["__scopeId","data-v-be14df21"]]),Se={__name:"colors",setup(e){return S(()=>{console.log("PAGES ::: /builder/colors ::: onMounted")}),(s,l)=>{const c=Fe;return d(),y(c)}}};export{Se as default};
