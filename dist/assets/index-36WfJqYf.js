import{u as h,n as x,r as t,A as g,l as w,G as z,o as k,U as v,j as f,P as A}from"./index-T_rrs4rL.js";import{P as E}from"./PlanForm-OnKvEKo3.js";import"./radiobutton.esm-AYgKJWWe.js";const j=()=>{const c=new z,u=new v,_=h(),p=x().search.slice(4),{setIsLoading:r}=t.useContext(g),i=w({initialValues:{sizes:[]}});t.useEffect(()=>(r(!0),c.getSinglePlan(p).then(s=>{var o;i.setValues({name:s==null?void 0:s.name,status:s==null?void 0:s.status,description:s==null?void 0:s.description,provider_id:s==null?void 0:s.provider_id,sizes:(o=s==null?void 0:s.sizes)==null?void 0:o.map(n=>({size_id:n.size_id,price:n==null?void 0:n.price,id:n==null?void 0:n.size_id})),products:s==null?void 0:s.products,coffee_shops:s==null?void 0:s.coffee_shops})}).finally(s=>r(!1)),()=>{}),[]);const P=k(s=>{var n,l;r(!0);const o={...i.values};return o.products=(n=o.products)==null?void 0:n.map(e=>({id:(e==null?void 0:e.id)||e})),o.coffee_shops=(l=o.coffee_shops)==null?void 0:l.map(e=>(e==null?void 0:e.id)||e),u.updatePlan(p,o).then(e=>_("/products/plans/list")).finally(e=>r(!1))});return{formik:i,clickHandler:P}};function G(){const{formik:c,clickHandler:u}=j();return f.jsx(A,{title:"Formulario de Plan",showActions:!1,children:f.jsx(E,{formik:c,clickHandler:u})})}export{G as default};
