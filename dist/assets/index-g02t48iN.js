import{r as l,A as x,G as f,j as r,P as h}from"./index-oURgFu_2.js";import{T as y,R as b}from"./table-Tug-ghy4.js";import{T,D as N}from"./TableActions-h36uD3Fi.js";import"./inputtext.esm-xRPDbi-V.js";const a=new y,U=i=>{const s=new f,t=new N,[n,d]=l.useState([]),{setIsLoading:o}=l.useContext(x);l.useEffect(()=>(o(!0),s.getUsers().then(e=>d(e)).finally(()=>o(!1)),()=>{}),[]);const p=e=>{var m;return r.jsx("p",{className:"mb-1 capitalize text-[13px] font-medium ",children:(e==null?void 0:e.roles)&&((m=e==null?void 0:e.roles[0])==null?void 0:m.name)})},c=e=>r.jsx(T,{path:`/groups/users/edit-user?id=${e==null?void 0:e.id}`,handelDeleteFunction:t.deleteUser,rowData:e,editKey:"dashboard.users.update",deleteKey:"dashboard.users.destroy",PagePermissionKey:"Users",state:d,list:n}),u=[{field:"id",header:"ID",classNames:"!px-[15px]",tamplate:a.idBodyTemplate},{field:"name",header:"Nombre",classNames:"!px-[0px]",tamplate:a.nameBodyTemplate},{field:"email",header:"Correo electrónico",classNames:"!px-[15px]",tamplate:a.emailBodyTemplate},{field:"name",header:"Rol",classNames:"!px-[15px]",tamplate:p},{field:"updated_at",header:"Fecha de finalización",classNames:"!px-[15px]",tamplate:a.lastDateBodyTemplate},{field:"actions",header:"Acción",classNames:"!px-[15px]",tamplate:c}];return{users:n,columns:u}};function R(){const{users:i,columns:s}=U(),t=l.useRef();return r.jsx(h,{url:"add-user",title:"Miembros del equipo",showActions:!0,PermissionsKey:"Users",roleKey:"dashboard.users.store",columns:s,list:i,table:t,saveName:"Users",children:r.jsx(b,{columns:s,table:t,list:i})})}export{R as default};
