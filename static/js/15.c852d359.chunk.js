"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[15],{5015:function(e,a,n){n.r(a),n.d(a,{default:function(){return f}});var s=n(9101),t=n(7689),i=n(1260),r=n(9869),o="LoginForm_group__e6ove",l="LoginForm_label__LjZZV",c="LoginForm_input__8bgJX",u="LoginForm_btn__PdsAa",m="LoginForm_form__Gdnzb",d={email:"",password:""},h=n(158),p=n(184),_=function(e){var a=e.onSubmit,n=(0,h.Z)({initialState:d,onSubmit:a}),s=n.state,t=n.handleChange,i=n.handleSubmit,r=s.email,_=s.password;return(0,p.jsxs)("form",{className:m,action:"",onSubmit:i,children:[(0,p.jsxs)("div",{className:o,children:[(0,p.jsx)("label",{className:l,htmlFor:"",children:"Email:"}),(0,p.jsx)("input",{value:r,name:"email",onChange:t,className:c,type:"email",placeholder:"Enter email"})]}),(0,p.jsxs)("div",{className:o,children:[(0,p.jsx)("label",{className:l,htmlFor:"",children:"Password:"}),(0,p.jsx)("input",{value:_,name:"password",onChange:t,className:c,type:"password",placeholder:"Enter password"})]}),(0,p.jsx)("div",{className:o,children:(0,p.jsx)("button",{className:u,type:"submit",children:"Login"})})]})},g=n(1291),b="LoginPage_title__uhZXj",x="LoginPage_notify__rDqBg",f=function(){var e=(0,s.useDispatch)(),a=(0,s.useSelector)(r.getAuthError),n=a.status,o=a.statusText;return(0,g.Z)()?(0,p.jsx)(t.Fg,{to:"/books"}):(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("h2",{className:b,children:"Login"}),(0,p.jsx)(_,{onSubmit:function(a){e((0,i.x4)(a))}}),n&&(0,p.jsxs)("p",{className:x,children:["Ooops ! You are ",o]})]})}},158:function(e,a,n){var s=n(4942),t=n(1413),i=n(9439),r=n(2791);a.Z=function(e){var a=e.initialState,n=e.onSubmit,o=(0,r.useState)((0,t.Z)({},a)),l=(0,i.Z)(o,2),c=l[0],u=l[1];return{state:c,setState:u,handleChange:function(e){var a=e.target,n=a.name,i=a.value,r=a.type,o=a.checked,l="checkbox"===r?o:i;u((function(e){return(0,t.Z)((0,t.Z)({},e),{},(0,s.Z)({},n,l))}))},handleSubmit:function(e){e.preventDefault(),n((0,t.Z)({},c)),u((0,t.Z)({},a))}}}}}]);
//# sourceMappingURL=15.c852d359.chunk.js.map