import{r as o,A as _,G as g,j as d,P as B}from"./index-T_rrs4rL.js";import{T as E,R as v}from"./table-qFUFaJZF.js";import{T as A,D as K}from"./TableActions-1mlj127J.js";import{S as y}from"./SeeMore-eurxWQjn.js";import"./inputtext.esm-Gfc0nUNZ.js";const u=new E,R=p=>{const l=new g,r=new K,[x,h]=o.useState([]),{setIsLoading:f}=o.useContext(_);o.useEffect(()=>(f(!0),l.getProducts().then(e=>h(e)).finally(e=>f(!1)),()=>{}),[]);const P=e=>{var t;return d.jsx("p",{className:"mb-1 capitalize text-[13px] font-medium",children:(t=e==null?void 0:e.provider)==null?void 0:t.commercial_name})},T=e=>{var c;const t=e==null?void 0:e.coffee_shops,a=(s,n,m)=>d.jsx("p",{className:`capitalize text-[13px] font-medium mb-1 rounded-[5px] text-[#58291E] ${m}`,children:s==null?void 0:s.name},n),i=(c=t==null?void 0:t.slice(0,3))==null?void 0:c.map((s,n)=>a(s,n,"text-center"));return d.jsxs("div",{children:[i,(t==null?void 0:t.length)>2&&d.jsx(y,{list:t,headerName:"Packages",tamplate:a})]})},b=e=>{var c;const t=e==null?void 0:e.presentations,a=(s,n,m)=>d.jsxs("p",{className:`capitalize text-[13px] font-medium mb-1 rounded-[5px] text-[#58291E] ${m}`,children:[parseInt(s==null?void 0:s.weight)," gm = ",parseInt(s==null?void 0:s.price)," Euro"]},n),i=(c=t==null?void 0:t.slice(0,3))==null?void 0:c.map((s,n)=>a(s,n,"text-center"));return d.jsxs("div",{children:[i,(t==null?void 0:t.length)>2&&d.jsx(y,{list:t,headerName:"Packages",tamplate:a})]})},N=e=>d.jsx(A,{path:`/products/list/edit-product?id=${e==null?void 0:e.id}${e!=null&&e.owner_name?"?new-owner=true":""}`,disableEdit:e==null?void 0:e.parent_id,handelDeleteFunction:r.deleteProduct,rowData:e,state:h,editKey:"dashboard.products.update",deleteKey:"dashboard.products.destroy",PagePermissionKey:"Products",list:x}),j=[{field:"id",header:"ID",classNames:"!px-[15px]",tamplate:u.idBodyTemplate},{field:"commercial_name",header:"Productos Nombre",classNames:"!px-[0px]",tamplate:u.roasterNameBodyTemplate},{field:"provider.commercial_name",header:"Tostadores",classNames:"!px-[15px]",tamplate:P},{field:"commercial_name",header:"tiendas",classNames:"!px-[15px]",tamplate:T},{field:"commercial_name",header:"Paquetes",classNames:"!px-[15px]",tamplate:b},{field:"updated_at",header:"Fecha última",classNames:"!px-[15px]",tamplate:u.lastDateBodyTemplate},{field:"auction",header:"Acción",classNames:"!px-[15px]",tamplate:N}];return{products:x,columns:j}};function G(){const{products:p,columns:l}=R(),r=o.useRef();return d.jsx(B,{url:"add-product/choose-owner",title:"Todos los Productos",showActions:!0,PermissionsKey:"Products",roleKey:"dashboard.products.store",columns:l,table:r,list:p,saveName:"Products",children:d.jsx(v,{columns:l,list:p,table:r})})}export{G as default};
