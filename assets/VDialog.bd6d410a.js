import{ar as x,al as y,k as h,aZ as E,Y as f,ax as P,ad as S,p as m,M as p}from"./index.36dbe862.js";import{u as D}from"./scopeId.8f3ebc10.js";import{f as w}from"./forwardRefs.c003b6b8.js";import{m as A,f as B,a as I}from"./VOverlay.52a7beaf.js";import{V as O}from"./dialog-transition.71b71526.js";import{V as R}from"./router.07361462.js";const k=x()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...A({origin:"center center",scrollStrategy:"block",transition:{component:O},zIndex:2400})},emits:{"update:modelValue":r=>!0},setup(r,g){let{slots:i}=g;const n=y(r,"modelValue"),{scopeId:V}=D(),a=h();function c(t){var e,o;const s=t.relatedTarget,l=t.target;if(s!==l&&(e=a.value)!=null&&e.contentEl&&(o=a.value)!=null&&o.globalTop&&![document,a.value.contentEl].includes(l)&&!a.value.contentEl.contains(l)){const u=[...a.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(v=>!v.hasAttribute("disabled")&&!v.matches('[tabindex="-1"]'));if(!u.length)return;const d=u[0],b=u[u.length-1];s===d?b.focus():d.focus()}}return E&&f(()=>n.value&&r.retainFocus,t=>{t?document.addEventListener("focusin",c):document.removeEventListener("focusin",c)},{immediate:!0}),f(n,async t=>{if(await P(),t){var e;(e=a.value.contentEl)==null||e.focus({preventScroll:!0})}else{var o;(o=a.value.activatorEl)==null||o.focus({preventScroll:!0})}}),S(()=>{const[t]=B(r);return m(I,p({ref:a,class:["v-dialog",{"v-dialog--fullscreen":r.fullscreen,"v-dialog--scrollable":r.scrollable}]},t,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-role":"dialog","aria-modal":"true",activatorProps:p({"aria-haspopup":"dialog","aria-expanded":String(n.value)},r.activatorProps)},V),{activator:i.activator,default:function(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return m(R,{root:!0},{default:()=>[(e=i.default)==null?void 0:e.call(i,...s)]})}})}),w({},a)}});export{k as V};