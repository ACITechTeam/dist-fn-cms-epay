import{b as i}from"./route-block.2f1a6263.js";import{L as m,o as s,b as r,w as t,p as e,E as a,y as f}from"./index.32e409a9.js";import{a as l,V as u}from"./VRow.2aa253bc.js";import{V as c,c as o}from"./VCard.fd2cb83d.js";import"./VAvatar.e18f2c40.js";import"./router.4693caac.js";import"./VImg.0b7c36f7.js";import"./position.c6249fc4.js";const d={};function _(n,p){return s(),r(u,null,{default:t(()=>[e(l,{cols:"12",md:"6"},{default:t(()=>[e(c,{title:"Common"},{default:t(()=>[e(o,null,{default:t(()=>[a("No ability is required to view this card")]),_:1}),e(o,null,{default:t(()=>[a(" This card is visible to both 'user' and 'admin' ")]),_:1})]),_:1})]),_:1}),n.$can("read","Admin")?(s(),r(l,{key:0,cols:"12",md:"6"},{default:t(()=>[e(c,{title:"Analytics"},{default:t(()=>[e(o,null,{default:t(()=>[a("User with 'Analytics' subject's 'Read' ability can view this card")]),_:1}),e(o,{class:"text-danger"},{default:t(()=>[a(" This card is visible to 'admin' only ")]),_:1})]),_:1})]),_:1})):f("",!0)]),_:1})}typeof i=="function"&&i(d);const v=m(d,[["render",_]]);export{v as default};