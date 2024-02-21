import{j as a,r as C,A as y,G as F,I as r,D as I,p as b,w as q,x as D}from"./index-oURgFu_2.js";import{R as w}from"./radiobutton.esm-DnO55RuI.js";function R({formik:e}){var i,s,c,d;return a.jsxs("div",{className:"sm:w-[48%]",children:[a.jsx("label",{className:"label block mb-4",children:"Control de inventario"}),a.jsxs("div",{className:"flex items-center",children:[a.jsxs("div",{className:"flex items-center cursor-pointer me-5",children:[a.jsx(w,{inputId:"ingredient1",name:"Yes",value:"Yes",onChange:o=>e.setFieldValue("provider_manage_stock",1),checked:((i=e.values)==null?void 0:i.provider_manage_stock)==1}),a.jsx("label",{htmlFor:"ingredient1",className:`ms-2 !mb-0 font-medium ${((s=e.values)==null?void 0:s.provider_manage_stock)==1?"text-[#28C76F]":"text-[#2525256d]"}`,children:"Sí"})]}),a.jsxs("div",{className:"flex items-center cursor-pointer",children:[a.jsx(w,{inputId:"ingredient2",name:"No",value:"No",onChange:o=>e.setFieldValue("provider_manage_stock",0),checked:((c=e.values)==null?void 0:c.provider_manage_stock)==0}),a.jsx("label",{htmlFor:"ingredient2",className:`ms-2 !mb-0 font-medium ${((d=e.values)==null?void 0:d.provider_manage_stock)==0?"text-[#28C76F]":"text-[#2525256d]"}`,children:"No"})]})]})]})}const S=e=>{const i=new F,{setIsLoading:s}=C.useContext(y),[c,d]=C.useState([]),o=l=>{var t,u,h;return((u=(t=l==null?void 0:l.target)==null?void 0:t.value)==null?void 0:u.length)===5?i.getCitiesByZipCode((h=l==null?void 0:l.target)==null?void 0:h.value).then(n=>{var v,p,_,x,m,g,N,j;d(n),e.setFieldValue("provider_province_id",(_=(p=(v=n==null?void 0:n[0])==null?void 0:v.provinces)==null?void 0:p[0])==null?void 0:_.id),e.setFieldValue("provider_city_id",(j=(N=(g=(m=(x=n==null?void 0:n[0])==null?void 0:x.provinces)==null?void 0:m[0])==null?void 0:g.cities)==null?void 0:N[0])==null?void 0:j.id)}):null};return C.useEffect(()=>(s(!0),i.getCountries().then(l=>{var t;d(l),e.setFieldValue("provider_country_id",(t=l==null?void 0:l[0])==null?void 0:t.id)}).finally(l=>s(!1)),()=>{}),[]),{countries:c,handleBlur:o}};function z({formik:e,isRenderPassword:i}){var d,o,l,t,u,h,n,v,p,_,x,m,g;const{countries:s,handleBlur:c}=S(e);return a.jsxs("form",{onSubmit:e.handleSubmit,autoComplete:"off",className:"px-10",children:[a.jsxs("div",{className:"flex-container",children:[a.jsxs("div",{className:"w-full sm:w-[48%]",children:[a.jsx("label",{htmlFor:"user_name",className:"label",children:"Nombre"}),a.jsx(r,{value:(d=e==null?void 0:e.values)==null?void 0:d.user_name,name:"user_name",type:"text",required:!0,onChange:e.handleChange,id:"user_name",placeholder:"Ingresar Nombre"})]}),a.jsxs("div",{className:"w-full sm:w-[48%]",children:[a.jsx("label",{htmlFor:"user_email",className:"label",children:"Correo electrónico"}),a.jsx(r,{value:(o=e==null?void 0:e.values)==null?void 0:o.user_email,name:"user_email",type:"email",required:!0,onChange:e.handleChange,id:"user_email",placeholder:"Ingresar Correo electrónico"})]})]}),i?a.jsxs("div",{className:"flex-container",children:[a.jsxs("div",{className:"w-full sm:w-[48%]",children:[a.jsx("label",{htmlFor:"user_password",className:"label",children:"Contraseña"}),a.jsx(r,{value:(l=e==null?void 0:e.values)==null?void 0:l.user_password,name:"user_password",type:"password",required:!0,onChange:e.handleChange,id:"user_password",placeholder:"Ingresar Contraseña"})]}),a.jsxs("div",{className:"w-full sm:w-[48%]",children:[a.jsx("label",{htmlFor:"user_password_confirmation",className:"label",children:"Confirmación de contraseña"}),a.jsx(r,{value:(t=e==null?void 0:e.values)==null?void 0:t.user_password_confirmation,name:"user_password_confirmation",type:"password",required:!0,onChange:e.handleChange,id:"user_password_confirmation",placeholder:"Ingresar Confirmación de contraseña"})]})]}):null,a.jsxs("div",{className:"flex-container",children:[a.jsxs("div",{className:"w-full sm:w-[48%]",children:[a.jsx("label",{htmlFor:"provider_nif",className:"label",children:"NIF"}),a.jsx(r,{value:(u=e==null?void 0:e.values)==null?void 0:u.provider_nif,name:"provider_nif",type:"text",required:!0,onChange:e.handleChange,id:"provider_nif",placeholder:"Ingresar NIF"})]}),a.jsxs("div",{className:"w-full sm:w-[48%]",children:[a.jsx("label",{htmlFor:"provider_commercial_name",className:"label",children:"Confirmación Commercial Name"}),a.jsx(r,{value:(h=e==null?void 0:e.values)==null?void 0:h.provider_commercial_name,name:"provider_commercial_name",type:"text",required:!0,onChange:e.handleChange,id:"provider_commercial_name",placeholder:"Ingresar Confirmación Commercial Name"})]})]}),a.jsxs("div",{className:"flex-container",children:[a.jsxs("div",{className:"w-full sm:w-[48%]",children:[a.jsx("label",{htmlFor:"provider_official_name",className:"label",children:"Nombre oficial"}),a.jsx(r,{value:(n=e==null?void 0:e.values)==null?void 0:n.provider_official_name,name:"provider_official_name",type:"text",required:!0,onChange:e.handleChange,id:"provider_official_name",placeholder:"Ingresar Nombre oficial"})]}),a.jsxs("div",{className:"w-full sm:w-[48%]",children:[a.jsx("label",{htmlFor:"provider_address",className:"label",children:"Dirección"}),a.jsx(r,{value:(v=e==null?void 0:e.values)==null?void 0:v.provider_address,name:"provider_address",type:"text",required:!0,onChange:e.handleChange,id:"provider_address",placeholder:"Ingresar Confirmación Dirección"})]})]}),a.jsxs("div",{className:"flex-container",children:[a.jsxs("div",{className:"w-full sm:w-[48%]",children:[a.jsx("label",{htmlFor:"provider_zip",className:"label",children:"Código postal"}),a.jsx(r,{onChange:e.handleChange,onBlur:c,value:(p=e.values)==null?void 0:p.provider_zip,name:"provider_zip",type:"text",required:!0,min:5,max:5,maxLength:5,minLength:5,id:"provider_zip",placeholder:"Ingresar Código postal"})]}),a.jsxs("div",{className:"w-full sm:w-[48%]",children:[a.jsx("label",{htmlFor:"provider_phone",className:"label",children:"Teléfono"}),a.jsx(r,{onChange:e.handleChange,value:(_=e.values)==null?void 0:_.provider_phone,name:"provider_phone",type:"text",required:!0,id:"provider_phone",placeholder:"Ingresar Teléfono"})]})]}),a.jsxs("div",{className:"flex-container",children:[a.jsxs("div",{className:"w-full sm:w-[48%]",children:[a.jsx("h2",{className:"label",children:"País"}),a.jsx(I,{value:b(s,"id",(x=e==null?void 0:e.values)==null?void 0:x.provider_country_id),onChange:N=>{var j;return e.setFieldValue("provider_country_id",(j=N.target.value)==null?void 0:j.id)},options:s,optionLabel:"name",filter:!0,placeholder:"Seleccionar País",className:"w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent"})]}),a.jsx(q,{formik:e,countries:s,country_Key:"provider_country_id",province_Key:"provider_province_id"})]}),a.jsxs("div",{className:"flex-container",children:[a.jsx(D,{formik:e,provinces:(g=b(s,"id",(m=e==null?void 0:e.values)==null?void 0:m.provider_country_id))==null?void 0:g.provinces,province_Key:"provider_province_id",city_Key:"provider_city_id"}),a.jsx(R,{formik:e})]}),a.jsx("button",{type:"submit",className:"min-btn block !mt-10 ml-auto",children:"Enviar"})]})}export{z as R};
