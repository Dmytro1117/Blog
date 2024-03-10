import{R as u,a as k,r as b,b as H,c as _,j as a,d as L,e as M}from"./index-MdN9Se5I.js";import{n as f,I as Z,u as B,S as F,L as v,a as j,b as P,s as D,Z as A}from"./BlogForm-CAPpKnQ5.js";import{n as p,L as T}from"./Loader-C-fBH1B8.js";import{a as R}from"./hooks-ChJfguEz.js";var N={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},C=u.createContext&&u.createContext(N),l=function(){return l=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},l.apply(this,arguments)},V=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(t);i<o.length;i++)e.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(n[o[i]]=t[o[i]]);return n};function z(t){return t&&t.map(function(e,n){return u.createElement(e.tag,l({key:n},e.attr),z(e.child))})}function I(t){return function(e){return u.createElement(G,l({attr:l({},t.attr)},e),z(t.child))}}function G(t){var e=function(n){var o=t.attr,i=t.size,g=t.title,d=V(t,["attr","size","title"]),h=i||n.size||"1em",c;return n.className&&(c=n.className),t.className&&(c=(c?c+" ":"")+t.className),u.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,d,{className:c,style:l(l({color:t.color||n.color},n.style),t.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),g&&u.createElement("title",null,g),t.children)};return C!==void 0?u.createElement(C.Consumer,null,function(n){return e(n)}):e(N)}function W(t){return I({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Trash"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M19.45,4.06H15.27v-.5a1.5,1.5,0,0,0-1.5-1.5H10.23a1.5,1.5,0,0,0-1.5,1.5v.5H4.55a.5.5,0,0,0,0,1h.72l.42,14.45a2.493,2.493,0,0,0,2.5,2.43h7.62a2.493,2.493,0,0,0,2.5-2.43l.42-14.45h.72A.5.5,0,0,0,19.45,4.06Zm-9.72-.5a.5.5,0,0,1,.5-.5h3.54a.5.5,0,0,1,.5.5v.5H9.73Zm7.58,15.92a1.5,1.5,0,0,1-1.5,1.46H8.19a1.5,1.5,0,0,1-1.5-1.46L6.26,5.06H17.74Z"}},{tag:"path",attr:{d:"M8.375,8h0a.5.5,0,0,1,1,0l.25,10a.5.5,0,0,1-1,0Z"}},{tag:"path",attr:{d:"M15.625,8.007a.5.5,0,0,0-1,0h0l-.25,10a.5.5,0,0,0,1,0Z"}}]}]}]})(t)}function q(t){return I({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"}}]})(t)}p.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;const J=p(W)`
  cursor: pointer;
  color: rgba(104, 105, 107, 0.877);
  margin-top: 16px;

  &:hover {
    cursor: pointer;
    color: rgba(219, 39, 15, 0.781);
  }
`,K=p(q)`
  cursor: pointer;
  color: rgba(104, 105, 107, 0.877);
  margin-top: 16px;

  &:hover {
    cursor: pointer;
    color: rgba(219, 39, 15, 0.781);
  }
`;p.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`;const E=p.p`
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
`,Q=p.button`
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
`;f.Notify.init(Z);const tt=()=>{const{blogId:t}=k(),[e,n]=b.useState(null),[o,i]=b.useState(!1),g=H(),d=R(),{register:h,handleSubmit:c,formState:{errors:m},reset:w}=B();b.useEffect(()=>{t&&d(_(t)).then(r=>{r.payload&&typeof r.payload=="object"?(n(r.payload),w({name:r.payload.name,about:r.payload.about,phone:r.payload.phone})):console.log("Invalid payload received:",r.payload)}).catch(r=>{console.log(r)})},[d,t,w]);const x=r=>s=>{n(y=>({...y,[r]:s||""}))},S=r=>{d(L(r)).then(()=>{f.Notify.failure("Пост видалено"),g("/list")}).catch(s=>{console.log(s),f.Notify.failure("Помилка при видаленні посту")})},O=async r=>{try{await D.parseAsync(r)}catch(s){if(s instanceof A){s.errors.forEach(y=>{f.Notify.warning(y.message)});return}}d(M(e)).then(()=>{f.Notify.success("Пост оновлено"),i(!1)}).catch(s=>{console.log(s),f.Notify.failure("Помилка при оновленні посту")})};return e?a.jsxs(a.Fragment,{children:[a.jsx(Q,{type:"button",onClick:()=>g("/list"),children:"Повернутися"}),a.jsx(F,{title:e.name,children:o?a.jsx(a.Fragment,{children:a.jsxs("form",{onSubmit:c(O),autoComplete:"off",children:[a.jsxs(v,{children:["Назва:",a.jsx(j,{type:"text",...h("name"),value:e.name,onChange:r=>x("name")(r.target.value)}),m.name&&a.jsx("div",{children:m.name.message})]}),a.jsxs(v,{children:["Опис:",a.jsx(j,{type:"text",...h("about"),value:e.about,onChange:r=>x("about")(r.target.value)}),m.about&&a.jsx("div",{children:m.about.message})]}),a.jsxs(v,{children:["Телефон:",a.jsx(j,{type:"text",...h("phone"),value:e.phone,onChange:r=>x("phone")(r.target.value)}),m.phone&&a.jsx("div",{children:m.phone.message})]}),a.jsx(P,{type:"submit",children:"Зберегти"})]})}):a.jsxs(a.Fragment,{children:[a.jsxs(E,{children:["Опис: ",e.about]}),a.jsxs(E,{children:["Телефон: ",e.phone]}),a.jsx(K,{type:"button",size:24,onClick:()=>i(!0)}),a.jsx(J,{type:"button",size:24,onClick:()=>S(e.id)})]})},e.id)]}):a.jsx(T,{})};export{tt as default};
