import{u as c,r as m,A as u,l as d,o as h,S as p,j as e,P as x,I as i}from"./index-oURgFu_2.js";const g=()=>{const a=new p,n=c(),{setIsLoading:t}=m.useContext(u),s=d({initialValues:{name:"",weight:""}}),l=o=>(t(!0),a.addSize(o,n).finally(j=>t(!1))),r=h(o=>l(s.values));return{formik:s,clickHandler:r}};function f(){var t,s;const{formik:a,clickHandler:n}=g();return e.jsx(x,{title:"Formulario de tamaño",showActions:!1,children:e.jsxs("form",{onSubmit:l=>l.preventDefault(),autoComplete:"off",children:[e.jsxs("div",{className:"p-3 sm:p-10 py-4",children:[e.jsx("label",{htmlFor:"name-input",className:"mb-3 block text-[#234486]",children:"Personaje"}),e.jsx(i,{type:"text",id:"name-input",name:"name",onChange:a.handleChange,value:(t=a.values)==null?void 0:t.name,placeholder:"Ingresar Personaje"})]}),e.jsxs("div",{className:"p-3 sm:p-10 pt-4",children:[e.jsx("label",{htmlFor:"weight",className:"mb-3 block text-[#234486]",children:"Peso"}),e.jsx(i,{type:"number",id:"weight",name:"weight",value:(s=a.values)==null?void 0:s.weight,onChange:a.handleChange,placeholder:"Ingresar Peso"})]}),e.jsx("div",{className:"flex-end-container",children:e.jsx("button",{onClick:n,type:"submit",className:"min-btn",children:"Enviar"})})]})})}export{f as default};