import{r as i,A as g,G as f,j as a,P as h}from"./index-UqVmnRqZ.js";import{T as y,R as b}from"./table-nZ01tZuu.js";import{T as x,D as T}from"./TableActions-ovdqFe1o.js";import"./inputtext.esm-L6d5V8F-.js";const n=new y,O=r=>{const[t,s]=i.useState([]),d=new f,m=new T,{setIsLoading:o}=i.useContext(g);i.useEffect(()=>(o(!0),d.getOrigins().then(e=>s(e)).finally(e=>{o(!1)}),()=>{}),[]);const c=e=>{var l;return a.jsx("p",{className:"mb-1 capitalize text-[13px] font-medium",children:(l=e==null?void 0:e.provider)==null?void 0:l.commercial_name})},p=e=>a.jsx(x,{disableEdit:!0,handelDeleteFunction:m.deleteOrigin,rowData:e,state:s,deleteKey:"dashboard.origins.destroy",PagePermissionKey:"Origins",list:t}),u=[{field:"id",header:"ID",tamplate:n.idBodyTemplate},{field:"name",header:"Nombre",tamplate:n.nameBodyTemplate},{field:"provider.commercial_name",header:"Introducido por",tamplate:c},{field:"created_at",header:"Fecha",tamplate:n.startDateBodyTemplate},{field:"status",header:"Acción",tamplate:p}];return{origins:t,columns:u}};function R(){const{origins:r,columns:t}=O(),s=i.useRef();return a.jsx(h,{url:"add-origin",title:"Todos los Orígenes",PermissionsKey:"Origins",roleKey:"dashboard.origins.store",showActions:!0,columns:t,list:r,table:s,saveName:"Origins",children:a.jsx(b,{columns:t,list:r,table:s})})}export{R as default};
