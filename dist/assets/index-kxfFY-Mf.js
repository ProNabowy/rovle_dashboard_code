import{r as n,A as a,u as i,l as d,h as m,S as c,j as t,P as u}from"./index-T_rrs4rL.js";import{U as f}from"./UserForm-KbpfMFxX.js";import"./InputsGroup-3Y_BKlWt.js";const p=()=>{const s=new c,{setIsLoading:o}=n.useContext(a),e=i();return{formik:d({initialValues:{user_name:"",user_password:"",user_password_confirmation:"",user_email:"",role_id:""},onSubmit:r=>(r==null?void 0:r.user_password)!==(r==null?void 0:r.user_password_confirmation)||!r.user_password?m.warning("Advertencia","La contraseña y la confirmación de contraseña deben ser iguales."):(o(!0),s.addUser(r,e).finally(w=>o(!1)))})}};function U(){const{formik:s}=p();return t.jsx(u,{title:"Formulario de usuario",showActions:!1,children:t.jsx(f,{formik:s})})}export{U as default};
