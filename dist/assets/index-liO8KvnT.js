import{r,A as p,u as g,l as m,S as x,j as u,P}from"./index-UqVmnRqZ.js";import{P as S}from"./ProductsForm-xmDFzZKI.js";const h=()=>{const e=new x,{setIsLoading:t}=r.useContext(p),l=g(),d=f=>{var i,c;const o={...f};return o.origins=(i=o==null?void 0:o.origins)==null?void 0:i.map(s=>(s==null?void 0:s.id)||s),o.coffeeShops=(c=o==null?void 0:o.coffeeShops)==null?void 0:c.map(s=>(s==null?void 0:s.id)||s),t(!0),e.addProduct(o,l).finally(s=>t(!1))},[n,A]=r.useState({commercial_name:"",code:"",trade_name:"",region:"",farm:"",sca_score:80,altitude:1e3,process:"",grades:"",provider_id:"",stock:"",description:"",presentations:[],origins:[],coffeeShops:[]}),a=m({initialValues:{...n},onSubmit:d});return r.useEffect(()=>(a.setValues(n),()=>{}),[]),{formik:a}};function k(){const{formik:e}=h();return u.jsx(P,{title:"Formulario de Producto",showActions:!1,children:u.jsx(S,{formik:e})})}export{k as default};
