import{j as s,r as d,A as j,G as _,a as g,Q as h,B as y,P as F}from"./index-rFxOd0i4.js";import{R as T,T as A}from"./table-VNI4Whwy.js";import{T as E,D as k}from"./TableActions-rU5F1qn8.js";import"./inputtext.esm-3DeXqsqN.js";function C({children:l,countOfEntries:u,data:r,columns:a,table:c}){return s.jsx(T,{columns:a,list:r,table:c,selectedEntries:{name:u||6}})}const v=new A,B=l=>{const u=new _,r=new k,[a,c]=d.useState([]),{setIsLoading:i}=d.useContext(j);d.useEffect(()=>(i(!0),u.getOffeers().then(e=>c(e)).finally(e=>i(!1)),()=>{}),[]);const m=a.filter(e=>(e==null?void 0:e.level_id)===1||(e==null?void 0:e.level_id)===null),n=a.filter(e=>(e==null?void 0:e.level_id)===2||(e==null?void 0:e.level_id)===null),x=a.filter(e=>(e==null?void 0:e.level_id)===3||(e==null?void 0:e.level_id)===null),o=e=>{var f;return s.jsx("p",{className:"mb-1 capitalize text-[13px] font-medium",children:(f=e.provider)==null?void 0:f.commercial_name})},t=e=>{const f=e.duration==0?"DIA":e.duration==1?"Week":(e==null?void 0:e.duration)==2?"MES":(e==null?void 0:e.duration)==3?"AÑO":"UNA VEZ";return s.jsx("p",{className:"mb-1 capitalize text-[13px] font-medium",children:f})},p=e=>s.jsx(E,{path:`/setups/offers/edit-offer?id=${e==null?void 0:e.id}`,handelDeleteFunction:r.deleteOffeer,rowData:e,editKey:"dashboard.passports.update",deleteKey:"dashboard.passports.destroy",PagePermissionKey:"Passports",state:c,list:a}),b=e=>s.jsx("p",{className:"mb-1 capitalize text-[13px] font-medium",children:e.end_date}),N=[{field:"id",header:"ID",classNames:"!px-[15px]",tamplate:v.idBodyTemplate},{field:"name",header:"Nombre de la oferta",classNames:"!px-[0px]",tamplate:v.nameBodyTemplate},{field:"name",header:"Nombre del tostador",classNames:"!px-[15px]",tamplate:o},{field:"recurren",header:"Recurrente",classNames:"!px-[15px]",tamplate:t},{field:"created_at",header:"Fecha de inicio",classNames:"!px-[15px]",tamplate:e=>v.startDateBodyTemplate(e,"start_date")},{field:"updated_at",header:"Fecha de finalización",classNames:"!px-[15px]",tamplate:b},{field:"status",header:"Acción",classNames:"!px-[15px]",tamplate:p}];return{offers:a,level_one:m,level_two:n,level_three:x,columns:N}};function L({ingredients:l,setIngredients:u,data:r,columns:a}){const[c,i]=d.useState(!1),m=()=>s.jsx(y,{label:"Ok",icon:"pi pi-check",onClick:()=>i(!1)}),n=x=>{let o=[...l];x.checked?o.push(x.value):o.splice(o.indexOf(x.value),1),u(o)};return s.jsxs(d.Fragment,{children:[s.jsx(g,{header:"Roasters Form",headerClassName:"black-text",visible:c,style:{width:"75vw"},maximizable:!0,maximized:!0,modal:!0,className:"bg-white",contentClassName:"!mt-3",contentStyle:{height:"300px"},onHide:()=>i(!1),footer:m,children:s.jsx(C,{data:r,countOfEntries:13,columns:a})}),s.jsxs("div",{className:"flex items-start sm:items-center justify-between flex-wrap gap-3 px-3 sm:px-10 mb-5",children:[s.jsxs("div",{className:"flex flex-wrap justify-content-center gap-5",children:[s.jsxs("div",{className:"flex items-center",children:[s.jsx(h,{inputId:"All",name:0,value:0,onChange:n,checked:l.includes(0)}),s.jsx("label",{htmlFor:"All",className:"ml-2 !mb-0",children:"Todo"})]}),s.jsxs("div",{className:"flex items-center",children:[s.jsx(h,{inputId:"level_1",name:1,value:1,onChange:n,checked:l.includes(1)}),s.jsx("label",{htmlFor:"level_1",className:"ml-2 !mb-0",children:"Nivel 1"})]}),s.jsxs("div",{className:"flex items-center",children:[s.jsx(h,{inputId:"level_2",name:2,value:2,onChange:n,checked:l.includes(2)}),s.jsx("label",{htmlFor:"level_2",className:"ml-2 !mb-0",children:"Nivel 2"})]}),s.jsxs("div",{className:"flex items-center",children:[s.jsx(h,{inputId:"level_3",name:3,value:3,onChange:n,checked:l.includes(3)}),s.jsx("label",{htmlFor:"level_3",className:"ml-2 !mb-0",children:"Nivel 3"})]})]}),s.jsxs("div",{onClick:()=>i(!0),className:"flex items-center text-nowrap cursor-pointer  text-[#45B8EA]",children:[s.jsx("h3",{className:"font-medium me-5",children:"Mostrar todo"}),s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:s.jsx("path",{d:"M22 1V7C22 7.26522 21.8946 7.51957 21.7071 7.70711C21.5196 7.89464 21.2652 8 21 8C20.7348 8 20.4804 7.89464 20.2929 7.70711C20.1054 7.51957 20 7.26522 20 7V3.41375L14.7075 8.7075C14.5199 8.89514 14.2654 9.00056 14 9.00056C13.7346 9.00056 13.4801 8.89514 13.2925 8.7075C13.1049 8.51986 12.9994 8.26536 12.9994 8C12.9994 7.73464 13.1049 7.48014 13.2925 7.2925L18.5863 2H15C14.7348 2 14.4804 1.89464 14.2929 1.70711C14.1054 1.51957 14 1.26522 14 1C14 0.734784 14.1054 0.48043 14.2929 0.292893C14.4804 0.105357 14.7348 0 15 0H21C21.2652 0 21.5196 0.105357 21.7071 0.292893C21.8946 0.48043 22 0.734784 22 1ZM7.2925 13.2925L2 18.5863V15C2 14.7348 1.89464 14.4804 1.70711 14.2929C1.51957 14.1054 1.26522 14 1 14C0.734784 14 0.48043 14.1054 0.292893 14.2929C0.105357 14.4804 0 14.7348 0 15V21C0 21.2652 0.105357 21.5196 0.292893 21.7071C0.48043 21.8946 0.734784 22 1 22H7C7.26522 22 7.51957 21.8946 7.70711 21.7071C7.89464 21.5196 8 21.2652 8 21C8 20.7348 7.89464 20.4804 7.70711 20.2929C7.51957 20.1054 7.26522 20 7 20H3.41375L8.7075 14.7075C8.89514 14.5199 9.00056 14.2654 9.00056 14C9.00056 13.7346 8.89514 13.4801 8.7075 13.2925C8.51986 13.1049 8.26536 12.9994 8 12.9994C7.73464 12.9994 7.48014 13.1049 7.2925 13.2925ZM21 14C20.7348 14 20.4804 14.1054 20.2929 14.2929C20.1054 14.4804 20 14.7348 20 15V18.5863L14.7075 13.2925C14.5199 13.1049 14.2654 12.9994 14 12.9994C13.7346 12.9994 13.4801 13.1049 13.2925 13.2925C13.1049 13.4801 12.9994 13.7346 12.9994 14C12.9994 14.2654 13.1049 14.5199 13.2925 14.7075L18.5863 20H15C14.7348 20 14.4804 20.1054 14.2929 20.2929C14.1054 20.4804 14 20.7348 14 21C14 21.2652 14.1054 21.5196 14.2929 21.7071C14.4804 21.8946 14.7348 22 15 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V15C22 14.7348 21.8946 14.4804 21.7071 14.2929C21.5196 14.1054 21.2652 14 21 14ZM3.41375 2H7C7.26522 2 7.51957 1.89464 7.70711 1.70711C7.89464 1.51957 8 1.26522 8 1C8 0.734784 7.89464 0.48043 7.70711 0.292893C7.51957 0.105357 7.26522 0 7 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V7C0 7.26522 0.105357 7.51957 0.292893 7.70711C0.48043 7.89464 0.734784 8 1 8C1.26522 8 1.51957 7.89464 1.70711 7.70711C1.89464 7.51957 2 7.26522 2 7V3.41375L7.2925 8.7075C7.48014 8.89514 7.73464 9.00056 8 9.00056C8.26536 9.00056 8.51986 8.89514 8.7075 8.7075C8.89514 8.51986 9.00056 8.26536 9.00056 8C9.00056 7.73464 8.89514 7.48014 8.7075 7.2925L3.41375 2Z",fill:"#45B8EA"})})]})]})]})}function O(){const[l,u]=d.useState([0]),r=d.useRef(),{offers:a,level_one:c,level_two:i,level_three:m,columns:n}=B(),x=a.map(t=>{var p;return{"Nombre de la oferta":t.name,"Nombre del tostador":(p=t.provider)==null?void 0:p.commercial_name,Recurren:t.duration==0?"DIA":t.duration==1?"Week":(t==null?void 0:t.duration)==2?"MES":(t==null?void 0:t.duration)==3?"AÑO":"UNA VEZ","Fecha de inicio":t.created_at,"Fecha de finalización":t.updated_at}}),o=[{title:"Nombre de la oferta",dataKey:"name"},{title:"Nombre del tostador",dataKey:"provider.commercial_name"},{title:"Recurren",dataKey:"duration"},{title:"Fecha de inicio",dataKey:"created_at"},{title:"Fecha de finalización",dataKey:"updated_at"}];return s.jsxs(F,{url:"add-offer",title:"Todas las ofertas",showActions:!0,PermissionsKey:"Passports",roleKey:"dashboard.passports.store",table:r,exportedExcelList:x,list:a,exportPDFColumns:o,children:[s.jsx(L,{data:a,ingredients:l,setIngredients:u,columns:n}),l.includes(0)||l.includes(1)?s.jsx(C,{data:c,table:r,columns:n}):null,l.includes(0)||l.includes(2)?s.jsxs(d.Fragment,{children:[s.jsx("div",{className:"text-center bg-[#FFF8F4] p-3 text-[#58291E] font-medium text-[25px] my-10",children:"Nivel 2"}),s.jsx(C,{data:i,columns:n,table:r})]}):null,l.includes(0)||l.includes(3)?s.jsxs(d.Fragment,{children:[s.jsx("div",{className:"text-center bg-[#FFF8F4] p-3 text-[#58291E] font-medium text-[25px] my-10",children:"Nivel 3"}),s.jsx(C,{columns:n,data:m,table:r})]}):null]})}export{O as default};
