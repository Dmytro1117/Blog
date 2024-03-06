import{n as e,L as x,u as p,j as t,r as l,f as m,a as c}from"./index-YpftBxkN.js";import{u as r,a as d,S as a,B as g}from"./BlogForm-CKLT_h-T.js";const h=e(x)`
  text-decoration: none;
  color: #191d1e;

  &:hover {
    color: rgba(31, 166, 224, 0.837);
  }
`,f=e.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`,j=e.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`,u=()=>{const{items:i}=r(o=>o.blog),n=p();return i.length===0?t.jsx("p",{children:"Постів ще не створено"}):t.jsx(f,{children:i.map(({id:o,name:s})=>t.jsx(h,{to:`/details/${o}`,state:{from:n},children:t.jsx(j,{children:s})},o))})},w=e.div`
  color: rgba(31, 166, 224, 0.837);
  display: flex;
  flex-direction: column;
  align-items: center;
`,b=e.h1`
  font-size: 42px;
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 32px;
    font-weight: 500;
    margin-top: 8px;
    margin-bottom: 4px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 38px;
    margin-top: 12px;
    margin-bottom: 6px;
  }
`,B=()=>{const i=d(),{isLoading:n,error:o}=r(s=>s.blog);return l.useEffect(()=>{i(m())},[i]),t.jsxs(w,{children:[t.jsx(b,{children:"Блог"}),t.jsx(a,{title:"Додати новий пост:",children:t.jsx(g,{})}),n&&!o&&t.jsx(c,{}),t.jsx(a,{title:"Список постів:",children:t.jsx(u,{})})]})};export{B as default};
