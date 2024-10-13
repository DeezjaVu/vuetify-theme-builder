import{V as It,a as ut,b as Wt}from"./VRow-Dyr_B-Iw.js";import{ab as Jt,o as St,a as wt,c as Vt,w as O,b as E,aB as Xt,a1 as $t,aC as Kt,f as ht,aK as Qt,aN as Zt,au as et,aO as te,aD as ee,aP as re,e as ne,aF as ae,az as xt}from"./index-B7V_KXfR.js";/**
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
 */function H(e){return e<0?-1:e===0?0:1}function at(e,t,r){return(1-r)*e+r*t}function oe(e,t,r){return r<e?e:r>t?t:r}function dt(e,t,r){return r<e?e:r>t?t:r}function zt(e){return e=e%360,e<0&&(e=e+360),e}function Bt(e){return e=e%360,e<0&&(e=e+360),e}function se(e,t){return Bt(t-e)<=180?1:-1}function Gt(e,t){return 180-Math.abs(Math.abs(e-t)-180)}function Dt(e,t){const r=e[0]*t[0][0]+e[1]*t[0][1]+e[2]*t[0][2],n=e[0]*t[1][0]+e[1]*t[1][1]+e[2]*t[1][2],a=e[0]*t[2][0]+e[1]*t[2][1]+e[2]*t[2][2];return[r,n,a]}/**
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
 */const qt=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],ie=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],Rt=[95.047,100,108.883];function gt(e,t,r){return(255<<24|(e&255)<<16|(t&255)<<8|r&255)>>>0}function Nt(e){const t=tt(e[0]),r=tt(e[1]),n=tt(e[2]);return gt(t,r,n)}function ce(e){return e>>24&255}function pt(e){return e>>16&255}function yt(e){return e>>8&255}function bt(e){return e&255}function Ut(e,t,r){const n=ie,a=n[0][0]*e+n[0][1]*t+n[0][2]*r,s=n[1][0]*e+n[1][1]*t+n[1][2]*r,o=n[2][0]*e+n[2][1]*t+n[2][2]*r,i=tt(a),l=tt(s),h=tt(o);return gt(i,l,h)}function le(e){const t=$(pt(e)),r=$(yt(e)),n=$(bt(e));return Dt([t,r,n],qt)}function ue(e,t,r){const n=Rt,a=(e+16)/116,s=t/500+a,o=a-r/200,i=mt(s),l=mt(a),h=mt(o),u=i*n[0],m=l*n[1],p=h*n[2];return Ut(u,m,p)}function he(e){const t=$(pt(e)),r=$(yt(e)),n=$(bt(e)),a=qt,s=a[0][0]*t+a[0][1]*r+a[0][2]*n,o=a[1][0]*t+a[1][1]*r+a[1][2]*n,i=a[2][0]*t+a[2][1]*r+a[2][2]*n,l=Rt,h=s/l[0],u=o/l[1],m=i/l[2],p=ot(h),f=ot(u),b=ot(m),g=116*f-16,k=500*(p-f),D=200*(f-b);return[g,k,D]}function fe(e){const t=Q(e),r=tt(t);return gt(r,r,r)}function At(e){const t=le(e)[1];return 116*ot(t/100)-16}function Q(e){return 100*mt((e+16)/116)}function Tt(e){return ot(e/100)*116-16}function $(e){const t=e/255;return t<=.040449936?t/12.92*100:Math.pow((t+.055)/1.055,2.4)*100}function tt(e){const t=e/100;let r=0;return t<=.0031308?r=t*12.92:r=1.055*Math.pow(t,1/2.4)-.055,oe(0,255,Math.round(r*255))}function me(){return Rt}function ot(e){const t=.008856451679035631,r=24389/27;return e>t?Math.pow(e,1/3):(r*e+16)/116}function mt(e){const t=.008856451679035631,r=24389/27,n=e*e*e;return n>t?n:(116*e-16)/r}/**
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
 */class J{static make(t=me(),r=200/Math.PI*Q(50)/100,n=50,a=2,s=!1){const o=t,i=o[0]*.401288+o[1]*.650173+o[2]*-.051461,l=o[0]*-.250268+o[1]*1.204414+o[2]*.045854,h=o[0]*-.002079+o[1]*.048952+o[2]*.953127,u=.8+a/10,m=u>=.9?at(.59,.69,(u-.9)*10):at(.525,.59,(u-.8)*10);let p=s?1:u*(1-1/3.6*Math.exp((-r-42)/92));p=p>1?1:p<0?0:p;const f=u,b=[p*(100/i)+1-p,p*(100/l)+1-p,p*(100/h)+1-p],g=1/(5*r+1),k=g*g*g*g,D=1-k,d=k*r+.1*D*D*Math.cbrt(5*r),M=Q(n)/t[1],A=1.48+Math.sqrt(M),w=.725/Math.pow(M,.2),R=w,P=[Math.pow(d*b[0]*i/100,.42),Math.pow(d*b[1]*l/100,.42),Math.pow(d*b[2]*h/100,.42)],I=[400*P[0]/(P[0]+27.13),400*P[1]/(P[1]+27.13),400*P[2]/(P[2]+27.13)],B=(2*I[0]+I[1]+.05*I[2])*w;return new J(M,B,w,R,m,f,b,d,Math.pow(d,.25),A)}constructor(t,r,n,a,s,o,i,l,h,u){this.n=t,this.aw=r,this.nbb=n,this.ncb=a,this.c=s,this.nc=o,this.rgbD=i,this.fl=l,this.fLRoot=h,this.z=u}}J.DEFAULT=J.make();/**
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
 */class N{constructor(t,r,n,a,s,o,i,l,h){this.hue=t,this.chroma=r,this.j=n,this.q=a,this.m=s,this.s=o,this.jstar=i,this.astar=l,this.bstar=h}distance(t){const r=this.jstar-t.jstar,n=this.astar-t.astar,a=this.bstar-t.bstar,s=Math.sqrt(r*r+n*n+a*a);return 1.41*Math.pow(s,.63)}static fromInt(t){return N.fromIntInViewingConditions(t,J.DEFAULT)}static fromIntInViewingConditions(t,r){const n=(t&16711680)>>16,a=(t&65280)>>8,s=t&255,o=$(n),i=$(a),l=$(s),h=.41233895*o+.35762064*i+.18051042*l,u=.2126*o+.7152*i+.0722*l,m=.01932141*o+.11916382*i+.95034478*l,p=.401288*h+.650173*u-.051461*m,f=-.250268*h+1.204414*u+.045854*m,b=-.002079*h+.048952*u+.953127*m,g=r.rgbD[0]*p,k=r.rgbD[1]*f,D=r.rgbD[2]*b,d=Math.pow(r.fl*Math.abs(g)/100,.42),M=Math.pow(r.fl*Math.abs(k)/100,.42),A=Math.pow(r.fl*Math.abs(D)/100,.42),w=H(g)*400*d/(d+27.13),R=H(k)*400*M/(M+27.13),P=H(D)*400*A/(A+27.13),I=(11*w+-12*R+P)/11,B=(w+R-2*P)/9,T=(20*w+20*R+21*P)/20,V=(40*w+20*R+P)/20,v=Math.atan2(B,I)*180/Math.PI,_=v<0?v+360:v>=360?v-360:v,Z=_*Math.PI/180,it=V*r.nbb,K=100*Math.pow(it/r.aw,r.c*r.z),ct=4/r.c*Math.sqrt(K/100)*(r.aw+4)*r.fLRoot,Mt=_<20.14?_+360:_,Pt=.25*(Math.cos(Mt*Math.PI/180+2)+3.8),Ct=5e4/13*Pt*r.nc*r.ncb*Math.sqrt(I*I+B*B)/(T+.305),lt=Math.pow(Ct,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),Ot=lt*Math.sqrt(K/100),Lt=Ot*r.fLRoot,vt=50*Math.sqrt(lt*r.c/(r.aw+4)),Ht=(1+100*.007)*K/(1+.007*K),_t=1/.0228*Math.log(1+.0228*Lt),jt=_t*Math.cos(Z),Yt=_t*Math.sin(Z);return new N(_,Ot,K,ct,Lt,vt,Ht,jt,Yt)}static fromJch(t,r,n){return N.fromJchInViewingConditions(t,r,n,J.DEFAULT)}static fromJchInViewingConditions(t,r,n,a){const s=4/a.c*Math.sqrt(t/100)*(a.aw+4)*a.fLRoot,o=r*a.fLRoot,i=r/Math.sqrt(t/100),l=50*Math.sqrt(i*a.c/(a.aw+4)),h=n*Math.PI/180,u=(1+100*.007)*t/(1+.007*t),m=1/.0228*Math.log(1+.0228*o),p=m*Math.cos(h),f=m*Math.sin(h);return new N(n,r,t,s,o,l,u,p,f)}static fromUcs(t,r,n){return N.fromUcsInViewingConditions(t,r,n,J.DEFAULT)}static fromUcsInViewingConditions(t,r,n,a){const s=r,o=n,i=Math.sqrt(s*s+o*o),h=(Math.exp(i*.0228)-1)/.0228/a.fLRoot;let u=Math.atan2(o,s)*(180/Math.PI);u<0&&(u+=360);const m=t/(1-(t-100)*.007);return N.fromJchInViewingConditions(m,h,u,a)}toInt(){return this.viewed(J.DEFAULT)}viewed(t){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),a=this.hue*Math.PI/180,s=.25*(Math.cos(a+2)+3.8),o=t.aw*Math.pow(this.j/100,1/t.c/t.z),i=s*(5e4/13)*t.nc*t.ncb,l=o/t.nbb,h=Math.sin(a),u=Math.cos(a),m=23*(l+.305)*n/(23*i+11*n*u+108*n*h),p=m*u,f=m*h,b=(460*l+451*p+288*f)/1403,g=(460*l-891*p-261*f)/1403,k=(460*l-220*p-6300*f)/1403,D=Math.max(0,27.13*Math.abs(b)/(400-Math.abs(b))),d=H(b)*(100/t.fl)*Math.pow(D,1/.42),M=Math.max(0,27.13*Math.abs(g)/(400-Math.abs(g))),A=H(g)*(100/t.fl)*Math.pow(M,1/.42),w=Math.max(0,27.13*Math.abs(k)/(400-Math.abs(k))),R=H(k)*(100/t.fl)*Math.pow(w,1/.42),P=d/t.rgbD[0],I=A/t.rgbD[1],B=R/t.rgbD[2],T=1.86206786*P-1.01125463*I+.14918677*B,V=.38752654*P+.62144744*I-.00897398*B,Y=-.0158415*P-.03412294*I+1.04996444*B;return Ut(T,V,Y)}static fromXyzInViewingConditions(t,r,n,a){const s=.401288*t+.650173*r-.051461*n,o=-.250268*t+1.204414*r+.045854*n,i=-.002079*t+.048952*r+.953127*n,l=a.rgbD[0]*s,h=a.rgbD[1]*o,u=a.rgbD[2]*i,m=Math.pow(a.fl*Math.abs(l)/100,.42),p=Math.pow(a.fl*Math.abs(h)/100,.42),f=Math.pow(a.fl*Math.abs(u)/100,.42),b=H(l)*400*m/(m+27.13),g=H(h)*400*p/(p+27.13),k=H(u)*400*f/(f+27.13),D=(11*b+-12*g+k)/11,d=(b+g-2*k)/9,M=(20*b+20*g+21*k)/20,A=(40*b+20*g+k)/20,R=Math.atan2(d,D)*180/Math.PI,P=R<0?R+360:R>=360?R-360:R,I=P*Math.PI/180,B=A*a.nbb,T=100*Math.pow(B/a.aw,a.c*a.z),V=4/a.c*Math.sqrt(T/100)*(a.aw+4)*a.fLRoot,Y=P<20.14?P+360:P,v=1/4*(Math.cos(Y*Math.PI/180+2)+3.8),Z=5e4/13*v*a.nc*a.ncb*Math.sqrt(D*D+d*d)/(M+.305),it=Math.pow(Z,.9)*Math.pow(1.64-Math.pow(.29,a.n),.73),K=it*Math.sqrt(T/100),ct=K*a.fLRoot,Mt=50*Math.sqrt(it*a.c/(a.aw+4)),Pt=(1+100*.007)*T/(1+.007*T),kt=Math.log(1+.0228*ct)/.0228,Ct=kt*Math.cos(I),lt=kt*Math.sin(I);return new N(P,K,T,V,ct,Mt,Pt,Ct,lt)}xyzInViewingConditions(t){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),a=this.hue*Math.PI/180,s=.25*(Math.cos(a+2)+3.8),o=t.aw*Math.pow(this.j/100,1/t.c/t.z),i=s*(5e4/13)*t.nc*t.ncb,l=o/t.nbb,h=Math.sin(a),u=Math.cos(a),m=23*(l+.305)*n/(23*i+11*n*u+108*n*h),p=m*u,f=m*h,b=(460*l+451*p+288*f)/1403,g=(460*l-891*p-261*f)/1403,k=(460*l-220*p-6300*f)/1403,D=Math.max(0,27.13*Math.abs(b)/(400-Math.abs(b))),d=H(b)*(100/t.fl)*Math.pow(D,1/.42),M=Math.max(0,27.13*Math.abs(g)/(400-Math.abs(g))),A=H(g)*(100/t.fl)*Math.pow(M,1/.42),w=Math.max(0,27.13*Math.abs(k)/(400-Math.abs(k))),R=H(k)*(100/t.fl)*Math.pow(w,1/.42),P=d/t.rgbD[0],I=A/t.rgbD[1],B=R/t.rgbD[2],T=1.86206786*P-1.01125463*I+.14918677*B,V=.38752654*P+.62144744*I-.00897398*B,Y=-.0158415*P-.03412294*I+1.04996444*B;return[T,V,Y]}}/**
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
 */class C{static sanitizeRadians(t){return(t+Math.PI*8)%(Math.PI*2)}static trueDelinearized(t){const r=t/100;let n=0;return r<=.0031308?n=r*12.92:n=1.055*Math.pow(r,1/2.4)-.055,n*255}static chromaticAdaptation(t){const r=Math.pow(Math.abs(t),.42);return H(t)*400*r/(r+27.13)}static hueOf(t){const r=Dt(t,C.SCALED_DISCOUNT_FROM_LINRGB),n=C.chromaticAdaptation(r[0]),a=C.chromaticAdaptation(r[1]),s=C.chromaticAdaptation(r[2]),o=(11*n+-12*a+s)/11,i=(n+a-2*s)/9;return Math.atan2(i,o)}static areInCyclicOrder(t,r,n){const a=C.sanitizeRadians(r-t),s=C.sanitizeRadians(n-t);return a<s}static intercept(t,r,n){return(r-t)/(n-t)}static lerpPoint(t,r,n){return[t[0]+(n[0]-t[0])*r,t[1]+(n[1]-t[1])*r,t[2]+(n[2]-t[2])*r]}static setCoordinate(t,r,n,a){const s=C.intercept(t[a],r,n[a]);return C.lerpPoint(t,s,n)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,r){const n=C.Y_FROM_LINRGB[0],a=C.Y_FROM_LINRGB[1],s=C.Y_FROM_LINRGB[2],o=r%4<=1?0:100,i=r%2===0?0:100;if(r<4){const l=o,h=i,u=(t-l*a-h*s)/n;return C.isBounded(u)?[u,l,h]:[-1,-1,-1]}else if(r<8){const l=o,h=i,u=(t-h*n-l*s)/a;return C.isBounded(u)?[h,u,l]:[-1,-1,-1]}else{const l=o,h=i,u=(t-l*n-h*a)/s;return C.isBounded(u)?[l,h,u]:[-1,-1,-1]}}static bisectToSegment(t,r){let n=[-1,-1,-1],a=n,s=0,o=0,i=!1,l=!0;for(let h=0;h<12;h++){const u=C.nthVertex(t,h);if(u[0]<0)continue;const m=C.hueOf(u);if(!i){n=u,a=u,s=m,o=m,i=!0;continue}(l||C.areInCyclicOrder(s,m,o))&&(l=!1,C.areInCyclicOrder(s,r,m)?(a=u,o=m):(n=u,s=m))}return[n,a]}static midpoint(t,r){return[(t[0]+r[0])/2,(t[1]+r[1])/2,(t[2]+r[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,r){const n=C.bisectToSegment(t,r);let a=n[0],s=C.hueOf(a),o=n[1];for(let i=0;i<3;i++)if(a[i]!==o[i]){let l=-1,h=255;a[i]<o[i]?(l=C.criticalPlaneBelow(C.trueDelinearized(a[i])),h=C.criticalPlaneAbove(C.trueDelinearized(o[i]))):(l=C.criticalPlaneAbove(C.trueDelinearized(a[i])),h=C.criticalPlaneBelow(C.trueDelinearized(o[i])));for(let u=0;u<8&&!(Math.abs(h-l)<=1);u++){const m=Math.floor((l+h)/2),p=C.CRITICAL_PLANES[m],f=C.setCoordinate(a,p,o,i),b=C.hueOf(f);C.areInCyclicOrder(s,r,b)?(o=f,h=m):(a=f,s=b,l=m)}}return C.midpoint(a,o)}static inverseChromaticAdaptation(t){const r=Math.abs(t),n=Math.max(0,27.13*r/(400-r));return H(t)*Math.pow(n,1/.42)}static findResultByJ(t,r,n){let a=Math.sqrt(n)*11;const s=J.DEFAULT,o=1/Math.pow(1.64-Math.pow(.29,s.n),.73),l=.25*(Math.cos(t+2)+3.8)*(5e4/13)*s.nc*s.ncb,h=Math.sin(t),u=Math.cos(t);for(let m=0;m<5;m++){const p=a/100,f=r===0||a===0?0:r/Math.sqrt(p),b=Math.pow(f*o,1/.9),k=s.aw*Math.pow(p,1/s.c/s.z)/s.nbb,D=23*(k+.305)*b/(23*l+11*b*u+108*b*h),d=D*u,M=D*h,A=(460*k+451*d+288*M)/1403,w=(460*k-891*d-261*M)/1403,R=(460*k-220*d-6300*M)/1403,P=C.inverseChromaticAdaptation(A),I=C.inverseChromaticAdaptation(w),B=C.inverseChromaticAdaptation(R),T=Dt([P,I,B],C.LINRGB_FROM_SCALED_DISCOUNT);if(T[0]<0||T[1]<0||T[2]<0)return 0;const V=C.Y_FROM_LINRGB[0],Y=C.Y_FROM_LINRGB[1],v=C.Y_FROM_LINRGB[2],_=V*T[0]+Y*T[1]+v*T[2];if(_<=0)return 0;if(m===4||Math.abs(_-n)<.002)return T[0]>100.01||T[1]>100.01||T[2]>100.01?0:Nt(T);a=a-(_-n)*a/(2*_)}return 0}static solveToInt(t,r,n){if(r<1e-4||n<1e-4||n>99.9999)return fe(n);t=Bt(t);const a=t/180*Math.PI,s=Q(n),o=C.findResultByJ(a,r,s);if(o!==0)return o;const i=C.bisectToLimit(s,a);return Nt(i)}static solveToCam(t,r,n){return N.fromInt(C.solveToInt(t,r,n))}}C.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];C.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];C.Y_FROM_LINRGB=[.2126,.7152,.0722];C.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
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
 */class L{static from(t,r,n){return new L(C.solveToInt(t,r,n))}static fromInt(t){return new L(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(C.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(C.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(C.solveToInt(this.internalHue,this.internalChroma,t))}constructor(t){this.argb=t;const r=N.fromInt(t);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=At(t),this.argb=t}setInternalState(t){const r=N.fromInt(t);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=At(t),this.argb=t}inViewingConditions(t){const n=N.fromInt(this.toInt()).xyzInViewingConditions(t),a=N.fromXyzInViewingConditions(n[0],n[1],n[2],J.make());return L.from(a.hue,a.chroma,Tt(n[1]))}}/**
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
 */class Ft{static harmonize(t,r){const n=L.fromInt(t),a=L.fromInt(r),s=Gt(n.hue,a.hue),o=Math.min(s*.5,15),i=Bt(n.hue+o*se(n.hue,a.hue));return L.from(i,n.chroma,n.tone).toInt()}static hctHue(t,r,n){const a=Ft.cam16Ucs(t,r,n),s=N.fromInt(a),o=N.fromInt(t);return L.from(s.hue,o.chroma,At(t)).toInt()}static cam16Ucs(t,r,n){const a=N.fromInt(t),s=N.fromInt(r),o=a.jstar,i=a.astar,l=a.bstar,h=s.jstar,u=s.astar,m=s.bstar,p=o+(h-o)*n,f=i+(u-i)*n,b=l+(m-l)*n;return N.fromUcs(p,f,b).toInt()}}/**
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
 */class z{static ratioOfTones(t,r){return t=dt(0,100,t),r=dt(0,100,r),z.ratioOfYs(Q(t),Q(r))}static ratioOfYs(t,r){const n=t>r?t:r,a=n===r?t:r;return(n+5)/(a+5)}static lighter(t,r){if(t<0||t>100)return-1;const n=Q(t),a=r*(n+5)-5,s=z.ratioOfYs(a,n),o=Math.abs(s-r);if(s<r&&o>.04)return-1;const i=Tt(a)+.4;return i<0||i>100?-1:i}static darker(t,r){if(t<0||t>100)return-1;const n=Q(t),a=(n+5)/r-5,s=z.ratioOfYs(n,a),o=Math.abs(s-r);if(s<r&&o>.04)return-1;const i=Tt(a)-.4;return i<0||i>100?-1:i}static lighterUnsafe(t,r){const n=z.lighter(t,r);return n<0?100:n}static darkerUnsafe(t,r){const n=z.darker(t,r);return n<0?0:n}}/**
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
 */class Et{static isDisliked(t){const r=Math.round(t.hue)>=90&&Math.round(t.hue)<=111,n=Math.round(t.chroma)>16,a=Math.round(t.tone)<65;return r&&n&&a}static fixIfDisliked(t){return Et.isDisliked(t)?L.from(t.hue,t.chroma,70):t}}/**
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
 */class y{static fromPalette(t){return new y(t.name??"",t.palette,t.tone,t.isBackground??!1,t.background,t.secondBackground,t.contrastCurve,t.toneDeltaPair)}constructor(t,r,n,a,s,o,i,l){if(this.name=t,this.palette=r,this.tone=n,this.isBackground=a,this.background=s,this.secondBackground=o,this.contrastCurve=i,this.toneDeltaPair=l,this.hctCache=new Map,!s&&o)throw new Error(`Color ${t} has secondBackgrounddefined, but background is not defined.`);if(!s&&i)throw new Error(`Color ${t} has contrastCurvedefined, but background is not defined.`);if(s&&!i)throw new Error(`Color ${t} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(t){return this.getHct(t).toInt()}getHct(t){const r=this.hctCache.get(t);if(r!=null)return r;const n=this.getTone(t),a=this.palette(t).getHct(n);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(t,a),a}getTone(t){const r=t.contrastLevel<0;if(this.toneDeltaPair){const n=this.toneDeltaPair(t),a=n.roleA,s=n.roleB,o=n.delta,i=n.polarity,l=n.stayTogether,u=this.background(t).getTone(t),m=i==="nearer"||i==="lighter"&&!t.isDark||i==="darker"&&t.isDark,p=m?a:s,f=m?s:a,b=this.name===p.name,g=t.isDark?1:-1,k=p.contrastCurve.get(t.contrastLevel),D=f.contrastCurve.get(t.contrastLevel),d=p.tone(t);let M=z.ratioOfTones(u,d)>=k?d:y.foregroundTone(u,k);const A=f.tone(t);let w=z.ratioOfTones(u,A)>=D?A:y.foregroundTone(u,D);return r&&(M=y.foregroundTone(u,k),w=y.foregroundTone(u,D)),(w-M)*g>=o||(w=dt(0,100,M+o*g),(w-M)*g>=o||(M=dt(0,100,w-o*g))),50<=M&&M<60?g>0?(M=60,w=Math.max(w,M+o*g)):(M=49,w=Math.min(w,M+o*g)):50<=w&&w<60&&(l?g>0?(M=60,w=Math.max(w,M+o*g)):(M=49,w=Math.min(w,M+o*g)):g>0?w=60:w=49),b?M:w}else{let n=this.tone(t);if(this.background==null)return n;const a=this.background(t).getTone(t),s=this.contrastCurve.get(t.contrastLevel);if(z.ratioOfTones(a,n)>=s||(n=y.foregroundTone(a,s)),r&&(n=y.foregroundTone(a,s)),this.isBackground&&50<=n&&n<60&&(z.ratioOfTones(49,a)>=s?n=49:n=60),this.secondBackground){const[o,i]=[this.background,this.secondBackground],[l,h]=[o(t).getTone(t),i(t).getTone(t)],[u,m]=[Math.max(l,h),Math.min(l,h)];if(z.ratioOfTones(u,n)>=s&&z.ratioOfTones(m,n)>=s)return n;const p=z.lighter(u,s),f=z.darker(m,s),b=[];return p!==-1&&b.push(p),f!==-1&&b.push(f),y.tonePrefersLightForeground(l)||y.tonePrefersLightForeground(h)?p<0?100:p:b.length===1?b[0]:f<0?0:f}return n}}static foregroundTone(t,r){const n=z.lighterUnsafe(t,r),a=z.darkerUnsafe(t,r),s=z.ratioOfTones(n,t),o=z.ratioOfTones(a,t);if(y.tonePrefersLightForeground(t)){const l=Math.abs(s-o)<.1&&s<r&&o<r;return s>=r||s>=o||l?n:a}else return o>=r||o>=s?a:n}static tonePrefersLightForeground(t){return Math.round(t)<60}static toneAllowsLightForeground(t){return Math.round(t)<=49}static enableLightForeground(t){return y.tonePrefersLightForeground(t)&&!y.toneAllowsLightForeground(t)?49:t}}/**
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
 */class q{static fromInt(t){const r=L.fromInt(t);return q.fromHct(r)}static fromHct(t){return new q(t.hue,t.chroma,t)}static fromHueAndChroma(t,r){const n=new de(t,r).create();return new q(t,r,n)}constructor(t,r,n){this.hue=t,this.chroma=r,this.keyColor=n,this.cache=new Map}tone(t){let r=this.cache.get(t);return r===void 0&&(r=L.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,r)),r}getHct(t){return L.fromInt(this.tone(t))}}class de{constructor(t,r){this.hue=t,this.requestedChroma=r,this.chromaCache=new Map,this.maxChromaValue=200}create(){let a=0,s=100;for(;a<s;){const o=Math.floor((a+s)/2),i=this.maxChroma(o)<this.maxChroma(o+1);if(this.maxChroma(o)>=this.requestedChroma-.01)if(Math.abs(a-50)<Math.abs(s-50))s=o;else{if(a===o)return L.from(this.hue,this.requestedChroma,a);a=o}else i?a=o+1:s=o}return L.from(this.hue,this.requestedChroma,a)}maxChroma(t){if(this.chromaCache.has(t))return this.chromaCache.get(t);const r=L.from(this.hue,this.maxChromaValue,t).chroma;return this.chromaCache.set(t,r),r}}/**
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
 */class x{constructor(t,r,n,a){this.low=t,this.normal=r,this.medium=n,this.high=a}get(t){return t<=-1?this.low:t<0?at(this.low,this.normal,(t- -1)/1):t<.5?at(this.normal,this.medium,(t-0)/.5):t<1?at(this.medium,this.high,(t-.5)/.5):this.high}}/**
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
 */class j{constructor(t,r,n,a,s){this.roleA=t,this.roleB=r,this.delta=n,this.polarity=a,this.stayTogether=s}}/**
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
 */var st;(function(e){e[e.MONOCHROME=0]="MONOCHROME",e[e.NEUTRAL=1]="NEUTRAL",e[e.TONAL_SPOT=2]="TONAL_SPOT",e[e.VIBRANT=3]="VIBRANT",e[e.EXPRESSIVE=4]="EXPRESSIVE",e[e.FIDELITY=5]="FIDELITY",e[e.CONTENT=6]="CONTENT",e[e.RAINBOW=7]="RAINBOW",e[e.FRUIT_SALAD=8]="FRUIT_SALAD"})(st||(st={}));/**
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
 */function rt(e){return e.variant===st.FIDELITY||e.variant===st.CONTENT}function F(e){return e.variant===st.MONOCHROME}function ge(e,t,r,n){let a=r,s=L.from(e,t,r);if(s.chroma<t){let o=s.chroma;for(;s.chroma<t;){a+=n?-1:1;const i=L.from(e,t,a);if(o>i.chroma||Math.abs(i.chroma-t)<.4)break;const l=Math.abs(i.chroma-t),h=Math.abs(s.chroma-t);l<h&&(s=i),o=Math.max(o,i.chroma)}}return a}class c{static highestSurface(t){return t.isDark?c.surfaceBright:c.surfaceDim}}c.contentAccentToneDelta=15;c.primaryPaletteKeyColor=y.fromPalette({name:"primary_palette_key_color",palette:e=>e.primaryPalette,tone:e=>e.primaryPalette.keyColor.tone});c.secondaryPaletteKeyColor=y.fromPalette({name:"secondary_palette_key_color",palette:e=>e.secondaryPalette,tone:e=>e.secondaryPalette.keyColor.tone});c.tertiaryPaletteKeyColor=y.fromPalette({name:"tertiary_palette_key_color",palette:e=>e.tertiaryPalette,tone:e=>e.tertiaryPalette.keyColor.tone});c.neutralPaletteKeyColor=y.fromPalette({name:"neutral_palette_key_color",palette:e=>e.neutralPalette,tone:e=>e.neutralPalette.keyColor.tone});c.neutralVariantPaletteKeyColor=y.fromPalette({name:"neutral_variant_palette_key_color",palette:e=>e.neutralVariantPalette,tone:e=>e.neutralVariantPalette.keyColor.tone});c.background=y.fromPalette({name:"background",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});c.onBackground=y.fromPalette({name:"on_background",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>c.background,contrastCurve:new x(3,3,4.5,7)});c.surface=y.fromPalette({name:"surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});c.surfaceDim=y.fromPalette({name:"surface_dim",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:new x(87,87,80,75).get(e.contrastLevel),isBackground:!0});c.surfaceBright=y.fromPalette({name:"surface_bright",palette:e=>e.neutralPalette,tone:e=>e.isDark?new x(24,24,29,34).get(e.contrastLevel):98,isBackground:!0});c.surfaceContainerLowest=y.fromPalette({name:"surface_container_lowest",palette:e=>e.neutralPalette,tone:e=>e.isDark?new x(4,4,2,0).get(e.contrastLevel):100,isBackground:!0});c.surfaceContainerLow=y.fromPalette({name:"surface_container_low",palette:e=>e.neutralPalette,tone:e=>e.isDark?new x(10,10,11,12).get(e.contrastLevel):new x(96,96,96,95).get(e.contrastLevel),isBackground:!0});c.surfaceContainer=y.fromPalette({name:"surface_container",palette:e=>e.neutralPalette,tone:e=>e.isDark?new x(12,12,16,20).get(e.contrastLevel):new x(94,94,92,90).get(e.contrastLevel),isBackground:!0});c.surfaceContainerHigh=y.fromPalette({name:"surface_container_high",palette:e=>e.neutralPalette,tone:e=>e.isDark?new x(17,17,21,25).get(e.contrastLevel):new x(92,92,88,85).get(e.contrastLevel),isBackground:!0});c.surfaceContainerHighest=y.fromPalette({name:"surface_container_highest",palette:e=>e.neutralPalette,tone:e=>e.isDark?new x(22,22,26,30).get(e.contrastLevel):new x(90,90,84,80).get(e.contrastLevel),isBackground:!0});c.onSurface=y.fromPalette({name:"on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>c.highestSurface(e),contrastCurve:new x(4.5,7,11,21)});c.surfaceVariant=y.fromPalette({name:"surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:90,isBackground:!0});c.onSurfaceVariant=y.fromPalette({name:"on_surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?80:30,background:e=>c.highestSurface(e),contrastCurve:new x(3,4.5,7,11)});c.inverseSurface=y.fromPalette({name:"inverse_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:20});c.inverseOnSurface=y.fromPalette({name:"inverse_on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?20:95,background:e=>c.inverseSurface,contrastCurve:new x(4.5,7,11,21)});c.outline=y.fromPalette({name:"outline",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?60:50,background:e=>c.highestSurface(e),contrastCurve:new x(1.5,3,4.5,7)});c.outlineVariant=y.fromPalette({name:"outline_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:80,background:e=>c.highestSurface(e),contrastCurve:new x(1,1,3,4.5)});c.shadow=y.fromPalette({name:"shadow",palette:e=>e.neutralPalette,tone:e=>0});c.scrim=y.fromPalette({name:"scrim",palette:e=>e.neutralPalette,tone:e=>0});c.surfaceTint=y.fromPalette({name:"surface_tint",palette:e=>e.primaryPalette,tone:e=>e.isDark?80:40,isBackground:!0});c.primary=y.fromPalette({name:"primary",palette:e=>e.primaryPalette,tone:e=>F(e)?e.isDark?100:0:e.isDark?80:40,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new x(3,4.5,7,7),toneDeltaPair:e=>new j(c.primaryContainer,c.primary,10,"nearer",!1)});c.onPrimary=y.fromPalette({name:"on_primary",palette:e=>e.primaryPalette,tone:e=>F(e)?e.isDark?10:90:e.isDark?20:100,background:e=>c.primary,contrastCurve:new x(4.5,7,11,21)});c.primaryContainer=y.fromPalette({name:"primary_container",palette:e=>e.primaryPalette,tone:e=>rt(e)?e.sourceColorHct.tone:F(e)?e.isDark?85:25:e.isDark?30:90,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new x(1,1,3,4.5),toneDeltaPair:e=>new j(c.primaryContainer,c.primary,10,"nearer",!1)});c.onPrimaryContainer=y.fromPalette({name:"on_primary_container",palette:e=>e.primaryPalette,tone:e=>rt(e)?y.foregroundTone(c.primaryContainer.tone(e),4.5):F(e)?e.isDark?0:100:e.isDark?90:30,background:e=>c.primaryContainer,contrastCurve:new x(3,4.5,7,11)});c.inversePrimary=y.fromPalette({name:"inverse_primary",palette:e=>e.primaryPalette,tone:e=>e.isDark?40:80,background:e=>c.inverseSurface,contrastCurve:new x(3,4.5,7,7)});c.secondary=y.fromPalette({name:"secondary",palette:e=>e.secondaryPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new x(3,4.5,7,7),toneDeltaPair:e=>new j(c.secondaryContainer,c.secondary,10,"nearer",!1)});c.onSecondary=y.fromPalette({name:"on_secondary",palette:e=>e.secondaryPalette,tone:e=>F(e)?e.isDark?10:100:e.isDark?20:100,background:e=>c.secondary,contrastCurve:new x(4.5,7,11,21)});c.secondaryContainer=y.fromPalette({name:"secondary_container",palette:e=>e.secondaryPalette,tone:e=>{const t=e.isDark?30:90;return F(e)?e.isDark?30:85:rt(e)?ge(e.secondaryPalette.hue,e.secondaryPalette.chroma,t,!e.isDark):t},isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new x(1,1,3,4.5),toneDeltaPair:e=>new j(c.secondaryContainer,c.secondary,10,"nearer",!1)});c.onSecondaryContainer=y.fromPalette({name:"on_secondary_container",palette:e=>e.secondaryPalette,tone:e=>F(e)?e.isDark?90:10:rt(e)?y.foregroundTone(c.secondaryContainer.tone(e),4.5):e.isDark?90:30,background:e=>c.secondaryContainer,contrastCurve:new x(3,4.5,7,11)});c.tertiary=y.fromPalette({name:"tertiary",palette:e=>e.tertiaryPalette,tone:e=>F(e)?e.isDark?90:25:e.isDark?80:40,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new x(3,4.5,7,7),toneDeltaPair:e=>new j(c.tertiaryContainer,c.tertiary,10,"nearer",!1)});c.onTertiary=y.fromPalette({name:"on_tertiary",palette:e=>e.tertiaryPalette,tone:e=>F(e)?e.isDark?10:90:e.isDark?20:100,background:e=>c.tertiary,contrastCurve:new x(4.5,7,11,21)});c.tertiaryContainer=y.fromPalette({name:"tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>{if(F(e))return e.isDark?60:49;if(!rt(e))return e.isDark?30:90;const t=e.tertiaryPalette.getHct(e.sourceColorHct.tone);return Et.fixIfDisliked(t).tone},isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new x(1,1,3,4.5),toneDeltaPair:e=>new j(c.tertiaryContainer,c.tertiary,10,"nearer",!1)});c.onTertiaryContainer=y.fromPalette({name:"on_tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>F(e)?e.isDark?0:100:rt(e)?y.foregroundTone(c.tertiaryContainer.tone(e),4.5):e.isDark?90:30,background:e=>c.tertiaryContainer,contrastCurve:new x(3,4.5,7,11)});c.error=y.fromPalette({name:"error",palette:e=>e.errorPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new x(3,4.5,7,7),toneDeltaPair:e=>new j(c.errorContainer,c.error,10,"nearer",!1)});c.onError=y.fromPalette({name:"on_error",palette:e=>e.errorPalette,tone:e=>e.isDark?20:100,background:e=>c.error,contrastCurve:new x(4.5,7,11,21)});c.errorContainer=y.fromPalette({name:"error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?30:90,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new x(1,1,3,4.5),toneDeltaPair:e=>new j(c.errorContainer,c.error,10,"nearer",!1)});c.onErrorContainer=y.fromPalette({name:"on_error_container",palette:e=>e.errorPalette,tone:e=>F(e)?e.isDark?90:10:e.isDark?90:30,background:e=>c.errorContainer,contrastCurve:new x(3,4.5,7,11)});c.primaryFixed=y.fromPalette({name:"primary_fixed",palette:e=>e.primaryPalette,tone:e=>F(e)?40:90,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new x(1,1,3,4.5),toneDeltaPair:e=>new j(c.primaryFixed,c.primaryFixedDim,10,"lighter",!0)});c.primaryFixedDim=y.fromPalette({name:"primary_fixed_dim",palette:e=>e.primaryPalette,tone:e=>F(e)?30:80,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new x(1,1,3,4.5),toneDeltaPair:e=>new j(c.primaryFixed,c.primaryFixedDim,10,"lighter",!0)});c.onPrimaryFixed=y.fromPalette({name:"on_primary_fixed",palette:e=>e.primaryPalette,tone:e=>F(e)?100:10,background:e=>c.primaryFixedDim,secondBackground:e=>c.primaryFixed,contrastCurve:new x(4.5,7,11,21)});c.onPrimaryFixedVariant=y.fromPalette({name:"on_primary_fixed_variant",palette:e=>e.primaryPalette,tone:e=>F(e)?90:30,background:e=>c.primaryFixedDim,secondBackground:e=>c.primaryFixed,contrastCurve:new x(3,4.5,7,11)});c.secondaryFixed=y.fromPalette({name:"secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>F(e)?80:90,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new x(1,1,3,4.5),toneDeltaPair:e=>new j(c.secondaryFixed,c.secondaryFixedDim,10,"lighter",!0)});c.secondaryFixedDim=y.fromPalette({name:"secondary_fixed_dim",palette:e=>e.secondaryPalette,tone:e=>F(e)?70:80,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new x(1,1,3,4.5),toneDeltaPair:e=>new j(c.secondaryFixed,c.secondaryFixedDim,10,"lighter",!0)});c.onSecondaryFixed=y.fromPalette({name:"on_secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>10,background:e=>c.secondaryFixedDim,secondBackground:e=>c.secondaryFixed,contrastCurve:new x(4.5,7,11,21)});c.onSecondaryFixedVariant=y.fromPalette({name:"on_secondary_fixed_variant",palette:e=>e.secondaryPalette,tone:e=>F(e)?25:30,background:e=>c.secondaryFixedDim,secondBackground:e=>c.secondaryFixed,contrastCurve:new x(3,4.5,7,11)});c.tertiaryFixed=y.fromPalette({name:"tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>F(e)?40:90,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new x(1,1,3,4.5),toneDeltaPair:e=>new j(c.tertiaryFixed,c.tertiaryFixedDim,10,"lighter",!0)});c.tertiaryFixedDim=y.fromPalette({name:"tertiary_fixed_dim",palette:e=>e.tertiaryPalette,tone:e=>F(e)?30:80,isBackground:!0,background:e=>c.highestSurface(e),contrastCurve:new x(1,1,3,4.5),toneDeltaPair:e=>new j(c.tertiaryFixed,c.tertiaryFixedDim,10,"lighter",!0)});c.onTertiaryFixed=y.fromPalette({name:"on_tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>F(e)?100:10,background:e=>c.tertiaryFixedDim,secondBackground:e=>c.tertiaryFixed,contrastCurve:new x(4.5,7,11,21)});c.onTertiaryFixedVariant=y.fromPalette({name:"on_tertiary_fixed_variant",palette:e=>e.tertiaryPalette,tone:e=>F(e)?90:30,background:e=>c.tertiaryFixedDim,secondBackground:e=>c.tertiaryFixed,contrastCurve:new x(3,4.5,7,11)});/**
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
 */class S{static of(t){return new S(t,!1)}static contentOf(t){return new S(t,!0)}static fromColors(t){return S.createPaletteFromColors(!1,t)}static contentFromColors(t){return S.createPaletteFromColors(!0,t)}static createPaletteFromColors(t,r){const n=new S(r.primary,t);if(r.secondary){const a=new S(r.secondary,t);n.a2=a.a1}if(r.tertiary){const a=new S(r.tertiary,t);n.a3=a.a1}if(r.error){const a=new S(r.error,t);n.error=a.a1}if(r.neutral){const a=new S(r.neutral,t);n.n1=a.n1}if(r.neutralVariant){const a=new S(r.neutralVariant,t);n.n2=a.n2}return n}constructor(t,r){const n=L.fromInt(t),a=n.hue,s=n.chroma;r?(this.a1=q.fromHueAndChroma(a,s),this.a2=q.fromHueAndChroma(a,s/3),this.a3=q.fromHueAndChroma(a+60,s/2),this.n1=q.fromHueAndChroma(a,Math.min(s/12,4)),this.n2=q.fromHueAndChroma(a,Math.min(s/6,8))):(this.a1=q.fromHueAndChroma(a,Math.max(48,s)),this.a2=q.fromHueAndChroma(a,16),this.a3=q.fromHueAndChroma(a+60,24),this.n1=q.fromHueAndChroma(a,4),this.n2=q.fromHueAndChroma(a,8)),this.error=q.fromHueAndChroma(25,84)}}/**
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
 */class pe{fromInt(t){return he(t)}toInt(t){return ue(t[0],t[1],t[2])}distance(t,r){const n=t[0]-r[0],a=t[1]-r[1],s=t[2]-r[2];return n*n+a*a+s*s}}/**
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
 */const ye=10,be=3;class Me{static quantize(t,r,n){const a=new Map,s=new Array,o=new Array,i=new pe;let l=0;for(let d=0;d<t.length;d++){const M=t[d],A=a.get(M);A===void 0?(l++,s.push(i.fromInt(M)),o.push(M),a.set(M,1)):a.set(M,A+1)}const h=new Array;for(let d=0;d<l;d++){const M=o[d],A=a.get(M);A!==void 0&&(h[d]=A)}let u=Math.min(n,l);r.length>0&&(u=Math.min(u,r.length));const m=new Array;for(let d=0;d<r.length;d++)m.push(i.fromInt(r[d]));const p=u-m.length;if(r.length===0&&p>0)for(let d=0;d<p;d++){const M=Math.random()*100,A=Math.random()*201+-100,w=Math.random()*201+-100;m.push(new Array(M,A,w))}const f=new Array;for(let d=0;d<l;d++)f.push(Math.floor(Math.random()*u));const b=new Array;for(let d=0;d<u;d++){b.push(new Array);for(let M=0;M<u;M++)b[d].push(0)}const g=new Array;for(let d=0;d<u;d++){g.push(new Array);for(let M=0;M<u;M++)g[d].push(new Pe)}const k=new Array;for(let d=0;d<u;d++)k.push(0);for(let d=0;d<ye;d++){for(let P=0;P<u;P++){for(let I=P+1;I<u;I++){const B=i.distance(m[P],m[I]);g[I][P].distance=B,g[I][P].index=P,g[P][I].distance=B,g[P][I].index=I}g[P].sort();for(let I=0;I<u;I++)b[P][I]=g[P][I].index}let M=0;for(let P=0;P<l;P++){const I=s[P],B=f[P],T=m[B],V=i.distance(I,T);let Y=V,v=-1;for(let _=0;_<u;_++){if(g[B][_].distance>=4*V)continue;const Z=i.distance(I,m[_]);Z<Y&&(Y=Z,v=_)}v!==-1&&Math.abs(Math.sqrt(Y)-Math.sqrt(V))>be&&(M++,f[P]=v)}if(M===0&&d!==0)break;const A=new Array(u).fill(0),w=new Array(u).fill(0),R=new Array(u).fill(0);for(let P=0;P<u;P++)k[P]=0;for(let P=0;P<l;P++){const I=f[P],B=s[P],T=h[P];k[I]+=T,A[I]+=B[0]*T,w[I]+=B[1]*T,R[I]+=B[2]*T}for(let P=0;P<u;P++){const I=k[P];if(I===0){m[P]=[0,0,0];continue}const B=A[P]/I,T=w[P]/I,V=R[P]/I;m[P]=[B,T,V]}}const D=new Map;for(let d=0;d<u;d++){const M=k[d];if(M===0)continue;const A=i.toInt(m[d]);D.has(A)||D.set(A,M)}return D}}class Pe{constructor(){this.distance=-1,this.index=-1}}/**
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
 */class ke{static quantize(t){const r=new Map;for(let n=0;n<t.length;n++){const a=t[n];ce(a)<255||r.set(a,(r.get(a)??0)+1)}return r}}/**
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
 */const ft=5,W=33,nt=35937,G={RED:"red",GREEN:"green",BLUE:"blue"};class Ce{constructor(t=[],r=[],n=[],a=[],s=[],o=[]){this.weights=t,this.momentsR=r,this.momentsG=n,this.momentsB=a,this.moments=s,this.cubes=o}quantize(t,r){this.constructHistogram(t),this.computeMoments();const n=this.createBoxes(r);return this.createResult(n.resultCount)}constructHistogram(t){this.weights=Array.from({length:nt}).fill(0),this.momentsR=Array.from({length:nt}).fill(0),this.momentsG=Array.from({length:nt}).fill(0),this.momentsB=Array.from({length:nt}).fill(0),this.moments=Array.from({length:nt}).fill(0);const r=ke.quantize(t);for(const[n,a]of r.entries()){const s=pt(n),o=yt(n),i=bt(n),l=8-ft,h=(s>>l)+1,u=(o>>l)+1,m=(i>>l)+1,p=this.getIndex(h,u,m);this.weights[p]=(this.weights[p]??0)+a,this.momentsR[p]+=a*s,this.momentsG[p]+=a*o,this.momentsB[p]+=a*i,this.moments[p]+=a*(s*s+o*o+i*i)}}computeMoments(){for(let t=1;t<W;t++){const r=Array.from({length:W}).fill(0),n=Array.from({length:W}).fill(0),a=Array.from({length:W}).fill(0),s=Array.from({length:W}).fill(0),o=Array.from({length:W}).fill(0);for(let i=1;i<W;i++){let l=0,h=0,u=0,m=0,p=0;for(let f=1;f<W;f++){const b=this.getIndex(t,i,f);l+=this.weights[b],h+=this.momentsR[b],u+=this.momentsG[b],m+=this.momentsB[b],p+=this.moments[b],r[f]+=l,n[f]+=h,a[f]+=u,s[f]+=m,o[f]+=p;const g=this.getIndex(t-1,i,f);this.weights[b]=this.weights[g]+r[f],this.momentsR[b]=this.momentsR[g]+n[f],this.momentsG[b]=this.momentsG[g]+a[f],this.momentsB[b]=this.momentsB[g]+s[f],this.moments[b]=this.moments[g]+o[f]}}}}createBoxes(t){this.cubes=Array.from({length:t}).fill(0).map(()=>new Ie);const r=Array.from({length:t}).fill(0);this.cubes[0].r0=0,this.cubes[0].g0=0,this.cubes[0].b0=0,this.cubes[0].r1=W-1,this.cubes[0].g1=W-1,this.cubes[0].b1=W-1;let n=t,a=0;for(let s=1;s<t;s++){this.cut(this.cubes[a],this.cubes[s])?(r[a]=this.cubes[a].vol>1?this.variance(this.cubes[a]):0,r[s]=this.cubes[s].vol>1?this.variance(this.cubes[s]):0):(r[a]=0,s--),a=0;let o=r[0];for(let i=1;i<=s;i++)r[i]>o&&(o=r[i],a=i);if(o<=0){n=s+1;break}}return new xe(t,n)}createResult(t){const r=[];for(let n=0;n<t;++n){const a=this.cubes[n],s=this.volume(a,this.weights);if(s>0){const o=Math.round(this.volume(a,this.momentsR)/s),i=Math.round(this.volume(a,this.momentsG)/s),l=Math.round(this.volume(a,this.momentsB)/s),h=255<<24|(o&255)<<16|(i&255)<<8|l&255;r.push(h)}}return r}variance(t){const r=this.volume(t,this.momentsR),n=this.volume(t,this.momentsG),a=this.volume(t,this.momentsB),s=this.moments[this.getIndex(t.r1,t.g1,t.b1)]-this.moments[this.getIndex(t.r1,t.g1,t.b0)]-this.moments[this.getIndex(t.r1,t.g0,t.b1)]+this.moments[this.getIndex(t.r1,t.g0,t.b0)]-this.moments[this.getIndex(t.r0,t.g1,t.b1)]+this.moments[this.getIndex(t.r0,t.g1,t.b0)]+this.moments[this.getIndex(t.r0,t.g0,t.b1)]-this.moments[this.getIndex(t.r0,t.g0,t.b0)],o=r*r+n*n+a*a,i=this.volume(t,this.weights);return s-o/i}cut(t,r){const n=this.volume(t,this.momentsR),a=this.volume(t,this.momentsG),s=this.volume(t,this.momentsB),o=this.volume(t,this.weights),i=this.maximize(t,G.RED,t.r0+1,t.r1,n,a,s,o),l=this.maximize(t,G.GREEN,t.g0+1,t.g1,n,a,s,o),h=this.maximize(t,G.BLUE,t.b0+1,t.b1,n,a,s,o);let u;const m=i.maximum,p=l.maximum,f=h.maximum;if(m>=p&&m>=f){if(i.cutLocation<0)return!1;u=G.RED}else p>=m&&p>=f?u=G.GREEN:u=G.BLUE;switch(r.r1=t.r1,r.g1=t.g1,r.b1=t.b1,u){case G.RED:t.r1=i.cutLocation,r.r0=t.r1,r.g0=t.g0,r.b0=t.b0;break;case G.GREEN:t.g1=l.cutLocation,r.r0=t.r0,r.g0=t.g1,r.b0=t.b0;break;case G.BLUE:t.b1=h.cutLocation,r.r0=t.r0,r.g0=t.g0,r.b0=t.b1;break;default:throw new Error("unexpected direction "+u)}return t.vol=(t.r1-t.r0)*(t.g1-t.g0)*(t.b1-t.b0),r.vol=(r.r1-r.r0)*(r.g1-r.g0)*(r.b1-r.b0),!0}maximize(t,r,n,a,s,o,i,l){const h=this.bottom(t,r,this.momentsR),u=this.bottom(t,r,this.momentsG),m=this.bottom(t,r,this.momentsB),p=this.bottom(t,r,this.weights);let f=0,b=-1,g=0,k=0,D=0,d=0;for(let M=n;M<a;M++){if(g=h+this.top(t,r,M,this.momentsR),k=u+this.top(t,r,M,this.momentsG),D=m+this.top(t,r,M,this.momentsB),d=p+this.top(t,r,M,this.weights),d===0)continue;let A=(g*g+k*k+D*D)*1,w=d*1,R=A/w;g=s-g,k=o-k,D=i-D,d=l-d,d!==0&&(A=(g*g+k*k+D*D)*1,w=d*1,R+=A/w,R>f&&(f=R,b=M))}return new we(b,f)}volume(t,r){return r[this.getIndex(t.r1,t.g1,t.b1)]-r[this.getIndex(t.r1,t.g1,t.b0)]-r[this.getIndex(t.r1,t.g0,t.b1)]+r[this.getIndex(t.r1,t.g0,t.b0)]-r[this.getIndex(t.r0,t.g1,t.b1)]+r[this.getIndex(t.r0,t.g1,t.b0)]+r[this.getIndex(t.r0,t.g0,t.b1)]-r[this.getIndex(t.r0,t.g0,t.b0)]}bottom(t,r,n){switch(r){case G.RED:return-n[this.getIndex(t.r0,t.g1,t.b1)]+n[this.getIndex(t.r0,t.g1,t.b0)]+n[this.getIndex(t.r0,t.g0,t.b1)]-n[this.getIndex(t.r0,t.g0,t.b0)];case G.GREEN:return-n[this.getIndex(t.r1,t.g0,t.b1)]+n[this.getIndex(t.r1,t.g0,t.b0)]+n[this.getIndex(t.r0,t.g0,t.b1)]-n[this.getIndex(t.r0,t.g0,t.b0)];case G.BLUE:return-n[this.getIndex(t.r1,t.g1,t.b0)]+n[this.getIndex(t.r1,t.g0,t.b0)]+n[this.getIndex(t.r0,t.g1,t.b0)]-n[this.getIndex(t.r0,t.g0,t.b0)];default:throw new Error("unexpected direction $direction")}}top(t,r,n,a){switch(r){case G.RED:return a[this.getIndex(n,t.g1,t.b1)]-a[this.getIndex(n,t.g1,t.b0)]-a[this.getIndex(n,t.g0,t.b1)]+a[this.getIndex(n,t.g0,t.b0)];case G.GREEN:return a[this.getIndex(t.r1,n,t.b1)]-a[this.getIndex(t.r1,n,t.b0)]-a[this.getIndex(t.r0,n,t.b1)]+a[this.getIndex(t.r0,n,t.b0)];case G.BLUE:return a[this.getIndex(t.r1,t.g1,n)]-a[this.getIndex(t.r1,t.g0,n)]-a[this.getIndex(t.r0,t.g1,n)]+a[this.getIndex(t.r0,t.g0,n)];default:throw new Error("unexpected direction $direction")}}getIndex(t,r,n){return(t<<ft*2)+(t<<ft+1)+t+(r<<ft)+r+n}}class Ie{constructor(t=0,r=0,n=0,a=0,s=0,o=0,i=0){this.r0=t,this.r1=r,this.g0=n,this.g1=a,this.b0=s,this.b1=o,this.vol=i}}class xe{constructor(t,r){this.requestedCount=t,this.resultCount=r}}class we{constructor(t,r){this.cutLocation=t,this.maximum=r}}/**
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
 */class De{static quantize(t,r){const a=new Ce().quantize(t,r);return Me.quantize(t,a,r)}}/**
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
 */class X{get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get outlineVariant(){return this.props.outlineVariant}get shadow(){return this.props.shadow}get scrim(){return this.props.scrim}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(t){return X.lightFromCorePalette(S.of(t))}static dark(t){return X.darkFromCorePalette(S.of(t))}static lightContent(t){return X.lightFromCorePalette(S.contentOf(t))}static darkContent(t){return X.darkFromCorePalette(S.contentOf(t))}static lightFromCorePalette(t){return new X({primary:t.a1.tone(40),onPrimary:t.a1.tone(100),primaryContainer:t.a1.tone(90),onPrimaryContainer:t.a1.tone(10),secondary:t.a2.tone(40),onSecondary:t.a2.tone(100),secondaryContainer:t.a2.tone(90),onSecondaryContainer:t.a2.tone(10),tertiary:t.a3.tone(40),onTertiary:t.a3.tone(100),tertiaryContainer:t.a3.tone(90),onTertiaryContainer:t.a3.tone(10),error:t.error.tone(40),onError:t.error.tone(100),errorContainer:t.error.tone(90),onErrorContainer:t.error.tone(10),background:t.n1.tone(99),onBackground:t.n1.tone(10),surface:t.n1.tone(99),onSurface:t.n1.tone(10),surfaceVariant:t.n2.tone(90),onSurfaceVariant:t.n2.tone(30),outline:t.n2.tone(50),outlineVariant:t.n2.tone(80),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(20),inverseOnSurface:t.n1.tone(95),inversePrimary:t.a1.tone(80)})}static darkFromCorePalette(t){return new X({primary:t.a1.tone(80),onPrimary:t.a1.tone(20),primaryContainer:t.a1.tone(30),onPrimaryContainer:t.a1.tone(90),secondary:t.a2.tone(80),onSecondary:t.a2.tone(20),secondaryContainer:t.a2.tone(30),onSecondaryContainer:t.a2.tone(90),tertiary:t.a3.tone(80),onTertiary:t.a3.tone(20),tertiaryContainer:t.a3.tone(30),onTertiaryContainer:t.a3.tone(90),error:t.error.tone(80),onError:t.error.tone(20),errorContainer:t.error.tone(30),onErrorContainer:t.error.tone(80),background:t.n1.tone(10),onBackground:t.n1.tone(90),surface:t.n1.tone(10),onSurface:t.n1.tone(90),surfaceVariant:t.n2.tone(30),onSurfaceVariant:t.n2.tone(80),outline:t.n2.tone(60),outlineVariant:t.n2.tone(30),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(90),inverseOnSurface:t.n1.tone(20),inversePrimary:t.a1.tone(40)})}constructor(t){this.props=t}toJSON(){return{...this.props}}}/**
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
 */const Ae={desired:4,fallbackColorARGB:4282549748,filter:!0};function Te(e,t){return e.score>t.score?-1:e.score<t.score?1:0}class U{constructor(){}static score(t,r){const{desired:n,fallbackColorARGB:a,filter:s}={...Ae,...r},o=[],i=new Array(360).fill(0);let l=0;for(const[f,b]of t.entries()){const g=L.fromInt(f);o.push(g);const k=Math.floor(g.hue);i[k]+=b,l+=b}const h=new Array(360).fill(0);for(let f=0;f<360;f++){const b=i[f]/l;for(let g=f-14;g<f+16;g++){const k=zt(g);h[k]+=b}}const u=new Array;for(const f of o){const b=zt(Math.round(f.hue)),g=h[b];if(s&&(f.chroma<U.CUTOFF_CHROMA||g<=U.CUTOFF_EXCITED_PROPORTION))continue;const k=g*100*U.WEIGHT_PROPORTION,D=f.chroma<U.TARGET_CHROMA?U.WEIGHT_CHROMA_BELOW:U.WEIGHT_CHROMA_ABOVE,d=(f.chroma-U.TARGET_CHROMA)*D,M=k+d;u.push({hct:f,score:M})}u.sort(Te);const m=[];for(let f=90;f>=15;f--){m.length=0;for(const{hct:b}of u)if(m.find(k=>Gt(b.hue,k.hue)<f)||m.push(b),m.length>=n)break;if(m.length>=n)break}const p=[];m.length===0&&p.push(a);for(const f of m)p.push(f.toInt());return p}}U.TARGET_CHROMA=48;U.WEIGHT_PROPORTION=.7;U.WEIGHT_CHROMA_ABOVE=.3;U.WEIGHT_CHROMA_BELOW=.1;U.CUTOFF_CHROMA=5;U.CUTOFF_EXCITED_PROPORTION=.01;/**
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
 */function Be(e){const t=pt(e),r=yt(e),n=bt(e),a=[t.toString(16),r.toString(16),n.toString(16)];for(const[s,o]of a.entries())o.length===1&&(a[s]="0"+o);return"#"+a.join("")}/**
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
 */async function Re(e){const t=await new Promise((o,i)=>{const l=document.createElement("canvas"),h=l.getContext("2d");if(!h){i(new Error("Could not get canvas context"));return}const u=()=>{l.width=e.width,l.height=e.height,h.drawImage(e,0,0);let p=[0,0,e.width,e.height];const f=e.dataset.area;f&&/^\d+(\s*,\s*\d+){3}$/.test(f)&&(p=f.split(/\s*,\s*/).map(d=>parseInt(d,10)));const[b,g,k,D]=p;o(h.getImageData(b,g,k,D).data)},m=()=>{i(new Error("Image load failed"))};e.complete?u():(e.onload=u,e.onerror=m)}),r=[];for(let o=0;o<t.length;o+=4){const i=t[o],l=t[o+1],h=t[o+2];if(t[o+3]<255)continue;const m=gt(i,l,h);r.push(m)}const n=De.quantize(r,128);return U.score(n)[0]}/**
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
 */function Fe(e,t=[]){const r=S.of(e);return{source:e,schemes:{light:X.light(e),dark:X.dark(e)},palettes:{primary:r.a1,secondary:r.a2,tertiary:r.a3,neutral:r.n1,neutralVariant:r.n2,error:r.error},customColors:t.map(n=>Oe(e,n))}}async function Ee(e,t=[]){const r=await Re(e);return Fe(r,t)}function Oe(e,t){let r=t.value;const n=r,a=e;t.blend&&(r=Ft.harmonize(n,a));const o=S.of(r).a1;return{color:t,value:r,light:{color:o.tone(40),onColor:o.tone(100),colorContainer:o.tone(90),onColorContainer:o.tone(10)},dark:{color:o.tone(80),onColor:o.tone(20),colorContainer:o.tone(30),onColorContainer:o.tone(90)}}}const Le={__name:"UtilitiesView",setup(e){const t=Jt("primary"),r=["https://picsum.photos/id/2/320/128","https://picsum.photos/id/18/320/128","https://picsum.photos/id/56/320/128","https://picsum.photos/id/78/320/128","https://picsum.photos/id/113/320/128"];St(()=>{console.log("UtilitiesView ::: onMounted")});function n(s,o){console.log("UtilitiesView ::: imageButtonClickHandler"),console.log(" - index: ",s),console.log(" - pic: ",o);const i="img-card-"+s;console.log(" - cardId: ",i);const l=document.getElementById(i);console.log(" - card: ",l);const h=l.querySelector("img");h.setAttribute("crossOrigin",""),console.log(" - img: ",s,h),a(h)}async function a(s){console.log("UtilitiesView ::: getThemeFromImage");const o=await Ee(s);console.log(" - theme from image: ",o);const i=Be(o.source);t.value=i;const l=o.palettes.primary.keyColor.argb;console.log(" - primaryRGB: ",l)}return(s,o)=>(wt(),Vt(Wt,{class:"fill-height px-12 mx-auto","grid-list-xs":""},{default:O(()=>[E(It,{class:"align-sm-stretch"},{default:O(()=>[(wt(),Xt($t,null,Kt(r,(i,l)=>E(ut,{key:l},{default:O(()=>[E(ht,{id:`img-card-${l}`,color:"white",image:i,density:"compact",variant:"outlined"},{default:O(()=>[E(Qt,{style:{"text-shadow":"black 0px 0px 6px",background:"rgb(255 255 255 / 12%)"}},{default:O(()=>[E(Zt,null,{default:O(()=>o[0]||(o[0]=[et("Color from image")])),_:1}),E(te,null,{default:O(()=>[et("Image "+ee(l+1),1)]),_:2},1024)]),_:2},1024),E(re,null,{default:O(()=>[E(ne),E(ae,{onClick:h=>n(l,i)},{default:O(()=>o[1]||(o[1]=[et("Get Color")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["id","image"])]),_:2},1024)),64))]),_:1}),E(It,null,{default:O(()=>[E(ut,null,{default:O(()=>[E(ht,{title:"Utilities",subtitle:"Primary",color:t.value},{default:O(()=>[E(xt,null,{default:O(()=>o[2]||(o[2]=[et(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum pariatur animi obcaecati dolor labore quos nobis, ea voluptatem officiis quibusdam molestias odio aliquam eligendi sapiente porro eveniet blanditiis optio et? ")])),_:1})]),_:1},8,["color"])]),_:1}),E(ut,null,{default:O(()=>[E(ht,{title:"Utilities",subtitle:"Secondary",color:"secondary"},{default:O(()=>[E(xt,null,{default:O(()=>o[3]||(o[3]=[et(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum pariatur animi obcaecati dolor labore quos nobis, ea voluptatem officiis quibusdam molestias odio aliquam eligendi sapiente porro eveniet blanditiis optio et? ")])),_:1})]),_:1})]),_:1}),E(ut,null,{default:O(()=>[E(ht,{title:"Utilities",subtitle:"Surface",color:"surface"},{default:O(()=>[E(xt,null,{default:O(()=>o[4]||(o[4]=[et(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum pariatur animi obcaecati dolor labore quos nobis, ea voluptatem officiis quibusdam molestias odio aliquam eligendi sapiente porro eveniet blanditiis optio et? ")])),_:1})]),_:1})]),_:1})]),_:1}),E(It)]),_:1}))}},Ne={__name:"utilities",setup(e){return St(()=>{console.log("PAGES ::: /builder/utilities ::: onMounted")}),(t,r)=>{const n=Le;return wt(),Vt(n)}}};export{Ne as default};
