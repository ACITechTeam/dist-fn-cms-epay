import{a5 as i,aK as m,a7 as g,h as f,ae as y,ay as V,as as k,a8 as C,at as S,ad as z,p as o,C as P}from"./index.dafbd423.js";import{a as p,c as A,d as _,k as h,u as I,g as R,p as $}from"./router.8c536722.js";import{V as B}from"./VImg.5434326f.js";function N(a){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",e=arguments.length>2?arguments[2]:void 0;return i({name:e!=null?e:m(g(a.replace(/__/g,"-"))),props:{tag:{type:String,default:n}},setup(l,r){let{slots:t}=r;return()=>{var s;return f(l.tag,{class:a},(s=t.default)==null?void 0:s.call(t))}}})}const D=y({start:Boolean,end:Boolean,icon:V,image:String,...p(),...A(),...k(),...C(),..._({variant:"flat"})},"v-avatar"),O=i({name:"VAvatar",props:D(),setup(a,n){let{slots:e}=n;const{colorClasses:l,colorStyles:r,variantClasses:t}=h(a),{densityClasses:s}=I(a),{roundedClasses:c}=R(a),{sizeClasses:v,sizeStyles:d}=S(a);return z(()=>{var u;return o(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},l.value,s.value,c.value,v.value,t.value],style:[r.value,d.value]},{default:()=>[a.image?o(B,{key:"image",src:a.image,alt:""},null):a.icon?o(P,{key:"icon",icon:a.icon},null):(u=e.default)==null?void 0:u.call(e),$(!1,"v-avatar")]})}),{}}});export{O as V,N as c};
