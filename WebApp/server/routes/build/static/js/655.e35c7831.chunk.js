"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[655],{2310:function(e,n,r){r.r(n),r.d(n,{default:function(){return b}});var s=r(885),t=r(2791),c=r(1087),a=r(4569),i=r.n(a),o=r(4828),l=r(4221),u=r(369),d="8b082695d253378d7f3b9032a2304c15afff144686365dddefd1a32582a249c98d7d55131323d741a5cdd509ef7758051caa849c4494c831d996c23b250d46a2",h=r(184);var p=function(e){var n=e.setDisplay,r=(0,t.useRef)(null),s=(0,t.useRef)(null);return(0,h.jsxs)("div",{className:"login-section-background",children:[(0,h.jsx)(l.mh,{}),(0,h.jsxs)("div",{className:"login-section",children:[(0,h.jsx)("h1",{children:"ShuffleTunes"}),(0,h.jsx)("p",{className:"login-section-subtitle",children:" Enhance your musical experience "}),(0,h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),r.current.value&&s.current.value){var n={pseudo:r.current.value,password:(0,u.sha512)("".concat(s.current.value).concat(d))};i().post("".concat(o.J,"/login"),n,{withCredentials:!0}).then((function(){return l.fn.success("You are now logged in","Successfull login"),window.location="/dashboard"})).catch((function(e){return e.response?l.fn.error(e.response.data,"A problem occured"):(console.log(e),l.fn.error("Something went wrong, try again later","Unexpected error"))}))}},children:[(0,h.jsx)("input",{type:"text",placeholder:"Pseudo",required:!0,minLength:5,maxLength:20,ref:r}),(0,h.jsx)("input",{type:"password",placeholder:"Password",required:!0,minLength:8,maxLength:64,ref:s}),(0,h.jsx)("button",{type:"submit",children:"Login"})]}),(0,h.jsxs)("div",{className:"switch-connect",children:[(0,h.jsx)("p",{children:"new member ?"}),(0,h.jsx)("button",{onClick:function(){return n(!1)},className:"switch-connect-link",children:"register"})]})]})]})},f=r(4165),m=r(5861),x=r(8683),g=(r(1138),r(8007)),j=r(3606),v=r(7406),w=r(7974);var y=function(e){var n=e.setDisplay,r=(0,t.useRef)(null),c=(0,t.useRef)(null),a=(0,t.useRef)(null),p=(0,t.useState)(null),y=(0,s.Z)(p,2),b=y[0],k=y[1],N=(0,t.useRef)(null),L={translations:w.Z.translations,graphs:v.Z.adjacencyGraphs,dictionary:(0,x.Z)((0,x.Z)({},v.Z.dictionary),w.Z.dictionary)};function Z(){return(Z=(0,m.Z)((0,f.Z)().mark((function e(n){var s,t;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!r.current.value||!c.current.value){e.next=8;break}return e.next=4,N.current.executeAsync();case 4:s=e.sent,N.current.reset(),t={pseudo:r.current.value,password:(0,u.sha512)("".concat(c.current.value).concat(d)),token:s},i().post("".concat(o.J,"/register"),t).then((function(e){return l.fn.success(e.data,"Successfull register")})).catch((function(e){return e.response?l.fn.error(e.response.data,"A problem occured"):l.fn.error("Something went wrong, try again later","Unexpected error")}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return j.Mu.setOptions(L),(0,h.jsxs)("div",{children:[(0,h.jsx)(l.mh,{className:"notifContainer"}),(0,h.jsx)("div",{className:"login-section-background",children:(0,h.jsxs)("div",{className:"login-section",children:[(0,h.jsx)("h1",{children:"ShuffleTunes"}),(0,h.jsx)("p",{className:"login-section-subtitle",children:"Enhance your musical experience"}),(0,h.jsxs)("form",{onSubmit:function(e){return Z.apply(this,arguments)},children:[(0,h.jsx)("input",{type:"text",placeholder:"Pseudo",ref:r,required:!0,minLength:5,maxLength:20}),(0,h.jsx)("input",{type:"password",placeholder:"Password",ref:c,onChange:function(){k((0,j.tu)(c.current.value).feedback.warning)},required:!0,minLength:8,maxLength:64}),(0,h.jsx)("p",{className:"passwordReview",children:b}),(0,h.jsx)("input",{type:"password",placeholder:"Confirm password",ref:a,onChange:function(e){return a.current.value===c.current.value?e.target.setCustomValidity(""):e.target.setCustomValidity("Password and confirm password don't match")},required:!0,minLength:8,maxLength:64}),(0,h.jsx)(g.Z,{ref:N,sitekey:"6LckQG0jAAAAAG2GkOggnTpG0ZfKGJXWowpmFC9E",size:"invisible"}),(0,h.jsx)("button",{type:"sumbit",children:"Register"})]}),(0,h.jsxs)("div",{className:"switch-connect",children:[(0,h.jsx)("p",{children:"already member ?"}),(0,h.jsx)("button",{onClick:function(){return n(!0)},className:"switch-connect-link",children:"login"})]})]})})]})};var b=function(){var e=(0,t.useState)(!0),n=(0,s.Z)(e,2),r=n[0],a=n[1];return(0,h.jsxs)("div",{className:"connexion-section",children:[(0,h.jsxs)("div",{className:"home-menu",children:[(0,h.jsx)(c.rU,{to:"/",className:"home-menu-logo",children:(0,h.jsx)("p",{children:"ShuffleTunes"})}),(0,h.jsx)(c.rU,{to:"/connexion",className:"home-menu-link",children:(0,h.jsx)("p",{children:"Login"})})]}),r?(0,h.jsx)(p,{display:r,setDisplay:a}):(0,h.jsx)(y,{display:r,setDisplay:a})]})}}}]);
//# sourceMappingURL=655.e35c7831.chunk.js.map