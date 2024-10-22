const M=.20689655172413793,ce=e=>e>M**3?Math.cbrt(e):e/(3*M**2)+4/29,ue=e=>e>M?e**3:3*M**2*(e-4/29);function ne(e){const n=ce,t=n(e[1]);return[116*t-16,500*(n(e[0]/.95047)-t),200*(t-n(e[2]/1.08883))]}function te(e){const n=ue,t=(e[0]+16)/116;return[n(t+e[1]/500)*.95047,n(t),n(t-e[2]/200)*1.08883]}function I(e,n){return n.every(t=>e.hasOwnProperty(t))}function _(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+t.repeat(Math.max(0,n-e.length))}function he(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const t=[];let r=0;for(;r<e.length;)t.push(e.substr(r,n)),r+=n;return t}function de(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(n,Math.min(t,e))}const be=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],fe=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,me=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],pe=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function se(e){const n=Array(3),t=fe,r=be;for(let i=0;i<3;++i)n[i]=Math.round(de(t(r[i][0]*e[0]+r[i][1]*e[1]+r[i][2]*e[2]))*255);return{r:n[0],g:n[1],b:n[2]}}function ae(e){let{r:n,g:t,b:r}=e;const i=[0,0,0],l=pe,o=me;n=l(n/255),t=l(t/255),r=l(r/255);for(let g=0;g<3;++g)i[g]=o[g][0]*n+o[g][1]*t+o[g][2]*r;return i}const z=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,ke={rgb:(e,n,t,r)=>({r:e,g:n,b:t,a:r}),rgba:(e,n,t,r)=>({r:e,g:n,b:t,a:r}),hsl:(e,n,t,r)=>ee({h:e,s:n,l:t,a:r}),hsla:(e,n,t,r)=>ee({h:e,s:n,l:t,a:r}),hsv:(e,n,t,r)=>x({h:e,s:n,v:t,a:r}),hsva:(e,n,t,r)=>x({h:e,s:n,v:t,a:r})};function xe(e){if(typeof e=="number")return(isNaN(e)||e<0||e>16777215)&&console.log(`'${e}' is not a valid hex color`),{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"&&z.test(e)){const{groups:n}=e.match(z),{fn:t,values:r}=n,i=r.split(/,\s*/).map(l=>l.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(t)?parseFloat(l)/100:parseFloat(l));return ke[t](...i)}else if(typeof e=="string"){let n=e.startsWith("#")?e.slice(1):e;[3,4].includes(n.length)?n=n.split("").map(r=>r+r).join(""):[6,8].includes(n.length)||console.log(`'${e}' is not a valid hex(a) color`);const t=parseInt(n,16);return(isNaN(t)||t<0||t>4294967295)&&console.log(`'${e}' is not a valid hex(a) color`),Fe(n)}else if(typeof e=="object"){if(I(e,["r","g","b"]))return e;if(I(e,["h","s","l"]))return x(re(e));if(I(e,["h","s","v"]))return x(e)}throw new TypeError(`Invalid color: ${e==null?e:String(e)||e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function He(e,n){const t=ne(ae(e));return t[0]=t[0]+n*10,se(te(t))}function je(e,n){const t=ne(ae(e));return t[0]=t[0]-n*10,se(te(t))}function B(e){const n=Math.round(e).toString(16);return("00".substr(0,2-n.length)+n).toUpperCase()}function ve(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(n=>n+n).join("")),e.length!==6&&(e=_(_(e,6),8,"F")),e}function re(e){const{h:n,s:t,l:r,a:i}=e,l=r+t*Math.min(r,1-r),o=l===0?0:2-2*r/l;return{h:n,s:o,v:l,a:i}}function Be(e){let{r:n,g:t,b:r,a:i}=e;return`#${[B(n),B(t),B(r),i!==void 0?B(Math.round(i*255)):""].join("")}`}function Fe(e){e=ve(e);let[n,t,r,i]=he(e,2).map(l=>parseInt(l,16));return i=i===void 0?i:i/255,{r:n,g:t,b:r,a:i}}function x(e){const{h:n,s:t,v:r,a:i}=e,l=g=>{const y=(g+n/60)%6;return r-r*t*Math.max(Math.min(y,4-y,1),0)},o=[l(5),l(3),l(1)].map(g=>Math.round(g*255));return{r:o[0],g:o[1],b:o[2],a:i}}function ee(e){return x(re(e))}function ie(e,n,t){e=e.replace(/#/g,""),n=n.replace(/#/g,"");const r=E=>E.toString(16).padStart(2,"0"),i=E=>parseInt(E,16);t=typeof t<"u"?t:50;for(var l="#",o=0;o<=5;o+=2){for(var g=i(e.substr(o,2)),y=i(n.substr(o,2)),j=r(Math.round(y+(g-y)*(t/100)));j.length<2;)j="0"+j;l+=j}return l.toUpperCase()}const s=(e,n)=>ie("#FFFFFF",e,n),a=(e,n)=>ie("#000000",e,n),c="#0D6EFD",O={lighten5:s(c,90),lighten4:s(c,80),lighten3:s(c,60),lighten2:s(c,40),lighten1:s(c,20),base:c,darken1:a(c,20),darken2:a(c,40),darken3:a(c,60),darken4:a(c,80)},N=Object.values(O).reverse(),u="#6610F2",w={lighten5:s(u,90),lighten4:s(u,80),lighten3:s(u,60),lighten2:s(u,40),lighten1:s(u,20),base:u,darken1:a(u,20),darken2:a(u,40),darken3:a(u,60),darken4:a(u,80)},P=Object.values(w).reverse(),h="#6F42C1",C={lighten5:s(h,90),lighten4:s(h,80),lighten3:s(h,60),lighten2:s(h,40),lighten1:s(h,20),base:h,darken1:a(h,20),darken2:a(h,40),darken3:a(h,60),darken4:a(h,80)},W=Object.values(C).reverse(),d="#D63384",D={lighten5:s(d,90),lighten4:s(d,80),lighten3:s(d,60),lighten2:s(d,40),lighten1:s(d,20),base:d,darken1:a(d,20),darken2:a(d,40),darken3:a(d,60),darken4:a(d,80)},X=Object.values(D).reverse(),b="#DC3545",R={lighten5:s(b,90),lighten4:s(b,80),lighten3:s(b,60),lighten2:s(b,40),lighten1:s(b,20),base:b,darken1:a(b,20),darken2:a(b,40),darken3:a(b,60),darken4:a(b,80)},Z=Object.values(R).reverse(),f="#FD7E14",S={lighten5:s(f,90),lighten4:s(f,80),lighten3:s(f,60),lighten2:s(f,40),lighten1:s(f,20),base:f,darken1:a(f,20),darken2:a(f,40),darken3:a(f,60),darken4:a(f,80)},L=Object.values(S).reverse(),m="#FFC107",T={lighten5:s(m,90),lighten4:s(m,80),lighten3:s(m,60),lighten2:s(m,40),lighten1:s(m,20),base:m,darken1:a(m,20),darken2:a(m,40),darken3:a(m,60),darken4:a(m,80)},V=Object.values(T).reverse(),p="#198754",$={lighten5:s(p,90),lighten4:s(p,80),lighten3:s(p,60),lighten2:s(p,40),lighten1:s(p,20),base:p,darken1:a(p,20),darken2:a(p,40),darken3:a(p,60),darken4:a(p,80)},U=Object.values($).reverse(),k="#20C997",G={lighten5:s(k,90),lighten4:s(k,80),lighten3:s(k,60),lighten2:s(k,40),lighten1:s(k,20),base:k,darken1:a(k,20),darken2:a(k,40),darken3:a(k,60),darken4:a(k,80)},q=Object.values(G).reverse(),v="#0DCAF0",Y={lighten5:s(v,90),lighten4:s(v,80),lighten3:s(v,60),lighten2:s(v,40),lighten1:s(v,20),base:v,darken1:a(v,20),darken2:a(v,40),darken3:a(v,60),darken4:a(v,80)},J=Object.values(Y).reverse(),F="#ADB5BD",A={lighten5:s(F,90),lighten4:s(F,80),lighten3:s(F,60),lighten2:s(F,40),lighten1:s(F,20),base:F,darken1:a(F,20),darken2:a(F,40),darken3:a(F,60),darken4:a(F,80)},K=Object.values(A).reverse(),H={black:"#000000",white:"#FFFFFF",transparent:"#FFFFFF00"},Q=Object.values(H),le=[{title:"Blue",name:"blue",base:O.base},{title:"Indigo",name:"indigo",base:w.base},{title:"Purple",name:"purple",base:C.base},{title:"Pink",name:"pink",base:D.base},{title:"Red",name:"red",base:R.base},{title:"Orange",name:"orange",base:S.base},{title:"Yellow",name:"yellow",base:T.base},{title:"Green",name:"green",base:$.base},{title:"Teal",name:"teal",base:G.base},{title:"Cyan",name:"cyan",base:Y.base},{title:"Gray",name:"gray",base:A.base},{title:"Black",name:"black",base:H.black},{title:"White",name:"white",base:H.white}],oe=[N,P,W,X,Z,L,V,U,q,J,K,Q],ge={primary:c,secondary:"#6C757D",success:"#198754",info:"#0DCAF0",warning:"#FFC107",danger:"#DC3545",light:"#F8F9FA",dark:"#212529"},ye={blue:O,blueHex:N,indigo:w,indigoHex:P,purple:C,purpleHex:W,pink:D,pinkHex:X,red:R,redHex:Z,orange:S,orangeHex:L,yellow:T,yellowHex:V,green:$,greenHex:U,teal:G,tealHex:q,cyan:Y,cyanHex:J,gray:A,grayHex:K,shades:H,shadesHex:Q,baseColors:le,swatches:oe,theme:ge},Me=Object.freeze(Object.defineProperty({__proto__:null,baseColors:le,blue:O,blueHex:N,cyan:Y,cyanHex:J,default:ye,gray:A,grayHex:K,green:$,greenHex:U,indigo:w,indigoHex:P,orange:S,orangeHex:L,pink:D,pinkHex:X,purple:C,purpleHex:W,red:R,redHex:Z,shades:H,shadesHex:Q,swatches:oe,teal:G,tealHex:q,theme:ge,yellow:T,yellowHex:V},Symbol.toStringTag,{value:"Module"}));export{Be as R,le as a,O as b,Me as c,je as d,N as e,s as f,a as g,ye as h,He as l,ie as m,S as o,xe as p,R as r,oe as s};