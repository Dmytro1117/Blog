import{R as u,a as O,r as y,j as a,L as w,f as k,b as L,d as H,c as _}from"./index-jU41MbT_.js";import{u as D,S as M,L as b,I as v,a as Z,n as f,s as F,Z as P}from"./BlogForm-Bzuf8q7i.js";import{n as h,L as A}from"./Loader-Hqq75eSl.js";import{a as T}from"./hooks-DnTnUKez.js";var z={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},E=u.createContext&&u.createContext(z),d=function(){return d=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},d.apply(this,arguments)},R=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function B(t){return t&&t.map(function(e,n){return u.createElement(e.tag,d({key:n},e.attr),B(e.child))})}function N(t){return function(e){return u.createElement(V,d({attr:d({},t.attr)},e),B(t.child))}}function V(t){var e=function(n){var r=t.attr,i=t.size,c=t.title,m=R(t,["attr","size","title"]),p=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),u.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,m,{className:l,style:d(d({color:t.color||n.color},n.style),t.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),c&&u.createElement("title",null,c),t.children)};return E!==void 0?u.createElement(E.Consumer,null,function(n){return e(n)}):e(z)}function G(t){return N({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Trash"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M19.45,4.06H15.27v-.5a1.5,1.5,0,0,0-1.5-1.5H10.23a1.5,1.5,0,0,0-1.5,1.5v.5H4.55a.5.5,0,0,0,0,1h.72l.42,14.45a2.493,2.493,0,0,0,2.5,2.43h7.62a2.493,2.493,0,0,0,2.5-2.43l.42-14.45h.72A.5.5,0,0,0,19.45,4.06Zm-9.72-.5a.5.5,0,0,1,.5-.5h3.54a.5.5,0,0,1,.5.5v.5H9.73Zm7.58,15.92a1.5,1.5,0,0,1-1.5,1.46H8.19a1.5,1.5,0,0,1-1.5-1.46L6.26,5.06H17.74Z"}},{tag:"path",attr:{d:"M8.375,8h0a.5.5,0,0,1,1,0l.25,10a.5.5,0,0,1-1,0Z"}},{tag:"path",attr:{d:"M15.625,8.007a.5.5,0,0,0-1,0h0l-.25,10a.5.5,0,0,0,1,0Z"}}]}]}]})(t)}function W(t){return N({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"}}]})(t)}h.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;const q=h(G)`
  cursor: pointer;
  color: rgba(104, 105, 107, 0.877);
  margin-top: 16px;

  &:hover {
    cursor: pointer;
    color: rgba(219, 39, 15, 0.781);
  }
`,J=h(W)`
  cursor: pointer;
  color: rgba(104, 105, 107, 0.877);
  margin-top: 16px;

  &:hover {
    cursor: pointer;
    color: rgba(219, 39, 15, 0.781);
  }
`;h.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`;const C=h.p`
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
`,K=h.button`
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
`,$=()=>{const{blogId:t}=O(),[e,n]=y.useState(null),[r,i]=y.useState(!1),c=T(),{register:m,handleSubmit:p,formState:{errors:l},reset:j}=D();y.useEffect(()=>{(async()=>{try{if(await c(k()),t){const o=await c(L(t));o.payload&&typeof o.payload=="object"?(n(o.payload),j({name:o.payload.name,about:o.payload.about,phone:o.payload.phone})):console.log("Error:",o.payload)}}catch(o){console.log(o)}})()},[c,t,j]);const g=s=>o=>{n(x=>({...x,[s]:o||""}))},S=s=>{c(H(s)).then(()=>{f.Notify.failure("Пост видалено")}).catch(o=>{console.log(o),f.Notify.failure("Помилка при видаленні посту")})},I=async s=>{try{await F.parseAsync(s)}catch(o){if(o instanceof P){o.errors.forEach(x=>{f.Notify.warning(x.message)});return}}c(_(e)).then(()=>{f.Notify.success("Пост оновлено"),i(!1)}).catch(o=>{console.log(o),f.Notify.failure("Помилка при оновленні посту")})};return e?a.jsxs(a.Fragment,{children:[a.jsx(w,{to:{pathname:"/list"},children:a.jsx(K,{type:"button",children:"Повернутися"})}),a.jsx(M,{title:e.name,children:r?a.jsx(a.Fragment,{children:a.jsxs("form",{onSubmit:p(I),autoComplete:"off",children:[a.jsxs(b,{children:["Назва:",a.jsx(v,{type:"text",...m("name"),value:e.name,onChange:s=>g("name")(s.target.value)}),l.name&&a.jsx("div",{children:l.name.message})]}),a.jsxs(b,{children:["Опис:",a.jsx(v,{type:"text",...m("about"),value:e.about,onChange:s=>g("about")(s.target.value)}),l.about&&a.jsx("div",{children:l.about.message})]}),a.jsxs(b,{children:["Телефон:",a.jsx(v,{type:"text",...m("phone"),value:e.phone,onChange:s=>g("phone")(s.target.value)}),l.phone&&a.jsx("div",{children:l.phone.message})]}),a.jsx(Z,{type:"submit",children:"Зберегти"})]})}):a.jsxs(a.Fragment,{children:[a.jsxs(C,{children:["Опис: ",e.about]}),a.jsxs(C,{children:["Телефон: ",e.phone]}),a.jsx(J,{type:"button",size:24,onClick:()=>i(!0)}),a.jsx(w,{to:{pathname:"/list"},children:a.jsx(q,{type:"button",size:24,onClick:()=>S(e.id)})})]})},e.id)]}):a.jsx(A,{})};export{$ as default};
