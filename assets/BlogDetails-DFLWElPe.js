import{j as n,d as O,e as k,R as f,g as I,r as g,h as P,i as F,k as H}from"./index-D4tg8eQs.js";import{u as C,L as y,a as j,B as L,s as _,n as b,Z as D,I as M,S as Z}from"./BlogFormStyled-DkSfp96z.js";import{a as B,u as R}from"./hooks-DDmB8bXx.js";import{L as A}from"./Loader-CbwwZ2Yi.js";import{n as p}from"./emotion-styled.browser.esm-BBCkfJeL.js";const T=({blogInfo:t,setEditMode:e,setBlogInfo:r})=>{const{register:a,handleSubmit:o,formState:{errors:l}}=C(),m=B(),h=async i=>{try{await _.parseAsync(i),m(O(t)),b.Notify.success("Пост оновлено"),e(!1)}catch(u){if(u instanceof D){u.errors.forEach(x=>{b.Notify.warning(x.message)}),b.Notify.failure("Не оновлено"),m(k("Не пройдена валідація"));return}}},s=i=>u=>{r(x=>({...x,[i]:u}))};return n.jsxs("form",{onSubmit:o(h),autoComplete:"off",children:[n.jsxs(y,{htmlFor:"name",children:["Назва:",n.jsx(j,{type:"text",...a("name"),value:t.name,onChange:i=>s("name")(i.target.value)}),l.name&&n.jsx("div",{children:l.name.message})]}),n.jsxs(y,{htmlFor:"about",children:["Опис:",n.jsx(j,{type:"text",...a("about"),value:t.about,onChange:i=>s("about")(i.target.value)}),l.about&&n.jsx("div",{children:l.about.message})]}),n.jsxs(y,{htmlFor:"phone",children:["Телефон:",n.jsx(j,{type:"text",...a("phone"),value:t.phone,onChange:i=>s("phone")(i.target.value)}),l.phone&&n.jsx("div",{children:l.phone.message})]}),n.jsx(L,{type:"submit",children:"Зберегти"})]})};var N={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},w=f.createContext&&f.createContext(N),d=function(){return d=Object.assign||function(t){for(var e,r=1,a=arguments.length;r<a;r++){e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},d.apply(this,arguments)},q=function(t,e){var r={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(r[a[o]]=t[a[o]]);return r};function S(t){return t&&t.map(function(e,r){return f.createElement(e.tag,d({key:r},e.attr),S(e.child))})}function z(t){return function(e){return f.createElement(V,d({attr:d({},t.attr)},e),S(t.child))}}function V(t){var e=function(r){var a=t.attr,o=t.size,l=t.title,m=q(t,["attr","size","title"]),h=o||r.size||"1em",s;return r.className&&(s=r.className),t.className&&(s=(s?s+" ":"")+t.className),f.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,m,{className:s,style:d(d({color:t.color||r.color},r.style),t.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),l&&f.createElement("title",null,l),t.children)};return w!==void 0?f.createElement(w.Consumer,null,function(r){return e(r)}):e(N)}function G(t){return z({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Trash"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M19.45,4.06H15.27v-.5a1.5,1.5,0,0,0-1.5-1.5H10.23a1.5,1.5,0,0,0-1.5,1.5v.5H4.55a.5.5,0,0,0,0,1h.72l.42,14.45a2.493,2.493,0,0,0,2.5,2.43h7.62a2.493,2.493,0,0,0,2.5-2.43l.42-14.45h.72A.5.5,0,0,0,19.45,4.06Zm-9.72-.5a.5.5,0,0,1,.5-.5h3.54a.5.5,0,0,1,.5.5v.5H9.73Zm7.58,15.92a1.5,1.5,0,0,1-1.5,1.46H8.19a1.5,1.5,0,0,1-1.5-1.46L6.26,5.06H17.74Z"}},{tag:"path",attr:{d:"M8.375,8h0a.5.5,0,0,1,1,0l.25,10a.5.5,0,0,1-1,0Z"}},{tag:"path",attr:{d:"M15.625,8.007a.5.5,0,0,0-1,0h0l-.25,10a.5.5,0,0,0,1,0Z"}}]}]}]})(t)}function W(t){return z({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"}}]})(t)}p.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;const J=p(G)`
  cursor: pointer;
  color: rgba(104, 105, 107, 0.877);
  margin-top: 16px;

  &:hover {
    cursor: pointer;
    color: rgba(219, 39, 15, 0.781);
  }
`,K=p(W)`
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
`;b.Notify.init(M);const et=()=>{const{blogId:t}=I(),[e,r]=g.useState(null),[a,o]=g.useState(!0),[l,m]=g.useState(!1),h=P(),s=B(),{reset:i}=C(),u=R(c=>c.blog.items);if(g.useEffect(()=>{s(F(t))},[s]),g.useEffect(()=>{const c=u.find(v=>v.id===t);c&&(r(c),o(!1),i({name:c.name,about:c.about,phone:c.phone}))},[u,i]),g.useEffect(()=>{!u.some(v=>v.id===t)&&(b.Notify.success("Пост видалено"),h("/list"))},[u]),a)return n.jsx(A,{});if(!e)return n.jsx("div",{children:"Дані про блог не знайдено"});const x=c=>{s(H(c))};return n.jsxs(n.Fragment,{children:[n.jsx(Q,{type:"button",onClick:()=>h("/list"),children:"Повернутися"}),n.jsx(Z,{title:e.name,children:l?n.jsx(T,{blogInfo:e,setEditMode:m,setBlogInfo:r}):n.jsxs(n.Fragment,{children:[n.jsxs(E,{children:["Опис: ",e.about]}),n.jsxs(E,{children:["Телефон: ",e.phone]}),n.jsx(K,{type:"button",size:24,onClick:()=>m(!0)}),n.jsx(J,{type:"button",size:24,onClick:()=>x(e.id)})]})})]})};export{et as default};
