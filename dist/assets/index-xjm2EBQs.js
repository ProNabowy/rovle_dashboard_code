import{n as y,u as A,l as C,r as p,A as _,G as F,o as R,h as j,S as E,R as W,j as t,F as z,z as V,P as D,D as S}from"./index-T_rrs4rL.js";const G=()=>{var m,w,i;const e=y().search.slice(4),h=new F,l=new E,s=A(),o=C({initialValues:{presentations:[]}});p.useEffect(()=>(o.setValues({presentations:[]}),()=>{}),[]);const[n,x]=p.useState({}),{setIsLoading:r}=p.useContext(_);p.useEffect(()=>(r(!0),h.getSingleSubscription(e).then(a=>x(a)).finally(a=>r(!1)),()=>{}),[]);const b=(a,d)=>parseInt(d)!==parseInt(n==null?void 0:n.total)?j.warning("warning","the Packages Must be the same of the total subscription Packages"):(r(!0),l.acceptSubscription(e,a,s).finally(f=>r(!1))),g=(i=(w=(m=o.values)==null?void 0:m.presentations)==null?void 0:w.map(a=>(a==null?void 0:a.weight)*(a==null?void 0:a.units)))==null?void 0:i.reduce((a,d)=>a+d,0),v=R(()=>{var a;return b((a=o.values)==null?void 0:a.presentations,g)});return p.useEffect(()=>{n&&o.setFieldValue("presentations",n==null?void 0:n.presentations)},[n]),{formik:o,subscriptionItem:n,totalWeightOfPersentations:g,clickHandler:v}},L=(c,e,h)=>{const[l,s]=p.useState({}),[o,n]=p.useState({}),x=p.useRef(),[r,b]=p.useState(1),[g,v]=p.useState({weight:"",id:"",units:0,commercial_name:""});return{setAddNewPackage:v,inputWeightRef:x,handelAddNewPackage:()=>{var i,a;!(l!=null&&l.commercial_name)||!((i=x.current)!=null&&i.value)||!g.weight?j.warning("warning","Please Fill The Reqriure Inputs"):parseInt(g.units)*parseInt(g.weight)+h<=e?(c.setFieldValue("presentations",[...(a=c.values)==null?void 0:a.presentations,{...g,id:r}]),b(f=>f+1),x.current.value="",j.success("success","Package Add Successfully")):j.warning("warning","Packages more than the total size of the subscriptions")},removePackage:i=>{var a,d;return(d=(a=c.values)==null?void 0:a.presentations)==null?void 0:d.filter(f=>+f.id!=+i)},selectedProduct:l,setSelectProduct:s,selectedWeight:o,setSelectWeight:n}};function O({formik:c,removePackage:e}){var h,l;return t.jsx("div",{className:"col-span-6",children:t.jsx("div",{className:"border border-[#252525] p-[32px] rounded-[20px] h-full max-h-[270px] overflow-y-auto add-package",children:(l=(h=c.values)==null?void 0:h.presentations)==null?void 0:l.map((s,o)=>t.jsxs("div",{id:s.id,className:"flex items-center justify-between p-3 rounded-[5px] border border-[#252525] mb-5",children:[t.jsxs("div",{children:[t.jsx("p",{className:"font-medium text-[#252525] mb-3",children:s==null?void 0:s.commercial_name}),t.jsxs("p",{className:"font-medium text-[#252525]",children:[" ",s==null?void 0:s.units," x ",s==null?void 0:s.weight," gm"]})]}),t.jsx(z,{icon:V,onClick:n=>c.setFieldValue("presentations",e(s.id)),className:"text-[#252525] text-[20px] cursor-pointer"})]},o))})})}const $=W.memo(O);function H(){var m,w,i,a,d,f;const{formik:c,subscriptionItem:e,totalWeightOfPersentations:h,clickHandler:l}=G(),{setAddNewPackage:s,inputWeightRef:o,handelAddNewPackage:n,removePackage:x,selectedProduct:r,setSelectProduct:b,selectedWeight:g,setSelectWeight:v}=L(c,e==null?void 0:e.total,h);return t.jsxs(D,{title:`Gestionar paquetes ( ${(m=e==null?void 0:e.user)==null?void 0:m.name} / ${(i=(w=e==null?void 0:e.plan_size)==null?void 0:w.size)==null?void 0:i.weight} = ${e==null?void 0:e.price} )`,showActions:!1,children:[t.jsxs("div",{className:"grid grid-cols-12 gap-10 p-4 px-10",children:[t.jsxs("form",{onSubmit:u=>u.preventDefault(),className:"col-span-6",children:[t.jsxs("div",{className:"mb-8",children:[t.jsx("label",{className:"text-[18px] text-[#252525] font-medium",children:"Nombre del Producto"}),t.jsx(S,{value:r,onChange:u=>{s(N=>{var P;return{...N,commercial_name:(P=u.value)==null?void 0:P.commercial_name}}),b(u.value)},filter:!0,options:(a=e==null?void 0:e.plan)==null?void 0:a.products,optionLabel:"commercial_name",placeholder:"Seleccionar Producto",className:"w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent"})]}),t.jsxs("div",{className:"mb-8",children:[t.jsx("label",{htmlFor:"weight",className:"text-[18px] text-[#252525] font-medium",children:"Peso / gm "}),t.jsx(S,{value:g,onChange:u=>{s(N=>{var P,k;return{...N,weight:(P=u.value)==null?void 0:P.weight,presentationId:(k=u.value)==null?void 0:k.id}}),v(u.value)},filter:!0,options:r==null?void 0:r.presentations,optionLabel:"weight",placeholder:"Seleccionar Peso",className:"w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent"})]}),t.jsxs("div",{className:"mb-8",children:[t.jsx("label",{htmlFor:"Quantity",className:"text-[18px] text-[#252525] font-medium",children:"Cantidad"}),t.jsx("input",{ref:o,onChange:u=>s(N=>({...N,units:u.target.value})),type:"number",id:"Quantity",className:"p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3]",placeholder:"Cantidad"})]}),t.jsx("button",{type:"button",onClick:n,className:"bg-[#58291E] text-[20px] text-center text-white font-medium w-full py-[16px] px-[24px] rounded-full",children:"Agregar paquete"})]}),t.jsx($,{formik:c,selectedProduct:r,removePackage:x})]}),t.jsxs("div",{className:"flex flex-col items-end justify-center px-10 mt-3 mb-10",children:[t.jsxs("h3",{className:"text-[24px] text-[#58291E] mb-24",children:[h," / ",(f=(d=e==null?void 0:e.plan_size)==null?void 0:d.size)==null?void 0:f.weight," gm"]}),t.jsx("button",{onClick:l,type:"submit",className:"p-4 px-24 rounded-full text-white font-medium bg-[var(--primary-color)]",children:"Enviar"})]})]})}export{H as default};
