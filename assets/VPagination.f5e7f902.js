import{k as R,bl as E,a5 as W,ay as P,as as K,a8 as q,a9 as G,al as O,aD as U,aN as X,aa as j,ab as A,av as H,A as m,bm as k,ac as f,ad as J,p as o,M as L,bn as S,ax as $}from"./index.dafbd423.js";import{m as Q,a as Y,b as Z,c as aa,d as ea}from"./router.8c536722.js";import{V as h}from"./VBtn.3f372a48.js";function ta(){const a=R([]);E(()=>a.value=[]);function V(s,_){a.value[_]=s}return{refs:a,updateRef:V}}const sa=W({name:"VPagination",props:{activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:a=>a.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:a=>a%1===0},totalVisible:[Number,String],firstIcon:{type:P,default:"$first"},prevIcon:{type:P,default:"$prev"},nextIcon:{type:P,default:"$next"},lastIcon:{type:P,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...Q(),...Y(),...Z(),...aa(),...K(),...q({tag:"nav"}),...G(),...ea({variant:"text"})},emits:{"update:modelValue":a=>!0,first:a=>!0,prev:a=>!0,next:a=>!0,last:a=>!0},setup(a,V){let{slots:s,emit:_}=V;const i=O(a,"modelValue"),{t:g,n:B}=U(),{isRtl:x}=X(),{themeClasses:C}=j(a),p=R(-1);A(void 0,{scoped:!0});const{resizeRef:D}=H(e=>{if(!e.length)return;const{target:t,contentRect:l}=e[0],u=t.querySelector(".v-pagination__list > *");if(!u)return;const v=l.width,b=u.offsetWidth+parseFloat(getComputedStyle(u).marginRight)*2,T=a.showFirstLastPage?5:3;p.value=Math.max(0,Math.floor(+((v-b*T)/b).toFixed(2)))}),n=m(()=>parseInt(a.length,10)),r=m(()=>parseInt(a.start,10)),d=m(()=>a.totalVisible?parseInt(a.totalVisible,10):p.value>=0?p.value:n.value),F=m(()=>{if(n.value<=0||isNaN(n.value)||n.value>Number.MAX_SAFE_INTEGER)return[];if(d.value<=1)return[i.value];if(n.value<=d.value)return k(n.value,r.value);const e=d.value%2===0,t=e?d.value/2:Math.floor(d.value/2),l=e?t:t+1,u=n.value-t;if(l-i.value>=0)return[...k(Math.max(1,d.value-1),r.value),a.ellipsis,n.value];if(i.value-u>=(e?1:0)){const v=d.value-1,b=n.value-v+r.value;return[r.value,a.ellipsis,...k(v,b)]}else{const v=Math.max(1,d.value-3),b=v===1?i.value:i.value-Math.ceil(v/2)+r.value;return[r.value,a.ellipsis,...k(v,b),a.ellipsis,n.value]}});function y(e,t,l){e.preventDefault(),i.value=t,l&&_(l,t)}const{refs:N,updateRef:w}=ta();A({VPaginationBtn:{color:f(a,"color"),border:f(a,"border"),density:f(a,"density"),size:f(a,"size"),variant:f(a,"variant"),rounded:f(a,"rounded"),elevation:f(a,"elevation")}});const M=m(()=>F.value.map((e,t)=>{const l=u=>w(u,t);if(typeof e=="string")return{isActive:!1,key:`ellipsis-${t}`,page:e,props:{ref:l,ellipsis:!0,icon:!0,disabled:!0}};{const u=e===i.value;return{isActive:u,key:e,page:B(e),props:{ref:l,ellipsis:!1,icon:!0,disabled:!!a.disabled||a.length<2,color:u?a.activeColor:a.color,ariaCurrent:u,ariaLabel:g(u?a.currentPageAriaLabel:a.pageAriaLabel,t+1),onClick:v=>y(v,e)}}}})),c=m(()=>{const e=!!a.disabled||i.value<=r.value,t=!!a.disabled||i.value>=r.value+n.value-1;return{first:a.showFirstLastPage?{icon:x.value?a.lastIcon:a.firstIcon,onClick:l=>y(l,r.value,"first"),disabled:e,ariaLabel:g(a.firstAriaLabel),ariaDisabled:e}:void 0,prev:{icon:x.value?a.nextIcon:a.prevIcon,onClick:l=>y(l,i.value-1,"prev"),disabled:e,ariaLabel:g(a.previousAriaLabel),ariaDisabled:e},next:{icon:x.value?a.prevIcon:a.nextIcon,onClick:l=>y(l,i.value+1,"next"),disabled:t,ariaLabel:g(a.nextAriaLabel),ariaDisabled:t},last:a.showFirstLastPage?{icon:x.value?a.firstIcon:a.lastIcon,onClick:l=>y(l,r.value+n.value-1,"last"),disabled:t,ariaLabel:g(a.lastAriaLabel),ariaDisabled:t}:void 0}});function I(){var e;const t=i.value-r.value;(e=N.value[t])==null||e.$el.focus()}function z(e){e.key===S.left&&!a.disabled&&i.value>a.start?(i.value=i.value-1,$(I)):e.key===S.right&&!a.disabled&&i.value<r.value+n.value-1&&(i.value=i.value+1,$(I))}return J(()=>o(a.tag,{ref:D,class:["v-pagination",C.value],role:"navigation","aria-label":g(a.ariaLabel),onKeydown:z,"data-test":"v-pagination-root"},{default:()=>[o("ul",{class:"v-pagination__list"},[a.showFirstLastPage&&o("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[s.first?s.first(c.value.first):o(h,L({_as:"VPaginationBtn"},c.value.first),null)]),o("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[s.prev?s.prev(c.value.prev):o(h,L({_as:"VPaginationBtn"},c.value.prev),null)]),M.value.map((e,t)=>o("li",{key:e.key,class:["v-pagination__item",{"v-pagination__item--is-active":e.isActive}],"data-test":"v-pagination-item"},[s.item?s.item(e):o(h,L({_as:"VPaginationBtn"},e.props),{default:()=>[e.page]})])),o("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[s.next?s.next(c.value.next):o(h,L({_as:"VPaginationBtn"},c.value.next),null)]),a.showFirstLastPage&&o("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[s.last?s.last(c.value.last):o(h,L({_as:"VPaginationBtn"},c.value.last),null)])])]})),{}}});export{sa as V};
