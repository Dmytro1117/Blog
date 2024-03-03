import{R as s,d as y,r as m,e as w,j as o,c as v,L as f,h as j}from"./index-DVAdFHlH.js";import{a as d,u as O,S as E,n as z}from"./emotion-styled.browser.esm-BWKYkCj5.js";var p={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},g=s.createContext&&s.createContext(p),l=function(){return l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},l.apply(this,arguments)},k=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]]);return n};function b(t){return t&&t.map(function(e,n){return s.createElement(e.tag,l({key:n},e.attr),b(e.child))})}function C(t){return function(e){return s.createElement(I,l({attr:l({},t.attr)},e),b(t.child))}}function I(t){var e=function(n){var r=t.attr,a=t.size,i=t.title,u=k(t,["attr","size","title"]),h=a||n.size||"1em",c;return n.className&&(c=n.className),t.className&&(c=(c?c+" ":"")+t.className),s.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,u,{className:c,style:l(l({color:t.color||n.color},n.style),t.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),i&&s.createElement("title",null,i),t.children)};return g!==void 0?s.createElement(g.Consumer,null,function(n){return e(n)}):e(p)}function N(t){return C({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Trash"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M19.45,4.06H15.27v-.5a1.5,1.5,0,0,0-1.5-1.5H10.23a1.5,1.5,0,0,0-1.5,1.5v.5H4.55a.5.5,0,0,0,0,1h.72l.42,14.45a2.493,2.493,0,0,0,2.5,2.43h7.62a2.493,2.493,0,0,0,2.5-2.43l.42-14.45h.72A.5.5,0,0,0,19.45,4.06Zm-9.72-.5a.5.5,0,0,1,.5-.5h3.54a.5.5,0,0,1,.5.5v.5H9.73Zm7.58,15.92a1.5,1.5,0,0,1-1.5,1.46H8.19a1.5,1.5,0,0,1-1.5-1.46L6.26,5.06H17.74Z"}},{tag:"path",attr:{d:"M8.375,8h0a.5.5,0,0,1,1,0l.25,10a.5.5,0,0,1-1,0Z"}},{tag:"path",attr:{d:"M15.625,8.007a.5.5,0,0,0-1,0h0l-.25,10a.5.5,0,0,0,1,0Z"}}]}]}]})(t)}d.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;const B=d(N)`
  cursor: pointer;
  color: rgba(104, 105, 107, 0.877);
  margin-top: 16px;

  &:hover {
    cursor: pointer;
    color: rgba(219, 39, 15, 0.781);
  }
`;d.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`;const x=d.p`
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
`,_=d.button`
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
`,P=()=>{const{blogId:t}=y(),[e,n]=m.useState(null),r=O();m.useEffect(()=>{r(w(t)).then(i=>{n(i.payload)}).catch(i=>{console.log(i)})},[r,t]);const a=i=>{r(j(i)).then(()=>{z.Notify.failure("Пост видалено")}).catch(u=>{console.log(u)})};return e?o.jsxs(o.Fragment,{children:[o.jsx(f,{to:{pathname:"/home"},children:o.jsx(_,{type:"button",children:"Повернутися"})}),o.jsxs(E,{title:e.name,children:[o.jsxs(x,{children:["Опис: ",e.about]}),o.jsxs(x,{children:["Телефон: ",e.phone]}),o.jsx(f,{to:{pathname:"/home"},children:o.jsx(B,{type:"button",size:24,onClick:()=>a(e.id)})})]},e.id)]}):o.jsx(v,{})};export{P as default};
