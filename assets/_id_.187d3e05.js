import{bf as A,k as n,o as D,b as P,w as a,q as l,p as e,y as C,E as i,m as s,D as r}from"./index.36dbe862.js";import{_ as N,a as T}from"./InvoiceSendInvoiceDrawer.050e0cf8.js";import{_ as U}from"./InvoiceEditable.6ee05a05.js";import{u as B}from"./useInvoiceStore.f1630f00.js";import{a as S,V as h}from"./VRow.c9f56d74.js";import{V as I,c as O}from"./VCard.23702273.js";import{V as u}from"./VBtn.18c9fa75.js";import{V as $}from"./VSelect.98dc92e0.js";import{V as b}from"./VInput.22b2e44a.js";import{V as _}from"./VSwitch.e7469c57.js";import"./AppDateTimePicker.727ab50a.js";import"./VField.5aa0341e.js";import"./index.93909b3f.js";import"./position.81d476e8.js";import"./router.07361462.js";import"./easing.36b781ab.js";import"./VSpacer.7a41560e.js";import"./VAvatar.3b699304.js";import"./VImg.46f6a5db.js";import"./VForm.37252292.js";import"./forwardRefs.c003b6b8.js";import"./VTextField.0b81b9dc.js";/* empty css                   */import"./VCounter.c5ed3e95.js";import"./VTextarea.6155c953.js";import"./VNavigationDrawer.68b8a2b1.js";import"./ssrBoot.0807f190.js";import"./VChip.85eb8a98.js";import"./VTooltip.43cc37ed.js";import"./scopeId.8f3ebc10.js";import"./VOverlay.52a7beaf.js";import"./lazy.0bec364c.js";import"./VDivider.e109624d.js";import"./VList.2bfafdbb.js";import"./dialog-transition.71b71526.js";import"./VMenu.081ab0a3.js";import"./VCheckboxBtn.e9637d02.js";import"./VSelectionControl.a5bf6f88.js";const j={class:"d-flex gap-2"},M={class:"w-50"},R={class:"w-50"},L={class:"d-flex align-center justify-space-between"},q={class:"d-flex align-center justify-space-between"},E={class:"d-flex align-center justify-space-between"},Ce={__name:"[id]",setup(W){const g=B(),w=A(),c=n();g.fetchInvoice(Number(w.params.id)).then(m=>{c.value={invoice:m.data.invoice,paymentDetails:m.data.paymentDetails,purchasedProducts:[{title:"App Design",cost:24,hours:2,description:"Designed UI kit & app pages."}],note:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!",paymentMethod:"Bank Account",salesperson:"Tom Cook",thanksNote:"Thanks for your business"}}).catch(m=>{console.log(m)});const d=n(!1),p=n(!1),f=n(!0),v=n(!1),V=n(!1),y=n("Bank Account"),x=["Bank Account","PayPal","UPI Transfer"];return(m,t)=>(D(),P(h,null,{default:a(()=>{var k;return[(k=l(c))!=null&&k.invoice?(D(),P(S,{key:0,cols:"12",md:"9"},{default:a(()=>[e(U,{data:l(c)},null,8,["data"])]),_:1})):C("",!0),e(S,{cols:"12",md:"3"},{default:a(()=>[e(I,{class:"mb-8"},{default:a(()=>[e(O,null,{default:a(()=>[e(u,{block:"","prepend-icon":"tabler-send",class:"mb-2",onClick:t[0]||(t[0]=o=>d.value=!0)},{default:a(()=>[i(" Send Invoice ")]),_:1}),s("div",j,[s("div",M,[e(u,{block:"",color:"secondary",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-preview-id",params:{id:l(w).params.id}}},{default:a(()=>[i(" Preview ")]),_:1},8,["to"])]),s("div",R,[e(u,{block:"",color:"secondary",variant:"tonal",class:"mb-2"},{default:a(()=>[i(" Save ")]),_:1})])]),e(u,{block:"","prepend-icon":"tabler-currency-dollar",onClick:t[1]||(t[1]=o=>p.value=!0)},{default:a(()=>[i(" Add Payment ")]),_:1})]),_:1})]),_:1}),e($,{modelValue:l(y),"onUpdate:modelValue":t[2]||(t[2]=o=>r(y)?y.value=o:null),items:x,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),s("div",L,[e(b,{for:"payment-terms"},{default:a(()=>[i(" Payment Terms ")]),_:1}),s("div",null,[e(_,{id:"payment-terms",modelValue:l(f),"onUpdate:modelValue":t[3]||(t[3]=o=>r(f)?f.value=o:null)},null,8,["modelValue"])])]),s("div",q,[e(b,{for:"client-notes"},{default:a(()=>[i(" Client Notes ")]),_:1}),s("div",null,[e(_,{id:"client-notes",modelValue:l(v),"onUpdate:modelValue":t[4]||(t[4]=o=>r(v)?v.value=o:null)},null,8,["modelValue"])])]),s("div",E,[e(b,{for:"payment-stub"},{default:a(()=>[i(" Payment Stub ")]),_:1}),s("div",null,[e(_,{id:"payment-stub",modelValue:l(V),"onUpdate:modelValue":t[5]||(t[5]=o=>r(V)?V.value=o:null)},null,8,["modelValue"])])])]),_:1}),e(N,{isDrawerOpen:l(d),"onUpdate:isDrawerOpen":t[6]||(t[6]=o=>r(d)?d.value=o:null)},null,8,["isDrawerOpen"]),e(T,{isDrawerOpen:l(p),"onUpdate:isDrawerOpen":t[7]||(t[7]=o=>r(p)?p.value=o:null)},null,8,["isDrawerOpen"])]}),_:1}))}};export{Ce as default};