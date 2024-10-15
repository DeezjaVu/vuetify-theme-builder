import{V as ot,a as rt,b as ee}from"./VRow-Cy-j88vB.js";import{ab as vt,b5 as re,o as Wt,a as Z,c as ct,w as E,b as F,aB as At,a1 as Tt,aC as Bt,f as gt,aK as ne,aN as ae,au as st,aO as oe,aD as Rt,aP as se,Z as ie,b6 as ce,e as le,aF as qt,az as Et,a2 as ue,aE as Ut}from"./index-Cp0b-nQ1.js";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e){return e<0?-1:e===0?0:1}function lt(e,t,r){return(1-r)*e+r*t}function he(e,t,r){return r<e?e:r>t?t:r}function kt(e,t,r){return r<e?e:r>t?t:r}function Xt(e){return e=e%360,e<0&&(e=e+360),e}function St(e){return e=e%360,e<0&&(e=e+360),e}function fe(e,t){return St(t-e)<=180?1:-1}function Yt(e,t){return 180-Math.abs(Math.abs(e-t)-180)}function Ft(e,t){const r=e[0]*t[0][0]+e[1]*t[0][1]+e[2]*t[0][2],n=e[0]*t[1][0]+e[1]*t[1][1]+e[2]*t[1][2],a=e[0]*t[2][0]+e[1]*t[2][1]+e[2]*t[2][2];return[r,n,a]}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],me=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],_t=[95.047,100,108.883];function bt(e,t,r){return(255<<24|(e&255)<<16|(t&255)<<8|r&255)>>>0}function jt(e){const t=nt(e[0]),r=nt(e[1]),n=nt(e[2]);return bt(t,r,n)}function de(e){return e>>24&255}function Ct(e){return e>>16&255}function Mt(e){return e>>8&255}function Pt(e){return e&255}function $t(e,t,r){const n=me,a=n[0][0]*e+n[0][1]*t+n[0][2]*r,o=n[1][0]*e+n[1][1]*t+n[1][2]*r,s=n[2][0]*e+n[2][1]*t+n[2][2]*r,i=nt(a),c=nt(o),h=nt(s);return bt(i,c,h)}function ge(e){const t=K(Ct(e)),r=K(Mt(e)),n=K(Pt(e));return Ft([t,r,n],Jt)}function pe(e,t,r){const n=_t,a=(e+16)/116,o=t/500+a,s=a-r/200,i=yt(o),c=yt(a),h=yt(s),u=i*n[0],m=c*n[1],p=h*n[2];return $t(u,m,p)}function ye(e){const t=K(Ct(e)),r=K(Mt(e)),n=K(Pt(e)),a=Jt,o=a[0][0]*t+a[0][1]*r+a[0][2]*n,s=a[1][0]*t+a[1][1]*r+a[1][2]*n,i=a[2][0]*t+a[2][1]*r+a[2][2]*n,c=_t,h=o/c[0],u=s/c[1],m=i/c[2],p=ut(h),f=ut(u),y=ut(m),d=116*f-16,M=500*(p-f),A=200*(f-y);return[d,M,A]}function ke(e){const t=tt(e),r=nt(t);return bt(r,r,r)}function Ot(e){const t=ge(e)[1];return 116*ut(t/100)-16}function tt(e){return 100*yt((e+16)/116)}function Lt(e){return ut(e/100)*116-16}function K(e){const t=e/255;return t<=.040449936?t/12.92*100:Math.pow((t+.055)/1.055,2.4)*100}function nt(e){const t=e/100;let r=0;return t<=.0031308?r=t*12.92:r=1.055*Math.pow(t,1/2.4)-.055,he(0,255,Math.round(r*255))}function be(){return _t}function ut(e){const t=.008856451679035631,r=24389/27;return e>t?Math.pow(e,1/3):(r*e+16)/116}function yt(e){const t=.008856451679035631,r=24389/27,n=e*e*e;return n>t?n:(116*e-16)/r}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static make(t=be(),r=200/Math.PI*tt(50)/100,n=50,a=2,o=!1){const s=t,i=s[0]*.401288+s[1]*.650173+s[2]*-.051461,c=s[0]*-.250268+s[1]*1.204414+s[2]*.045854,h=s[0]*-.002079+s[1]*.048952+s[2]*.953127,u=.8+a/10,m=u>=.9?lt(.59,.69,(u-.9)*10):lt(.525,.59,(u-.8)*10);let p=o?1:u*(1-1/3.6*Math.exp((-r-42)/92));p=p>1?1:p<0?0:p;const f=u,y=[p*(100/i)+1-p,p*(100/c)+1-p,p*(100/h)+1-p],d=1/(5*r+1),M=d*d*d*d,A=1-M,g=M*r+.1*A*A*Math.cbrt(5*r),b=tt(n)/t[1],T=1.48+Math.sqrt(b),x=.725/Math.pow(b,.2),R=x,C=[Math.pow(g*y[0]*i/100,.42),Math.pow(g*y[1]*c/100,.42),Math.pow(g*y[2]*h/100,.42)],I=[400*C[0]/(C[0]+27.13),400*C[1]/(C[1]+27.13),400*C[2]/(C[2]+27.13)],B=(2*I[0]+I[1]+.05*I[2])*x;return new J(b,B,x,R,m,f,y,g,Math.pow(g,.25),T)}constructor(t,r,n,a,o,s,i,c,h,u){this.n=t,this.aw=r,this.nbb=n,this.ncb=a,this.c=o,this.nc=s,this.rgbD=i,this.fl=c,this.fLRoot=h,this.z=u}}J.DEFAULT=J.make();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t,r,n,a,o,s,i,c,h){this.hue=t,this.chroma=r,this.j=n,this.q=a,this.m=o,this.s=s,this.jstar=i,this.astar=c,this.bstar=h}distance(t){const r=this.jstar-t.jstar,n=this.astar-t.astar,a=this.bstar-t.bstar,o=Math.sqrt(r*r+n*n+a*a);return 1.41*Math.pow(o,.63)}static fromInt(t){return V.fromIntInViewingConditions(t,J.DEFAULT)}static fromIntInViewingConditions(t,r){const n=(t&16711680)>>16,a=(t&65280)>>8,o=t&255,s=K(n),i=K(a),c=K(o),h=.41233895*s+.35762064*i+.18051042*c,u=.2126*s+.7152*i+.0722*c,m=.01932141*s+.11916382*i+.95034478*c,p=.401288*h+.650173*u-.051461*m,f=-.250268*h+1.204414*u+.045854*m,y=-.002079*h+.048952*u+.953127*m,d=r.rgbD[0]*p,M=r.rgbD[1]*f,A=r.rgbD[2]*y,g=Math.pow(r.fl*Math.abs(d)/100,.42),b=Math.pow(r.fl*Math.abs(M)/100,.42),T=Math.pow(r.fl*Math.abs(A)/100,.42),x=X(d)*400*g/(g+27.13),R=X(M)*400*b/(b+27.13),C=X(A)*400*T/(T+27.13),I=(11*x+-12*R+C)/11,B=(x+R-2*C)/9,D=(20*x+20*R+21*C)/20,z=(40*x+20*R+C)/20,U=Math.atan2(B,I)*180/Math.PI,_=U<0?U+360:U>=360?U-360:U,et=_*Math.PI/180,ft=z*r.nbb,Q=100*Math.pow(ft/r.aw,r.c*r.z),mt=4/r.c*Math.sqrt(Q/100)*(r.aw+4)*r.fLRoot,It=_<20.14?_+360:_,xt=.25*(Math.cos(It*Math.PI/180+2)+3.8),Dt=5e4/13*xt*r.nc*r.ncb*Math.sqrt(I*I+B*B)/(D+.305),dt=Math.pow(Dt,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),Gt=dt*Math.sqrt(Q/100),zt=Gt*r.fLRoot,Kt=50*Math.sqrt(dt*r.c/(r.aw+4)),Qt=(1+100*.007)*Q/(1+.007*Q),Ht=1/.0228*Math.log(1+.0228*zt),Zt=Ht*Math.cos(et),te=Ht*Math.sin(et);return new V(_,Gt,Q,mt,zt,Kt,Qt,Zt,te)}static fromJch(t,r,n){return V.fromJchInViewingConditions(t,r,n,J.DEFAULT)}static fromJchInViewingConditions(t,r,n,a){const o=4/a.c*Math.sqrt(t/100)*(a.aw+4)*a.fLRoot,s=r*a.fLRoot,i=r/Math.sqrt(t/100),c=50*Math.sqrt(i*a.c/(a.aw+4)),h=n*Math.PI/180,u=(1+100*.007)*t/(1+.007*t),m=1/.0228*Math.log(1+.0228*s),p=m*Math.cos(h),f=m*Math.sin(h);return new V(n,r,t,o,s,c,u,p,f)}static fromUcs(t,r,n){return V.fromUcsInViewingConditions(t,r,n,J.DEFAULT)}static fromUcsInViewingConditions(t,r,n,a){const o=r,s=n,i=Math.sqrt(o*o+s*s),h=(Math.exp(i*.0228)-1)/.0228/a.fLRoot;let u=Math.atan2(s,o)*(180/Math.PI);u<0&&(u+=360);const m=t/(1-(t-100)*.007);return V.fromJchInViewingConditions(m,h,u,a)}toInt(){return this.viewed(J.DEFAULT)}viewed(t){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),a=this.hue*Math.PI/180,o=.25*(Math.cos(a+2)+3.8),s=t.aw*Math.pow(this.j/100,1/t.c/t.z),i=o*(5e4/13)*t.nc*t.ncb,c=s/t.nbb,h=Math.sin(a),u=Math.cos(a),m=23*(c+.305)*n/(23*i+11*n*u+108*n*h),p=m*u,f=m*h,y=(460*c+451*p+288*f)/1403,d=(460*c-891*p-261*f)/1403,M=(460*c-220*p-6300*f)/1403,A=Math.max(0,27.13*Math.abs(y)/(400-Math.abs(y))),g=X(y)*(100/t.fl)*Math.pow(A,1/.42),b=Math.max(0,27.13*Math.abs(d)/(400-Math.abs(d))),T=X(d)*(100/t.fl)*Math.pow(b,1/.42),x=Math.max(0,27.13*Math.abs(M)/(400-Math.abs(M))),R=X(M)*(100/t.fl)*Math.pow(x,1/.42),C=g/t.rgbD[0],I=T/t.rgbD[1],B=R/t.rgbD[2],D=1.86206786*C-1.01125463*I+.14918677*B,z=.38752654*C+.62144744*I-.00897398*B,W=-.0158415*C-.03412294*I+1.04996444*B;return $t(D,z,W)}static fromXyzInViewingConditions(t,r,n,a){const o=.401288*t+.650173*r-.051461*n,s=-.250268*t+1.204414*r+.045854*n,i=-.002079*t+.048952*r+.953127*n,c=a.rgbD[0]*o,h=a.rgbD[1]*s,u=a.rgbD[2]*i,m=Math.pow(a.fl*Math.abs(c)/100,.42),p=Math.pow(a.fl*Math.abs(h)/100,.42),f=Math.pow(a.fl*Math.abs(u)/100,.42),y=X(c)*400*m/(m+27.13),d=X(h)*400*p/(p+27.13),M=X(u)*400*f/(f+27.13),A=(11*y+-12*d+M)/11,g=(y+d-2*M)/9,b=(20*y+20*d+21*M)/20,T=(40*y+20*d+M)/20,R=Math.atan2(g,A)*180/Math.PI,C=R<0?R+360:R>=360?R-360:R,I=C*Math.PI/180,B=T*a.nbb,D=100*Math.pow(B/a.aw,a.c*a.z),z=4/a.c*Math.sqrt(D/100)*(a.aw+4)*a.fLRoot,W=C<20.14?C+360:C,U=1/4*(Math.cos(W*Math.PI/180+2)+3.8),et=5e4/13*U*a.nc*a.ncb*Math.sqrt(A*A+g*g)/(b+.305),ft=Math.pow(et,.9)*Math.pow(1.64-Math.pow(.29,a.n),.73),Q=ft*Math.sqrt(D/100),mt=Q*a.fLRoot,It=50*Math.sqrt(ft*a.c/(a.aw+4)),xt=(1+100*.007)*D/(1+.007*D),wt=Math.log(1+.0228*mt)/.0228,Dt=wt*Math.cos(I),dt=wt*Math.sin(I);return new V(C,Q,D,z,mt,It,xt,Dt,dt)}xyzInViewingConditions(t){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),a=this.hue*Math.PI/180,o=.25*(Math.cos(a+2)+3.8),s=t.aw*Math.pow(this.j/100,1/t.c/t.z),i=o*(5e4/13)*t.nc*t.ncb,c=s/t.nbb,h=Math.sin(a),u=Math.cos(a),m=23*(c+.305)*n/(23*i+11*n*u+108*n*h),p=m*u,f=m*h,y=(460*c+451*p+288*f)/1403,d=(460*c-891*p-261*f)/1403,M=(460*c-220*p-6300*f)/1403,A=Math.max(0,27.13*Math.abs(y)/(400-Math.abs(y))),g=X(y)*(100/t.fl)*Math.pow(A,1/.42),b=Math.max(0,27.13*Math.abs(d)/(400-Math.abs(d))),T=X(d)*(100/t.fl)*Math.pow(b,1/.42),x=Math.max(0,27.13*Math.abs(M)/(400-Math.abs(M))),R=X(M)*(100/t.fl)*Math.pow(x,1/.42),C=g/t.rgbD[0],I=T/t.rgbD[1],B=R/t.rgbD[2],D=1.86206786*C-1.01125463*I+.14918677*B,z=.38752654*C+.62144744*I-.00897398*B,W=-.0158415*C-.03412294*I+1.04996444*B;return[D,z,W]}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static sanitizeRadians(t){return(t+Math.PI*8)%(Math.PI*2)}static trueDelinearized(t){const r=t/100;let n=0;return r<=.0031308?n=r*12.92:n=1.055*Math.pow(r,1/2.4)-.055,n*255}static chromaticAdaptation(t){const r=Math.pow(Math.abs(t),.42);return X(t)*400*r/(r+27.13)}static hueOf(t){const r=Ft(t,P.SCALED_DISCOUNT_FROM_LINRGB),n=P.chromaticAdaptation(r[0]),a=P.chromaticAdaptation(r[1]),o=P.chromaticAdaptation(r[2]),s=(11*n+-12*a+o)/11,i=(n+a-2*o)/9;return Math.atan2(i,s)}static areInCyclicOrder(t,r,n){const a=P.sanitizeRadians(r-t),o=P.sanitizeRadians(n-t);return a<o}static intercept(t,r,n){return(r-t)/(n-t)}static lerpPoint(t,r,n){return[t[0]+(n[0]-t[0])*r,t[1]+(n[1]-t[1])*r,t[2]+(n[2]-t[2])*r]}static setCoordinate(t,r,n,a){const o=P.intercept(t[a],r,n[a]);return P.lerpPoint(t,o,n)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,r){const n=P.Y_FROM_LINRGB[0],a=P.Y_FROM_LINRGB[1],o=P.Y_FROM_LINRGB[2],s=r%4<=1?0:100,i=r%2===0?0:100;if(r<4){const c=s,h=i,u=(t-c*a-h*o)/n;return P.isBounded(u)?[u,c,h]:[-1,-1,-1]}else if(r<8){const c=s,h=i,u=(t-h*n-c*o)/a;return P.isBounded(u)?[h,u,c]:[-1,-1,-1]}else{const c=s,h=i,u=(t-c*n-h*a)/o;return P.isBounded(u)?[c,h,u]:[-1,-1,-1]}}static bisectToSegment(t,r){let n=[-1,-1,-1],a=n,o=0,s=0,i=!1,c=!0;for(let h=0;h<12;h++){const u=P.nthVertex(t,h);if(u[0]<0)continue;const m=P.hueOf(u);if(!i){n=u,a=u,o=m,s=m,i=!0;continue}(c||P.areInCyclicOrder(o,m,s))&&(c=!1,P.areInCyclicOrder(o,r,m)?(a=u,s=m):(n=u,o=m))}return[n,a]}static midpoint(t,r){return[(t[0]+r[0])/2,(t[1]+r[1])/2,(t[2]+r[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,r){const n=P.bisectToSegment(t,r);let a=n[0],o=P.hueOf(a),s=n[1];for(let i=0;i<3;i++)if(a[i]!==s[i]){let c=-1,h=255;a[i]<s[i]?(c=P.criticalPlaneBelow(P.trueDelinearized(a[i])),h=P.criticalPlaneAbove(P.trueDelinearized(s[i]))):(c=P.criticalPlaneAbove(P.trueDelinearized(a[i])),h=P.criticalPlaneBelow(P.trueDelinearized(s[i])));for(let u=0;u<8&&!(Math.abs(h-c)<=1);u++){const m=Math.floor((c+h)/2),p=P.CRITICAL_PLANES[m],f=P.setCoordinate(a,p,s,i),y=P.hueOf(f);P.areInCyclicOrder(o,r,y)?(s=f,h=m):(a=f,o=y,c=m)}}return P.midpoint(a,s)}static inverseChromaticAdaptation(t){const r=Math.abs(t),n=Math.max(0,27.13*r/(400-r));return X(t)*Math.pow(n,1/.42)}static findResultByJ(t,r,n){let a=Math.sqrt(n)*11;const o=J.DEFAULT,s=1/Math.pow(1.64-Math.pow(.29,o.n),.73),c=.25*(Math.cos(t+2)+3.8)*(5e4/13)*o.nc*o.ncb,h=Math.sin(t),u=Math.cos(t);for(let m=0;m<5;m++){const p=a/100,f=r===0||a===0?0:r/Math.sqrt(p),y=Math.pow(f*s,1/.9),M=o.aw*Math.pow(p,1/o.c/o.z)/o.nbb,A=23*(M+.305)*y/(23*c+11*y*u+108*y*h),g=A*u,b=A*h,T=(460*M+451*g+288*b)/1403,x=(460*M-891*g-261*b)/1403,R=(460*M-220*g-6300*b)/1403,C=P.inverseChromaticAdaptation(T),I=P.inverseChromaticAdaptation(x),B=P.inverseChromaticAdaptation(R),D=Ft([C,I,B],P.LINRGB_FROM_SCALED_DISCOUNT);if(D[0]<0||D[1]<0||D[2]<0)return 0;const z=P.Y_FROM_LINRGB[0],W=P.Y_FROM_LINRGB[1],U=P.Y_FROM_LINRGB[2],_=z*D[0]+W*D[1]+U*D[2];if(_<=0)return 0;if(m===4||Math.abs(_-n)<.002)return D[0]>100.01||D[1]>100.01||D[2]>100.01?0:jt(D);a=a-(_-n)*a/(2*_)}return 0}static solveToInt(t,r,n){if(r<1e-4||n<1e-4||n>99.9999)return ke(n);t=St(t);const a=t/180*Math.PI,o=tt(n),s=P.findResultByJ(a,r,o);if(s!==0)return s;const i=P.bisectToLimit(o,a);return jt(i)}static solveToCam(t,r,n){return V.fromInt(P.solveToInt(t,r,n))}}P.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];P.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];P.Y_FROM_LINRGB=[.2126,.7152,.0722];P.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{static from(t,r,n){return new S(P.solveToInt(t,r,n))}static fromInt(t){return new S(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(P.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(P.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(P.solveToInt(this.internalHue,this.internalChroma,t))}constructor(t){this.argb=t;const r=V.fromInt(t);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=Ot(t),this.argb=t}setInternalState(t){const r=V.fromInt(t);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=Ot(t),this.argb=t}inViewingConditions(t){const n=V.fromInt(this.toInt()).xyzInViewingConditions(t),a=V.fromXyzInViewingConditions(n[0],n[1],n[2],J.make());return S.from(a.hue,a.chroma,Lt(n[1]))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{static harmonize(t,r){const n=S.fromInt(t),a=S.fromInt(r),o=Yt(n.hue,a.hue),s=Math.min(o*.5,15),i=St(n.hue+s*fe(n.hue,a.hue));return S.from(i,n.chroma,n.tone).toInt()}static hctHue(t,r,n){const a=Nt.cam16Ucs(t,r,n),o=V.fromInt(a),s=V.fromInt(t);return S.from(o.hue,s.chroma,Ot(t)).toInt()}static cam16Ucs(t,r,n){const a=V.fromInt(t),o=V.fromInt(r),s=a.jstar,i=a.astar,c=a.bstar,h=o.jstar,u=o.astar,m=o.bstar,p=s+(h-s)*n,f=i+(u-i)*n,y=c+(m-c)*n;return V.fromUcs(p,f,y).toInt()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static ratioOfTones(t,r){return t=kt(0,100,t),r=kt(0,100,r),N.ratioOfYs(tt(t),tt(r))}static ratioOfYs(t,r){const n=t>r?t:r,a=n===r?t:r;return(n+5)/(a+5)}static lighter(t,r){if(t<0||t>100)return-1;const n=tt(t),a=r*(n+5)-5,o=N.ratioOfYs(a,n),s=Math.abs(o-r);if(o<r&&s>.04)return-1;const i=Lt(a)+.4;return i<0||i>100?-1:i}static darker(t,r){if(t<0||t>100)return-1;const n=tt(t),a=(n+5)/r-5,o=N.ratioOfYs(n,a),s=Math.abs(o-r);if(o<r&&s>.04)return-1;const i=Lt(a)-.4;return i<0||i>100?-1:i}static lighterUnsafe(t,r){const n=N.lighter(t,r);return n<0?100:n}static darkerUnsafe(t,r){const n=N.darker(t,r);return n<0?0:n}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{static isDisliked(t){const r=Math.round(t.hue)>=90&&Math.round(t.hue)<=111,n=Math.round(t.chroma)>16,a=Math.round(t.tone)<65;return r&&n&&a}static fixIfDisliked(t){return Vt.isDisliked(t)?S.from(t.hue,t.chroma,70):t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{static fromPalette(t){return new k(t.name??"",t.palette,t.tone,t.isBackground??!1,t.background,t.secondBackground,t.contrastCurve,t.toneDeltaPair)}constructor(t,r,n,a,o,s,i,c){if(this.name=t,this.palette=r,this.tone=n,this.isBackground=a,this.background=o,this.secondBackground=s,this.contrastCurve=i,this.toneDeltaPair=c,this.hctCache=new Map,!o&&s)throw new Error(`Color ${t} has secondBackgrounddefined, but background is not defined.`);if(!o&&i)throw new Error(`Color ${t} has contrastCurvedefined, but background is not defined.`);if(o&&!i)throw new Error(`Color ${t} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(t){return this.getHct(t).toInt()}getHct(t){const r=this.hctCache.get(t);if(r!=null)return r;const n=this.getTone(t),a=this.palette(t).getHct(n);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(t,a),a}getTone(t){const r=t.contrastLevel<0;if(this.toneDeltaPair){const n=this.toneDeltaPair(t),a=n.roleA,o=n.roleB,s=n.delta,i=n.polarity,c=n.stayTogether,u=this.background(t).getTone(t),m=i==="nearer"||i==="lighter"&&!t.isDark||i==="darker"&&t.isDark,p=m?a:o,f=m?o:a,y=this.name===p.name,d=t.isDark?1:-1,M=p.contrastCurve.get(t.contrastLevel),A=f.contrastCurve.get(t.contrastLevel),g=p.tone(t);let b=N.ratioOfTones(u,g)>=M?g:k.foregroundTone(u,M);const T=f.tone(t);let x=N.ratioOfTones(u,T)>=A?T:k.foregroundTone(u,A);return r&&(b=k.foregroundTone(u,M),x=k.foregroundTone(u,A)),(x-b)*d>=s||(x=kt(0,100,b+s*d),(x-b)*d>=s||(b=kt(0,100,x-s*d))),50<=b&&b<60?d>0?(b=60,x=Math.max(x,b+s*d)):(b=49,x=Math.min(x,b+s*d)):50<=x&&x<60&&(c?d>0?(b=60,x=Math.max(x,b+s*d)):(b=49,x=Math.min(x,b+s*d)):d>0?x=60:x=49),y?b:x}else{let n=this.tone(t);if(this.background==null)return n;const a=this.background(t).getTone(t),o=this.contrastCurve.get(t.contrastLevel);if(N.ratioOfTones(a,n)>=o||(n=k.foregroundTone(a,o)),r&&(n=k.foregroundTone(a,o)),this.isBackground&&50<=n&&n<60&&(N.ratioOfTones(49,a)>=o?n=49:n=60),this.secondBackground){const[s,i]=[this.background,this.secondBackground],[c,h]=[s(t).getTone(t),i(t).getTone(t)],[u,m]=[Math.max(c,h),Math.min(c,h)];if(N.ratioOfTones(u,n)>=o&&N.ratioOfTones(m,n)>=o)return n;const p=N.lighter(u,o),f=N.darker(m,o),y=[];return p!==-1&&y.push(p),f!==-1&&y.push(f),k.tonePrefersLightForeground(c)||k.tonePrefersLightForeground(h)?p<0?100:p:y.length===1?y[0]:f<0?0:f}return n}}static foregroundTone(t,r){const n=N.lighterUnsafe(t,r),a=N.darkerUnsafe(t,r),o=N.ratioOfTones(n,t),s=N.ratioOfTones(a,t);if(k.tonePrefersLightForeground(t)){const c=Math.abs(o-s)<.1&&o<r&&s<r;return o>=r||o>=s||c?n:a}else return s>=r||s>=o?a:n}static tonePrefersLightForeground(t){return Math.round(t)<60}static toneAllowsLightForeground(t){return Math.round(t)<=49}static enableLightForeground(t){return k.tonePrefersLightForeground(t)&&!k.toneAllowsLightForeground(t)?49:t}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{static fromInt(t){const r=S.fromInt(t);return v.fromHct(r)}static fromHct(t){return new v(t.hue,t.chroma,t)}static fromHueAndChroma(t,r){const n=new Ce(t,r).create();return new v(t,r,n)}constructor(t,r,n){this.hue=t,this.chroma=r,this.keyColor=n,this.cache=new Map}tone(t){let r=this.cache.get(t);return r===void 0&&(r=S.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,r)),r}getHct(t){return S.fromInt(this.tone(t))}}class Ce{constructor(t,r){this.hue=t,this.requestedChroma=r,this.chromaCache=new Map,this.maxChromaValue=200}create(){let a=0,o=100;for(;a<o;){const s=Math.floor((a+o)/2),i=this.maxChroma(s)<this.maxChroma(s+1);if(this.maxChroma(s)>=this.requestedChroma-.01)if(Math.abs(a-50)<Math.abs(o-50))o=s;else{if(a===s)return S.from(this.hue,this.requestedChroma,a);a=s}else i?a=s+1:o=s}return S.from(this.hue,this.requestedChroma,a)}maxChroma(t){if(this.chromaCache.has(t))return this.chromaCache.get(t);const r=S.from(this.hue,this.maxChromaValue,t).chroma;return this.chromaCache.set(t,r),r}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t,r,n,a){this.low=t,this.normal=r,this.medium=n,this.high=a}get(t){return t<=-1?this.low:t<0?lt(this.low,this.normal,(t- -1)/1):t<.5?lt(this.normal,this.medium,(t-0)/.5):t<1?lt(this.medium,this.high,(t-.5)/.5):this.high}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,r,n,a,o){this.roleA=t,this.roleB=r,this.delta=n,this.polarity=a,this.stayTogether=o}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht;(function(e){e[e.MONOCHROME=0]="MONOCHROME",e[e.NEUTRAL=1]="NEUTRAL",e[e.TONAL_SPOT=2]="TONAL_SPOT",e[e.VIBRANT=3]="VIBRANT",e[e.EXPRESSIVE=4]="EXPRESSIVE",e[e.FIDELITY=5]="FIDELITY",e[e.CONTENT=6]="CONTENT",e[e.RAINBOW=7]="RAINBOW",e[e.FRUIT_SALAD=8]="FRUIT_SALAD"})(ht||(ht={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e){return e.variant===ht.FIDELITY||e.variant===ht.CONTENT}function L(e){return e.variant===ht.MONOCHROME}function Me(e,t,r,n){let a=r,o=S.from(e,t,r);if(o.chroma<t){let s=o.chroma;for(;o.chroma<t;){a+=n?-1:1;const i=S.from(e,t,a);if(s>i.chroma||Math.abs(i.chroma-t)<.4)break;const c=Math.abs(i.chroma-t),h=Math.abs(o.chroma-t);c<h&&(o=i),s=Math.max(s,i.chroma)}}return a}class l{static highestSurface(t){return t.isDark?l.surfaceBright:l.surfaceDim}}l.contentAccentToneDelta=15;l.primaryPaletteKeyColor=k.fromPalette({name:"primary_palette_key_color",palette:e=>e.primaryPalette,tone:e=>e.primaryPalette.keyColor.tone});l.secondaryPaletteKeyColor=k.fromPalette({name:"secondary_palette_key_color",palette:e=>e.secondaryPalette,tone:e=>e.secondaryPalette.keyColor.tone});l.tertiaryPaletteKeyColor=k.fromPalette({name:"tertiary_palette_key_color",palette:e=>e.tertiaryPalette,tone:e=>e.tertiaryPalette.keyColor.tone});l.neutralPaletteKeyColor=k.fromPalette({name:"neutral_palette_key_color",palette:e=>e.neutralPalette,tone:e=>e.neutralPalette.keyColor.tone});l.neutralVariantPaletteKeyColor=k.fromPalette({name:"neutral_variant_palette_key_color",palette:e=>e.neutralVariantPalette,tone:e=>e.neutralVariantPalette.keyColor.tone});l.background=k.fromPalette({name:"background",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});l.onBackground=k.fromPalette({name:"on_background",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>l.background,contrastCurve:new w(3,3,4.5,7)});l.surface=k.fromPalette({name:"surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});l.surfaceDim=k.fromPalette({name:"surface_dim",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:new w(87,87,80,75).get(e.contrastLevel),isBackground:!0});l.surfaceBright=k.fromPalette({name:"surface_bright",palette:e=>e.neutralPalette,tone:e=>e.isDark?new w(24,24,29,34).get(e.contrastLevel):98,isBackground:!0});l.surfaceContainerLowest=k.fromPalette({name:"surface_container_lowest",palette:e=>e.neutralPalette,tone:e=>e.isDark?new w(4,4,2,0).get(e.contrastLevel):100,isBackground:!0});l.surfaceContainerLow=k.fromPalette({name:"surface_container_low",palette:e=>e.neutralPalette,tone:e=>e.isDark?new w(10,10,11,12).get(e.contrastLevel):new w(96,96,96,95).get(e.contrastLevel),isBackground:!0});l.surfaceContainer=k.fromPalette({name:"surface_container",palette:e=>e.neutralPalette,tone:e=>e.isDark?new w(12,12,16,20).get(e.contrastLevel):new w(94,94,92,90).get(e.contrastLevel),isBackground:!0});l.surfaceContainerHigh=k.fromPalette({name:"surface_container_high",palette:e=>e.neutralPalette,tone:e=>e.isDark?new w(17,17,21,25).get(e.contrastLevel):new w(92,92,88,85).get(e.contrastLevel),isBackground:!0});l.surfaceContainerHighest=k.fromPalette({name:"surface_container_highest",palette:e=>e.neutralPalette,tone:e=>e.isDark?new w(22,22,26,30).get(e.contrastLevel):new w(90,90,84,80).get(e.contrastLevel),isBackground:!0});l.onSurface=k.fromPalette({name:"on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>l.highestSurface(e),contrastCurve:new w(4.5,7,11,21)});l.surfaceVariant=k.fromPalette({name:"surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:90,isBackground:!0});l.onSurfaceVariant=k.fromPalette({name:"on_surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?80:30,background:e=>l.highestSurface(e),contrastCurve:new w(3,4.5,7,11)});l.inverseSurface=k.fromPalette({name:"inverse_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:20});l.inverseOnSurface=k.fromPalette({name:"inverse_on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?20:95,background:e=>l.inverseSurface,contrastCurve:new w(4.5,7,11,21)});l.outline=k.fromPalette({name:"outline",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?60:50,background:e=>l.highestSurface(e),contrastCurve:new w(1.5,3,4.5,7)});l.outlineVariant=k.fromPalette({name:"outline_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:80,background:e=>l.highestSurface(e),contrastCurve:new w(1,1,3,4.5)});l.shadow=k.fromPalette({name:"shadow",palette:e=>e.neutralPalette,tone:e=>0});l.scrim=k.fromPalette({name:"scrim",palette:e=>e.neutralPalette,tone:e=>0});l.surfaceTint=k.fromPalette({name:"surface_tint",palette:e=>e.primaryPalette,tone:e=>e.isDark?80:40,isBackground:!0});l.primary=k.fromPalette({name:"primary",palette:e=>e.primaryPalette,tone:e=>L(e)?e.isDark?100:0:e.isDark?80:40,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new w(3,4.5,7,7),toneDeltaPair:e=>new j(l.primaryContainer,l.primary,10,"nearer",!1)});l.onPrimary=k.fromPalette({name:"on_primary",palette:e=>e.primaryPalette,tone:e=>L(e)?e.isDark?10:90:e.isDark?20:100,background:e=>l.primary,contrastCurve:new w(4.5,7,11,21)});l.primaryContainer=k.fromPalette({name:"primary_container",palette:e=>e.primaryPalette,tone:e=>at(e)?e.sourceColorHct.tone:L(e)?e.isDark?85:25:e.isDark?30:90,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new w(1,1,3,4.5),toneDeltaPair:e=>new j(l.primaryContainer,l.primary,10,"nearer",!1)});l.onPrimaryContainer=k.fromPalette({name:"on_primary_container",palette:e=>e.primaryPalette,tone:e=>at(e)?k.foregroundTone(l.primaryContainer.tone(e),4.5):L(e)?e.isDark?0:100:e.isDark?90:30,background:e=>l.primaryContainer,contrastCurve:new w(3,4.5,7,11)});l.inversePrimary=k.fromPalette({name:"inverse_primary",palette:e=>e.primaryPalette,tone:e=>e.isDark?40:80,background:e=>l.inverseSurface,contrastCurve:new w(3,4.5,7,7)});l.secondary=k.fromPalette({name:"secondary",palette:e=>e.secondaryPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new w(3,4.5,7,7),toneDeltaPair:e=>new j(l.secondaryContainer,l.secondary,10,"nearer",!1)});l.onSecondary=k.fromPalette({name:"on_secondary",palette:e=>e.secondaryPalette,tone:e=>L(e)?e.isDark?10:100:e.isDark?20:100,background:e=>l.secondary,contrastCurve:new w(4.5,7,11,21)});l.secondaryContainer=k.fromPalette({name:"secondary_container",palette:e=>e.secondaryPalette,tone:e=>{const t=e.isDark?30:90;return L(e)?e.isDark?30:85:at(e)?Me(e.secondaryPalette.hue,e.secondaryPalette.chroma,t,!e.isDark):t},isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new w(1,1,3,4.5),toneDeltaPair:e=>new j(l.secondaryContainer,l.secondary,10,"nearer",!1)});l.onSecondaryContainer=k.fromPalette({name:"on_secondary_container",palette:e=>e.secondaryPalette,tone:e=>L(e)?e.isDark?90:10:at(e)?k.foregroundTone(l.secondaryContainer.tone(e),4.5):e.isDark?90:30,background:e=>l.secondaryContainer,contrastCurve:new w(3,4.5,7,11)});l.tertiary=k.fromPalette({name:"tertiary",palette:e=>e.tertiaryPalette,tone:e=>L(e)?e.isDark?90:25:e.isDark?80:40,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new w(3,4.5,7,7),toneDeltaPair:e=>new j(l.tertiaryContainer,l.tertiary,10,"nearer",!1)});l.onTertiary=k.fromPalette({name:"on_tertiary",palette:e=>e.tertiaryPalette,tone:e=>L(e)?e.isDark?10:90:e.isDark?20:100,background:e=>l.tertiary,contrastCurve:new w(4.5,7,11,21)});l.tertiaryContainer=k.fromPalette({name:"tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>{if(L(e))return e.isDark?60:49;if(!at(e))return e.isDark?30:90;const t=e.tertiaryPalette.getHct(e.sourceColorHct.tone);return Vt.fixIfDisliked(t).tone},isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new w(1,1,3,4.5),toneDeltaPair:e=>new j(l.tertiaryContainer,l.tertiary,10,"nearer",!1)});l.onTertiaryContainer=k.fromPalette({name:"on_tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>L(e)?e.isDark?0:100:at(e)?k.foregroundTone(l.tertiaryContainer.tone(e),4.5):e.isDark?90:30,background:e=>l.tertiaryContainer,contrastCurve:new w(3,4.5,7,11)});l.error=k.fromPalette({name:"error",palette:e=>e.errorPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new w(3,4.5,7,7),toneDeltaPair:e=>new j(l.errorContainer,l.error,10,"nearer",!1)});l.onError=k.fromPalette({name:"on_error",palette:e=>e.errorPalette,tone:e=>e.isDark?20:100,background:e=>l.error,contrastCurve:new w(4.5,7,11,21)});l.errorContainer=k.fromPalette({name:"error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?30:90,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new w(1,1,3,4.5),toneDeltaPair:e=>new j(l.errorContainer,l.error,10,"nearer",!1)});l.onErrorContainer=k.fromPalette({name:"on_error_container",palette:e=>e.errorPalette,tone:e=>L(e)?e.isDark?90:10:e.isDark?90:30,background:e=>l.errorContainer,contrastCurve:new w(3,4.5,7,11)});l.primaryFixed=k.fromPalette({name:"primary_fixed",palette:e=>e.primaryPalette,tone:e=>L(e)?40:90,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new w(1,1,3,4.5),toneDeltaPair:e=>new j(l.primaryFixed,l.primaryFixedDim,10,"lighter",!0)});l.primaryFixedDim=k.fromPalette({name:"primary_fixed_dim",palette:e=>e.primaryPalette,tone:e=>L(e)?30:80,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new w(1,1,3,4.5),toneDeltaPair:e=>new j(l.primaryFixed,l.primaryFixedDim,10,"lighter",!0)});l.onPrimaryFixed=k.fromPalette({name:"on_primary_fixed",palette:e=>e.primaryPalette,tone:e=>L(e)?100:10,background:e=>l.primaryFixedDim,secondBackground:e=>l.primaryFixed,contrastCurve:new w(4.5,7,11,21)});l.onPrimaryFixedVariant=k.fromPalette({name:"on_primary_fixed_variant",palette:e=>e.primaryPalette,tone:e=>L(e)?90:30,background:e=>l.primaryFixedDim,secondBackground:e=>l.primaryFixed,contrastCurve:new w(3,4.5,7,11)});l.secondaryFixed=k.fromPalette({name:"secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>L(e)?80:90,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new w(1,1,3,4.5),toneDeltaPair:e=>new j(l.secondaryFixed,l.secondaryFixedDim,10,"lighter",!0)});l.secondaryFixedDim=k.fromPalette({name:"secondary_fixed_dim",palette:e=>e.secondaryPalette,tone:e=>L(e)?70:80,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new w(1,1,3,4.5),toneDeltaPair:e=>new j(l.secondaryFixed,l.secondaryFixedDim,10,"lighter",!0)});l.onSecondaryFixed=k.fromPalette({name:"on_secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>10,background:e=>l.secondaryFixedDim,secondBackground:e=>l.secondaryFixed,contrastCurve:new w(4.5,7,11,21)});l.onSecondaryFixedVariant=k.fromPalette({name:"on_secondary_fixed_variant",palette:e=>e.secondaryPalette,tone:e=>L(e)?25:30,background:e=>l.secondaryFixedDim,secondBackground:e=>l.secondaryFixed,contrastCurve:new w(3,4.5,7,11)});l.tertiaryFixed=k.fromPalette({name:"tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>L(e)?40:90,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new w(1,1,3,4.5),toneDeltaPair:e=>new j(l.tertiaryFixed,l.tertiaryFixedDim,10,"lighter",!0)});l.tertiaryFixedDim=k.fromPalette({name:"tertiary_fixed_dim",palette:e=>e.tertiaryPalette,tone:e=>L(e)?30:80,isBackground:!0,background:e=>l.highestSurface(e),contrastCurve:new w(1,1,3,4.5),toneDeltaPair:e=>new j(l.tertiaryFixed,l.tertiaryFixedDim,10,"lighter",!0)});l.onTertiaryFixed=k.fromPalette({name:"on_tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>L(e)?100:10,background:e=>l.tertiaryFixedDim,secondBackground:e=>l.tertiaryFixed,contrastCurve:new w(4.5,7,11,21)});l.onTertiaryFixedVariant=k.fromPalette({name:"on_tertiary_fixed_variant",palette:e=>e.tertiaryPalette,tone:e=>L(e)?90:30,background:e=>l.tertiaryFixedDim,secondBackground:e=>l.tertiaryFixed,contrastCurve:new w(3,4.5,7,11)});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{static of(t){return new G(t,!1)}static contentOf(t){return new G(t,!0)}static fromColors(t){return G.createPaletteFromColors(!1,t)}static contentFromColors(t){return G.createPaletteFromColors(!0,t)}static createPaletteFromColors(t,r){const n=new G(r.primary,t);if(r.secondary){const a=new G(r.secondary,t);n.a2=a.a1}if(r.tertiary){const a=new G(r.tertiary,t);n.a3=a.a1}if(r.error){const a=new G(r.error,t);n.error=a.a1}if(r.neutral){const a=new G(r.neutral,t);n.n1=a.n1}if(r.neutralVariant){const a=new G(r.neutralVariant,t);n.n2=a.n2}return n}constructor(t,r){const n=S.fromInt(t),a=n.hue,o=n.chroma;r?(this.a1=v.fromHueAndChroma(a,o),this.a2=v.fromHueAndChroma(a,o/3),this.a3=v.fromHueAndChroma(a+60,o/2),this.n1=v.fromHueAndChroma(a,Math.min(o/12,4)),this.n2=v.fromHueAndChroma(a,Math.min(o/6,8))):(this.a1=v.fromHueAndChroma(a,Math.max(48,o)),this.a2=v.fromHueAndChroma(a,16),this.a3=v.fromHueAndChroma(a+60,24),this.n1=v.fromHueAndChroma(a,4),this.n2=v.fromHueAndChroma(a,8)),this.error=v.fromHueAndChroma(25,84)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{fromInt(t){return ye(t)}toInt(t){return pe(t[0],t[1],t[2])}distance(t,r){const n=t[0]-r[0],a=t[1]-r[1],o=t[2]-r[2];return n*n+a*a+o*o}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=10,xe=3;class we{static quantize(t,r,n){const a=new Map,o=new Array,s=new Array,i=new Pe;let c=0;for(let g=0;g<t.length;g++){const b=t[g],T=a.get(b);T===void 0?(c++,o.push(i.fromInt(b)),s.push(b),a.set(b,1)):a.set(b,T+1)}const h=new Array;for(let g=0;g<c;g++){const b=s[g],T=a.get(b);T!==void 0&&(h[g]=T)}let u=Math.min(n,c);r.length>0&&(u=Math.min(u,r.length));const m=new Array;for(let g=0;g<r.length;g++)m.push(i.fromInt(r[g]));const p=u-m.length;if(r.length===0&&p>0)for(let g=0;g<p;g++){const b=Math.random()*100,T=Math.random()*201+-100,x=Math.random()*201+-100;m.push(new Array(b,T,x))}const f=new Array;for(let g=0;g<c;g++)f.push(Math.floor(Math.random()*u));const y=new Array;for(let g=0;g<u;g++){y.push(new Array);for(let b=0;b<u;b++)y[g].push(0)}const d=new Array;for(let g=0;g<u;g++){d.push(new Array);for(let b=0;b<u;b++)d[g].push(new De)}const M=new Array;for(let g=0;g<u;g++)M.push(0);for(let g=0;g<Ie;g++){for(let C=0;C<u;C++){for(let I=C+1;I<u;I++){const B=i.distance(m[C],m[I]);d[I][C].distance=B,d[I][C].index=C,d[C][I].distance=B,d[C][I].index=I}d[C].sort();for(let I=0;I<u;I++)y[C][I]=d[C][I].index}let b=0;for(let C=0;C<c;C++){const I=o[C],B=f[C],D=m[B],z=i.distance(I,D);let W=z,U=-1;for(let _=0;_<u;_++){if(d[B][_].distance>=4*z)continue;const et=i.distance(I,m[_]);et<W&&(W=et,U=_)}U!==-1&&Math.abs(Math.sqrt(W)-Math.sqrt(z))>xe&&(b++,f[C]=U)}if(b===0&&g!==0)break;const T=new Array(u).fill(0),x=new Array(u).fill(0),R=new Array(u).fill(0);for(let C=0;C<u;C++)M[C]=0;for(let C=0;C<c;C++){const I=f[C],B=o[C],D=h[C];M[I]+=D,T[I]+=B[0]*D,x[I]+=B[1]*D,R[I]+=B[2]*D}for(let C=0;C<u;C++){const I=M[C];if(I===0){m[C]=[0,0,0];continue}const B=T[C]/I,D=x[C]/I,z=R[C]/I;m[C]=[B,D,z]}}const A=new Map;for(let g=0;g<u;g++){const b=M[g];if(b===0)continue;const T=i.toInt(m[g]);A.has(T)||A.set(T,b)}return A}}class De{constructor(){this.distance=-1,this.index=-1}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{static quantize(t){const r=new Map;for(let n=0;n<t.length;n++){const a=t[n];de(a)<255||r.set(a,(r.get(a)??0)+1)}return r}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=5,Y=33,it=35937,H={RED:"red",GREEN:"green",BLUE:"blue"};class Te{constructor(t=[],r=[],n=[],a=[],o=[],s=[]){this.weights=t,this.momentsR=r,this.momentsG=n,this.momentsB=a,this.moments=o,this.cubes=s}quantize(t,r){this.constructHistogram(t),this.computeMoments();const n=this.createBoxes(r);return this.createResult(n.resultCount)}constructHistogram(t){this.weights=Array.from({length:it}).fill(0),this.momentsR=Array.from({length:it}).fill(0),this.momentsG=Array.from({length:it}).fill(0),this.momentsB=Array.from({length:it}).fill(0),this.moments=Array.from({length:it}).fill(0);const r=Ae.quantize(t);for(const[n,a]of r.entries()){const o=Ct(n),s=Mt(n),i=Pt(n),c=8-pt,h=(o>>c)+1,u=(s>>c)+1,m=(i>>c)+1,p=this.getIndex(h,u,m);this.weights[p]=(this.weights[p]??0)+a,this.momentsR[p]+=a*o,this.momentsG[p]+=a*s,this.momentsB[p]+=a*i,this.moments[p]+=a*(o*o+s*s+i*i)}}computeMoments(){for(let t=1;t<Y;t++){const r=Array.from({length:Y}).fill(0),n=Array.from({length:Y}).fill(0),a=Array.from({length:Y}).fill(0),o=Array.from({length:Y}).fill(0),s=Array.from({length:Y}).fill(0);for(let i=1;i<Y;i++){let c=0,h=0,u=0,m=0,p=0;for(let f=1;f<Y;f++){const y=this.getIndex(t,i,f);c+=this.weights[y],h+=this.momentsR[y],u+=this.momentsG[y],m+=this.momentsB[y],p+=this.moments[y],r[f]+=c,n[f]+=h,a[f]+=u,o[f]+=m,s[f]+=p;const d=this.getIndex(t-1,i,f);this.weights[y]=this.weights[d]+r[f],this.momentsR[y]=this.momentsR[d]+n[f],this.momentsG[y]=this.momentsG[d]+a[f],this.momentsB[y]=this.momentsB[d]+o[f],this.moments[y]=this.moments[d]+s[f]}}}}createBoxes(t){this.cubes=Array.from({length:t}).fill(0).map(()=>new Be);const r=Array.from({length:t}).fill(0);this.cubes[0].r0=0,this.cubes[0].g0=0,this.cubes[0].b0=0,this.cubes[0].r1=Y-1,this.cubes[0].g1=Y-1,this.cubes[0].b1=Y-1;let n=t,a=0;for(let o=1;o<t;o++){this.cut(this.cubes[a],this.cubes[o])?(r[a]=this.cubes[a].vol>1?this.variance(this.cubes[a]):0,r[o]=this.cubes[o].vol>1?this.variance(this.cubes[o]):0):(r[a]=0,o--),a=0;let s=r[0];for(let i=1;i<=o;i++)r[i]>s&&(s=r[i],a=i);if(s<=0){n=o+1;break}}return new Re(t,n)}createResult(t){const r=[];for(let n=0;n<t;++n){const a=this.cubes[n],o=this.volume(a,this.weights);if(o>0){const s=Math.round(this.volume(a,this.momentsR)/o),i=Math.round(this.volume(a,this.momentsG)/o),c=Math.round(this.volume(a,this.momentsB)/o),h=255<<24|(s&255)<<16|(i&255)<<8|c&255;r.push(h)}}return r}variance(t){const r=this.volume(t,this.momentsR),n=this.volume(t,this.momentsG),a=this.volume(t,this.momentsB),o=this.moments[this.getIndex(t.r1,t.g1,t.b1)]-this.moments[this.getIndex(t.r1,t.g1,t.b0)]-this.moments[this.getIndex(t.r1,t.g0,t.b1)]+this.moments[this.getIndex(t.r1,t.g0,t.b0)]-this.moments[this.getIndex(t.r0,t.g1,t.b1)]+this.moments[this.getIndex(t.r0,t.g1,t.b0)]+this.moments[this.getIndex(t.r0,t.g0,t.b1)]-this.moments[this.getIndex(t.r0,t.g0,t.b0)],s=r*r+n*n+a*a,i=this.volume(t,this.weights);return o-s/i}cut(t,r){const n=this.volume(t,this.momentsR),a=this.volume(t,this.momentsG),o=this.volume(t,this.momentsB),s=this.volume(t,this.weights),i=this.maximize(t,H.RED,t.r0+1,t.r1,n,a,o,s),c=this.maximize(t,H.GREEN,t.g0+1,t.g1,n,a,o,s),h=this.maximize(t,H.BLUE,t.b0+1,t.b1,n,a,o,s);let u;const m=i.maximum,p=c.maximum,f=h.maximum;if(m>=p&&m>=f){if(i.cutLocation<0)return!1;u=H.RED}else p>=m&&p>=f?u=H.GREEN:u=H.BLUE;switch(r.r1=t.r1,r.g1=t.g1,r.b1=t.b1,u){case H.RED:t.r1=i.cutLocation,r.r0=t.r1,r.g0=t.g0,r.b0=t.b0;break;case H.GREEN:t.g1=c.cutLocation,r.r0=t.r0,r.g0=t.g1,r.b0=t.b0;break;case H.BLUE:t.b1=h.cutLocation,r.r0=t.r0,r.g0=t.g0,r.b0=t.b1;break;default:throw new Error("unexpected direction "+u)}return t.vol=(t.r1-t.r0)*(t.g1-t.g0)*(t.b1-t.b0),r.vol=(r.r1-r.r0)*(r.g1-r.g0)*(r.b1-r.b0),!0}maximize(t,r,n,a,o,s,i,c){const h=this.bottom(t,r,this.momentsR),u=this.bottom(t,r,this.momentsG),m=this.bottom(t,r,this.momentsB),p=this.bottom(t,r,this.weights);let f=0,y=-1,d=0,M=0,A=0,g=0;for(let b=n;b<a;b++){if(d=h+this.top(t,r,b,this.momentsR),M=u+this.top(t,r,b,this.momentsG),A=m+this.top(t,r,b,this.momentsB),g=p+this.top(t,r,b,this.weights),g===0)continue;let T=(d*d+M*M+A*A)*1,x=g*1,R=T/x;d=o-d,M=s-M,A=i-A,g=c-g,g!==0&&(T=(d*d+M*M+A*A)*1,x=g*1,R+=T/x,R>f&&(f=R,y=b))}return new Ee(y,f)}volume(t,r){return r[this.getIndex(t.r1,t.g1,t.b1)]-r[this.getIndex(t.r1,t.g1,t.b0)]-r[this.getIndex(t.r1,t.g0,t.b1)]+r[this.getIndex(t.r1,t.g0,t.b0)]-r[this.getIndex(t.r0,t.g1,t.b1)]+r[this.getIndex(t.r0,t.g1,t.b0)]+r[this.getIndex(t.r0,t.g0,t.b1)]-r[this.getIndex(t.r0,t.g0,t.b0)]}bottom(t,r,n){switch(r){case H.RED:return-n[this.getIndex(t.r0,t.g1,t.b1)]+n[this.getIndex(t.r0,t.g1,t.b0)]+n[this.getIndex(t.r0,t.g0,t.b1)]-n[this.getIndex(t.r0,t.g0,t.b0)];case H.GREEN:return-n[this.getIndex(t.r1,t.g0,t.b1)]+n[this.getIndex(t.r1,t.g0,t.b0)]+n[this.getIndex(t.r0,t.g0,t.b1)]-n[this.getIndex(t.r0,t.g0,t.b0)];case H.BLUE:return-n[this.getIndex(t.r1,t.g1,t.b0)]+n[this.getIndex(t.r1,t.g0,t.b0)]+n[this.getIndex(t.r0,t.g1,t.b0)]-n[this.getIndex(t.r0,t.g0,t.b0)];default:throw new Error("unexpected direction $direction")}}top(t,r,n,a){switch(r){case H.RED:return a[this.getIndex(n,t.g1,t.b1)]-a[this.getIndex(n,t.g1,t.b0)]-a[this.getIndex(n,t.g0,t.b1)]+a[this.getIndex(n,t.g0,t.b0)];case H.GREEN:return a[this.getIndex(t.r1,n,t.b1)]-a[this.getIndex(t.r1,n,t.b0)]-a[this.getIndex(t.r0,n,t.b1)]+a[this.getIndex(t.r0,n,t.b0)];case H.BLUE:return a[this.getIndex(t.r1,t.g1,n)]-a[this.getIndex(t.r1,t.g0,n)]-a[this.getIndex(t.r0,t.g1,n)]+a[this.getIndex(t.r0,t.g0,n)];default:throw new Error("unexpected direction $direction")}}getIndex(t,r,n){return(t<<pt*2)+(t<<pt+1)+t+(r<<pt)+r+n}}class Be{constructor(t=0,r=0,n=0,a=0,o=0,s=0,i=0){this.r0=t,this.r1=r,this.g0=n,this.g1=a,this.b0=o,this.b1=s,this.vol=i}}class Re{constructor(t,r){this.requestedCount=t,this.resultCount=r}}class Ee{constructor(t,r){this.cutLocation=t,this.maximum=r}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{static quantize(t,r){const a=new Te().quantize(t,r);return we.quantize(t,a,r)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get outlineVariant(){return this.props.outlineVariant}get shadow(){return this.props.shadow}get scrim(){return this.props.scrim}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(t){return $.lightFromCorePalette(G.of(t))}static dark(t){return $.darkFromCorePalette(G.of(t))}static lightContent(t){return $.lightFromCorePalette(G.contentOf(t))}static darkContent(t){return $.darkFromCorePalette(G.contentOf(t))}static lightFromCorePalette(t){return new $({primary:t.a1.tone(40),onPrimary:t.a1.tone(100),primaryContainer:t.a1.tone(90),onPrimaryContainer:t.a1.tone(10),secondary:t.a2.tone(40),onSecondary:t.a2.tone(100),secondaryContainer:t.a2.tone(90),onSecondaryContainer:t.a2.tone(10),tertiary:t.a3.tone(40),onTertiary:t.a3.tone(100),tertiaryContainer:t.a3.tone(90),onTertiaryContainer:t.a3.tone(10),error:t.error.tone(40),onError:t.error.tone(100),errorContainer:t.error.tone(90),onErrorContainer:t.error.tone(10),background:t.n1.tone(99),onBackground:t.n1.tone(10),surface:t.n1.tone(99),onSurface:t.n1.tone(10),surfaceVariant:t.n2.tone(90),onSurfaceVariant:t.n2.tone(30),outline:t.n2.tone(50),outlineVariant:t.n2.tone(80),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(20),inverseOnSurface:t.n1.tone(95),inversePrimary:t.a1.tone(80)})}static darkFromCorePalette(t){return new $({primary:t.a1.tone(80),onPrimary:t.a1.tone(20),primaryContainer:t.a1.tone(30),onPrimaryContainer:t.a1.tone(90),secondary:t.a2.tone(80),onSecondary:t.a2.tone(20),secondaryContainer:t.a2.tone(30),onSecondaryContainer:t.a2.tone(90),tertiary:t.a3.tone(80),onTertiary:t.a3.tone(20),tertiaryContainer:t.a3.tone(30),onTertiaryContainer:t.a3.tone(90),error:t.error.tone(80),onError:t.error.tone(20),errorContainer:t.error.tone(30),onErrorContainer:t.error.tone(80),background:t.n1.tone(10),onBackground:t.n1.tone(90),surface:t.n1.tone(10),onSurface:t.n1.tone(90),surfaceVariant:t.n2.tone(30),onSurfaceVariant:t.n2.tone(80),outline:t.n2.tone(60),outlineVariant:t.n2.tone(30),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(90),inverseOnSurface:t.n1.tone(20),inversePrimary:t.a1.tone(40)})}constructor(t){this.props=t}toJSON(){return{...this.props}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe={desired:4,fallbackColorARGB:4282549748,filter:!0};function Le(e,t){return e.score>t.score?-1:e.score<t.score?1:0}class q{constructor(){}static score(t,r){const{desired:n,fallbackColorARGB:a,filter:o}={...Oe,...r},s=[],i=new Array(360).fill(0);let c=0;for(const[f,y]of t.entries()){const d=S.fromInt(f);s.push(d);const M=Math.floor(d.hue);i[M]+=y,c+=y}const h=new Array(360).fill(0);for(let f=0;f<360;f++){const y=i[f]/c;for(let d=f-14;d<f+16;d++){const M=Xt(d);h[M]+=y}}const u=new Array;for(const f of s){const y=Xt(Math.round(f.hue)),d=h[y];if(o&&(f.chroma<q.CUTOFF_CHROMA||d<=q.CUTOFF_EXCITED_PROPORTION))continue;const M=d*100*q.WEIGHT_PROPORTION,A=f.chroma<q.TARGET_CHROMA?q.WEIGHT_CHROMA_BELOW:q.WEIGHT_CHROMA_ABOVE,g=(f.chroma-q.TARGET_CHROMA)*A,b=M+g;u.push({hct:f,score:b})}u.sort(Le);const m=[];for(let f=90;f>=15;f--){m.length=0;for(const{hct:y}of u)if(m.find(M=>Yt(y.hue,M.hue)<f)||m.push(y),m.length>=n)break;if(m.length>=n)break}const p=[];m.length===0&&p.push(a);for(const f of m)p.push(f.toInt());return p}}q.TARGET_CHROMA=48;q.WEIGHT_PROPORTION=.7;q.WEIGHT_CHROMA_ABOVE=.3;q.WEIGHT_CHROMA_BELOW=.1;q.CUTOFF_CHROMA=5;q.CUTOFF_EXCITED_PROPORTION=.01;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e){const t=Ct(e),r=Mt(e),n=Pt(e),a=[t.toString(16),r.toString(16),n.toString(16)];for(const[o,s]of a.entries())s.length===1&&(a[o]="0"+s);return"#"+a.join("")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(e){const t=await new Promise((s,i)=>{const c=document.createElement("canvas"),h=c.getContext("2d");if(!h){i(new Error("Could not get canvas context"));return}const u=()=>{c.width=e.width,c.height=e.height,h.drawImage(e,0,0);let p=[0,0,e.width,e.height];const f=e.dataset.area;f&&/^\d+(\s*,\s*\d+){3}$/.test(f)&&(p=f.split(/\s*,\s*/).map(g=>parseInt(g,10)));const[y,d,M,A]=p;s(h.getImageData(y,d,M,A).data)},m=()=>{i(new Error("Image load failed"))};e.complete?u():(e.onload=u,e.onerror=m)}),r=[];for(let s=0;s<t.length;s+=4){const i=t[s],c=t[s+1],h=t[s+2];if(t[s+3]<255)continue;const m=bt(i,c,h);r.push(m)}const n=Fe.quantize(r,128);return q.score(n)[0]}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e,t=[]){const r=G.of(e);return{source:e,schemes:{light:$.light(e),dark:$.dark(e)},palettes:{primary:r.a1,secondary:r.a2,tertiary:r.a3,neutral:r.n1,neutralVariant:r.n2,error:r.error},customColors:t.map(n=>Ve(e,n))}}async function Ne(e,t=[]){const r=await Se(e);return _e(r,t)}function Ve(e,t){let r=t.value;const n=r,a=e;t.blend&&(r=Nt.harmonize(n,a));const s=G.of(r).a1;return{color:t,value:r,light:{color:s.tone(40),onColor:s.tone(100),colorContainer:s.tone(90),onColorContainer:s.tone(10)},dark:{color:s.tone(80),onColor:s.tone(20),colorContainer:s.tone(30),onColorContainer:s.tone(90)}}}const Ge="/assets/abstract-turquoise-art-small-D1hgIp7A.jpg",ze="/assets/autumn-lakeside-serenity-small-W9ZDV6Qm.jpg",He="/assets/lavender-sunset-hues-small-BQKm6bNO.jpg",ve={class:"text-body-1"},qe={class:"text-subtitle-2 font-mono"},Ue={__name:"UtilitiesView",setup(e){const t=vt(0),r=vt("#769CDF"),n=["https://picsum.photos/id/2/320/128","https://picsum.photos/id/18/320/128","https://picsum.photos/id/56/320/128","https://picsum.photos/id/78/320/128","https://picsum.photos/id/113/320/128",Ge,ze,He],a=re([{title:"Primary",name:"primary",hex:"#769CDF"},{title:"Secondary",name:"secondary",hex:"#8991A2"},{title:"Tertiary",name:"tertiary",hex:"#A288A6"},{title:"Error",name:"error",hex:"#FF5449"},{title:"Neutral",name:"neutral",hex:"#919093"},{title:"Neutral Variant",name:"neutralVariant",hex:"#8E9098"}]);Wt(()=>{console.log("UtilitiesView ::: onMounted")});function o(i,c){console.log("UtilitiesView ::: imageButtonClickHandler"),console.log(" - index: ",i),console.log(" - pic: ",c),t.value=i;const h="img-card-"+i;console.log(" - cardId: ",h);const u=document.getElementById(h);console.log(" - card: ",u);const m=u.querySelector("img");m.setAttribute("crossOrigin",""),console.log(" - img: ",i,m),s(m)}async function s(i){console.log("UtilitiesView ::: getThemeFromImage");const c=await Ne(i);console.log(" - theme from image: ",c);const h=O(c.source);console.log(" - theme source: ",h),r.value=h,console.log("=============== PALETTES ==============");const u=c.palettes.primary.keyColor.argb;console.log(" - primaryRGB: ",u),console.log(" - primary HEX: ",O(u)),a.find(D=>D.name==="primary").hex=O(u);const m=c.palettes.secondary.keyColor.argb;console.log(" - secondaryRGB: ",m),console.log(" - secondary HEX: ",O(m)),a.find(D=>D.name==="secondary").hex=O(m);const p=c.palettes.tertiary.keyColor.argb;console.log(" - tertiaryRGB: ",p),console.log(" - tertiary HEX: ",O(p)),a.find(D=>D.name==="tertiary").hex=O(p);const f=c.palettes.neutral.keyColor.argb;console.log(" - neutralRGB: ",f),console.log(" - neutral HEX: ",O(f)),a.find(D=>D.name==="neutral").hex=O(f);const y=c.palettes.neutralVariant.keyColor.argb;console.log(" - neutralVariantRGB: ",y),console.log(" - neutralVariant HEX: ",O(y)),a.find(D=>D.name==="neutralVariant").hex=O(y);const d=c.palettes.error.keyColor.argb;console.log(" - errorRGB: ",d),console.log(" - error HEX: ",O(d)),a.find(D=>D.name==="error").hex=O(d),console.log(a),console.log("=========== SCHEMES LIGHT ===========");const M=c.schemes.light.primary;console.log(" - lightPrimary: ",M),console.log(" - lightPrimary HEX: ",O(M));const A=c.schemes.light.secondary;console.log(" - lightSecondary: ",A),console.log(" - lightSecondary HEX: ",O(A));const g=c.schemes.light.tertiary;console.log(" - lightTertiary: ",g),console.log(" - lightTertiary HEX: ",O(g));const b=c.schemes.light.background;console.log(" - lightBackground: ",b),console.log(" - lightBackground HEX: ",O(b));const T=c.schemes.light.surface;console.log(" - lightSurface: ",T),console.log(" - lightSurface HEX: ",O(T)),console.log("=========== SCHEMES DARK ============");const x=c.schemes.dark.primary;console.log(" - darkPrimary: ",x),console.log(" - darkPrimary HEX: ",O(x));const R=c.schemes.dark.secondary;console.log(" - darkSecondary: ",R),console.log(" - darkSecondary HEX: ",O(R));const C=c.schemes.dark.tertiary;console.log(" - darkTertiary: ",C),console.log(" - darkTertiary HEX: ",O(C));const I=c.schemes.dark.background;console.log(" - darkBackground: ",I),console.log(" - darkBackground HEX: ",O(I));const B=c.schemes.dark.surface;console.log(" - darkSurface: ",B),console.log(" - darkSurface HEX: ",O(B))}return(i,c)=>(Z(),ct(ee,{class:"fill-height px-12 mx-auto","grid-list-xs":""},{default:E(()=>[F(ot,{class:"align-sm-stretch"},{default:E(()=>[(Z(),At(Tt,null,Bt(n,(h,u)=>F(rt,{cols:"3",key:u},{default:E(()=>[F(gt,{id:`img-card-${u}`,color:"white",image:h,density:"compact",variant:"outlined"},{default:E(()=>[F(ne,{style:{"text-shadow":"black 0px 0px 6px",background:"rgb(255 255 255 / 12%)"}},{default:E(()=>[F(ae,null,{default:E(()=>c[0]||(c[0]=[st("Color from image")])),_:1}),F(oe,null,{default:E(()=>[st("Image "+Rt(u+1),1)]),_:2},1024)]),_:2},1024),F(se,null,{default:E(()=>[u===t.value?(Z(),ct(ie,{key:0,icon:"mdi-check"})):ce("",!0),F(le),F(qt,{onClick:m=>o(u,h)},{default:E(()=>c[1]||(c[1]=[st("Get Color")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["id","image"])]),_:2},1024)),64))]),_:1}),F(ot,null,{default:E(()=>[F(rt,{cols:"3"},{default:E(()=>[F(gt,null,{default:E(()=>[F(Et,null,{default:E(()=>[(Z(!0),At(Tt,null,Bt(a,h=>(Z(),ct(ot,{key:h.name,class:"bg-secondary ma-1 rounded-e-pill rounded-s-pill"},{default:E(()=>[F(rt,{class:"",cols:"auto"},{default:E(()=>[F(qt,{width:"46",height:"46",color:h.hex,icon:""},{default:E(()=>[F(ue)]),_:2},1032,["color"])]),_:2},1024),F(rt,{class:"d-sm-none d-md-none d-lg-flex flex-column"},{default:E(()=>[Ut("span",ve,Rt(h.title),1),Ut("span",qe,Rt(h.hex),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),F(rt,null,{default:E(()=>[F(ot,null,{default:E(()=>[F(rt,null,{default:E(()=>[F(gt,{title:"Utilities",subtitle:"Source",color:r.value},{default:E(()=>[F(Et,null,{default:E(()=>c[2]||(c[2]=[st(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum pariatur animi obcaecati dolor labore quos nobis, ea voluptatem officiis quibusdam molestias odio aliquam eligendi sapiente porro eveniet blanditiis optio et? ")])),_:1})]),_:1},8,["color"])]),_:1}),(Z(!0),At(Tt,null,Bt(a,h=>(Z(),ct(rt,{key:h.name,cols:"12",sm:"12",md:"6",lg:"4"},{default:E(()=>[F(gt,{title:"Utilities",subtitle:h.title,color:h.hex},{default:E(()=>[F(Et,null,{default:E(()=>c[3]||(c[3]=[st(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum pariatur animi obcaecati dolor labore quos nobis, ea voluptatem officiis quibusdam molestias odio aliquam eligendi sapiente porro eveniet blanditiis optio et? ")])),_:1})]),_:2},1032,["subtitle","color"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),F(ot)]),_:1}))}},We={__name:"utilities",setup(e){return Wt(()=>{console.log("PAGES ::: /builder/utilities ::: onMounted")}),(t,r)=>{const n=Ue;return Z(),ct(n)}}};export{We as default};
