import{r as s,j as e,a as d,B as n}from"./index-oURgFu_2.js";import{D as c,C as x}from"./table-Tug-ghy4.js";function h({list:l,headerName:a,tamplate:o}){const[t,r]=s.useState(!1),i=()=>e.jsx(n,{label:"Ok",icon:"pi pi-check",onClick:()=>r(!1)});return e.jsxs(s.Fragment,{children:[e.jsx(d,{header:"Paquetes",headerClassName:"black-text",headerStyle:{color:"black !important"},visible:t,style:{width:"40vw",height:"50vh"},onHide:()=>r(!1),footer:i,children:e.jsx(c,{value:l,scrollable:!0,scrollHeight:"flex",children:e.jsx(x,{field:"name",header:a,body:o})})}),e.jsxs("div",{onClick:()=>r(!0),className:"flex items-center justify-center mt-3 cursor-pointer",children:[e.jsx("div",{className:"w-[7px] h-[7px] rounded-full me-2 border border-[#45B8EA]"}),e.jsx("div",{className:"w-[7px] h-[7px] rounded-full me-2 border border-[#45B8EA]"}),e.jsx("div",{className:"w-[7px] h-[7px] rounded-full me-2 border border-[#45B8EA]"})]})]})}export{h as S};