import{r as i,A as d,l as c,u as l,o as u,S as f,j as s,P as m}from"./index-T_rrs4rL.js";import{O as p}from"./OffeerForm-B1xn8lLy.js";import"./inputtext.esm-Gfc0nUNZ.js";const _=e=>{const t=new f,{setIsLoading:a}=i.useContext(d),o=c({initialValues:{name:"",provider_id:"",description:"",level_id:"",activation_method:"",activation_amount:"",discount:"",duration:"",start_date:"",end_date:"",offer_place:"",discount_type:""}}),n=l(),r=u(()=>(a(!0),t.addOffeer(o.values,n).finally(v=>a(!1))));return{formik:o,clickHandler:r}};function j(){const{formik:e,clickHandler:t}=_();return s.jsx(m,{title:"Formulario de oferta",showActions:!1,children:s.jsx(p,{formik:e,clickHandler:t})})}export{j as default};