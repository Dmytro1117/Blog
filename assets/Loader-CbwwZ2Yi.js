import{R as ae,m as it,n as yt,r as Ae,j as Ye}from"./index-D4tg8eQs.js";import{i as Me,n as bt}from"./emotion-styled.browser.esm-BBCkfJeL.js";var _t=function(e){return{display:e?"flex":"none"}},wt="#4fa94d",Ot={"aria-busy":!0,role:"status"};function kt(e){function n(l,c,f,p,a){for(var j=0,s=0,E=0,A=0,C,g,z=0,Y=0,_,G=_=C=0,S=0,D=0,pe=0,L=0,we=f.length,ge=we-1,Q,h="",N="",xe="",Pe="",ne;S<we;){if(g=f.charCodeAt(S),S===ge&&s+A+E+j!==0&&(s!==0&&(g=s===47?10:47),A=E=j=0,we++,ge++),s+A+E+j===0){if(S===ge&&(0<D&&(h=h.replace(I,"")),0<h.trim().length)){switch(g){case 32:case 9:case 59:case 13:case 10:break;default:h+=f.charAt(S)}g=59}switch(g){case 123:for(h=h.trim(),C=h.charCodeAt(0),_=1,L=++S;S<we;){switch(g=f.charCodeAt(S)){case 123:_++;break;case 125:_--;break;case 47:switch(g=f.charCodeAt(S+1)){case 42:case 47:e:{for(G=S+1;G<ge;++G)switch(f.charCodeAt(G)){case 47:if(g===42&&f.charCodeAt(G-1)===42&&S+2!==G){S=G+1;break e}break;case 10:if(g===47){S=G+1;break e}}S=G}}break;case 91:g++;case 40:g++;case 34:case 39:for(;S++<ge&&f.charCodeAt(S)!==g;);}if(_===0)break;S++}switch(_=f.substring(L,S),C===0&&(C=(h=h.replace(O,"").trim()).charCodeAt(0)),C){case 64:switch(0<D&&(h=h.replace(I,"")),g=h.charCodeAt(1),g){case 100:case 109:case 115:case 45:D=c;break;default:D=le}if(_=n(c,D,_,g,a+1),L=_.length,0<U&&(D=t(le,h,pe),ne=d(3,_,D,c,V,M,L,g,a,p),h=D.join(""),ne!==void 0&&(L=(_=ne.trim()).length)===0&&(g=0,_="")),0<L)switch(g){case 115:h=h.replace(ee,o);case 100:case 109:case 45:_=h+"{"+_+"}";break;case 107:h=h.replace(b,"$1 $2"),_=h+"{"+_+"}",_=B===1||B===2&&u("@"+_,3)?"@-webkit-"+_+"@"+_:"@"+_;break;default:_=h+_,p===112&&(_=(N+=_,""))}else _="";break;default:_=n(c,t(c,h,pe),_,p,a+1)}xe+=_,_=pe=D=G=C=0,h="",g=f.charCodeAt(++S);break;case 125:case 59:if(h=(0<D?h.replace(I,""):h).trim(),1<(L=h.length))switch(G===0&&(C=h.charCodeAt(0),C===45||96<C&&123>C)&&(L=(h=h.replace(" ",":")).length),0<U&&(ne=d(1,h,c,l,V,M,N.length,p,a,p))!==void 0&&(L=(h=ne.trim()).length)===0&&(h="\0\0"),C=h.charCodeAt(0),g=h.charCodeAt(1),C){case 0:break;case 64:if(g===105||g===99){Pe+=h+f.charAt(S);break}default:h.charCodeAt(L-1)!==58&&(N+=i(h,C,g,h.charCodeAt(2)))}pe=D=G=C=0,h="",g=f.charCodeAt(++S)}}switch(g){case 13:case 10:s===47?s=0:1+C===0&&p!==107&&0<h.length&&(D=1,h+="\0"),0<U*oe&&d(0,h,c,l,V,M,N.length,p,a,p),M=1,V++;break;case 59:case 125:if(s+A+E+j===0){M++;break}default:switch(M++,Q=f.charAt(S),g){case 9:case 32:if(A+j+s===0)switch(z){case 44:case 58:case 9:case 32:Q="";break;default:g!==32&&(Q=" ")}break;case 0:Q="\\0";break;case 12:Q="\\f";break;case 11:Q="\\v";break;case 38:A+s+j===0&&(D=pe=1,Q="\f"+Q);break;case 108:if(A+s+j+J===0&&0<G)switch(S-G){case 2:z===112&&f.charCodeAt(S-3)===58&&(J=z);case 8:Y===111&&(J=Y)}break;case 58:A+s+j===0&&(G=S);break;case 44:s+E+A+j===0&&(D=1,Q+="\r");break;case 34:case 39:s===0&&(A=A===g?0:A===0?g:A);break;case 91:A+s+E===0&&j++;break;case 93:A+s+E===0&&j--;break;case 41:A+s+j===0&&E--;break;case 40:if(A+s+j===0){if(C===0)switch(2*z+3*Y){case 533:break;default:C=1}E++}break;case 64:s+E+A+j+G+_===0&&(_=1);break;case 42:case 47:if(!(0<A+j+E))switch(s){case 0:switch(2*g+3*f.charCodeAt(S+1)){case 235:s=47;break;case 220:L=S,s=42}break;case 42:g===47&&z===42&&L+2!==S&&(f.charCodeAt(L+2)===33&&(N+=f.substring(L,S+1)),Q="",s=0)}}s===0&&(h+=Q)}Y=z,z=g,S++}if(L=N.length,0<L){if(D=c,0<U&&(ne=d(2,N,D,l,V,M,L,p,a,p),ne!==void 0&&(N=ne).length===0))return Pe+N+xe;if(N=D.join(",")+"{"+N+"}",B*J!==0){switch(B!==2||u(N,2)||(J=0),J){case 111:N=N.replace($,":-moz-$1")+N;break;case 112:N=N.replace(T,"::-webkit-input-$1")+N.replace(T,"::-moz-$1")+N.replace(T,":-ms-input-$1")+N}J=0}}return Pe+N+xe}function t(l,c,f){var p=c.trim().split(v);c=p;var a=p.length,j=l.length;switch(j){case 0:case 1:var s=0;for(l=j===0?"":l[0]+" ";s<a;++s)c[s]=r(l,c[s],f).trim();break;default:var E=s=0;for(c=[];s<a;++s)for(var A=0;A<j;++A)c[E++]=r(l[A]+" ",p[s],f).trim()}return c}function r(l,c,f){var p=c.charCodeAt(0);switch(33>p&&(p=(c=c.trim()).charCodeAt(0)),p){case 38:return c.replace(P,"$1"+l.trim());case 58:return l.trim()+c.replace(P,"$1"+l.trim());default:if(0<1*f&&0<c.indexOf("\f"))return c.replace(P,(l.charCodeAt(0)===58?"":"$1")+l.trim())}return l+c}function i(l,c,f,p){var a=l+";",j=2*c+3*f+4*p;if(j===944){l=a.indexOf(":",9)+1;var s=a.substring(l,a.length-1).trim();return s=a.substring(0,l).trim()+s+";",B===1||B===2&&u(s,1)?"-webkit-"+s+s:s}if(B===0||B===2&&!u(a,1))return a;switch(j){case 1015:return a.charCodeAt(10)===97?"-webkit-"+a+a:a;case 951:return a.charCodeAt(3)===116?"-webkit-"+a+a:a;case 963:return a.charCodeAt(5)===110?"-webkit-"+a+a:a;case 1009:if(a.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(a.charCodeAt(8)===45)return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(se,"$1-webkit-$2")+a;break;case 932:if(a.charCodeAt(4)===45)switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(a.charCodeAt(8)!==99)break;return s=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+s+"-webkit-"+a+"-ms-flex-pack"+s+a;case 1005:return w.test(a)?a.replace(F,":-webkit-")+a.replace(F,":-moz-")+a:a;case 1e3:switch(s=a.substring(13).trim(),c=s.indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(c)){case 226:s=a.replace(R,"tb");break;case 232:s=a.replace(R,"tb-rl");break;case 220:s=a.replace(R,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+s+a;case 1017:if(a.indexOf("sticky",9)===-1)break;case 975:switch(c=(a=l).length-10,s=(a.charCodeAt(c)===33?a.substring(0,c):a).substring(l.indexOf(":",7)+1).trim(),j=s.charCodeAt(0)+(s.charCodeAt(7)|0)){case 203:if(111>s.charCodeAt(8))break;case 115:a=a.replace(s,"-webkit-"+s)+";"+a;break;case 207:case 102:a=a.replace(s,"-webkit-"+(102<j?"inline-":"")+"box")+";"+a.replace(s,"-webkit-"+s)+";"+a.replace(s,"-ms-"+s+"box")+";"+a}return a+";";case 938:if(a.charCodeAt(5)===45)switch(a.charCodeAt(6)){case 105:return s=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+s+"-ms-flex-"+s+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(W,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(W,"")+a}break;case 973:case 989:if(a.charCodeAt(3)!==45||a.charCodeAt(4)===122)break;case 931:case 953:if(te.test(l)===!0)return(s=l.substring(l.indexOf(":")+1)).charCodeAt(0)===115?i(l.replace("stretch","fill-available"),c,f,p).replace(":fill-available",":stretch"):a.replace(s,"-webkit-"+s)+a.replace(s,"-moz-"+s.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(a.charCodeAt(5)===102?"-ms-"+a:"")+a,f+p===211&&a.charCodeAt(13)===105&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(k,"$1-webkit-$2")+a}return a}function u(l,c){var f=l.indexOf(c===1?":":"{"),p=l.substring(0,c!==3?f:10);return f=l.substring(f+1,l.length-1),de(c!==2?p:p.replace(K,"$1"),f,c)}function o(l,c){var f=i(c,c.charCodeAt(0),c.charCodeAt(1),c.charCodeAt(2));return f!==c+";"?f.replace(ie," or ($1)").substring(4):"("+c+")"}function d(l,c,f,p,a,j,s,E,A,C){for(var g=0,z=c,Y;g<U;++g)switch(Y=Z[g].call(x,l,z,f,p,a,j,s,E,A,C)){case void 0:case!1:case!0:case null:break;default:z=Y}if(z!==c)return z}function y(l){switch(l){case void 0:case null:U=Z.length=0;break;default:if(typeof l=="function")Z[U++]=l;else if(typeof l=="object")for(var c=0,f=l.length;c<f;++c)y(l[c]);else oe=!!l|0}return y}function m(l){return l=l.prefix,l!==void 0&&(de=null,l?typeof l!="function"?B=1:(B=2,de=l):B=0),m}function x(l,c){var f=l;if(33>f.charCodeAt(0)&&(f=f.trim()),he=f,f=[he],0<U){var p=d(-1,c,f,f,V,M,0,0,0,0);p!==void 0&&typeof p=="string"&&(c=p)}var a=n(le,f,c,0,0);return 0<U&&(p=d(-2,a,f,f,V,M,a.length,0,0,0),p!==void 0&&(a=p)),he="",J=0,M=V=1,a}var O=/^\0+/g,I=/[\0\r\f]/g,F=/: */g,w=/zoo|gra/,k=/([,: ])(transform)/g,v=/,\r+?/g,P=/([\t\r\n ])*\f?&/g,b=/@(k\w+)\s*(\S*)\s*/,T=/::(place)/g,$=/:(read-only)/g,R=/[svh]\w+-[tblr]{2}/,ee=/\(\s*(.*)\s*\)/g,ie=/([\s\S]*?);/g,W=/-self|flex-/g,K=/[^]*?(:[rp][el]a[\w-]+)[^]*/,te=/stretch|:\s*\w+\-(?:conte|avail)/,se=/([^-])(image-set\()/,M=1,V=1,J=0,B=1,le=[],Z=[],U=0,de=null,oe=0,he="";return x.use=y,x.set=m,e!==void 0&&m(e),x}var jt={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},H={};function q(){return(q=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var We=function(e,n){for(var t=[e[0]],r=0,i=n.length;r<i;r+=1)t.push(n[r],e[r+1]);return t},Ie=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!it.typeOf(e)},Se=Object.freeze([]),re=Object.freeze({});function ye(e){return typeof e=="function"}function Ue(e){return e.displayName||e.name||"Component"}function De(e){return e&&typeof e.styledComponentId=="string"}var ce=typeof process<"u"&&H!==void 0&&(H.REACT_APP_SC_ATTR||H.SC_ATTR)||"data-styled",Le=typeof window<"u"&&"HTMLElement"in window,At=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&H!==void 0&&(H.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&H.REACT_APP_SC_DISABLE_SPEEDY!==""?H.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&H.REACT_APP_SC_DISABLE_SPEEDY:H.SC_DISABLE_SPEEDY!==void 0&&H.SC_DISABLE_SPEEDY!==""&&H.SC_DISABLE_SPEEDY!=="false"&&H.SC_DISABLE_SPEEDY));function be(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):""))}var St=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var n=e.prototype;return n.indexOfGroup=function(t){for(var r=0,i=0;i<t;i++)r+=this.groupSizes[i];return r},n.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var i=this.groupSizes,u=i.length,o=u;t>=o;)(o<<=1)<0&&be(16,""+t);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var d=u;d<o;d++)this.groupSizes[d]=0}for(var y=this.indexOfGroup(t+1),m=0,x=r.length;m<x;m++)this.tag.insertRule(y,r[m])&&(this.groupSizes[t]++,y++)},n.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],i=this.indexOfGroup(t),u=i+r;this.groupSizes[t]=0;for(var o=i;o<u;o++)this.tag.deleteRule(i)}},n.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var i=this.groupSizes[t],u=this.indexOfGroup(t),o=u+i,d=u;d<o;d++)r+=this.tag.getRule(d)+`/*!sc*/
`;return r},e}(),je=new Map,Ce=new Map,me=1,Oe=function(e){if(je.has(e))return je.get(e);for(;Ce.has(me);)me++;var n=me++;return je.set(e,n),Ce.set(n,e),n},Ct=function(e){return Ce.get(e)},xt=function(e,n){n>=me&&(me=n+1),je.set(e,n),Ce.set(n,e)},Pt="style["+ce+'][data-styled-version="5.3.11"]',$t=new RegExp("^"+ce+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Et=function(e,n,t){for(var r,i=t.split(","),u=0,o=i.length;u<o;u++)(r=i[u])&&e.registerName(n,r)},It=function(e,n){for(var t=(n.textContent||"").split(`/*!sc*/
`),r=[],i=0,u=t.length;i<u;i++){var o=t[i].trim();if(o){var d=o.match($t);if(d){var y=0|parseInt(d[1],10),m=d[2];y!==0&&(xt(m,y),Et(e,m,d[3]),e.getTag().insertRules(y,r)),r.length=0}else r.push(o)}}},Rt=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},st=function(e){var n=document.head,t=e||n,r=document.createElement("style"),i=function(d){for(var y=d.childNodes,m=y.length;m>=0;m--){var x=y[m];if(x&&x.nodeType===1&&x.hasAttribute(ce))return x}}(t),u=i!==void 0?i.nextSibling:null;r.setAttribute(ce,"active"),r.setAttribute("data-styled-version","5.3.11");var o=Rt();return o&&r.setAttribute("nonce",o),t.insertBefore(r,u),r},Nt=function(){function e(t){var r=this.element=st(t);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var u=document.styleSheets,o=0,d=u.length;o<d;o++){var y=u[o];if(y.ownerNode===i)return y}be(17)}(r),this.length=0}var n=e.prototype;return n.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},n.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.getRule=function(t){var r=this.sheet.cssRules[t];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Tt=function(){function e(t){var r=this.element=st(t);this.nodes=r.childNodes,this.length=0}var n=e.prototype;return n.insertRule=function(t,r){if(t<=this.length&&t>=0){var i=document.createTextNode(r),u=this.nodes[t];return this.element.insertBefore(i,u||null),this.length++,!0}return!1},n.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),zt=function(){function e(t){this.rules=[],this.length=0}var n=e.prototype;return n.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},n.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),He=Le,Dt={isServer:!Le,useCSSOMInjection:!At},ot=function(){function e(t,r,i){t===void 0&&(t=re),r===void 0&&(r={}),this.options=q({},Dt,{},t),this.gs=r,this.names=new Map(i),this.server=!!t.isServer,!this.server&&Le&&He&&(He=!1,function(u){for(var o=document.querySelectorAll(Pt),d=0,y=o.length;d<y;d++){var m=o[d];m&&m.getAttribute(ce)!=="active"&&(It(u,m),m.parentNode&&m.parentNode.removeChild(m))}}(this))}e.registerId=function(t){return Oe(t)};var n=e.prototype;return n.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(q({},this.options,{},t),this.gs,r&&this.names||void 0)},n.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,u=r.useCSSOMInjection,o=r.target,t=i?new zt(o):u?new Nt(o):new Tt(o),new St(t)));var t,r,i,u,o},n.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},n.registerName=function(t,r){if(Oe(t),this.names.has(t))this.names.get(t).add(r);else{var i=new Set;i.add(r),this.names.set(t,i)}},n.insertRules=function(t,r,i){this.registerName(t,r),this.getTag().insertRules(Oe(t),i)},n.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.clearRules=function(t){this.getTag().clearGroup(Oe(t)),this.clearNames(t)},n.clearTag=function(){this.tag=void 0},n.toString=function(){return function(t){for(var r=t.getTag(),i=r.length,u="",o=0;o<i;o++){var d=Ct(o);if(d!==void 0){var y=t.names.get(d),m=r.getGroup(o);if(y&&m&&y.size){var x=ce+".g"+o+'[id="'+d+'"]',O="";y!==void 0&&y.forEach(function(I){I.length>0&&(O+=I+",")}),u+=""+m+x+'{content:"'+O+`"}/*!sc*/
`}}}return u}(this)},e}(),Lt=/(a)(d)/gi,Ve=function(e){return String.fromCharCode(e+(e>25?39:97))};function Re(e){var n,t="";for(n=Math.abs(e);n>52;n=n/52|0)t=Ve(n%52)+t;return(Ve(n%52)+t).replace(Lt,"$1-$2")}var ue=function(e,n){for(var t=n.length;t;)e=33*e^n.charCodeAt(--t);return e},ut=function(e){return ue(5381,e)};function Ft(e){for(var n=0;n<e.length;n+=1){var t=e[n];if(ye(t)&&!De(t))return!1}return!0}var Gt=ut("5.3.11"),Bt=function(){function e(n,t,r){this.rules=n,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ft(n),this.componentId=t,this.baseHash=ue(Gt,t),this.baseStyle=r,ot.registerId(t)}return e.prototype.generateAndInjectStyles=function(n,t,r){var i=this.componentId,u=[];if(this.baseStyle&&u.push(this.baseStyle.generateAndInjectStyles(n,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(i,this.staticRulesId))u.push(this.staticRulesId);else{var o=fe(this.rules,n,t,r).join(""),d=Re(ue(this.baseHash,o)>>>0);if(!t.hasNameForId(i,d)){var y=r(o,"."+d,void 0,i);t.insertRules(i,d,y)}u.push(d),this.staticRulesId=d}else{for(var m=this.rules.length,x=ue(this.baseHash,r.hash),O="",I=0;I<m;I++){var F=this.rules[I];if(typeof F=="string")O+=F;else if(F){var w=fe(F,n,t,r),k=Array.isArray(w)?w.join(""):w;x=ue(x,k+I),O+=k}}if(O){var v=Re(x>>>0);if(!t.hasNameForId(i,v)){var P=r(O,"."+v,void 0,i);t.insertRules(i,v,P)}u.push(v)}}return u.join(" ")},e}(),Yt=/^\s*\/\/.*$/gm,Mt=[":","[",".","#"];function Wt(e){var n,t,r,i,u=e===void 0?re:e,o=u.options,d=o===void 0?re:o,y=u.plugins,m=y===void 0?Se:y,x=new kt(d),O=[],I=function(k){function v(P){if(P)try{k(P+"}")}catch{}}return function(P,b,T,$,R,ee,ie,W,K,te){switch(P){case 1:if(K===0&&b.charCodeAt(0)===64)return k(b+";"),"";break;case 2:if(W===0)return b+"/*|*/";break;case 3:switch(W){case 102:case 112:return k(T[0]+b),"";default:return b+(te===0?"/*|*/":"")}case-2:b.split("/*|*/}").forEach(v)}}}(function(k){O.push(k)}),F=function(k,v,P){return v===0&&Mt.indexOf(P[t.length])!==-1||P.match(i)?k:"."+n};function w(k,v,P,b){b===void 0&&(b="&");var T=k.replace(Yt,""),$=v&&P?P+" "+v+" { "+T+" }":T;return n=b,t=v,r=new RegExp("\\"+t+"\\b","g"),i=new RegExp("(\\"+t+"\\b){2,}"),x(P||!v?"":v,$)}return x.use([].concat(m,[function(k,v,P){k===2&&P.length&&P[0].lastIndexOf(t)>0&&(P[0]=P[0].replace(r,F))},I,function(k){if(k===-2){var v=O;return O=[],v}}])),w.hash=m.length?m.reduce(function(k,v){return v.name||be(15),ue(k,v.name)},5381).toString():"",w}var ct=ae.createContext();ct.Consumer;var ft=ae.createContext(),Ut=(ft.Consumer,new ot),Ne=Wt();function Ht(){return Ae.useContext(ct)||Ut}function Vt(){return Ae.useContext(ft)||Ne}var lt=function(){function e(n,t){var r=this;this.inject=function(i,u){u===void 0&&(u=Ne);var o=r.name+u.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,u(r.rules,o,"@keyframes"))},this.toString=function(){return be(12,String(r.name))},this.name=n,this.id="sc-keyframes-"+n,this.rules=t}return e.prototype.getName=function(n){return n===void 0&&(n=Ne),this.name+n.hash},e}(),Zt=/([A-Z])/,Qt=/([A-Z])/g,Xt=/^ms-/,Kt=function(e){return"-"+e.toLowerCase()};function Ze(e){return Zt.test(e)?e.replace(Qt,Kt).replace(Xt,"-ms-"):e}var Qe=function(e){return e==null||e===!1||e===""};function fe(e,n,t,r){if(Array.isArray(e)){for(var i,u=[],o=0,d=e.length;o<d;o+=1)(i=fe(e[o],n,t,r))!==""&&(Array.isArray(i)?u.push.apply(u,i):u.push(i));return u}if(Qe(e))return"";if(De(e))return"."+e.styledComponentId;if(ye(e)){if(typeof(m=e)!="function"||m.prototype&&m.prototype.isReactComponent||!n)return e;var y=e(n);return fe(y,n,t,r)}var m;return e instanceof lt?t?(e.inject(t,r),e.getName(r)):e:Ie(e)?function x(O,I){var F,w,k=[];for(var v in O)O.hasOwnProperty(v)&&!Qe(O[v])&&(Array.isArray(O[v])&&O[v].isCss||ye(O[v])?k.push(Ze(v)+":",O[v],";"):Ie(O[v])?k.push.apply(k,x(O[v],v)):k.push(Ze(v)+": "+(F=v,(w=O[v])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||F in jt||F.startsWith("--")?String(w).trim():w+"px")+";"));return I?[I+" {"].concat(k,["}"]):k}(e):e.toString()}var Xe=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function dt(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return ye(e)||Ie(e)?Xe(fe(We(Se,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:Xe(fe(We(e,t)))}var Jt=function(e,n,t){return t===void 0&&(t=re),e.theme!==t.theme&&e.theme||n||t.theme},qt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,en=/(^-|-$)/g;function $e(e){return e.replace(qt,"-").replace(en,"")}var ht=function(e){return Re(ut(e)>>>0)};function ke(e){return typeof e=="string"&&!0}var Te=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},tn=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function nn(e,n,t){var r=e[t];Te(n)&&Te(r)?pt(r,n):e[t]=n}function pt(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];for(var i=0,u=t;i<u.length;i++){var o=u[i];if(Te(o))for(var d in o)tn(d)&&nn(e,o[d],d)}return e}var gt=ae.createContext();gt.Consumer;var Ee={};function mt(e,n,t){var r=De(e),i=!ke(e),u=n.attrs,o=u===void 0?Se:u,d=n.componentId,y=d===void 0?function(b,T){var $=typeof b!="string"?"sc":$e(b);Ee[$]=(Ee[$]||0)+1;var R=$+"-"+ht("5.3.11"+$+Ee[$]);return T?T+"-"+R:R}(n.displayName,n.parentComponentId):d,m=n.displayName,x=m===void 0?function(b){return ke(b)?"styled."+b:"Styled("+Ue(b)+")"}(e):m,O=n.displayName&&n.componentId?$e(n.displayName)+"-"+n.componentId:n.componentId||y,I=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,F=n.shouldForwardProp;r&&e.shouldForwardProp&&(F=n.shouldForwardProp?function(b,T,$){return e.shouldForwardProp(b,T,$)&&n.shouldForwardProp(b,T,$)}:e.shouldForwardProp);var w,k=new Bt(t,O,r?e.componentStyle:void 0),v=k.isStatic&&o.length===0,P=function(b,T){return function($,R,ee,ie){var W=$.attrs,K=$.componentStyle,te=$.defaultProps,se=$.foldedComponentIds,M=$.shouldForwardProp,V=$.styledComponentId,J=$.target,B=function(p,a,j){p===void 0&&(p=re);var s=q({},a,{theme:p}),E={};return j.forEach(function(A){var C,g,z,Y=A;for(C in ye(Y)&&(Y=Y(s)),Y)s[C]=E[C]=C==="className"?(g=E[C],z=Y[C],g&&z?g+" "+z:g||z):Y[C]}),[s,E]}(Jt(R,Ae.useContext(gt),te)||re,R,W),le=B[0],Z=B[1],U=function(p,a,j,s){var E=Ht(),A=Vt(),C=a?p.generateAndInjectStyles(re,E,A):p.generateAndInjectStyles(j,E,A);return C}(K,ie,le),de=ee,oe=Z.$as||R.$as||Z.as||R.as||J,he=ke(oe),l=Z!==R?q({},R,{},Z):R,c={};for(var f in l)f[0]!=="$"&&f!=="as"&&(f==="forwardedAs"?c.as=l[f]:(M?M(f,Me,oe):!he||Me(f))&&(c[f]=l[f]));return R.style&&Z.style!==R.style&&(c.style=q({},R.style,{},Z.style)),c.className=Array.prototype.concat(se,V,U!==V?U:null,R.className,Z.className).filter(Boolean).join(" "),c.ref=de,Ae.createElement(oe,c)}(w,b,T,v)};return P.displayName=x,(w=ae.forwardRef(P)).attrs=I,w.componentStyle=k,w.displayName=x,w.shouldForwardProp=F,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Se,w.styledComponentId=O,w.target=r?e.target:e,w.withComponent=function(b){var T=n.componentId,$=function(ee,ie){if(ee==null)return{};var W,K,te={},se=Object.keys(ee);for(K=0;K<se.length;K++)W=se[K],ie.indexOf(W)>=0||(te[W]=ee[W]);return te}(n,["componentId"]),R=T&&T+"-"+(ke(b)?b:$e(Ue(b)));return mt(b,q({},$,{attrs:I,componentId:R}),t)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?pt({},e.defaultProps,b):b}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&yt(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var ze=function(e){return function n(t,r,i){if(i===void 0&&(i=re),!it.isValidElementType(r))return be(1,String(r));var u=function(){return t(r,i,dt.apply(void 0,arguments))};return u.withConfig=function(o){return n(t,r,q({},i,{},o))},u.attrs=function(o){return n(t,r,q({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},u}(mt,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ze[e]=ze(e)});function Fe(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var i=dt.apply(void 0,[e].concat(t)).join(""),u=ht(i);return new lt(u,i)}const _e=ze;var vt=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},X=242.776657104492,rn=1.6,an=Fe(Ke||(Ke=vt([`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`],[`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`])),X*.14,X,X*.11,X*.35,X,X*.35,X*.01,X,X*.99);_e.path(Je||(Je=vt([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),X*.01,X,an,rn);var Ke,Je;var sn=function(n,t){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof r[n]<"u")return r[n];if(n&&n.indexOf(".")>0){for(var i=n.split("."),u=i.length,o=r[i[0]],d=1;o!=null&&d<u;)o=o[i[d]],d+=1;if(typeof o<"u")return o}return t}},Ge=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};var on=Fe(qe||(qe=Ge([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`])));_e.svg(et||(et=Ge([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),on,sn("speed","0.75"));_e.polyline(tt||(tt=Ge([`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`],[`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`])),function(e){return e.width});var qe,et,tt;var Be=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},ve=function(){return ve=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ve.apply(this,arguments)},un=Fe(nt||(nt=Be([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`]))),cn=_e.polygon(rt||(rt=Be([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),un),fn=_e.svg(at||(at=Be([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`]))),ln=function(e){var n=e.height,t=n===void 0?80:n,r=e.width,i=r===void 0?80:r,u=e.color,o=u===void 0?wt:u,d=e.ariaLabel,y=d===void 0?"triangle-loading":d,m=e.wrapperStyle,x=e.wrapperClass,O=e.visible,I=O===void 0?!0:O;return ae.createElement("div",ve({style:ve(ve({},_t(I)),m),className:"".concat(x),"data-testid":"triangle-loading","aria-label":y},Ot),ae.createElement(fn,{id:"triangle",width:i,height:t,viewBox:"-3 -4 39 39","data-testid":"triangle-svg"},ae.createElement(cn,{fill:"transparent",stroke:o,strokeWidth:"1",points:"16,0 32,32 0,32"})))},nt,rt,at;const dn=bt.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`,gn=()=>Ye.jsx(dn,{children:Ye.jsx(ln,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",color:"skyblue"})});export{gn as L};
