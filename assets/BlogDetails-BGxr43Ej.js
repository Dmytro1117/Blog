import{R as d,n as u,b as k,r as x,c as S,j as a,a as B,L as j,d as w,e as M}from"./index-ChApNCE-.js";import{a as F,S as H,F as L,i as _,b as Z,L as g,c as y,I as b,E as v,d as P,n as m,s as D,Z as A}from"./BlogForm-D4V7Ys0Y.js";var z={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},E=d.createContext&&d.createContext(z),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},l.apply(this,arguments)},T=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n};function I(e){return e&&e.map(function(t,n){return d.createElement(t.tag,l({key:n},t.attr),I(t.child))})}function N(e){return function(t){return d.createElement(V,l({attr:l({},e.attr)},t),I(e.child))}}function V(e){var t=function(n){var r=e.attr,s=e.size,i=e.title,f=T(e,["attr","size","title"]),p=s||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),d.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,f,{className:c,style:l(l({color:e.color||n.color},n.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),i&&d.createElement("title",null,i),e.children)};return E!==void 0?d.createElement(E.Consumer,null,function(n){return t(n)}):t(z)}function R(e){return N({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Trash"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M19.45,4.06H15.27v-.5a1.5,1.5,0,0,0-1.5-1.5H10.23a1.5,1.5,0,0,0-1.5,1.5v.5H4.55a.5.5,0,0,0,0,1h.72l.42,14.45a2.493,2.493,0,0,0,2.5,2.43h7.62a2.493,2.493,0,0,0,2.5-2.43l.42-14.45h.72A.5.5,0,0,0,19.45,4.06Zm-9.72-.5a.5.5,0,0,1,.5-.5h3.54a.5.5,0,0,1,.5.5v.5H9.73Zm7.58,15.92a1.5,1.5,0,0,1-1.5,1.46H8.19a1.5,1.5,0,0,1-1.5-1.46L6.26,5.06H17.74Z"}},{tag:"path",attr:{d:"M8.375,8h0a.5.5,0,0,1,1,0l.25,10a.5.5,0,0,1-1,0Z"}},{tag:"path",attr:{d:"M15.625,8.007a.5.5,0,0,0-1,0h0l-.25,10a.5.5,0,0,0,1,0Z"}}]}]}]})(e)}function G(e){return N({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"}}]})(e)}u.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;const W=u(R)`
  cursor: pointer;
  color: rgba(104, 105, 107, 0.877);
  margin-top: 16px;

  &:hover {
    cursor: pointer;
    color: rgba(219, 39, 15, 0.781);
  }
`,q=u(G)`
  cursor: pointer;
  color: rgba(104, 105, 107, 0.877);
  margin-top: 16px;

  &:hover {
    cursor: pointer;
    color: rgba(219, 39, 15, 0.781);
  }
`;u.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`;const C=u.p`
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
`,J=u.button`
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
`,U=()=>{const{blogId:e}=k(),[t,n]=x.useState(null),[r,s]=x.useState(!1),i=F();x.useEffect(()=>{e&&i(S(e)).then(o=>{o.payload&&typeof o.payload=="object"?n(o.payload):console.log("Invalid payload received:",o.payload)}).catch(o=>{console.log(o)})},[i,e]);const f=o=>{r?i(w(t)).then(()=>{m.Notify.success("Пост оновлено"),s(!1)}).catch(h=>{console.log(h)}):i(M(o)).then(()=>{m.Notify.failure("Пост видалено")}).catch(h=>{console.log(h)})},p=()=>{s(!0)},c=async()=>{try{await D.parseAsync(t)}catch(o){if(o instanceof A){const h=Object.values(o.errors).map(O=>O.message).join(`
`);return m.Notify.warning(h)}}i(w(t)).then(()=>{m.Notify.success("Пост оновлено"),s(!1)}).catch(o=>{console.log(o),m.Notify.failure("Помилка при оновленні поста")})};return t?a.jsxs(a.Fragment,{children:[a.jsx(j,{to:{pathname:"/home"},children:a.jsx(J,{type:"button",children:"Повернутися"})}),a.jsxs(H,{title:t.name,children:[r?a.jsx(a.Fragment,{children:a.jsx(L,{initialValues:_,onSubmit:c,children:a.jsxs(Z,{autoComplete:"off",children:[a.jsxs(g,{children:["Назва:",a.jsx(y,{type:"text",as:b,name:"name",value:t.name,onChange:o=>n({...t,name:o.target.value})}),a.jsx(v,{name:"name",component:"div"})]}),a.jsxs(g,{children:["Опис:",a.jsx(y,{type:"text",as:b,name:"about",value:t.about,onChange:o=>n({...t,about:o.target.value})}),a.jsx(v,{name:"about",component:"div"})]}),a.jsxs(g,{children:["Телефон:",a.jsx(y,{type:"text",as:b,name:"phone",value:t.phone,onChange:o=>n({...t,phone:o.target.value})}),a.jsx(v,{name:"phone",component:"div"})]}),a.jsx(P,{type:"submit",children:"Зберегти"})]})})}):a.jsxs(a.Fragment,{children:[a.jsxs(C,{children:["Опис: ",t.about]}),a.jsxs(C,{children:["Телефон: ",t.phone]}),a.jsx(q,{type:"button",size:24,onClick:p})]}),a.jsx(j,{to:{pathname:"/home"},children:a.jsx(W,{type:"button",size:24,onClick:()=>f(t.id)})})]},t.id)]}):a.jsx(B,{})};export{U as default};
