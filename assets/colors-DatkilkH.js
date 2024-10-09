import{o as T,a as h,c as x,w as l,b as e,ay as _,aA as F,a0 as b,aB as y,aD as g,f as V,aE as D,aF as j,aG as P,aH as L,at as C,aI as N,aC as B,aJ as Q,aK as X,aL as Y,aM as U,aN as ee,p as oe,i as le,l as ae,k as te,q as re,r as ne,aa as k,Z as se,az as H,aO as ce}from"./index-BHwhEwUH.js";import{b as ie,V as A,a as I,c as ue,d as de}from"./VColorPicker-bndIXP7Q.js";import{V as me,b as pe,e as Ce}from"./bootstrap-colors-DvsUMXLj.js";import{_ as he}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as M,a as w,b as fe}from"./VRow-Byq8bniX.js";const ge={__name:"ColorButtonCard",props:["btn-variant"],setup(o){const c=[{text:"Primary",color:"primary"},{text:"Secondary",color:"secondary"},{text:"Success",color:"success"},{text:"Info",color:"info"},{text:"Warning",color:"warning"},{text:"Error",color:"error"}];return T(()=>{console.log("ColorButtonCard ::: onMounted")}),(a,i)=>(h(),x(V,{class:"elevation-2"},{default:l(()=>[e(_,{class:"d-flex flex-column ga-2"},{default:l(()=>[(h(),F(b,null,y(c,t=>e(g,{text:t.text,color:t.color,variant:a.btnVariant},null,8,["text","color","variant"])),64))]),_:1})]),_:1}))}},ve={__name:"ColorDialog",props:D(["modalColorOpen","colorName"],{pickerColor:{},pickerColorModifiers:{}}),emits:D(["change","update","cancel"],["update:pickerColor"]),setup(o,{emit:c}){const a=o,i=c,t=j(o,"pickerColor"),d=["hex"];T(()=>{console.log("ColorDialog ::: onMounted"),console.log(" - pickerColor: ",t)});function v(f){console.log("ColorDialog ::: pickerUpdateHandler"),console.log(" - color picker:",f),console.log(" - old pickerColor value: ",t.value),t.value=f,console.log(" - new pickerColor value: ",t.value)}function m(){console.log("ColorDialog ::: cancelClickHandler"),console.log(" - pickerColor: ",t.value),i("cancel")}function p(){console.log("ColorDialog ::: okClickHandler"),i("update",t.value)}return(f,s)=>(h(),x(Y,{modelValue:a.modalColorOpen,"onUpdate:modelValue":s[0]||(s[0]=S=>a.modalColorOpen=S),persistent:"","max-width":"348"},{default:l(()=>[e(V,{flat:""},{default:l(()=>[e(P,null,{append:l(()=>[e(g,{icon:"mdi-palette",variant:"text",density:"compact",class:"mb-5"})]),default:l(()=>[e(L,null,{default:l(()=>s[1]||(s[1]=[C(" Select Color ")])),_:1}),e(N,null,{default:l(()=>[C(B(a.colorName),1)]),_:1})]),_:1}),e(_,{class:"d-flex ga-2"},{default:l(()=>[e(ie,{"dot-size":"16",mode:"hex",modes:d,"model-value":t.value,"swatches-max-height":"300","hide-sliders":"","show-swatches":"",rounded:"md",class:"my-0","onUpdate:modelValue":v},null,8,["model-value"])]),_:1}),e(Q,null,{default:l(()=>[e(X),e(g,{color:"primary",flat:"",onClick:m},{default:l(()=>s[2]||(s[2]=[C("Cancel")])),_:1}),e(g,{color:"primary",flat:"",onClick:p},{default:l(()=>s[3]||(s[3]=[C("Ok")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},ke=U("themeStore",{state:()=>({themeInstance:ee(),currentThemeName:"builder-dark"}),getters:{builderDark(o){return console.log("ThemeStore ::: builderDark"),o.themeInstance.themes["builder-dark"]},builderLight(o){return console.log("ThemeStore ::: builderLight"),console.log(" - themes: ",o.themeInstance.themes),o.themeInstance.themes["builder-light"]},themes(o){return console.log("ThemeStore ::: themes"),o.themeInstance.themes},computedThemes(o){return console.log("ThemeStore ::: computedThemes"),console.log(" - computedThemes: ",o.themeInstance.computedThemes),o.themeInstance.computedThemes}}}),Fe=U("builderTheme",{persist:!0,state:()=>({themeStore:ke(),defaultColors:{light:{dark:!1,colors:{primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00",background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE"}},dark:{dark:!0,colors:{primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00",background:"#121212",surface:"#212121","surface-bright":"#CCBFD6","surface-light":"#424242","surface-variant":"#A3A3A3","on-surface-variant":"#424242"}}},defaultThemes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#A3A3A3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}),getters:{themeInstance(o){return console.log("BuilderThemeStore ::: getTheme"),o.themeStore.themeInstance},currentThemeName(o){return console.log("BuilderThemeStore ::: currentThemeName"),o.themeStore.currentThemeName},builderDark(o){return console.log("BuilderThemeStore ::: builderDark"),o.themeStore.builderDark},builderLight(o){return console.log("BuilderThemeStore ::: builderLight"),o.themeStore.builderLight},getDefaultColors(o){return o.defaultColors}},actions:{setTheme(o){this.currentTheme=o},setColors(o){},updateThemeColor(o,c,a){console.log("BuilderThemeStore ::: updateThemeColor"),console.log(" - themeName: ",o),console.log(" - colorName: ",c),console.log(" - colorValue: ",a);let t=this.themeStore.builderDark;console.log(" - builder dark: ",t),t.colors[c]=a}}}),be=oe({withBackground:Boolean,...le(),...ae(),...te()},"VThemeProvider"),ye=re()({name:"VThemeProvider",props:be(),setup(o,c){let{slots:a}=c;const{themeClasses:i}=ne(o);return()=>{var t;return o.withBackground?e(o.tag,{class:["v-theme-provider",i.value,o.class],style:o.style},{default:()=>{var d;return[(d=a.default)==null?void 0:d.call(a)]}}):(t=a.default)==null?void 0:t.call(a)}}}),_e={__name:"ColorsView",setup(o){console.log("========================="),console.log("ColorsView ::: setup"),console.log("========================="),console.log("ColorsView ::: bsBlue: ",pe),console.log("ColorsView ::: bsBlueHex: ",Ce);const i=Fe(),t=i.themeInstance;console.log("ColorsView ::: themeInstance: ",t);const d=k(!1),v=i.builderDark;i.builderLight;const m=v.colors,p=k(""),f=k(""),s=k(""),S=[{title:"Material Design (default)",value:"material"},{title:"Flat Colors",value:"flat"},{title:"Bootstrap Colors",value:"bootstrap"}],O=[{title:"Primary Color",value:"primary"},{title:"Secondary Color",value:"secondary"},{title:"Surface Color",value:"surface"},{title:"Background Color",value:"background"},{title:"Success Color",value:"success"},{title:"Info Color",value:"info"},{title:"Warning Color",value:"warning"},{title:"Error Color",value:"error"}],$=[{title:"Elevated Variant",variant:"elevated"},{title:"Flat Variant",variant:"flat"},{title:"Outlined Variant",variant:"outlined"},{title:"Plain Variant",variant:"plain"},{title:"Tonal Variant",variant:"tonal"},{title:"Text Variant",variant:"text"}];T(()=>{console.log("ColorsView onMounted"),v.colors,console.log(" - themeStore - currentThemeName: ",i.currentThemeName)});function z(r){console.log("ColorsView ::: presetSwatchesUpdateHandler"),console.log(" - value: ",r)}function G(r){console.log("ColorsView ::: presetSwatchesClickHandler"),console.log(" - value: ",r)}function W(r){console.log("ColorsView ::: editColorClickHandler"),console.log(" - editing color: ",r,m[r]),s.value=r,p.value=m[r],f.value=p.value,d.value=!0}function q(r){console.log("ColorsView ::: editColorChangeHandler"),console.log(" - modal color: ",r),console.log(" - selected color: ",p.value);let u=s.value;m[u]=r}function J(r){console.log("ColorsView ::: editColorUpdateHandler"),console.log(" - modal color: ",r),console.log(" - selected color: ",p.value),d.value=!1}function K(){console.log("ColorsView ::: editColorCancelHandler"),console.log(" - selectedColor: ",p.value),console.log(" - tempColor: ",f.value);let r=s.value;console.log(" - builderThemeDark.colors: ",r,m[r]),m[r]=f.value,d.value=!1}return(r,u)=>{const R=ve,Z=ge;return h(),x(fe,{class:"fill-height px-12 mx-auto","grid-list-xs":""},{default:l(()=>[e(M,{class:"align-sm-stretch"},{default:l(()=>[e(w,{class:"d-flex flex-column col-menu"},{default:l(()=>[e(R,{"modal-color-open":d.value,"color-name":s.value,"picker-color":p.value,"onUpdate:pickerColor":[u[0]||(u[0]=n=>p.value=n),q],onUpdate:J,onCancel:K},null,8,["modal-color-open","color-name","picker-color"]),e(V,{variant:"outlined"},{default:l(()=>[e(P,null,{append:l(()=>[e(g,{icon:"",density:"compact",class:"mb-6"},{default:l(()=>[e(se,null,{default:l(()=>u[3]||(u[3]=[C("mdi-dots-vertical")])),_:1}),e(me,{activator:"parent",location:"end","open-on-hover":""},{default:l(()=>[e(A,{density:"comfortable","onUpdate:selected":z},{default:l(()=>[(h(),F(b,null,y(S,(n,E)=>e(I,{key:E,value:n.value,onClick:Te=>G(n.value)},{default:l(()=>[e(ue,null,{default:l(()=>[C(B(n.title),1)]),_:2},1024)]),_:2},1032,["value","onClick"])),64))]),_:1})]),_:1})]),_:1})]),default:l(()=>[e(L,null,{default:l(()=>u[1]||(u[1]=[C(" Theme Colors ")])),_:1}),e(N,null,{default:l(()=>u[2]||(u[2]=[C(" Material Design ")])),_:1})]),_:1}),e(_,null,{default:l(()=>[e(A,{class:"d-flex flex-column",density:"compact",lines:"two","active-class":"active-disabled"},{default:l(()=>[(h(),F(b,null,y(O,n=>e(I,{title:n.title,value:n.value,active:!1,onClick:E=>W(n.value)},{default:l(()=>[e(de,{class:"px-2 my-1 py-1 border-thin",color:H(m)[n.value]},{default:l(()=>[C(" color: "+B(H(m)[n.value]),1)]),_:2},1032,["color"])]),_:2},1032,["title","value","onClick"])),64))]),_:1})]),_:1})]),_:1})]),_:1}),e(w,{class:"flex-shrink-1 col-content"},{default:l(()=>[e(ye,{theme:"builder-dark","with-background":""},{default:l(()=>[e(V,{title:"Button Components",subtitle:"Dark Theme",variant:"outlined"},{default:l(()=>[e(_,null,{default:l(()=>[e(M,{class:"d-flex flex-wrap"},{default:l(()=>[(h(),F(b,null,y($,n=>e(w,{key:n,lg:"4",xl:"2"},{default:l(()=>[e(Z,{subtitle:n.title,"btn-variant":n.variant},null,8,["subtitle","btn-variant"])]),_:2},1024)),64))]),_:1})]),_:1}),e(ce)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},Ve=he(_e,[["__scopeId","data-v-82a7ff98"]]),De={__name:"colors",setup(o){return T(()=>{console.log("PAGES ::: /builder/colors ::: onMounted")}),(c,a)=>(h(),x(Ve))}};export{De as default};
