import{r as h,A as g,G as j,j as a,P as B}from"./index-ucQm_BBe.js";import{T as K,R as A}from"./table-EIac-avB.js";import{T as C,D as E}from"./TableActions-aGRwLZuQ.js";import{S as b}from"./SeeMore-XiRuvKt6.js";import"./inputtext.esm-99rNmtVO.js";const T=new K,v=l=>{const P=new j,i=new E,[p,m]=h.useState([]),{setIsLoading:s}=h.useContext(g);h.useEffect(()=>(s(!0),P.getProducts().then(e=>m(e)).finally(e=>s(!1)),()=>{}),[]);const u=e=>{var t;return a.jsx("p",{className:"mb-1 capitalize text-[13px] font-medium",children:(t=e==null?void 0:e.provider)==null?void 0:t.commercial_name})},x=e=>{var d;const t=e==null?void 0:e.coffee_shops,c=(o,r,_)=>a.jsx("p",{className:`capitalize text-[13px] font-medium mb-1 rounded-[5px] text-[#58291E] ${_}`,children:o==null?void 0:o.name},r),y=(d=t==null?void 0:t.slice(0,3))==null?void 0:d.map((o,r)=>c(o,r,"text-center"));return a.jsxs("div",{children:[y,(t==null?void 0:t.length)>2&&a.jsx(b,{list:t,headerName:"Packages",tamplate:c})]})},f=e=>{var d;const t=e==null?void 0:e.presentations,c=(o,r,_)=>a.jsxs("p",{className:`capitalize text-[13px] font-medium mb-1 rounded-[5px] text-[#58291E] ${_}`,children:[parseInt(o==null?void 0:o.weight)," Gr = ",o==null?void 0:o.price," Euro"]},r),y=(d=t==null?void 0:t.slice(0,3))==null?void 0:d.map((o,r)=>c(o,r,"text-center"));return a.jsxs("div",{children:[y,(t==null?void 0:t.length)>2&&a.jsx(b,{list:t,headerName:"Packages",tamplate:c})]})},n=e=>a.jsx(C,{path:`/products/list/edit-product?id=${e==null?void 0:e.id}${e!=null&&e.owner_name?"?new-owner=true":""}`,disableEdit:e==null?void 0:e.parent_id,handelDeleteFunction:i.deleteProduct,rowData:e,state:m,editKey:"dashboard.products.update",deleteKey:"dashboard.products.destroy",PagePermissionKey:"Products",list:p}),N=[{field:"id",header:"ID",classNames:"!px-[15px]",tamplate:T.idBodyTemplate},{field:"commercial_name",header:"Nombre Productos",classNames:"!px-[0px]",tamplate:T.roasterNameBodyTemplate},{field:"provider.commercial_name",header:"Tostadores",classNames:"!px-[15px]",tamplate:u},{field:"commercial_name",header:"Tiendas",classNames:"!px-[15px]",tamplate:x},{field:"commercial_name",header:"Paquetes",classNames:"!px-[15px]",tamplate:f},{field:"updated_at",header:"Fecha última",classNames:"!px-[15px]",tamplate:T.lastDateBodyTemplate},{field:"auction",header:"Acción",classNames:"!px-[15px]",tamplate:n}];return{products:p,columns:N}};function z(){const{products:l,columns:P}=v(),i=h.useRef(),p=l.map(s=>{var u,x,f;return{"Nombre Productos":s.commercial_name,Codigo:s.code,Descripcion:s.description,Region:s.region,Finca:s.farm,"Pupntuacion SCA":s.sca_score,Altitud:s.altitude,Procedimiento:s.process,Grados:s.grades,Propietario:s.owner_name,Puntuacion:s.rate,"Numero de puntuaciones":s.rates_count,Presentaciones:(u=s.presentations)==null?void 0:u.map(n=>n.weight).join(", "),Proveedor:s.commercial_name,Origenes:(x=s.origins)==null?void 0:x.map(n=>n.name).join(", "),Cafeterias:(f=s.coffee_shops)==null?void 0:f.map(n=>n.name).join(", ")}}),m=[{title:"Nombre Productos",dataKey:"commercial_name"},{title:"Tostadores",dataKey:"provider.commercial_name"},{title:"Tiendas",dataKey:"coffee_shops"},{title:"Paquetes",dataKey:"presentations"}];return a.jsx(B,{url:"add-product/choose-owner",title:"Todos los Productos",showActions:!0,PermissionsKey:"Products",roleKey:"dashboard.products.store",table:i,exportedExcelList:p,list:l,exportPDFColumns:m,children:a.jsx(A,{columns:P,list:l,table:i})})}export{z as default};
