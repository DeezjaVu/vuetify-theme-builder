import{b7 as i,b8 as b,o as x,a as H,c as M,w as a,b as o,f as v,ay as h,b9 as y,ba as S,aD as d,az as U,Z as t,aA as w,a6 as B,a2 as N,aB as z,e as P,bb as T,bc as A}from"./index-DFoYSqcB.js";import{V as E}from"./VColorPicker-B2rlEfn2.js";const O={__name:"ColorDialog",props:i({colorName:{type:String,required:!0,default:"color"}},{pickerColor:{},pickerColorModifiers:{}}),emits:i(["change","update","cancel"],["update:pickerColor"]),setup(n,{emit:p}){const s=n,c=p,r=b(n,"pickerColor"),u=["hex"];x(()=>{console.log("ColorDialog ::: onMounted"),console.log(" - pickerColor: ",r)});function m(e){console.log("ColorDialog ::: dialogUpdateHandler"),console.log(" - dialogUpdate: ",e)}function g(){}function f(e){}function C(e){}function k(e){console.log("ColorDialog ::: pickerUpdateHandler"),console.log(" - color picker:",e),r.value=e}function V(){console.log("ColorDialog ::: cancelClickHandler"),console.log(" - pickerColor: ",r.value),c("cancel")}function _(){console.log("ColorDialog ::: okClickHandler"),c("update",r.value)}return(e,l)=>{const D=A;return H(),M(T,{class:"position-modal-picker",absolute:"",scrim:"false",opacity:"0.06","max-width":"348","onUpdate:modelValue":m},{default:a(()=>[o(v,{flat:""},{default:a(()=>[o(D,{"modal-id":"color-dialog-item","onModal:dragStart":g,"onModal:dragMove":f,"onModal:dragEnd":C},{default:a(()=>[o(h,y(S(s)),{append:a(()=>[o(d,{icon:"mdi-palette",variant:"text",density:"compact",class:"mb-5"})]),default:a(()=>[o(U,null,{default:a(()=>l[0]||(l[0]=[t(" Select Color ")])),_:1}),o(w,null,{default:a(()=>[t(B(s.colorName),1)]),_:1})]),_:1},16)]),_:1}),o(N,{class:"d-flex ga-2"},{default:a(()=>[o(E,{"dot-size":"16",mode:"hex",modes:u,"model-value":r.value,"swatches-max-height":"300","hide-sliders":"","show-swatches":"",rounded:"md",class:"my-0","onUpdate:modelValue":k},null,8,["model-value"])]),_:1}),o(z,null,{default:a(()=>[o(P),o(d,{color:"primary",flat:"",onClick:V},{default:a(()=>l[1]||(l[1]=[t("Cancel")])),_:1}),o(d,{color:"primary",flat:"",onClick:_},{default:a(()=>l[2]||(l[2]=[t("Ok")])),_:1})]),_:1})]),_:1})]),_:1})}}};export{O as _};