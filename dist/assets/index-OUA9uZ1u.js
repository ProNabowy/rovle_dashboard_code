import{r as a,A as f,G as h,j as i,P as z}from"./index-UqVmnRqZ.js";import{T as y,R as b}from"./table-nZ01tZuu.js";import{T,D as S}from"./TableActions-ovdqFe1o.js";import"./inputtext.esm-L6d5V8F-.js";const o=new y,g=l=>{const t=new h,s=new S,{setIsLoading:r,user:n}=a.useContext(f),c=n==null?void 0:n.provider,[d,p]=a.useState([]);a.useEffect(()=>(r(!0),t.getSizes().then(e=>p(e)).finally(e=>r(!1)),()=>{}),[]);const m=e=>i.jsx("p",{className:"mb-1 capitalize text-[13px] font-medium",children:e==null?void 0:e.weight}),u=e=>i.jsx(T,{disableEdit:!0,handelDeleteFunction:s.deleteSize,rowData:e,deleteKey:"dashboard.sizes.destroy",PagePermissionKey:"Sizes",state:p,list:d}),x=[{field:"id",header:"ID",classNames:"!px-[15px]",tamplate:o.idBodyTemplate},{field:"name",header:"Personaje",classNames:"!px-[0px]",tamplate:o.nameBodyTemplate},{field:"weight",header:"Peso",classNames:"!px-[15px]",tamplate:m},{field:"updated_at",header:"Fecha",classNames:"!px-[15px]",tamplate:o.lastDateBodyTemplate},{field:"status",header:"Acción",classNames:"!px-[15px]",tamplate:u}];return{sizes:d,provider:c,columns:x}};function B(){const{sizes:l,columns:t}=g(),s=a.useRef();return i.jsx(z,{url:"/products/plans/size/list/add-size",title:"Gestión de tamaño",showActions:!0,PermissionsKey:"Sizes",roleKey:"dashboard.sizes.store",columns:t,list:l,table:s,saveName:"Sizes",children:i.jsx(b,{columns:t,list:l,table:s})})}export{B as default};
