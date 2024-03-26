import{r as j,f as y,j as e,a as w,b as x,c as S}from"./index-D4tg8eQs.js";import{n as i,I as B,u as E,L as c,a as p,B as $,s as N,Z as F,S as v}from"./BlogFormStyled-DkSfp96z.js";import{a as A,u as C}from"./hooks-DDmB8bXx.js";import{n as h}from"./emotion-styled.browser.esm-BBCkfJeL.js";i.Notify.init(B);const L=()=>{const t=A(),{items:d}=C(n=>n.blog);j.useEffect(()=>{t(y())},[t]);const{register:m,handleSubmit:f,formState:{errors:o},reset:u}=E({defaultValues:{name:"",about:"",phone:""}}),g=async n=>{t(w());try{await N.parseAsync(n)}catch(r){if(r instanceof F){r.errors.forEach(b=>{i.Notify.warning(b.message)}),t(x("Не пройдена валідація"));return}}const{name:s,about:l,phone:a}=n;if(d.some(r=>r.name.toLowerCase()===s.toLowerCase()||r.phone===a)){i.Notify.warning(`${s} чи ${a} вже існує`),t(x(`${s} чи ${a} вже існує`));return}t(S({name:s,about:l,phone:a})),i.Notify.success(`${s}, ${l}, ${a} додано успішно`),u()};return e.jsxs("form",{onSubmit:f(g),autoComplete:"off",children:[e.jsxs(c,{htmlFor:"name",children:["Назва посту",e.jsx(p,{placeholder:"Введіть тему",type:"text",...m("name")})]}),o.name&&e.jsx("div",{children:o.name.message}),e.jsxs(c,{htmlFor:"about",children:["Зміст посту",e.jsx(p,{placeholder:"Напишіть свої думки",type:"text",...m("about")})]}),o.about&&e.jsx("div",{children:o.about.message}),e.jsxs(c,{htmlFor:"phone",children:["Телефон автора",e.jsx(p,{placeholder:"Введіть номер",type:"tel",...m("phone")})]}),o.phone&&e.jsx("div",{children:o.phone.message}),e.jsx($,{type:"submit",children:"Додати"})]})},z=h.div`
  color: rgba(31, 166, 224, 0.837);
  display: flex;
  flex-direction: column;
  align-items: center;
`,I=h.h1`
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
`,H=()=>e.jsxs(z,{children:[e.jsx(I,{children:"Додати запис"}),e.jsx(v,{title:"Створити новий:",children:e.jsx(L,{})})]});export{H as default};
