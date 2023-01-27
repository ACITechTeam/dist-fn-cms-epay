import{t as p,i as d,o as a,b as n,w as e,m as g,q as i,p as t,C as h,y as b,T as u,e as f,ba as v,r as _}from"./index.dafbd423.js";import{_ as k}from"./TheCustomizer.7fcc74fd.js";import w from"./Footer.67ff9535.js";import y from"./NavBarNotifications.4838e80a.js";import C from"./NavbarShortcuts.c96cd8fe.js";import x from"./NavbarThemeSwitcher.13958ef6.js";import P from"./NavSearchBar.7971c3aa.js";import T from"./UserProfile.49869f15.js";import{V as S}from"./VBtn.3f372a48.js";import{V}from"./VSpacer.25fe5846.js";import"./VDivider.e663d59a.js";import"./index.af2b532a.js";import"./VRadioGroup.a99339cb.js";import"./VSelectionControl.989f461b.js";import"./router.8c536722.js";import"./VInput.2bb68e51.js";import"./VImg.5434326f.js";import"./VSwitch.cbe61555.js";import"./position.81bb3a9d.js";import"./VRow.87dbd1db.js";import"./VSelect.4663eb64.js";import"./VTextField.6edd0bd7.js";/* empty css                   */import"./VField.ac0fe7ff.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.d62fa8a9.js";import"./VList.c7e5268c.js";import"./VAvatar.0c555949.js";import"./dialog-transition.43bb3003.js";import"./VMenu.db44f165.js";import"./scopeId.1c51db8f.js";import"./VOverlay.8576812d.js";import"./lazy.cdba8972.js";import"./VCheckboxBtn.f8dfd683.js";import"./VChip.61db3de3.js";import"./VNavigationDrawer.cf3ac738.js";import"./ssrBoot.c30a041b.js";import"./formatters.96fae79e.js";import"./index.4c516342.js";import"./VBadge.0aeedf12.js";import"./VListItemAction.fcd5a122.js";import"./VCard.4d469167.js";import"./useAppAbility.206197fc.js";const A=[{heading:"Apps & Pages"},{title:"Email",icon:{icon:"tabler-mail"},to:"apps-email"},{title:"Chat",icon:{icon:"tabler-message"},to:"apps-chat"},{title:"Calendar",icon:{icon:"tabler-calendar"},to:"apps-calendar"},{title:"Invoice",icon:{icon:"tabler-file"},children:[{title:"List",to:"apps-invoice-list"},{title:"Preview",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{title:"Edit",to:{name:"apps-invoice-edit-id",params:{id:"5036"}}},{title:"Add",to:"apps-invoice-add"}]},{title:"User",icon:{icon:"tabler-user"},children:[{title:"List",to:"apps-user-list"},{title:"View",to:{name:"apps-user-view-id",params:{id:21}}}]},{title:"Pages",icon:{icon:"tabler-file"},children:[{title:"Authentication",children:[{title:"Login",children:[{title:"Login v1",to:"pages-authentication-login-v1",target:"_blank"},{title:"Login v2",to:"pages-authentication-login-v2",target:"_blank"}]},{title:"Register",children:[{title:"Register v1",to:"pages-authentication-register-v1",target:"_blank"},{title:"Register v2",to:"pages-authentication-register-v2",target:"_blank"}]},{title:"Verify Email",children:[{title:"Verify Email v1",to:"pages-authentication-verify-email-v1",target:"_blank"},{title:"Verify Email v2",to:"pages-authentication-verify-email-v2",target:"_blank"}]},{title:"Forgot Password",children:[{title:"Forgot Password v1",to:"pages-authentication-forgot-password-v1",target:"_blank"},{title:"Forgot Password v2",to:"pages-authentication-forgot-password-v2",target:"_blank"}]},{title:"Reset Password",children:[{title:"Reset Password v1",to:"pages-authentication-reset-password-v1",target:"_blank"},{title:"Reset Password v2",to:"pages-authentication-reset-password-v2",target:"_blank"}]},{title:"Two Steps",children:[{title:"Two Steps v1",to:"pages-authentication-two-steps-v1",target:"_blank"},{title:"Two Steps v2",to:"pages-authentication-two-steps-v2",target:"_blank"}]}]},{title:"Help Center",to:"pages-help-center"},{title:"User Profile",to:{name:"pages-user-profile-tab",params:{tab:"profile"}}},{title:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing",to:"pages-pricing"},{title:"FAQ",to:"pages-faq"},{title:"Miscellaneous",children:[{title:"Coming Soon",to:"pages-misc-coming-soon",target:"_blank"},{title:"Under Maintenance",to:"pages-misc-under-maintenance",target:"_blank"},{title:"Page Not Found - 404",to:"pages-misc-not-found",target:"_blank"},{title:"Not Authorized - 401",to:"pages-misc-not-authorized",target:"_blank"},{title:"Server Error - 500",to:"pages-misc-internal-server-error",target:"_blank"}]}]}],L=[{heading:"Charts"},{title:"Charts",icon:{icon:"tabler-chart-donut"},children:[{title:"Apex Chart",to:"charts-apex-chart"},{title:"Chartjs",to:"charts-chartjs"}]}],R=[{title:"Dashboards",icon:{icon:"tabler-smart-home"},children:[{title:"Analytics",to:"dashboards-analytics"},{title:"eCommerce",to:"dashboards-ecommerce"},{title:"CRM",to:"dashboards-crm"}],badgeContent:"2",badgeClass:"bg-light-primary text-primary"}],F=[{heading:"Forms"},{title:"Form Elements",icon:{icon:"tabler-copy"},children:[{title:"Checkbox",to:"forms-checkbox"},{title:"Combobox",to:"forms-combobox"},{title:"Date Time Picker",to:"forms-date-time-picker"},{title:"File Input",to:"forms-file-input"},{title:"Radio",to:"forms-radio"},{title:"Range Slider",to:"forms-range-slider"},{title:"Rating",to:"forms-rating"},{title:"Select",to:"forms-select"},{title:"Slider",to:"forms-slider"},{title:"Switch",to:"forms-switch"},{title:"Textarea",to:"forms-textarea"},{title:"Textfield",to:"forms-textfield"}]},{title:"Form Layouts",icon:{icon:"tabler-copy"},to:"forms-form-layouts"},{title:"Form Validation",icon:{icon:"tabler-checkbox"},to:"forms-form-validation"}],B=[{heading:"Main Menu"},{title:"Dashboard",icon:{icon:"tabler-smart-home"},to:"dashboards"},{title:"Transactions",icon:{icon:"tabler-cash"},to:"transactions"},{title:"Billings",icon:{icon:"tabler-receipt"},to:"billings"}],E=[{heading:"Others"},{title:"Access Control",icon:{icon:"tabler-shield"},to:"access-control",action:"read",subject:"Auth"},{title:"Nav Levels",icon:{icon:"tabler-menu-2"},children:[{title:"Level 2.1",to:null},{title:"Level 2.2",children:[{title:"Level 3.1",to:null},{title:"Level 3.2",to:null}]}]},{title:"Disabled Menu",to:null,icon:{icon:"tabler-eye-off"},disable:!0},{title:"Raise Support",href:"https://pixinvent.ticksy.com/",icon:{icon:"tabler-lifebuoy"},target:"_blank"},{title:"Documentation",href:"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/",icon:{icon:"tabler-file"},target:"_blank"}],N=[{heading:"UI Elements"},{title:"Typography",icon:{icon:"tabler-square-letter-t"},to:"pages-typography"},{title:"Icons",icon:{icon:"tabler-eye"},to:"pages-icons"},{title:"Cards",icon:{icon:"tabler-credit-card"},children:[{title:"Basic",to:"pages-cards-card-basic"},{title:"Advance",to:"pages-cards-card-advance"},{title:"Statistics",to:"pages-cards-card-statistics"},{title:"Widgets",to:"pages-cards-card-widgets"},{title:"Actions",to:"pages-cards-card-actions"}]},{title:"Components",icon:{icon:"tabler-archive"},children:[{title:"Alert",to:"components-alert"},{title:"Avatar",to:"components-avatar"},{title:"Badge",to:"components-badge"},{title:"Button",to:"components-button"},{title:"Chip",to:"components-chip"},{title:"Dialog",to:"components-dialog"},{title:"Expansion Panel",to:"components-expansion-panel"},{title:"List",to:"components-list"},{title:"Menu",to:"components-menu"},{title:"Pagination",to:"components-pagination"},{title:"Progress",to:"components-progress"},{title:"Snackbar",to:"components-snackbar"},{title:"Tabs",to:"components-tabs"},{title:"Timeline",to:"components-timeline"},{title:"Tooltip",to:"components-tooltip"}]}],D=[...B,...R,...A,...N,...F,...L,...E],M={class:"d-flex h-100 align-center"},Ft={__name:"DefaultLayoutWithVerticalNav",setup($){const{appRouteTransition:r,isLessThanOverlayNavBreakpoint:s}=p(),{width:l}=d();return(z,I)=>{const c=_("RouterView"),m=k;return a(),n(i(v),{"nav-items":i(D)},{navbar:e(({toggleVerticalOverlayNavActive:o})=>[g("div",M,[i(s)(i(l))?(a(),n(S,{key:0,icon:"",variant:"text",color:"default",class:"ms-n3",size:"small",onClick:j=>o(!0)},{default:e(()=>[t(h,{icon:"tabler-menu-2",size:"24"})]),_:2},1032,["onClick"])):b("",!0),t(P,{class:"ms-lg-n3"}),t(V),t(x),t(C),t(y,{class:"me-2"}),t(T)])]),footer:e(()=>[t(w)]),default:e(()=>[t(c,null,{default:e(({Component:o})=>[t(u,{name:i(r),mode:"out-in"},{default:e(()=>[(a(),n(f(o)))]),_:2},1032,["name"])]),_:1}),t(m)]),_:1},8,["nav-items"])}}};export{Ft as default};
