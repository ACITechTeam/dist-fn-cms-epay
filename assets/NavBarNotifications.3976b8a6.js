import{a as V}from"./formatters.96fae79e.js";import{V as u}from"./VBtn.2704f5e3.js";import{V as f}from"./VBadge.a455f199.js";import{o,b as n,w as e,p as t,C as h,E as _,x as r,y as g,c as s,F as v,a as b,q as N,m as x,M as k,O as w,Q as A,U as B}from"./index.1c853832.js";import{V as C}from"./VMenu.b7445ae5.js";import{V as I,a as l}from"./VList.5da50c22.js";import{V as L}from"./VChip.87267eff.js";import{V as y}from"./VDivider.67f12c20.js";import{V as P}from"./VListItemAction.d9ab42cb.js";import{V as T}from"./VAvatar.ecb85224.js";import"./index.4c516342.js";import"./router.9032f1cb.js";import"./position.5fbb4e59.js";import"./VImg.976d771a.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.66278c26.js";import"./VOverlay.084f7533.js";import"./lazy.dc37e4c3.js";import"./easing.36b781ab.js";import"./dialog-transition.7e0c900e.js";import"./index.e26398a7.js";const q={key:0},z={class:"whitespace-no-wrap text-medium-emphasis"},F={__name:"Notifications",props:{notifications:{type:Array,required:!0},badgeProps:{type:null,required:!1,default:void 0},location:{type:null,required:!1,default:"bottom end"}},emits:["click:readAllNotifications"],setup(m,{emit:c}){const i=m;return(p,d)=>(o(),n(f,k({"model-value":!!i.badgeProps},i.badgeProps),{default:e(()=>[t(u,{icon:"",variant:"text",color:"default",size:"small"},{default:e(()=>[t(f,{"model-value":!!i.notifications.length,color:"error",content:"4"},{default:e(()=>[t(h,{icon:"tabler-bell",size:"24"})]),_:1},8,["model-value"]),t(C,{activator:"parent",width:"380px",location:i.location,offset:"14px"},{default:e(()=>[t(I,{class:"py-0"},{default:e(()=>[t(l,{title:"Notifications",class:"notification-section",height:"48px"},{append:e(()=>[i.notifications.length?(o(),n(L,{key:0,color:"primary",size:"small"},{default:e(()=>[_(r(i.notifications.length)+" New ",1)]),_:1})):g("",!0)]),_:1}),t(y),(o(!0),s(v,null,b(i.notifications,a=>(o(),s(v,{key:a.title},[t(l,{title:a.title,subtitle:a.subtitle,link:"",lines:"one","min-height":"66px"},{prepend:e(()=>[t(P,{start:""},{default:e(()=>[t(T,{color:a.color||"primary",image:a.img||void 0,icon:a.icon||void 0,size:"40",variant:"tonal"},{default:e(()=>[a.text?(o(),s("span",q,r(N(V)(a.text)),1)):g("",!0)]),_:2},1032,["color","image","icon"])]),_:2},1024)]),append:e(()=>[x("small",z,r(a.time),1)]),_:2},1032,["title","subtitle"]),t(y)],64))),128)),t(l,{class:"notification-section"},{default:e(()=>[t(u,{block:"",onClick:d[0]||(d[0]=a=>p.$emit("click:readAllNotifications"))},{default:e(()=>[_(" READ ALL NOTIFICATIONS ")]),_:1})]),_:1})]),_:1})]),_:1},8,["location"])]),_:1})]),_:1},16,["model-value"]))}},M="/assets/paypal.8c1354c3.svg",oe={__name:"NavBarNotifications",setup(m){const c=[{img:w,title:"Congratulation Flora! \u{1F389}",subtitle:"Won the monthly best seller badge",time:"Today"},{text:"Tom Holland",title:"New user registered.",subtitle:"5 hours ago",time:"Yesterday"},{img:A,title:"New message received \u{1F44B}\u{1F3FB}",subtitle:"You have 10 unread messages",time:"11 Aug"},{img:M,title:"Paypal",subtitle:"Received Payment",time:"25 May",color:"error"},{img:B,title:"Received Order \u{1F4E6}",subtitle:"New order received from john",time:"19 Mar"}];return(i,p)=>(o(),n(F,{notifications:c}))}};export{oe as default};