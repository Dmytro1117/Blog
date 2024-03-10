import{r as a,f as n,j as t}from"./index-B1MW1kmf.js";import{a as p,u as m}from"./hooks-Z6N-1SYi.js";import{S as x,B as c}from"./BlogForm-DHFdoH3c.js";import{n as i,L as d}from"./Loader-E8xeWz7N.js";const l=i.div`
  color: rgba(31, 166, 224, 0.837);
  display: flex;
  flex-direction: column;
  align-items: center;
`,f=i.h1`
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
`,w=()=>{const o=p(),{isLoading:e,error:s}=m(r=>r.blog);return a.useEffect(()=>{o(n())},[o]),t.jsxs(l,{children:[t.jsx(f,{children:"Додати запис"}),e&&!s&&t.jsx(d,{}),t.jsx(x,{title:"Додати новий:",children:t.jsx(c,{})})]})};export{w as default};
