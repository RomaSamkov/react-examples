"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[655],{1655:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var s="RegisterForm_group__7Qg3T",n="RegisterForm_label__dT6TF",r="RegisterForm_input__8NOWR",l="RegisterForm_btn__1xC4t",i={name:"",email:"",password:""},c=t(158),o=t(184),u=function(e){var a=e.onSubmit,t=(0,c.Z)({initialState:i,onSubmit:a}),u=t.state,m=t.handleChange,d=t.handleSubmit,h=u.name,p=u.email,x=u.password;return(0,o.jsxs)("form",{action:"",onSubmit:d,children:[(0,o.jsxs)("div",{className:s,children:[(0,o.jsx)("label",{className:n,htmlFor:"",children:"User Name:"}),(0,o.jsx)("input",{value:h,name:"name",onChange:m,className:r,type:"text",placeholder:"Enter name",required:!0})]}),(0,o.jsxs)("div",{className:s,children:[(0,o.jsx)("label",{className:n,htmlFor:"",children:"Email:"}),(0,o.jsx)("input",{value:p,name:"email",onChange:m,className:r,type:"email",placeholder:"Enter email"})]}),(0,o.jsxs)("div",{className:s,children:[(0,o.jsx)("label",{className:n,htmlFor:"",children:"Password:"}),(0,o.jsx)("input",{value:x,name:"password",onChange:m,className:r,type:"password",placeholder:"Enter password"})]}),(0,o.jsx)("div",{className:s,children:(0,o.jsx)("button",{className:l,type:"submit",children:"Register"})})]})},m=(t(2791),t(9101)),d=t(7689),h=t(1260),p=t(9869),x=t(1291),b=function(){var e=(0,m.useDispatch)(),a=(0,m.useSelector)(p.getAuthError),t=a.status,s=a.statusText;return(0,x.Z)()?(0,o.jsx)(d.Fg,{to:"/books"}):(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)("h2",{children:"Register Page"}),(0,o.jsx)(u,{onSubmit:function(a){e((0,h.I)(a))}}),t&&(0,o.jsx)("p",{style:{color:"red"},children:s})]})}},158:function(e,a,t){var s=t(4942),n=t(1413),r=t(9439),l=t(2791);a.Z=function(e){var a=e.initialState,t=e.onSubmit,i=(0,l.useState)((0,n.Z)({},a)),c=(0,r.Z)(i,2),o=c[0],u=c[1];return{state:o,setState:u,handleChange:function(e){var a=e.target,t=a.name,r=a.value,l=a.type,i=a.checked,c="checkbox"===l?i:r;u((function(e){return(0,n.Z)((0,n.Z)({},e),{},(0,s.Z)({},t,c))}))},handleSubmit:function(e){e.preventDefault(),t((0,n.Z)({},o)),u((0,n.Z)({},a))}}}}}]);
//# sourceMappingURL=655.c98676f5.chunk.js.map