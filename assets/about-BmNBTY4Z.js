import{V as al,b as Be,s as tl,m as S,r as nl,o as ol,a as sl,c as ul,p as Te,R as G,l as te,d as re}from"./bootstrap-colors-DvsUMXLj.js";import{p as ee,h as il,m as rl,i as Ce,j as cl,k as qe,l as je,n as Ge,q as ie,r as Ke,u as dl,s as vl,t as ce,v as he,x as Oe,b as t,y as K,I as me,E as Re,z as fl,A as ml,B as pl,C as hl,D as gl,F as bl,G as kl,R as Vl,H as Je,J as Cl,K as yl,L as wl,M as Sl,N as xl,O as Il,P as pe,Q as Pl,S as Fl,T as E,U as De,W as Al,X as _l,Y as Bl,Z as se,_ as de,$ as Tl,a0 as J,a1 as Ie,a2 as Ol,a3 as We,a4 as Ue,a5 as Xe,a6 as le,a7 as Rl,a8 as Z,a9 as Ne,aa as O,ab as Ye,ac as Se,ad as Dl,ae as Qe,af as Pe,ag as Ul,ah as Nl,ai as Ml,aj as Ll,o as Fe,ak as El,al as be,am as Hl,an as $l,ao as zl,ap as ql,aq as jl,ar as Me,as as Gl,at as ve,au as Kl,av as Le,aw as Ee,ax as Jl,a as X,c as oe,w as A,V as Wl,f as Xl,ay as Yl,az as He,aA as ke,aB as Ve,aC as W,e as $e}from"./index-BHwhEwUH.js";import{u as Ql}from"./builder-colors-Dm1xumH1.js";import{V as Zl,a as ne,b as ea}from"./VRow-Byq8bniX.js";import{m as la,u as aa,V as fe,a as ue,b as ta}from"./VColorPicker-bndIXP7Q.js";const Ze=Symbol.for("vuetify:v-chip-group"),na=ee({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:il},...rl(),...Ce(),...cl({selectedClass:"v-chip--selected"}),...qe(),...je(),...Ge({variant:"tonal"})},"VChipGroup");ie()({name:"VChipGroup",props:na(),emits:{"update:modelValue":e=>!0},setup(e,m){let{slots:o}=m;const{themeClasses:d}=Ke(e),{isSelected:n,select:p,next:f,prev:c,selected:s}=dl(e,Ze);return vl({VChip:{color:ce(e,"color"),disabled:ce(e,"disabled"),filter:ce(e,"filter"),variant:ce(e,"variant")}}),he(()=>{const b=Oe.filterProps(e);return t(Oe,K(b,{class:["v-chip-group",{"v-chip-group--column":e.column},d.value,e.class],style:e.style}),{default:()=>{var I;return[(I=o.default)==null?void 0:I.call(o,{isSelected:n,select:p,next:f,prev:c,selected:s.value})]}})}),{}}});const oa=ee({activeClass:String,appendAvatar:String,appendIcon:me,closable:Boolean,closeIcon:{type:me,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:me,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:Re(),onClickOnce:Re(),...fl(),...Ce(),...ml(),...pl(),...hl(),...gl(),...bl(),...kl(),...qe({tag:"span"}),...je(),...Ge({variant:"tonal"})},"VChip"),sa=ie()({name:"VChip",directives:{Ripple:Vl},props:oa(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,m){let{attrs:o,emit:d,slots:n}=m;const{t:p}=Je(),{borderClasses:f}=Cl(e),{colorClasses:c,colorStyles:s,variantClasses:b}=yl(e),{densityClasses:I}=wl(e),{elevationClasses:H}=Sl(e),{roundedClasses:v}=xl(e),{sizeClasses:C}=Il(e),{themeClasses:_}=Ke(e),B=pe(e,"modelValue"),u=Pl(e,Ze,!1),V=Fl(e,o),P=E(()=>e.link!==!1&&V.isLink.value),R=E(()=>!e.disabled&&e.link!==!1&&(!!u||e.link||V.isClickable.value)),U=E(()=>({"aria-label":p(e.closeLabel),onClick(a){a.preventDefault(),a.stopPropagation(),B.value=!1,d("click:close",a)}}));function Y(a){var r;d("click",a),R.value&&((r=V.navigate)==null||r.call(V,a),u==null||u.toggle())}function y(a){(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),Y(a))}return()=>{const a=V.isLink.value?"a":e.tag,r=!!(e.appendIcon||e.appendAvatar),h=!!(r||n.append),w=!!(n.close||e.closable),N=!!(n.filter||e.filter)&&u,x=!!(e.prependIcon||e.prependAvatar),T=!!(x||n.prepend),M=!u||u.isSelected.value;return B.value&&De(t(a,K({class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":R.value,"v-chip--filter":N,"v-chip--pill":e.pill},_.value,f.value,M?c.value:void 0,I.value,H.value,v.value,C.value,b.value,u==null?void 0:u.selectedClass.value,e.class],style:[M?s.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,tabindex:R.value?0:void 0,onClick:Y,onKeydown:R.value&&!P.value&&y},V.linkProps),{default:()=>{var z;return[_l(R.value,"v-chip"),N&&t(Bl,{key:"filter"},{default:()=>[De(t("div",{class:"v-chip__filter"},[n.filter?t(de,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},n.filter):t(se,{key:"filter-icon",icon:e.filterIcon},null)]),[[Tl,u.isSelected.value]])]}),T&&t("div",{key:"prepend",class:"v-chip__prepend"},[n.prepend?t(de,{key:"prepend-defaults",disabled:!x,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},n.prepend):t(J,null,[e.prependIcon&&t(se,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&t(Ie,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),t("div",{class:"v-chip__content","data-no-activator":""},[((z=n.default)==null?void 0:z.call(n,{isSelected:u==null?void 0:u.isSelected.value,selectedClass:u==null?void 0:u.selectedClass.value,select:u==null?void 0:u.select,toggle:u==null?void 0:u.toggle,value:u==null?void 0:u.value.value,disabled:e.disabled}))??e.text]),h&&t("div",{key:"append",class:"v-chip__append"},[n.append?t(de,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},n.append):t(J,null,[e.appendIcon&&t(se,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&t(Ie,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),w&&t("button",K({key:"close",class:"v-chip__close",type:"button"},U.value),[n.close?t(de,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},n.close):t(se,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Al("ripple"),R.value&&e.ripple,null]])}}}),ua=ee({indeterminate:Boolean,indeterminateIcon:{type:me,default:"$checkboxIndeterminate"},...Ol({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),ia=ie()({name:"VCheckboxBtn",props:ua(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,m){let{slots:o}=m;const d=pe(e,"indeterminate"),n=pe(e,"modelValue");function p(s){d.value&&(d.value=!1)}const f=E(()=>d.value?e.indeterminateIcon:e.falseIcon),c=E(()=>d.value?e.indeterminateIcon:e.trueIcon);return he(()=>{const s=We(Ue.filterProps(e),["modelValue"]);return t(Ue,K(s,{modelValue:n.value,"onUpdate:modelValue":[b=>n.value=b,p],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:f.value,trueIcon:c.value,"aria-checked":d.value?"mixed":void 0}),o)}),{}}}),ra=ee({renderless:Boolean,...Ce()},"VVirtualScrollItem"),ca=ie()({name:"VVirtualScrollItem",inheritAttrs:!1,props:ra(),emits:{"update:height":e=>!0},setup(e,m){let{attrs:o,emit:d,slots:n}=m;const{resizeRef:p,contentRect:f}=Xe(void 0,"border");le(()=>{var c;return(c=f.value)==null?void 0:c.height},c=>{c!=null&&d("update:height",c)}),he(()=>{var c,s;return e.renderless?t(J,null,[(c=n.default)==null?void 0:c.call(n,{itemRef:p})]):t("div",K({ref:p,class:["v-virtual-scroll__item",e.class],style:e.style},o),[(s=n.default)==null?void 0:s.call(n)])})}}),da=-1,va=1,xe=100,fa=ee({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function ma(e,m){const o=Rl(),d=Z(0);Ne(()=>{d.value=parseFloat(e.itemHeight||0)});const n=Z(0),p=Z(Math.ceil((parseInt(e.height)||o.height.value)/(d.value||16))||1),f=Z(0),c=Z(0),s=O(),b=O();let I=0;const{resizeRef:H,contentRect:v}=Xe();Ne(()=>{H.value=s.value});const C=E(()=>{var l;return s.value===document.documentElement?o.height.value:((l=v.value)==null?void 0:l.height)||parseInt(e.height)||0}),_=E(()=>!!(s.value&&b.value&&C.value&&d.value));let B=Array.from({length:m.value.length}),u=Array.from({length:m.value.length});const V=Z(0);let P=-1;function R(l){return B[l]||d.value}const U=Dl(()=>{const l=performance.now();u[0]=0;const i=m.value.length;for(let k=1;k<=i-1;k++)u[k]=(u[k-1]||0)+R(k-1);V.value=Math.max(V.value,performance.now()-l)},V),Y=le(_,l=>{l&&(Y(),I=b.value.offsetTop,U.immediate(),z(),~P&&Qe(()=>{Pe&&window.requestAnimationFrame(()=>{ge(P),P=-1})}))});Ye(()=>{U.clear()});function y(l,i){const k=B[l],F=d.value;d.value=F?Math.min(d.value,i):i,(k!==i||F!==d.value)&&(B[l]=i,U())}function a(l){return l=Se(l,0,m.value.length-1),u[l]||0}function r(l){return pa(u,l)}let h=0,w=0,N=0;le(C,(l,i)=>{i&&(z(),l<i&&requestAnimationFrame(()=>{w=0,z()}))});function x(){if(!s.value||!b.value)return;const l=s.value.scrollTop,i=performance.now();i-N>500?(w=Math.sign(l-h),I=b.value.offsetTop):w=l-h,h=l,N=i,z()}function T(){!s.value||!b.value||(w=0,N=0,z())}let M=-1;function z(){cancelAnimationFrame(M),M=requestAnimationFrame(ye)}function ye(){if(!s.value||!C.value)return;const l=h-I,i=Math.sign(w),k=Math.max(0,l-xe),F=Se(r(k),0,m.value.length),q=l+C.value+xe,g=Se(r(q)+1,F+1,m.value.length);if((i!==da||F<n.value)&&(i!==va||g>p.value)){const D=a(n.value)-a(F),L=a(g)-a(p.value);Math.max(D,L)>xe?(n.value=F,p.value=g):(F<=0&&(n.value=F),g>=m.value.length&&(p.value=g))}f.value=a(n.value),c.value=a(m.value.length)-a(p.value)}function ge(l){const i=a(l);!s.value||l&&!i?P=l:s.value.scrollTop=i}const we=E(()=>m.value.slice(n.value,p.value).map((l,i)=>({raw:l,index:i+n.value})));return le(m,()=>{B=Array.from({length:m.value.length}),u=Array.from({length:m.value.length}),U.immediate(),z()},{deep:!0}),{calculateVisibleItems:z,containerRef:s,markerRef:b,computedItems:we,paddingTop:f,paddingBottom:c,scrollToIndex:ge,handleScroll:x,handleScrollend:T,handleItemResize:y}}function pa(e,m){let o=e.length-1,d=0,n=0,p=null,f=-1;if(e[o]<m)return o;for(;d<=o;)if(n=d+o>>1,p=e[n],p>m)o=n-1;else if(p<m)f=n,d=n+1;else return p===m?n:d;return f}const ha=ee({items:{type:Array,default:()=>[]},renderless:Boolean,...fa(),...Ce(),...Ul()},"VVirtualScroll"),ga=ie()({name:"VVirtualScroll",props:ha(),setup(e,m){let{slots:o}=m;const d=Nl("VVirtualScroll"),{dimensionStyles:n}=Ml(e),{calculateVisibleItems:p,containerRef:f,markerRef:c,handleScroll:s,handleScrollend:b,handleItemResize:I,scrollToIndex:H,paddingTop:v,paddingBottom:C,computedItems:_}=ma(e,ce(e,"items"));return Ll(()=>e.renderless,()=>{function B(){var P,R;const V=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";f.value===document.documentElement?(document[V]("scroll",s,{passive:!0}),document[V]("scrollend",b)):((P=f.value)==null||P[V]("scroll",s,{passive:!0}),(R=f.value)==null||R[V]("scrollend",b))}Fe(()=>{f.value=El(d.vnode.el,!0),B(!0)}),Ye(B)}),he(()=>{const B=_.value.map(u=>t(ca,{key:u.index,renderless:e.renderless,"onUpdate:height":V=>I(u.index,V)},{default:V=>{var P;return(P=o.default)==null?void 0:P.call(o,{item:u.raw,index:u.index,...V})}}));return e.renderless?t(J,null,[t("div",{ref:c,class:"v-virtual-scroll__spacer",style:{paddingTop:be(v.value)}},null),B,t("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:be(C.value)}},null)]):t("div",{ref:f,class:["v-virtual-scroll",e.class],onScrollPassive:s,onScrollend:b,style:[n.value,e.style]},[t("div",{ref:c,class:"v-virtual-scroll__container",style:{paddingTop:be(v.value),paddingBottom:be(C.value)}},[B])])}),{calculateVisibleItems:p,scrollToIndex:H}}});function ba(e,m){const o=Z(!1);let d;function n(c){cancelAnimationFrame(d),o.value=!0,d=requestAnimationFrame(()=>{d=requestAnimationFrame(()=>{o.value=!1})})}async function p(){await new Promise(c=>requestAnimationFrame(c)),await new Promise(c=>requestAnimationFrame(c)),await new Promise(c=>requestAnimationFrame(c)),await new Promise(c=>{if(o.value){const s=le(o,()=>{s(),c()})}else c()})}async function f(c){var I,H;if(c.key==="Tab"&&((I=m.value)==null||I.focus()),!["PageDown","PageUp","Home","End"].includes(c.key))return;const s=(H=e.value)==null?void 0:H.$el;if(!s)return;(c.key==="Home"||c.key==="End")&&s.scrollTo({top:c.key==="Home"?0:s.scrollHeight,behavior:"smooth"}),await p();const b=s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(c.key==="PageDown"||c.key==="Home"){const v=s.getBoundingClientRect().top;for(const C of b)if(C.getBoundingClientRect().top>=v){C.focus();break}}else{const v=s.getBoundingClientRect().bottom;for(const C of[...b].reverse())if(C.getBoundingClientRect().bottom<=v){C.focus();break}}}return{onScrollPassive:n,onKeydown:f}}const ka=ee({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:me,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...la({itemChildren:!1})},"Select"),Va=ee({...ka(),...We(Hl({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...$l({transition:{component:zl}})},"VSelect"),ze=ie()({name:"VSelect",props:Va(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,m){let{slots:o}=m;const{t:d}=Je(),n=O(),p=O(),f=O(),c=pe(e,"menu"),s=E({get:()=>c.value,set:l=>{var i;c.value&&!l&&((i=p.value)!=null&&i.ΨopenChildren.size)||(c.value=l)}}),{items:b,transformIn:I,transformOut:H}=aa(e),v=pe(e,"modelValue",[],l=>I(l===null?[null]:ql(l)),l=>{const i=H(l);return e.multiple?i:i[0]??null}),C=E(()=>typeof e.counterValue=="function"?e.counterValue(v.value):typeof e.counterValue=="number"?e.counterValue:v.value.length),_=jl(),B=E(()=>v.value.map(l=>l.value)),u=Z(!1),V=E(()=>s.value?e.closeText:e.openText);let P="",R;const U=E(()=>e.hideSelected?b.value.filter(l=>!v.value.some(i=>e.valueComparator(i,l))):b.value),Y=E(()=>e.hideNoData&&!U.value.length||e.readonly||(_==null?void 0:_.isReadonly.value)),y=E(()=>{var l;return{...e.menuProps,activatorProps:{...((l=e.menuProps)==null?void 0:l.activatorProps)||{},"aria-haspopup":"listbox"}}}),a=O(),r=ba(a,n);function h(l){e.openOnClear&&(s.value=!0)}function w(){Y.value||(s.value=!s.value)}function N(l){Le(l)&&x(l)}function x(l){var q,g;if(!l.key||e.readonly||_!=null&&_.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(l.key)&&l.preventDefault(),["Enter","ArrowDown"," "].includes(l.key)&&(s.value=!0),["Escape","Tab"].includes(l.key)&&(s.value=!1),l.key==="Home"?(q=a.value)==null||q.focus("first"):l.key==="End"&&((g=a.value)==null||g.focus("last"));const i=1e3;if(e.multiple||!Le(l))return;const k=performance.now();k-R>i&&(P=""),P+=l.key.toLowerCase(),R=k;const F=b.value.find(D=>D.title.toLowerCase().startsWith(P));if(F!==void 0){v.value=[F];const D=U.value.indexOf(F);Pe&&window.requestAnimationFrame(()=>{var L;D>=0&&((L=f.value)==null||L.scrollToIndex(D))})}}function T(l){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!l.props.disabled)if(e.multiple){const k=v.value.findIndex(q=>e.valueComparator(q.value,l.value)),F=i??!~k;if(~k){const q=F?[...v.value,l]:[...v.value];q.splice(k,1),v.value=q}else F&&(v.value=[...v.value,l])}else{const k=i!==!1;v.value=k?[l]:[],Qe(()=>{s.value=!1})}}function M(l){var i;(i=a.value)!=null&&i.$el.contains(l.relatedTarget)||(s.value=!1)}function z(){var l;e.eager&&((l=f.value)==null||l.calculateVisibleItems())}function ye(){var l;u.value&&((l=n.value)==null||l.focus())}function ge(l){u.value=!0}function we(l){if(l==null)v.value=[];else if(Ee(n.value,":autofill")||Ee(n.value,":-webkit-autofill")){const i=b.value.find(k=>k.title===l);i&&T(i)}else n.value&&(n.value.value="")}return le(s,()=>{if(!e.hideSelected&&s.value&&v.value.length){const l=U.value.findIndex(i=>v.value.some(k=>e.valueComparator(k.value,i.value)));Pe&&window.requestAnimationFrame(()=>{var i;l>=0&&((i=f.value)==null||i.scrollToIndex(l))})}}),le(()=>e.items,(l,i)=>{s.value||u.value&&!i.length&&l.length&&(s.value=!0)}),he(()=>{const l=!!(e.chips||o.chip),i=!!(!e.hideNoData||U.value.length||o["prepend-item"]||o["append-item"]||o["no-data"]),k=v.value.length>0,F=Me.filterProps(e),q=k||!u.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return t(Me,K({ref:n},F,{modelValue:v.value.map(g=>g.props.value).join(", "),"onUpdate:modelValue":we,focused:u.value,"onUpdate:focused":g=>u.value=g,validationValue:v.externalValue,counterValue:C.value,dirty:k,class:["v-select",{"v-select--active-menu":s.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":v.value.length,"v-select--selection-slot":!!o.selection},e.class],style:e.style,inputmode:"none",placeholder:q,"onClick:clear":h,"onMousedown:control":w,onBlur:M,onKeydown:x,"aria-label":d(V.value),title:d(V.value)}),{...o,default:()=>t(J,null,[t(al,K({ref:p,modelValue:s.value,"onUpdate:modelValue":g=>s.value=g,activator:"parent",contentClass:"v-select__content",disabled:Y.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:z,onAfterLeave:ye},y.value),{default:()=>[i&&t(fe,K({ref:a,selected:B.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:g=>g.preventDefault(),onKeydown:N,onFocusin:ge,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},r,e.listProps),{default:()=>{var g,D,L;return[(g=o["prepend-item"])==null?void 0:g.call(o),!U.value.length&&!e.hideNoData&&(((D=o["no-data"])==null?void 0:D.call(o))??t(ue,{title:d(e.noDataText)},null)),t(ga,{ref:f,renderless:!0,items:U.value},{default:Q=>{var _e;let{item:j,index:ae,itemRef:$}=Q;const Ae=K(j.props,{ref:$,key:ae,onClick:()=>T(j,null)});return((_e=o.item)==null?void 0:_e.call(o,{item:j,index:ae,props:Ae}))??t(ue,K(Ae,{role:"option"}),{prepend:el=>{let{isSelected:ll}=el;return t(J,null,[e.multiple&&!e.hideSelected?t(ia,{key:j.value,modelValue:ll,ripple:!1,tabindex:"-1"},null):void 0,j.props.prependAvatar&&t(Ie,{image:j.props.prependAvatar},null),j.props.prependIcon&&t(se,{icon:j.props.prependIcon},null)])}})}}),(L=o["append-item"])==null?void 0:L.call(o)]}})]}),v.value.map((g,D)=>{function L($){$.stopPropagation(),$.preventDefault(),T(g,!1)}const Q={"onClick:close":L,onKeydown($){$.key!=="Enter"&&$.key!==" "||($.preventDefault(),$.stopPropagation(),L($))},onMousedown($){$.preventDefault(),$.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},j=l?!!o.chip:!!o.selection,ae=j?Gl(l?o.chip({item:g,index:D,props:Q}):o.selection({item:g,index:D})):void 0;if(!(j&&!ae))return t("div",{key:g.value,class:"v-select__selection"},[l?o.chip?t(de,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:g.title}}},{default:()=>[ae]}):t(sa,K({key:"chip",closable:e.closableChips,size:"small",text:g.title,disabled:g.props.disabled},Q),null):ae??t("span",{class:"v-select__selection-text"},[g.title,e.multiple&&D<v.value.length-1&&t("span",{class:"v-select__selection-comma"},[ve(",")])])])})]),"append-inner":function(){var Q;for(var g=arguments.length,D=new Array(g),L=0;L<g;L++)D[L]=arguments[L];return t(J,null,[(Q=o["append-inner"])==null?void 0:Q.call(o,...D),e.menuIcon?t(se,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Kl({isFocused:u,menu:s,select:T},n)}}),Ca={class:"text-body-1 my-7"},ya={class:"text-body-1 my-7"},wa={__name:"AboutView",setup(e){const m=Jl(),o=Ql();m.flatColorsHex;const d=o.materialColors;console.log("AboutView ::: materialColors: ",d);const n=Object.keys(d);console.log("AboutView ::: materialColorsNames: ",n);const p=O(Be);console.log("AboutView ::: selectedBSColor: ",p);const f=O(d.red);console.log("AboutView ::: selectedMatColor: ",f);const c=O(Be),s=O(d.red),b=sl;console.log("AboutView ::: bsColorNames: ",b);const I=O("blue"),H=O("red"),v=O("#0d6efd"),C=O(""),_=O(tl);console.log("AboutView ::: bsColorsHex: ",_),O("");const B={lighten5:S("FFFFFF","0d6efd",90),lighten4:S("FFFFFF","0d6efd",80),lighten3:S("FFFFFF","0d6efd",60),lighten2:S("FFFFFF","0d6efd",40),lighten1:S("FFFFFF","0d6efd",20)};console.log("AboutView ::: mixedLighten: ",JSON.stringify(B,null,2));const u={darken4:S("000000","0d6efd",80),darken3:S("000000","0d6efd",60),darken2:S("000000","0d6efd",40),darken1:S("000000","0d6efd",20)};console.log("AboutView ::: mixedDarken: ",JSON.stringify(u,null,2)),console.log("AboutView ::: bootstrap red: ",nl),console.log("AboutView ::: bootstrap orange: ",ol),O(""),Fe(()=>{console.log("AboutView ::: onMounted")});function V(y,a){console.log("AboutView ::: setSelection"),console.log(" - clr: ",y),console.log(" - key: ",a),v.value=y.toUpperCase(),C.value=a}function P(y){console.log("AboutView ::: colorPickerUpdateHandler"),console.log(" - value:",y);let a=String(y).toUpperCase();console.log(" - val: ",a),console.log(" - selectedColor: ",v.value),console.log(" - selectedItem value: ",C.value)}function R(y){console.log("AboutView ::: bsNameUpdateHandler"),console.log(" - value: ",y),console.log(" - selectedBootstrapName: ",I.value),p.value=ul[y],U()}function U(){console.log("AboutView ::: generateVColors");const y=p.value.base,a=Te(y);console.log(" - base: ",y),console.log(" - parsed base: ",a);const r={lighten5:G(te(a,6.25)),lighten4:G(te(a,5)),lighten3:G(te(a,3.75)),lighten2:G(te(a,2.5)),lighten1:G(te(a,1.25)),base:y,darken1:G(re(a,1.25)),darken2:G(re(a,2.5)),darken3:G(re(a,3.75)),darken4:G(re(a,5)),base:y};console.log(" - colors: ",JSON.stringify(r,null,2)),c.value=r;let h={};for(let x=1;x<20;x++){let T=x/10,M=G(re(a,T));if(M!=="#000000")h["darken"+x]=M;else break}let w={};for(let x=1;x<20;x++){let T=x/10,M=G(te(a,T));if(M!=="#FFFFFF")w["lighten"+x]=M;else break}console.log(" - dark shades: ",JSON.stringify(h,null,2)),console.log(" - light shades: ",JSON.stringify(w,null,2));const N=[Object.values(p.value).reverse(),Object.values(r).reverse(),Object.values(h).reverse(),Object.values(w)];console.log(" - swatches: ",JSON.stringify(N,null,2)),_.value=N}function Y(y){console.log("AboutView ::: materialNameUpdateHandler"),console.log(" - value: ",y),console.log(" - selectedMaterialName: ",H.value),f.value=d[y];const a=f.value.base,r=Te(a);console.log(" - base: ",a),console.log(" - parsed base: ",r);const h="#FFFFFF",w="#000000",N={base:a,lighten5:S(h,a,89),lighten4:S(h,a,74),lighten3:S(h,a,53),lighten2:S(h,a,36),lighten1:S(h,a,14),darken1:S(w,a,6),darken2:S(w,a,13),darken3:S(w,a,19),darken4:S(w,a,25),accent1:S(h,a,36),accent2:S(h,a,14)};f.value.lighten1,f.value.lighten2,f.value.lighten3,f.value.lighten4,f.value.lighten5;for(let T=74;T<=95;T++){let M=S(h,a,T);console.log(" - lighten: ",T,M)}const x=[Object.values(f.value),Object.values(N)];console.log(" - swatches: ",JSON.stringify(x,null,2)),_.value=x,console.log(" - colors: ",JSON.stringify(N,null,2)),s.value=N}return(y,a)=>(X(),oe(ea,{class:"fill-height px-12 mx-auto","grid-list-xs":""},{default:A(()=>[t(Wl,{class:"align-centerfill-height mx-auto"},{default:A(()=>[t(Xl,{color:"primary",height:"auto"},{default:A(()=>[t(Yl,null,{default:A(()=>[t(Zl,null,{default:A(()=>[t(ne,null,{default:A(()=>[t(ze,{"min-width":"200",items:He(b),modelValue:I.value,"onUpdate:modelValue":[a[0]||(a[0]=r=>I.value=r),R],label:"Bootstrap Colors","item-title":"title","item-value":"name"},null,8,["items","modelValue"]),t(fe,{"min-width":"200",color:"surface-variant"},{default:A(()=>[(X(!0),ke(J,null,Ve(p.value,(r,h)=>(X(),oe(ue,{value:r.toUpperCase(),"base-color":r,active:v.value===r.toUpperCase(),onClick:w=>V(r,h)},{default:A(()=>[ve(W(h)+" - "+W(r),1)]),_:2},1032,["value","base-color","active","onClick"]))),256))]),_:1})]),_:1}),t(ne,null,{default:A(()=>[$e("div",Ca,"Base Color: "+W(p.value.base),1),t(fe,{"min-width":"200",color:"surface-variant"},{default:A(()=>[(X(!0),ke(J,null,Ve(c.value,(r,h)=>(X(),oe(ue,{value:r.toUpperCase(),"base-color":r,active:v.value===r.toUpperCase(),onClick:w=>{C.value=h,v.value=r.toUpperCase()}},{default:A(()=>[ve(W(h)+" - "+W(r),1)]),_:2},1032,["value","base-color","active","onClick"]))),256))]),_:1})]),_:1}),t(ne,null,{default:A(()=>[t(ta,{mode:"hex",modelValue:v.value,"onUpdate:modelValue":[a[1]||(a[1]=r=>v.value=r),P],swatches:_.value,"hide-sliders":"","show-swatches":"","swatches-max-height":"300"},null,8,["modelValue","swatches"])]),_:1}),t(ne,null,{default:A(()=>[t(ze,{"min-width":"200",items:He(n),modelValue:H.value,"onUpdate:modelValue":[a[2]||(a[2]=r=>H.value=r),Y],label:"Material Colors","item-title":"name","item-value":"name"},null,8,["items","modelValue"]),t(fe,{"min-width":"200",color:"surface-variant"},{default:A(()=>[(X(!0),ke(J,null,Ve(f.value,(r,h)=>(X(),oe(ue,{value:r.toUpperCase(),active:v.value===r.toUpperCase(),"base-color":r,onClick:w=>{C.value=h,v.value=r.toUpperCase()}},{default:A(()=>[ve(W(h)+": "+W(r.toUpperCase()),1)]),_:2},1032,["value","active","base-color","onClick"]))),256))]),_:1})]),_:1}),t(ne,null,{default:A(()=>[$e("div",ya,"Base Color: "+W(f.value.base),1),t(fe,{"min-width":"200",color:"surface-variant"},{default:A(()=>[(X(!0),ke(J,null,Ve(s.value,(r,h)=>(X(),oe(ue,{value:r.toUpperCase(),active:v.value===r.toUpperCase(),"base-color":r,onClick:w=>{C.value=h,v.value=r.toUpperCase()}},{default:A(()=>[ve(W(h)+" - "+W(r),1)]),_:2},1032,["value","active","base-color","onClick"]))),256))]),_:1})]),_:1}),t(ne)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Aa={__name:"about",setup(e){return Fe(()=>{console.log("ABOUT ::: onMounted")}),(m,o)=>{const d=wa;return X(),oe(d)}}};export{Aa as default};
