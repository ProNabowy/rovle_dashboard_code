import{r as n,n as A,g as I,j as a,F as f,z as R,I as g,A as E,i as V,G as q,D,a1 as W,y as O}from"./index-ucQm_BBe.js";const B=(e,x,u)=>{const h=n.useRef(),l=n.useRef(),c=n.useRef(),[t,C]=n.useState(0),j=A(x,"id",u),[i,r]=n.useState({weight:"",price:"",id:"",provider_id:u});return{inputWeightRef:h,inputQuntiyRef:c,addNewPackage:i,setAddNewPackage:r,inputPriceRef:l,handelAddNewPackage:()=>{var o,s,w,m,F;!h.current.value||!l.current.value?I.warning("Advertencia","Por favor, completa los campos requeridos."):((s=(o=e==null?void 0:e.values)==null?void 0:o.presentations)==null?void 0:s.some(p=>parseInt(p.weight)===parseInt(i.weight)&&parseInt(p.price)===parseInt(i.price)))?I.warning("Advertencia","Por favor, no agregues un paquete duplicado"):j!=null&&j.manage_stock&&!((w=c.current)!=null&&w.value)?I.warning("Advertencia","Por favor, completa el campo de cantidad."):(i.id=t,e.setFieldValue("presentations",[...(m=e==null?void 0:e.values)==null?void 0:m.presentations,{...i,provider_id:u}]),C(p=>p+1),h.current.value="",l.current.value="",(F=c.current)!=null&&F.value&&(c.current.value=""),I.success("Bien","Paquete añadido con éxito."))},removePackage:o=>{var s,w;return(w=(s=e==null?void 0:e.values)==null?void 0:s.presentations)==null?void 0:w.filter(m=>+m.id!=+o)},roasters:x}};function G({formik:e,removePackage:x}){var u,h;return a.jsx("div",{className:"col-span-12 md:col-span-6",children:a.jsx("div",{className:"border border-[#252525] p-2 sm:p-[32px] rounded-md sm:rounded-[20px] h-full max-h-[270px] overflow-y-auto add-package",children:(h=(u=e==null?void 0:e.values)==null?void 0:u.presentations)==null?void 0:h.map((l,c)=>a.jsxs("div",{id:l.id,className:"flex items-center justify-between p-3 rounded-[5px] border border-[#252525] mb-3 sm:mb-5",children:[a.jsxs("p",{className:"font-medium text-[#252525] text-[14px] sm:text-base",children:[l.price," Euro por ",l.weight," gr"]}),a.jsx(f,{icon:R,onClick:t=>e.setFieldValue("presentations",x(l.id)),className:"text-[#252525] text-[20px] cursor-pointer"})]},c))})})}function K({formik:e,roasters:x,provider_id:u}){var r;const{inputWeightRef:h,inputQuntiyRef:l,setAddNewPackage:c,inputPriceRef:t,handelAddNewPackage:C,removePackage:j,addNewPackage:i}=B(e,x,u);return a.jsxs("div",{className:"rounded-md sm:rounded-[20px] mt-5 sm:mt-20 border border-[#252525] p-3 sm:p-[32px] grid grid-cols-12 gap-3 md:gap-10",children:[a.jsxs("form",{onSubmit:d=>d.preventDefault(),autoComplete:"off",className:"col-span-12 md:col-span-6",children:[a.jsxs("div",{className:"mb-5 sm:mb-8",children:[a.jsx("label",{htmlFor:"Weight /gm",className:"label",children:"Peso"}),a.jsx(g,{type:"number",ref:h,placeholder:"Ingresar Peso /gr",value:parseFloat(i.weight),onChange:d=>{parseFloat(d.target.value)<0||c(o=>({...o,weight:d.target.value}))},id:"Weight /gm"})]}),a.jsxs("div",{className:"mb-5 sm:mb-8",children:[a.jsx("label",{htmlFor:"PriceEuro",className:"label",children:"Precio"}),a.jsx(g,{type:"number",ref:t,placeholder:"Ingresar Precio /Euro",value:parseFloat(i.price),onChange:d=>{parseFloat(d.target.value)<0||c(o=>({...o,price:d.target.value}))},id:"PriceEuro"})]}),(r=A(x,"id",u))!=null&&r.manage_stock?a.jsxs("div",{className:"mb-8",children:[a.jsx("label",{htmlFor:"Units",className:"label",children:"Cantidad"}),a.jsx(g,{type:"number",ref:l,placeholder:"Cantidad",onChange:d=>c(N=>({...N,units:d.target.value})),id:"Units"})]}):null,a.jsx("button",{type:"button",onClick:C,className:"bg-[#58291E] sm:text-[20px] text-center text-white font-medium w-full py-2 sm:py-[16px] px-4 sm:px-[24px] rounded-md sm:rounded-full",children:"Añadir Paquete"})]}),a.jsx(G,{formik:e,removePackage:j})]})}const L=(e,x,u)=>{const h=new q,[l,c]=n.useState([]),[t,C]=n.useState({}),[j,i]=n.useState([]),[r,d]=n.useState({}),{setIsLoading:N,user:o}=n.useContext(E),s=o==null?void 0:o.provider,[w,m]=n.useState([]);n.useEffect(()=>{N(!0),h.getRoasters().then(p=>c(p)).finally(p=>N(!1))},[]),n.useEffect(()=>{var p;if((p=e.values)!=null&&p.provider_id){const b=l==null?void 0:l.filter(y=>{var v;return y.id==((v=e.values)==null?void 0:v.provider_id)});d(b==null?void 0:b[0])}s&&!(t!=null&&t.provider_id)?(i(s),d(s),m(s==null?void 0:s.coffee_shops),e.setFieldValue("provider_id",s==null?void 0:s.id)):i(l)},[l]);const P=V().search.slice(-4)==="true";return n.useEffect(()=>{m(r==null?void 0:r.coffee_shops),e.setFieldValue("provider_id",r==null?void 0:r.id)},[r]),n.useEffect(()=>(e.setFieldValue("origins",x),()=>{}),[x]),n.useEffect(()=>(e.setFieldValue("presentations",u),()=>{}),[u]),n.useEffect(()=>((t==null?void 0:t.provider_id)&&h.getRoasters().then(b=>{var y;if(c(b),s){const v=(y=b==null?void 0:b.filter(_=>(_==null?void 0:_.id)===(s==null?void 0:s.id)))==null?void 0:y[0];i(v),d(v),m(v==null?void 0:v.coffee_shops)}}),()=>{}),[t]),{isByNewOWner:P,coffee:w,selectedProvider:r,setSelectedProvider:d,rosters:j,isProvider:s,setAddedShops:C,allRoasters:l,addedShops:t}};function U({formik:e,originsList:x,packagesList:u}){var N,o,s,w,m,F,P,p,b,y,v;const{coffee:h,isByNewOWner:l,isProvider:c,selectedProvider:t,setSelectedProvider:C,rosters:j,allRoasters:i,setAddedShops:r,addedShops:d}=L(e,x,u);return a.jsxs("form",{onSubmit:e.handleSubmit,autoComplete:"off",className:"px-2 sm:px-10 add-product",children:[a.jsxs("div",{className:"flex-container",children:[l?a.jsxs("div",{className:`${c?"w-full":"w-full sm:w-[48%]"}`,children:[a.jsx("label",{htmlFor:"factor",className:"label",children:"Nombre del proveedor"}),a.jsx(g,{required:!0,value:(N=e==null?void 0:e.values)==null?void 0:N.owner_name,name:"owner_name",type:"text",onChange:e.handleChange,id:"factor",placeholder:"Ingresa el nombre del propietario."})]}):null,c?null:a.jsxs("div",{className:`w-full sm:w-[48%] ${l?"":"flex-1"}`,children:[a.jsx("label",{htmlFor:"owner",className:"label",children:"Tostador"}),a.jsx(D,{value:t,onChange:_=>{var S;return C(A(j,"id",(S=_.target.value)==null?void 0:S.id))},options:j,optionLabel:"commercial_name",inputId:"owner",emptyFilterMessage:"No hay opciones disponibles",emptyMessage:"No hay opciones disponibles",filter:!0,placeholder:"Seleccionar Tostador",className:"w-full p-2  !shadow-none !rounded-none border-[#b3b3b3] !border-t-transparent !border-l-transparent !border-r-transparent"})]})]}),a.jsxs("div",{className:"flex-container",children:[a.jsxs("div",{className:"w-full sm:w-[48%]",children:[a.jsx("label",{htmlFor:"commercial_name",className:"label",children:"Nombre del Producto"}),a.jsx(g,{value:(o=e==null?void 0:e.values)==null?void 0:o.commercial_name,name:"commercial_name",type:"text",required:!0,onChange:e.handleChange,id:"commercial_name",placeholder:"Este será el nombre que aparecerá en el listado en el shop."})]}),a.jsxs("div",{className:"w-full sm:w-[48%]",children:[a.jsx("label",{htmlFor:"code",className:"label",children:"Código"}),a.jsx(g,{onChange:e.handleChange,value:(s=e==null?void 0:e.values)==null?void 0:s.code,name:"code",type:"text",id:"code",placeholder:"Ingresar Código"})]})]}),a.jsx(W,{classNames:"!w-full mb-8",formik:e,provider_id:(w=e.values)==null?void 0:w.provider_id}),a.jsxs("div",{className:"mb-8",children:[a.jsx("label",{htmlFor:"Region",className:"label",children:"Región"}),a.jsx(g,{value:(m=e==null?void 0:e.values)==null?void 0:m.region,name:"region",type:"text",onChange:e.handleChange,id:"Region",placeholder:"Ingresar Región"})]}),a.jsxs("div",{className:"flex-container",children:[a.jsxs("div",{className:"w-full sm:w-[48%]",children:[a.jsx("label",{htmlFor:"farm",className:"label",children:"Finca"}),a.jsx(g,{value:(F=e==null?void 0:e.values)==null?void 0:F.farm,name:"farm",type:"text",onChange:e.handleChange,id:"farm",placeholder:"Ingresar Finca"})]}),a.jsxs("div",{className:"w-full sm:w-[48%]",children:[a.jsx("label",{htmlFor:"sca_score",className:"label",children:"Puntuación Sca s"}),a.jsx(g,{value:(P=e==null?void 0:e.values)==null?void 0:P.sca_score,name:"sca_score",type:"number",min:80,max:100,required:!0,step:"0.01",onChange:e.handleChange,id:"sca_score",placeholder:"Ingresar Puntuación Sca s"})]})]}),a.jsxs("div",{className:"flex-container",children:[a.jsxs("div",{className:"w-full sm:w-[48%]",children:[a.jsx("label",{htmlFor:"altitude",className:"label",children:"Altitud"}),a.jsx(g,{value:(p=e==null?void 0:e.values)==null?void 0:p.altitude,name:"altitude",type:"number",min:0,max:8e3,required:!0,onChange:e.handleChange,id:"altitude",placeholder:"Ingresar Altitud"})]}),a.jsxs("div",{className:"w-full sm:w-[48%]",children:[a.jsx("label",{htmlFor:"process",className:"label",children:"Proceso"}),a.jsx(g,{value:(b=e==null?void 0:e.values)==null?void 0:b.process,name:"process",type:"text",onChange:e.handleChange,id:"process",placeholder:"Ingresar Proceso"})]})]}),a.jsxs("div",{className:"mb-8",children:[a.jsx("label",{htmlFor:"Variedad",className:"label",children:"Variedad"}),a.jsx(g,{value:(y=e==null?void 0:e.values)==null?void 0:y.grades,name:"grades",type:"text",onChange:e.handleChange,id:"Variedad",placeholder:"Ingresar Variedad"})]}),a.jsx(O,{formik:e,dataKey:"coffeeShops",url:"/setups/coffee-shop/add-coffee",title:"Tiendas",pageKey:"Coffee Shops",pagePermissionKeyName:"dashboard.coffeeShops.store",options:h,stateList:r,listOfState:d}),a.jsxs(n.Fragment,{children:[a.jsx("label",{htmlFor:"Description",className:"label",children:"Descripción"}),a.jsx("textarea",{rows:5,onChange:e.handleChange,type:"text",value:(v=e==null?void 0:e.values)==null?void 0:v.description,name:"description",id:"Description",className:"p-3 w-full border rounded-[5px] mt-5 resize-none border-[#b3b3b3] placeholder:text-[#b3b3b3]",placeholder:"Ingresar Descripción"})]}),a.jsx(K,{formik:e,roasters:i,provider_id:t==null?void 0:t.id}),a.jsx("button",{type:"submit",className:"min-btn mt-5 sm:mt-10 block ml-auto",children:"Enviar"})]})}export{U as P};
