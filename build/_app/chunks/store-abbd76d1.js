import{I as a}from"./vendor-decb6ca3.js";const r={get:(a,r,s)=>async({fetch:s,page:t})=>{const e=a(t.params),o=await s(e);let n=await o.json();if(null!=r&&(n=n[r]),o.ok)return{props:{data:n}};const{message:c}=await o.json();return{error:new Error(c)}}},s=a({}),t=a({});export{r as a,t as c,s};
