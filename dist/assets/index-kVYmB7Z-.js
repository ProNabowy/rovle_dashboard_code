import{r as d,A as f,G as h,j as t,P as y}from"./index-T_rrs4rL.js";import{T as b,R as T}from"./table-qFUFaJZF.js";import{T as N,D as U}from"./TableActions-1mlj127J.js";import"./inputtext.esm-Gfc0nUNZ.js";const s=new b,j=i=>{const a=new h,l=new U,[r,n]=d.useState([]),{setIsLoading:m}=d.useContext(f);d.useEffect(()=>(m(!0),a.getUsers().then(e=>n(e)).finally(()=>m(!1)),()=>{}),[]);const c=e=>t.jsx("p",{className:"mb-1 capitalize text-[13px] font-medium ",children:e.card_id}),o=e=>{var p;return t.jsx("p",{className:"mb-1 capitalize text-[13px] font-medium ",children:(e==null?void 0:e.roles)&&((p=e==null?void 0:e.roles[0])==null?void 0:p.name)})},u=e=>t.jsx(N,{path:`/groups/users/edit-user?id=${e==null?void 0:e.id}`,handelDeleteFunction:l.deleteUser,rowData:e,editKey:"dashboard.users.update",deleteKey:"dashboard.users.destroy",PagePermissionKey:"Users",state:n,list:r}),x=[{field:"id",header:"ID",classNames:"!px-[15px]",tamplate:s.idBodyTemplate},{field:"name",header:"Nombre",classNames:"!px-[0px]",tamplate:s.nameBodyTemplate},{field:"email",header:"Correo electrónico",classNames:"!px-[15px]",tamplate:s.emailBodyTemplate},{field:"address",header:"Dirección",classNames:"!px-[15px]",tamplate:s.addressBodyTemplate},{field:"card_id",header:"Identificación de tarjeta",classNames:"!px-[15px]",tamplate:c},{field:"name",header:"Rol",classNames:"!px-[15px]",tamplate:o},{field:"updated_at",header:"Fecha de finalización",classNames:"!px-[15px]",tamplate:s.lastDateBodyTemplate},{field:"actions",header:"Acción",classNames:"!px-[15px]",tamplate:u}];return{users:r,columns:x}};function K(){const{users:i,columns:a}=j(),l=d.useRef();return t.jsx(y,{url:"add-user",title:"Miembros del equipo",showActions:!0,PermissionsKey:"Users",roleKey:"dashboard.users.store",columns:a,list:i,table:l,saveName:"Users",children:t.jsx(T,{columns:a,table:l,list:i})})}export{K as default};