import{a5 as i,A as r,ad as u,p as n,H as s,I as m}from"./index.233f16b7.js";import{a as l}from"./index.a793c71a.js";import{m as c,M as v}from"./VImg.f6446cb5.js";const V=i({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...c({transition:{component:l}})},setup(e,o){let{slots:t}=o;const a=r(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return u(()=>n(v,{transition:e.transition},{default:()=>[s(n("div",{class:"v-counter"},[t.default?t.default({counter:a.value,max:e.max,value:e.value}):a.value]),[[m,e.active]])]})),{}}});export{V};