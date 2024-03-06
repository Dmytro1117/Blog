import{R as h,n as m,b as F,r as g,c as H,j as a,a as L,L as w,d as E,e as _,f as P}from"./index-YpftBxkN.js";import{a as Z,S as A,F as T,i as V,b as R,L as y,c as b,I as v,E as j,d as G,s as C,Z as N,n as d}from"./BlogForm-CKLT_h-T.js";var I={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},z=h.createContext&&h.createContext(I),u=function(){return u=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},u.apply(this,arguments)},W=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(n[o[s]]=e[o[s]]);return n};function B(e){return e&&e.map(function(t,n){return h.createElement(t.tag,u({key:n},t.attr),B(t.child))})}function S(e){return function(t){return h.createElement(q,u({attr:u({},e.attr)},t),B(e.child))}}function q(e){var t=function(n){var o=e.attr,s=e.size,p=e.title,f=W(e,["attr","size","title"]),l=s||n.size||"1em",i;return n.className&&(i=n.className),e.className&&(i=(i?i+" ":"")+e.className),h.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,f,{className:i,style:u(u({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),p&&h.createElement("title",null,p),e.children)};return z!==void 0?h.createElement(z.Consumer,null,function(n){return t(n)}):t(I)}function J(e){return S({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Trash"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M19.45,4.06H15.27v-.5a1.5,1.5,0,0,0-1.5-1.5H10.23a1.5,1.5,0,0,0-1.5,1.5v.5H4.55a.5.5,0,0,0,0,1h.72l.42,14.45a2.493,2.493,0,0,0,2.5,2.43h7.62a2.493,2.493,0,0,0,2.5-2.43l.42-14.45h.72A.5.5,0,0,0,19.45,4.06Zm-9.72-.5a.5.5,0,0,1,.5-.5h3.54a.5.5,0,0,1,.5.5v.5H9.73Zm7.58,15.92a1.5,1.5,0,0,1-1.5,1.46H8.19a1.5,1.5,0,0,1-1.5-1.46L6.26,5.06H17.74Z"}},{tag:"path",attr:{d:"M8.375,8h0a.5.5,0,0,1,1,0l.25,10a.5.5,0,0,1-1,0Z"}},{tag:"path",attr:{d:"M15.625,8.007a.5.5,0,0,0-1,0h0l-.25,10a.5.5,0,0,0,1,0Z"}}]}]}]})(e)}function K(e){return S({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"}}]})(e)}m.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;const Q=m(J)`
  cursor: pointer;
  color: rgba(104, 105, 107, 0.877);
  margin-top: 16px;

  &:hover {
    cursor: pointer;
    color: rgba(219, 39, 15, 0.781);
  }
`,U=m(K)`
  cursor: pointer;
  color: rgba(104, 105, 107, 0.877);
  margin-top: 16px;

  &:hover {
    cursor: pointer;
    color: rgba(219, 39, 15, 0.781);
  }
`;m.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`;const O=m.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  max-width: 600px;
  overflow-wrap: break-word;

  @media (max-width: 480px) {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 12px;
    max-width: 300px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 18px;
    margin-bottom: 14px;
    max-width: 450px;
  }
`,X=m.button`
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 2px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  color: white;
  margin-top: 18px;
  background-color: rgba(19, 116, 206, 0.781);
  &:hover {
    color: white;
    background-color: grey;
  }
`,ee=()=>{const{blogId:e}=F(),[t,n]=g.useState(null),[o,s]=g.useState(!1),[p,f]=g.useState(!1),l=Z();g.useEffect(()=>{e&&l(H(e)).then(r=>{r.payload&&typeof r.payload=="object"?n(r.payload):console.log("Invalid payload received:",r.payload)}).catch(r=>{console.log(r)})},[l,e]);const i=()=>{l(P())},k=async r=>{if(f(!0),o){try{await C.parseAsync(t)}catch(c){if(c instanceof N){const x=Object.values(c.errors).map(D=>D.message).join(`
`);d.Notify.warning(x),f(!1);return}}l(E(t)).then(()=>{d.Notify.success("Пост оновлено"),s(!1)}).catch(c=>{console.log(c),d.Notify.failure("Помилка при оновленні поста")}).finally(()=>{f(!1)})}else l(_(r)).then(()=>{i(),d.Notify.failure("Пост видалено")}).catch(c=>{console.log(c)}).finally(()=>{f(!1)})},M=async()=>{try{await C.parseAsync(t)}catch(r){if(r instanceof N){const c=Object.values(r.errors).map(x=>x.message).join(`
`);return d.Notify.warning(c)}}l(E(t)).then(()=>{d.Notify.success("Пост оновлено"),s(!1),i()}).catch(r=>{console.log(r),d.Notify.failure("Помилка при оновленні поста")})};return t?a.jsxs(a.Fragment,{children:[a.jsx(w,{to:{pathname:"/home"},children:a.jsx(X,{type:"button",children:"Повернутися"})}),a.jsx(A,{title:t.name,children:o?a.jsx(a.Fragment,{children:a.jsx(T,{initialValues:V,onSubmit:M,children:a.jsxs(R,{autoComplete:"off",children:[a.jsxs(y,{children:["Назва:",a.jsx(b,{type:"text",as:v,name:"name",value:t.name,onChange:r=>n({...t,name:r.target.value})}),a.jsx(j,{name:"name",component:"div"})]}),a.jsxs(y,{children:["Опис:",a.jsx(b,{type:"text",as:v,name:"about",value:t.about,onChange:r=>n({...t,about:r.target.value})}),a.jsx(j,{name:"about",component:"div"})]}),a.jsxs(y,{children:["Телефон:",a.jsx(b,{type:"text",as:v,name:"phone",value:t.phone,onChange:r=>n({...t,phone:r.target.value})}),a.jsx(j,{name:"phone",component:"div"})]}),a.jsx(G,{type:"submit",children:"Зберегти"})]})})}):a.jsxs(a.Fragment,{children:[a.jsxs(O,{children:["Опис: ",t.about]}),a.jsxs(O,{children:["Телефон: ",t.phone]}),a.jsx(U,{type:"button",size:24,onClick:()=>s(!0)}),!o&&a.jsx(w,{to:{pathname:"/home"},children:p?null:a.jsx(Q,{type:"button",size:24,onClick:()=>k(t.id)})})]})},t.id)]}):a.jsx(L,{})};export{ee as default};
