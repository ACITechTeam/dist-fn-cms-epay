import{_}from"./InvoiceEditable.4237c447.js";import{a as v,V as k}from"./VRow.87dbd1db.js";import{V as w,c as x}from"./VCard.4d469167.js";import{V as c}from"./VBtn.3f372a48.js";import{V as P}from"./VSelect.4663eb64.js";import{V as f}from"./VInput.2bb68e51.js";import{V}from"./VSwitch.cbe61555.js";import{k as s,o as B,b as S,w as t,p as e,q as i,E as l,D as m,m as n}from"./index.dafbd423.js";import"./AppDateTimePicker.1817fb7c.js";import"./VField.ac0fe7ff.js";import"./index.af2b532a.js";import"./position.81bb3a9d.js";import"./router.8c536722.js";import"./easing.36b781ab.js";import"./VTextarea.2f5997aa.js";/* empty css                   */import"./VImg.5434326f.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.d62fa8a9.js";import"./VTextField.6edd0bd7.js";import"./VTooltip.d43d644d.js";import"./scopeId.1c51db8f.js";import"./VOverlay.8576812d.js";import"./lazy.cdba8972.js";import"./useInvoiceStore.962a73a5.js";import"./VDivider.e663d59a.js";import"./VAvatar.0c555949.js";import"./VList.c7e5268c.js";import"./dialog-transition.43bb3003.js";import"./VMenu.db44f165.js";import"./VCheckboxBtn.f8dfd683.js";import"./VSelectionControl.989f461b.js";import"./VChip.61db3de3.js";const D={class:"d-flex align-center justify-space-between"},N={class:"d-flex align-center justify-space-between"},C={class:"d-flex align-center justify-space-between"},de={__name:"index",setup(T){const b=s({invoice:{id:5037,issuedDate:"",service:"",total:0,avatar:"",invoiceStatus:"",balance:"",dueDate:"",client:{address:"",company:"",companyEmail:"",contact:"",country:"",name:""}},paymentDetails:{totalDue:"$12,110.55",bankName:"American Bank",country:"United States",iban:"ETD95476213874685",swiftCode:"BR91905"},purchasedProducts:[{title:"",cost:0,hours:0,description:""}],note:"",paymentMethod:"",salesperson:"",thanksNote:""}),r=s(!0),d=s(!1),p=s(!1),u=s("Bank Account"),y=["Bank Account","PayPal","UPI Transfer"];return(U,a)=>(B(),S(k,null,{default:t(()=>[e(v,{cols:"12",md:"9"},{default:t(()=>[e(_,{data:i(b)},null,8,["data"])]),_:1}),e(v,{cols:"12",md:"3"},{default:t(()=>[e(w,{class:"mb-8"},{default:t(()=>[e(x,null,{default:t(()=>[e(c,{block:"","prepend-icon":"tabler-send",class:"mb-2"},{default:t(()=>[l(" Send Invoice ")]),_:1}),e(c,{block:"",color:"default",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{default:t(()=>[l(" Preview ")]),_:1}),e(c,{block:"",color:"default",variant:"tonal"},{default:t(()=>[l(" Save ")]),_:1})]),_:1})]),_:1}),e(P,{modelValue:i(u),"onUpdate:modelValue":a[0]||(a[0]=o=>m(u)?u.value=o:null),items:y,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),n("div",D,[e(f,{for:"payment-terms"},{default:t(()=>[l(" Payment Terms ")]),_:1}),n("div",null,[e(V,{id:"payment-terms",modelValue:i(r),"onUpdate:modelValue":a[1]||(a[1]=o=>m(r)?r.value=o:null)},null,8,["modelValue"])])]),n("div",N,[e(f,{for:"client-notes"},{default:t(()=>[l(" Client Notes ")]),_:1}),n("div",null,[e(V,{id:"client-notes",modelValue:i(d),"onUpdate:modelValue":a[2]||(a[2]=o=>m(d)?d.value=o:null)},null,8,["modelValue"])])]),n("div",C,[e(f,{for:"payment-stub"},{default:t(()=>[l(" Payment Stub ")]),_:1}),n("div",null,[e(V,{id:"payment-stub",modelValue:i(p),"onUpdate:modelValue":a[3]||(a[3]=o=>m(p)?p.value=o:null)},null,8,["modelValue"])])])]),_:1})]),_:1}))}};export{de as default};
