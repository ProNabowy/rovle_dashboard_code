import{r as d,u,A as m,l as p,G as b,o as x,S as h,j as e,P as g,D as v,p as f,I as j}from"./index-UqVmnRqZ.js";const N=()=>{const[s,r]=d.useState([]),l=new h,n=new b,o=u(),{setIsLoading:t}=d.useContext(m),a=p({initialValues:{name:"",provider_id:""}});d.useEffect(()=>(t(!0),n.getRoasters().then(i=>r(i)).finally(i=>t(!1)),()=>{}),[]);const c=x(i=>(t(!0),l.addOrigin(a.values,o)));return{formik:a,roasters:s,clickHandler:c}};function C(){var n,o;const{formik:s,roasters:r,clickHandler:l}=N();return e.jsx(g,{title:"Formulario de Orígenes",showActions:!1,PermissionsKey:"Origins",roleKey:"Add",children:e.jsxs("form",{onSubmit:t=>t.preventDefault(),children:[e.jsxs("div",{className:"p-10 pb-4",children:[e.jsx("label",{className:"mb-3 block text-[#234486]",children:"Tostadores"}),e.jsx(v,{filter:!0,value:f(r,"id",(n=s==null?void 0:s.values)==null?void 0:n.provider_id),name:"provider_id",onChange:t=>{var a;return s.setFieldValue("provider_id",(a=t.target.value)==null?void 0:a.id)},options:r,optionLabel:"commercial_name",placeholder:"Seleccionar Tostador",className:"w-full p-3 !border-r-[0] !border-l-[0] !border-t-[0] !border-b !border-b-[#b3b3b3] !shadow-none !rounded-none"})]}),e.jsxs("div",{className:"p-10 pt-4",children:[e.jsx("label",{htmlFor:"name-input",className:"mb-3 block text-[#234486]",children:"Nombre"}),e.jsx(j,{type:"text",name:"name",value:(o=s.values)==null?void 0:o.name,onChange:s.handleChange,placeholder:"Ingresar Nombre del Origen"})]}),e.jsx("div",{className:"flex-end-container",children:e.jsx("button",{type:"submit",onClick:l,className:"min-btn",children:"Enviar"})})]})})}export{C as default};
