import{R as l,d as b,r as f,j as o,c as w,L as m,e as v,h as j}from"./index-BTPY98tj.js";import{a as u,u as O,S as B,n as E}from"./emotion-styled.browser.esm-DWGjdUUZ.js";var p={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},g=l.createContext&&l.createContext(p),i=function(){return i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},i.apply(this,arguments)},z=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]]);return n};function y(t){return t&&t.map(function(e,n){return l.createElement(e.tag,i({key:n},e.attr),y(e.child))})}function k(t){return function(e){return l.createElement(C,i({attr:i({},t.attr)},e),y(t.child))}}function C(t){var e=function(n){var r=t.attr,a=t.size,s=t.title,c=z(t,["attr","size","title"]),h=a||n.size||"1em",d;return n.className&&(d=n.className),t.className&&(d=(d?d+" ":"")+t.className),l.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,c,{className:d,style:i(i({color:t.color||n.color},n.style),t.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),s&&l.createElement("title",null,s),t.children)};return g!==void 0?l.createElement(g.Consumer,null,function(n){return e(n)}):e(p)}function I(t){return k({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Trash"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M19.45,4.06H15.27v-.5a1.5,1.5,0,0,0-1.5-1.5H10.23a1.5,1.5,0,0,0-1.5,1.5v.5H4.55a.5.5,0,0,0,0,1h.72l.42,14.45a2.493,2.493,0,0,0,2.5,2.43h7.62a2.493,2.493,0,0,0,2.5-2.43l.42-14.45h.72A.5.5,0,0,0,19.45,4.06Zm-9.72-.5a.5.5,0,0,1,.5-.5h3.54a.5.5,0,0,1,.5.5v.5H9.73Zm7.58,15.92a1.5,1.5,0,0,1-1.5,1.46H8.19a1.5,1.5,0,0,1-1.5-1.46L6.26,5.06H17.74Z"}},{tag:"path",attr:{d:"M8.375,8h0a.5.5,0,0,1,1,0l.25,10a.5.5,0,0,1-1,0Z"}},{tag:"path",attr:{d:"M15.625,8.007a.5.5,0,0,0-1,0h0l-.25,10a.5.5,0,0,0,1,0Z"}}]}]}]})(t)}u.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;const N=u(I)`
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
`;const x=u.p`
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
`,_=u.button`
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
`,H=()=>{const{blogId:t}=b(),[e,n]=f.useState(null),r=O();f.useEffect(()=>{(async()=>{try{const c=await r(v(t));n(c.payload)}catch(c){console.log(c)}})()},[r,t]);const a=s=>{r(j(s)),E.Notify.failure("Блог видалено")};return e?o.jsxs(o.Fragment,{children:[o.jsx(m,{to:{pathname:"/home"},children:o.jsx(_,{type:"button",children:"Повернутися"})}),o.jsxs(B,{title:e.name,children:[o.jsxs(x,{children:["Опис:",e.about]}),o.jsxs(x,{children:["Телефон:",e.phone]}),o.jsx(m,{to:{pathname:"/home"},children:o.jsx(N,{type:"button",size:24,onClick:()=>a(e.id)})})]},e.id)]}):o.jsx(w,{})};export{H as default};
