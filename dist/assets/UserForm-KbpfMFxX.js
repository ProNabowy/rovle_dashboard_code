import{r as o,A as p,G as m,j as s,D as x,p as h}from"./index-T_rrs4rL.js";import{I as c}from"./InputsGroup-3Y_BKlWt.js";const g=()=>{const e=new m,{setIsLoading:t}=o.useContext(p),[n,a]=o.useState([]);return o.useEffect(()=>(t(!0),e.getRoles().then(r=>a(r)).finally(r=>t(!1)),()=>{}),[]),{roles:n}};function j({formik:e,clickHandler:t,asEdit:n}){var r,l,d;const{roles:a}=g();return s.jsxs("form",{onSubmit:e.handleSubmit,className:"px-10",children:[s.jsx(c,{data:{names:["Nombre","Correo electrónico"],placeholders:["Ingresar Nombre","Ingresar Correo electrónico"],values:[(r=e.values)==null?void 0:r.user_name,(l=e.values)==null?void 0:l.user_email],onChange:e.handleChange,required:[!0,!0],nameAttr:["user_name","user_email"]}}),n?null:s.jsx(c,{data:{names:["Contraseña","Confirmación de contraseña"],placeholders:["Ingresar Password","Ingresar Confirmación de contraseña"],onChange:e.handleChange,required:[!0,!0],nameAttr:["user_password","user_password_confirmation"],types:["password","password"]}}),s.jsxs("div",{className:"mb-8",children:[s.jsx("h2",{className:"text-[18px] text-[#252525] font-medium",children:"Permisos"}),s.jsx(x,{value:h(a,"id",(d=e==null?void 0:e.values)==null?void 0:d.role_id),onChange:i=>{var u;return e.setFieldValue("role_id",(u=i.target.value)==null?void 0:u.id)},options:a,optionLabel:"name",filter:!0,placeholder:"Seleccionar Permiso",className:"w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent"})]}),s.jsx("div",{className:"flex items-center justify-end mt-10",children:s.jsx("button",{type:"submit",className:"bg-[#45B8EA] text-white py-[16px] px-32 rounded-full",children:"Enviar"})})]})}export{j as U};