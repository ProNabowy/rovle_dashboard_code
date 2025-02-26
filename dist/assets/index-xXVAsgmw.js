import{i as S,r as i,u as _,h as C,A,G as F,l as W,g as j,S as E,R,j as a,F as G,z,P as M,D as k,I as q}from"./index-ucQm_BBe.js";const V=()=>{var p,d,h;const s=S().search.slice(4),[f,l]=i.useState([]),n=new F,g=new E,b=_(),c=C({initialValues:{presentations:[]}});i.useEffect(()=>(c.setValues({presentations:[]}),()=>{}),[]);const[r,m]=i.useState({}),{setIsLoading:x}=i.useContext(A);i.useEffect(()=>(x(!0),n.getSingleSubscription(s).then(e=>(m(e),e)).then(e=>n.getProductsByProviderId(e.plan.provider_id).then(o=>l(o))).finally(e=>x(!1)),()=>{}),[]);const v=(e,o)=>parseInt(o)<parseInt(r==null?void 0:r.total)?j.warning("Advertencia","the Packages Must be the same of the total or more than the total of  subscription Packages"):(x(!0),g.acceptSubscription(s,e,b).finally(t=>x(!1))),w=(h=(d=(p=c.values)==null?void 0:p.presentations)==null?void 0:d.map(e=>(e==null?void 0:e.weight)*(e==null?void 0:e.units)))==null?void 0:h.reduce((e,o)=>e+o,0),N=W(()=>{var e;return v((e=c.values)==null?void 0:e.presentations,w)});return i.useEffect(()=>{var e;if(r){const o=(e=r==null?void 0:r.presentations)==null?void 0:e.map(t=>({...t,units:parseInt(t==null?void 0:t.quantity),weight:t==null?void 0:t.weight,commercial_name:"",presentation_id:t==null?void 0:t.presentation_id,id:t==null?void 0:t.id}));c.setFieldValue("presentations",o)}return()=>{}},[r]),{formik:c,subscriptionItem:r,totalWeightOfPersentations:w,clickHandler:N,products:f}},D=(u,s,f)=>{const[l,n]=i.useState({}),[g,b]=i.useState({}),c=i.useRef(),[r,m]=i.useState(1),[x,v]=i.useState({weight:"",id:"",units:0,commercial_name:""});return{setAddNewPackage:v,inputWeightRef:c,handelAddNewPackage:()=>{var p,d;!(l!=null&&l.commercial_name)||!((p=c.current)!=null&&p.value)||!x.weight?j.warning("Advertencia","Por favor, completa los campos requeridos."):(u.setFieldValue("presentations",[...(d=u.values)==null?void 0:d.presentations,{...x,id:r}]),m(h=>h+1),c.current.value="",j.success("Bien","Paquete añadido con éxito."))},removePackage:p=>{var d,h;return(h=(d=u.values)==null?void 0:d.presentations)==null?void 0:h.filter(e=>+e.id!=+p)},selectedProduct:l,setSelectProduct:n,selectedWeight:g,setSelectWeight:b}};function L({formik:u,removePackage:s}){var f,l;return a.jsx("div",{className:"col-span-12 md:col-span-6",children:a.jsx("div",{className:"border border-[#252525] p-3 sm:p-8 rounded-md md:rounded-[20px] h-full max-h-[270px] overflow-y-auto add-package",children:(l=(f=u.values)==null?void 0:f.presentations)==null?void 0:l.map((n,g)=>a.jsxs("div",{id:n.id,className:"flex items-center justify-between p-2 sm:p-3 rounded-[5px] border border-[#252525] mb-3 sm:mb-5",children:[a.jsxs("div",{children:[a.jsx("p",{className:"font-medium text-[#252525] mb-3 line-clamp-2",children:n==null?void 0:n.commercial_name}),a.jsxs("p",{className:"font-medium text-[#252525] line-clamp-2",children:[" ",n==null?void 0:n.units," x ",n==null?void 0:n.weight," Gr"]})]}),a.jsx(G,{icon:z,onClick:b=>u.setFieldValue("presentations",s(n.id)),className:"text-[#252525] text-[20px] cursor-pointer"})]},g))})})}const $=R.memo(L);function B(){var N,p,d,h,e;const{formik:u,subscriptionItem:s,totalWeightOfPersentations:f,clickHandler:l,products:n}=V(),{setAddNewPackage:g,inputWeightRef:b,handelAddNewPackage:c,removePackage:r,selectedProduct:m,setSelectProduct:x,selectedWeight:v,setSelectWeight:w}=D(u,s==null?void 0:s.total);return a.jsxs(M,{title:`Gestionar paquetes ( ${(N=s==null?void 0:s.user)==null?void 0:N.name} / ${(d=(p=s==null?void 0:s.plan_size)==null?void 0:p.size)==null?void 0:d.weight} = ${s==null?void 0:s.price} )`,showActions:!1,children:[a.jsxs("div",{className:"grid grid-cols-12 gap-3 sm:gap-10 p-3 sm:p-4 sm:px-10",children:[a.jsxs("form",{onSubmit:o=>o.preventDefault(),autoComplete:"off",className:"col-span-12 md:col-span-6",children:[a.jsxs("div",{className:"mb-4 sm:mb-8",children:[a.jsx("label",{className:"label",children:"Nombre del Producto"}),a.jsx(k,{value:m,onChange:o=>{g(t=>{var P;return{...t,commercial_name:(P=o.value)==null?void 0:P.commercial_name}}),x(o.value)},filter:!0,emptyFilterMessage:"No hay opciones disponibles",emptyMessage:"No hay opciones disponibles",options:n,optionLabel:"commercial_name",panelClassName:"max-w-full",placeholder:"Seleccionar Producto",className:"w-full p-2 relative !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent"})]}),a.jsxs("div",{className:"mb-4 sm:mb-8",children:[a.jsx("label",{htmlFor:"weight",className:"label",children:"Peso / Gr "}),a.jsx(k,{value:v,onChange:o=>{g(t=>{var P,y;return{...t,weight:(P=o.value)==null?void 0:P.weight,presentationId:(y=o.value)==null?void 0:y.id}}),w(o.value)},emptyFilterMessage:"No hay opciones disponibles",emptyMessage:"No hay opciones disponibles",filter:!0,options:m==null?void 0:m.presentations,optionLabel:"weight",placeholder:"Seleccionar Peso",className:"w-full p-2 !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent"})]}),a.jsxs("div",{className:"mb-4 sm:mb-8",children:[a.jsx("label",{htmlFor:"Quantity",className:"label",children:"Cantidad"}),a.jsx(q,{ref:b,onChange:o=>g(t=>({...t,units:o.target.value})),type:"number",id:"Quantity",placeholder:"Cantidad"})]}),a.jsx("button",{type:"button",onClick:c,className:"bg-[#58291E] sm:text-[20px] text-center text-white font-medium w-full py-2 md:py-[16px] px-3 md:px-[24px] rounded-md md:rounded-full",children:"Agregar paquete"})]}),a.jsx($,{formik:u,selectedProduct:m,removePackage:r})]}),a.jsxs("div",{className:"flex flex-col items-end justify-center px-3 sm:px-10 mt-3 mb-5 sm:mb-10",children:[a.jsxs("h3",{className:"sm:text-[24px] text-[#58291E] mb-10 sm:mb-24",children:[f," / ",(e=(h=s==null?void 0:s.plan_size)==null?void 0:h.size)==null?void 0:e.weight," Gr"]}),a.jsx("button",{onClick:l,type:"submit",className:"min-btn",children:"Enviar"})]})]})}export{B as default};
