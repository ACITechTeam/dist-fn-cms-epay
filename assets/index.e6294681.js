import{bf as x,k as _,Y as C,q as s,o,b as n,w as e,p as t,m as k,x as m,D as b,c as p,F as d,a as f,E as v,C as V,y as T,a0 as w}from"./index.dafbd423.js";import{b as y}from"./route-block.2f1a6263.js";import{a as h,V as B}from"./VRow.87dbd1db.js";import{V as D,a as I}from"./VTabs.325b6321.js";import{V as L,a as N}from"./VWindowItem.b7e171e2.js";import{V as z,c as R}from"./VCard.4d469167.js";import{V as E}from"./VAvatar.0c555949.js";import{V as F,a as H,b as U}from"./VList.c7e5268c.js";import{V as W}from"./VBtn.3f372a48.js";import"./router.8c536722.js";import"./easing.36b781ab.js";import"./VSlideGroup.add155ac.js";import"./index.af2b532a.js";import"./lazy.cdba8972.js";import"./VImg.5434326f.js";import"./ssrBoot.c30a041b.js";import"./position.81bb3a9d.js";import"./VDivider.e663d59a.js";const q={class:"text-base mb-3"},A=k("span",null,"Back to help center",-1),S={__name:"index",setup(Y){const g=x(),l=_(),r=_("");return C(r,()=>w.get("/pages/help-center/subcategory",{params:{category:g.params.category,subcategory:g.params.subcategory}}).then(u=>{l.value=u.data.data,r.value=u.data.activeTab}),{immediate:!0}),(u,i)=>s(l)?(o(),n(B,{key:0},{default:e(()=>[t(h,{cols:"12",md:"4"},{default:e(()=>[k("h6",q,m(s(l).title),1),t(D,{modelValue:s(r),"onUpdate:modelValue":i[0]||(i[0]=a=>b(r)?r.value=a:null),direction:"vertical",class:"v-tabs-pill"},{default:e(()=>[(o(!0),p(d,null,f(s(l).subCategories,a=>(o(),n(I,{key:a.slug,value:a.slug,to:{name:"pages-help-center-category-subcategory",params:{category:s(l).slug,subcategory:a.slug}}},{default:e(()=>[v(m(a.title),1)]),_:2},1032,["value","to"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(h,{cols:"12",md:"8"},{default:e(()=>[t(L,{modelValue:s(r),"onUpdate:modelValue":i[1]||(i[1]=a=>b(r)?r.value=a:null),class:"disable-tab-transition"},{default:e(()=>[(o(!0),p(d,null,f(s(l).subCategories,a=>(o(),n(N,{key:a.slug,value:a.slug},{default:e(()=>[t(z,{title:a.title},{prepend:e(()=>[t(E,{color:"primary",variant:"tonal",rounded:"",size:"42"},{default:e(()=>[t(V,{icon:a.icon,size:"26"},null,8,["icon"])]),_:2},1024)]),default:e(()=>[t(R,null,{default:e(()=>[t(F,{class:"card-list mb-6"},{default:e(()=>[(o(!0),p(d,null,f(a.articles,c=>(o(),n(H,{key:c.slug,to:{name:"pages-help-center-category-subcategory-article",params:{category:s(l).slug,subcategory:a.slug,article:c.slug}}},{prepend:e(()=>[t(V,{icon:"tabler-chevron-right",size:"18",class:"me-2"})]),default:e(()=>[t(U,{class:"text-primary"},{default:e(()=>[v(m(c.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:2},1024),t(W,{variant:"tonal",to:{name:"pages-help-center"}},{default:e(()=>[t(V,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),A]),_:1})]),_:2},1024)]),_:2},1032,["title"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})):T("",!0)}};typeof y=="function"&&y(S);export{S as default};
