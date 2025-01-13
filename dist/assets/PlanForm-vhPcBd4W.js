import{r,G as $,g as F,j as s,L as H,D as K,I as W,a2 as ee,A as te,E as ae,b as ne,c as se,O as D,W as re,e as _,d as q,m as C,T as oe,n as le,y as ie}from"./index-rFxOd0i4.js";const ce=(e,a)=>{const[n,t]=r.useState({}),[i,p]=r.useState([]),f=new $,d=r.useRef(),[c,o]=r.useState({size_id:"",price:"",id:""});return r.useEffect(()=>(f.getSizes().then(g=>p(g)),()=>{}),[]),{setAddNewPackage:o,inputPriceRef:d,handelAddNewPackage:()=>{var g,l;!(n!=null&&n.name)||!d.current.value?F.warning("warning","Por favor, completa los campos requeridos."):((g=e.values)==null?void 0:g[a||"sizes"].some(x=>parseInt(x.size_id)===parseInt(c.size_id)))?F.warning("warning","No añadas paquetes duplicados"):(e.setFieldValue(a||"sizes",[...(l=e.values)==null?void 0:l[a||"sizes"],{...c,id:c==null?void 0:c.size_id}]),t({}),d.current.value="",F.success("Bien","Paquete añadido con éxito."))},removePackage:g=>{var l,N;return(N=(l=e.values)==null?void 0:l[a||"sizes"])==null?void 0:N.filter(x=>+x.id!=+g)},selectedSize:n,setSelectedSize:t,options:i}};function ue({formik:e,optionLabel:a,classNames:n,placeholder:t,label:i,inputLabel:p,hasAddButton:f,formikKey:d,inputPlaceholder:c}){const{inputWeightRef:o,setAddNewPackage:b,inputPriceRef:v,handelAddNewPackage:g,removePackage:l,selectedSize:N,options:x,setSelectedSize:m}=ce(e,d);return s.jsxs("div",{className:`rounded-md sm:rounded-[20px] mt-5 sm:mt-20 border border-[#252525] p-3 sm:p-[32px] grid grid-cols-12 gap-3 md:gap-10 ${n}`,children:[s.jsxs("form",{onSubmit:u=>u.preventDefault(),autoComplete:"off",className:"col-span-12 md:col-span-6",children:[s.jsxs("div",{className:"mb-8",children:[f?s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("h2",{className:"label",children:"Talla"}),s.jsx(H,{to:"/products/plans/size/list/add-size",className:"flex items-center cursor-pointer",children:s.jsx("h2",{className:"font-medium underline text-[#45B8EA] me-3",children:"Añadir Talla"})})]}):s.jsx("label",{className:"label",children:i}),s.jsx(K,{ref:o,value:N,filter:!0,emptyFilterMessage:"No hay opciones disponibles",emptyMessage:"No hay opciones disponibles",onChange:u=>{b(P=>{var j,y,S;return{...P,size_id:(j=u.target.value)==null?void 0:j.id,weight:(y=u.target.value)==null?void 0:y.weight,name:(S=u.target.value)==null?void 0:S.name}}),m(u.value)},options:x,optionLabel:a||"name",placeholder:t||"Seleccionar Talla",className:"w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent"})]}),s.jsxs("div",{className:"mb-8",children:[s.jsx("label",{htmlFor:"PriceEuro",className:"label",children:p}),s.jsx(W,{type:"number",ref:v,placeholder:c,onChange:u=>b(P=>({...P,price:u.target.value})),id:"PriceEuro"})]}),s.jsx("button",{type:"button",onClick:g,className:"bg-[#58291E] text-[20px] text-center text-white font-medium w-full py-2 sm:py-[16px] px-4 sm:px-[24px] rounded-md sm:rounded-full",children:"Añadir Paquete"})]}),s.jsx(ee,{formik:e,removePackage:l,formikKey:d,options:x})]})}const de=e=>{var x;const[a,n]=r.useState([]),t=new $,[i,p]=r.useState({}),[f,d]=r.useState([]),{userPeressmisons:c,user:o,setIsLoading:b}=r.useContext(te),v=o==null?void 0:o.created_by_provider,g=m=>ae(c,m),l=o==null?void 0:o.provider;return r.useEffect(()=>(b(!0),t.getRoasters().then(m=>n(m)).finally(m=>b(!1)),()=>{}),[]),r.useEffect(()=>{var m,u,P,j;if(l!=null&&l.id){const y=a==null?void 0:a.filter(S=>S.id===(l==null?void 0:l.id));d((m=y[0])==null?void 0:m.coffee_shops)}else if(v)d((u=a[0])==null?void 0:u.coffee_shops),e.setFieldValue("provider_id",(P=a==null?void 0:a[0])==null?void 0:P.id);else{const y=a==null?void 0:a.filter(S=>{var O;return S.id===((O=e.values)==null?void 0:O.provider_id)});d((j=y[0])==null?void 0:j.coffee_shops)}},[(x=e.values)==null?void 0:x.provider_id,l,a]),r.useEffect(()=>((i==null?void 0:i.provider_id)&&t.getRoasters().then(u=>{var P;if(n(u),l){const j=(P=u==null?void 0:u.filter(y=>(y==null?void 0:y.id)===(l==null?void 0:l.id)))==null?void 0:P[0];d(j==null?void 0:j.coffee_shops)}}),()=>{}),[i]),{roasters:a,coffee:f,provider:l,handleChangeProvider:m=>{var u;e.setFieldValue("provider_id",(u=m.target.value)==null?void 0:u.id),e.setFieldValue("coffee_shops",[]),e.setFieldValue("sizes",[]),e.setFieldValue("products",[])},isHasPermissions:g,setAddedShops:p,addedShops:i,is_created_by_provider:v}};function T(){return T=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},T.apply(this,arguments)}function E(e){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},E(e)}function pe(e,a){if(E(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var t=n.call(e,a||"default");if(E(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function fe(e){var a=pe(e,"string");return E(a)==="symbol"?a:String(a)}function me(e,a,n){return a=fe(a),a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function he(e){if(Array.isArray(e))return e}function be(e,a){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var t,i,p,f,d=[],c=!0,o=!1;try{if(p=(n=n.call(e)).next,a===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(t=p.call(n)).done)&&(d.push(t.value),d.length!==a);c=!0);}catch(b){o=!0,i=b}finally{try{if(!c&&n.return!=null&&(f=n.return(),Object(f)!==f))return}finally{if(o)throw i}}return d}}function M(e,a){(a==null||a>e.length)&&(a=e.length);for(var n=0,t=new Array(a);n<a;n++)t[n]=e[n];return t}function ve(e,a){if(e){if(typeof e=="string")return M(e,a);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,a)}}function ge(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ye(e,a){return he(e)||be(e,a)||ve(e,a)||ge()}var A=ne.extend({defaultProps:{__TYPE:"RadioButton",autoFocus:!1,checked:!1,className:null,disabled:!1,id:null,inputId:null,inputRef:null,name:null,onChange:null,onClick:null,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,value:null,children:void 0}});function V(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,t)}return n}function xe(e){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?V(Object(n),!0).forEach(function(t){me(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var z=r.memo(r.forwardRef(function(e,a){var n=r.useContext(se),t=A.getProps(e,n),i=r.useState(!1),p=ye(i,2),f=p[0],d=p[1],c=r.useRef(null),o=r.useRef(t.inputRef),b=A.setMetaData({props:t,state:{focused:f}}),v=b.ptm,g=function(h){l(h)},l=function(h){if(!t.disabled&&(t.onChange||t.onClick)){var R=t.checked,J=h.target instanceof HTMLDivElement,Q=h.target===o.current,X=Q&&h.target.checked!==R,B=J&&(_.hasClass(c.current,"p-radiobutton-checked")===R?!R:!1);if(X||B){var I=!R,L={originalEvent:h,value:t.value,checked:I,stopPropagation:function(){h.stopPropagation()},preventDefault:function(){h.preventDefault()},target:{type:"radio",name:t.name,id:t.id,value:t.value,checked:I}};if(t.onClick&&t.onClick(L),h.defaultPrevented)return;t.onChange&&t.onChange(L),B&&(o.current.checked=I)}_.focus(o.current),h.preventDefault()}},N=function(){d(!0)},x=function(){d(!1)},m=function(h){(h.code==="Space"||h.key===" ")&&l(h)};r.useEffect(function(){o.current&&(o.current.checked=t.checked)},[t.checked]),r.useEffect(function(){D.combinedRefs(o,t.inputRef)},[o,t.inputRef]),re(function(){t.autoFocus&&_.focus(o.current,t.autoFocus)}),r.useImperativeHandle(a,function(){return{props:t,select:g,focus:function(){return _.focus(o.current)},getElement:function(){return c.current},getInput:function(){return o.current}}});var u=D.isNotEmpty(t.tooltip),P=A.getOtherProps(t),j=D.reduceKeys(P,_.ARIA_PROPS),y=q("p-radiobutton p-component",{"p-radiobutton-checked":t.checked,"p-radiobutton-disabled":t.disabled,"p-radiobutton-focused":f},t.className),S=q("p-radiobutton-box",{"p-highlight":t.checked,"p-disabled":t.disabled,"p-focus":f}),O=C({ref:c,id:t.id,className:y,style:t.style,onClick:l},A.getOtherProps(t),v("root")),U=C({className:"p-hidden-accessible"},v("hiddenInputWrapper")),G=C(xe({ref:o,id:t.inputId,type:"radio",name:t.name,defaultChecked:t.checked,onFocus:N,onBlur:x,onKeyDown:m,disabled:t.disabled,required:t.required,tabIndex:t.tabIndex},j),v("hiddenInput")),k=C({className:S},v("input")),Y=C({className:"p-radiobutton-icon"},v("icon"));return r.createElement(r.Fragment,null,r.createElement("div",O,r.createElement("div",U,r.createElement("input",G)),r.createElement("div",k,r.createElement("div",Y))),u&&r.createElement(oe,T({target:c,content:t.tooltip},t.tooltipOptions,{pt:v("tooltip")})))}));z.displayName="RadioButton";function Pe({formik:e}){var a,n,t,i;return s.jsxs("div",{className:"w-full sm:w-[48%]",children:[s.jsx("label",{className:"label block mb-4",children:"Estado"}),s.jsxs("div",{className:"flex items-center",children:[s.jsxs("div",{className:"flex items-center cursor-pointer me-5",children:[s.jsx(z,{inputId:"ingredient1",name:"active",value:"active",onChange:p=>e.setFieldValue("status",p.value),checked:((a=e.values)==null?void 0:a.status)==="active"}),s.jsx("label",{htmlFor:"ingredient1",className:`ms-2 !mb-0 font-medium ${((n=e.values)==null?void 0:n.status)==="active"?"text-[#28C76F]":"text-[#2525256d]"}`,children:"Activo"})]}),s.jsxs("div",{className:"flex items-center cursor-pointer",children:[s.jsx(z,{inputId:"inactive",name:"inactive",value:"inactive",onChange:p=>e.setFieldValue("status",p.value),checked:((t=e.values)==null?void 0:t.status)==="inactive"}),s.jsx("label",{htmlFor:"inactive",className:`ms-2 !mb-0 font-medium ${((i=e.values)==null?void 0:i.status)==="inactive"?"text-[#28C76F]":"text-[#2525256d]"}`,children:"Inactivo"})]})]})]})}function Ne({formik:e}){var o,b;const{roasters:a,coffee:n,provider:t,handleChangeProvider:i,isHasPermissions:p,setAddedShops:f,addedShops:d,is_created_by_provider:c}=de(e);return s.jsxs("form",{onSubmit:e.handleSubmit,autoComplete:"off",className:"px-3 sm:px-10",children:[s.jsxs("div",{className:"flex-container",children:[s.jsxs("div",{className:"w-full sm:w-[48%]",children:[s.jsx("label",{htmlFor:"plan-name",className:"label",children:"Nombre Plan"}),s.jsx(W,{type:"text",id:"plan-name",name:"name",required:!0,value:(o=e.values)==null?void 0:o.name,onChange:e.handleChange,placeholder:"Este sera el nombre que se verá en la aplicacion"})]}),s.jsx(Pe,{formik:e})]}),!(t!=null&&t.id)&&!c?s.jsxs("div",{className:"mb-8",children:[s.jsxs("div",{className:"flex items-center justify-between gap-2",children:[s.jsx("h2",{className:"label line-clamp-1",children:"Nombre del Tostador"}),p("dashboard.providers.store")?s.jsx(H,{to:"/groups/roasters/add-roaster",className:"flex items-center cursor-pointer ",children:s.jsx("h2",{className:"font-medium underline text-[#45B8EA] line-clamp-1 me-3",children:"Añadir Tostador"})}):null]}),s.jsx(K,{value:le(a,"id",(b=e==null?void 0:e.values)==null?void 0:b.provider_id),onChange:i,filter:!0,emptyFilterMessage:"No hay opciones disponibles",emptyMessage:"No hay opciones disponibles",options:a,optionLabel:"commercial_name",placeholder:"Seleccionar Tostador Name",className:"w-full p-2  !shadow-none !rounded-none !border-t-transparent !border-l-transparent !border-r-transparent"})]}):null,s.jsxs("div",{className:"mb-8",children:[s.jsx("label",{htmlFor:"Description",className:"label",children:"Descripción"}),s.jsx("textarea",{onChange:e.handleChange,value:e.values.description,name:"description",rows:5,type:"text",id:"Description",className:"p-3 w-full border rounded-[5px] mt-5 resize-none border-[#b3b3b3] placeholder:text-[#b3b3b3]",placeholder:"Esta sera la descripcion que se verá en la aplicacion"})]}),s.jsx(ie,{formik:e,dataKey:"coffee_shops",url:"/setups/coffee-shop/add-coffee",title:"Tiendas",pageKey:"Coffee Shops",stateList:f,listOfState:d,pagePermissionKeyName:"dashboard.coffeeShops.store",options:n}),s.jsx(ue,{formik:e,optionLabel:"name",inputLabel:"Precio",label:"Talla"}),s.jsx("button",{type:"submit",className:"min-btn block !mt-10 ml-auto",children:"Enviar"})]})}export{Ne as P};
