(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{179:function(e,t,r){},180:function(e,t,r){},214:function(e,t,r){},234:function(e,t,r){},364:function(e,t,r){},365:function(e,t,r){"use strict";r.r(t);var n=r(5),s=r(0),a=r.n(s),c=r(23),i=r.n(c),o=(r(179),r(180),r(59)),u=r(32),j=r(370),l=r(3),b=r(7),m=a.a.createContext({user:null,login:function(e){},logout:function(){}}),d=function(e){var t=Object(s.useState)({user:null,login:function(e){},logout:function(){}}),r=Object(b.a)(t,2),a=r[0];r[1];return Object(n.jsx)(m.Provider,Object(l.a)({value:a},e))},O=function(){var e=Object(s.useContext)(m);if(void 0===e)throw new Error("Error using UserContext");return e},h=r(120),f=r(367),p=r(372),x=(h.a.SubMenu,function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),r=(t[0],t[1],O());return Object(n.jsx)(f.a,{className:"site-page-header",style:{border:"0.5px solid lightgray"},onBack:r.logout,backIcon:Object(n.jsx)(p.a,{}),title:"Dashboard"})}),g=(r(214),function(){var e,t=O();Object(u.e)();return Object(n.jsxs)("div",{children:[Object(n.jsx)(x,{}),Object(n.jsx)(j.a,{title:"User Info",bordered:!0,children:Object(n.jsx)(j.a.Item,{label:"Email",children:null===(e=t.user)||void 0===e?void 0:e.username})})]})}),v=r(373),w=r(374),P=r(371),y=r(368),C=r(75),N=r(366),S=r(74),F=r.n(S),k=new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"),I=r(34),q=r.n(I),R=r(49),E=r(119),L=r.n(E),T="http://http://ec2-18-191-134-20.us-east-2.compute.amazonaws.com:5000",U=function(){var e=Object(R.a)(q.a.mark((function e(t,r){var n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.post(T+"/login",{username:t,password:r});case 2:return n=e.sent,e.abrupt("return",Promise.resolve(n.data));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),B=function(){var e=Object(R.a)(q.a.mark((function e(t,r){var n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.post(T+"/register",{username:t,password:r});case 2:return n=e.sent,e.abrupt("return",Promise.resolve(n.data));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),z=(r(234),function(){var e=N.a.useForm(),t=Object(b.a)(e,1)[0],r=Object(s.useState)(!1),a=Object(b.a)(r,2),c=(a[0],a[1]),i=Object(s.useState)(""),u=Object(b.a)(i,2),j=u[0],l=u[1],m=Object(s.useState)(""),d=Object(b.a)(m,2),O=d[0],h=d[1];return Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsx)("div",{className:"form-wrapper",children:Object(n.jsxs)(N.a,{name:"normal_register",className:"login-form",form:t,onFinish:function(e){c(!0),B(j,O).then((function(e){c(!1),e.success?P.b.success("You can now sign in!"):P.b.error("Username taken")}))},children:[Object(n.jsx)("h1",{children:"The Best RPG"}),Object(n.jsx)("h3",{children:"Register"}),Object(n.jsx)(F.a,{name:"username",rules:[{required:!0,message:"Email is Required!"}],children:Object(n.jsx)(y.a,{autoComplete:"off",type:"text",value:j,onChange:function(e){return l(e.target.value)},prefix:Object(n.jsx)(v.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(n.jsx)(N.a.Item,{name:"password",rules:[{required:!0,message:"Password is Required!"},{validator:function(e,t){return k.test(t)?Promise.resolve():Promise.reject("Passwords doesn't meet Requirements!")}}],hasFeedback:!0,children:Object(n.jsx)(y.a.Password,{value:O,onChange:function(e){return h(e.target.value)},placeholder:"Password",prefix:Object(n.jsx)(w.a,{className:"site-form-item-icon"})})}),Object(n.jsx)(N.a.Item,{name:"confirm",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,r){return r&&t("password")!==r?Promise.reject("Passwords must match!"):Promise.resolve()}}}],children:Object(n.jsx)(y.a.Password,{placeholder:"Confirm Password",prefix:Object(n.jsx)(w.a,{className:"site-form-item-icon"})})}),Object(n.jsxs)(F.a,{children:[Object(n.jsx)(C.a,{type:"primary",htmlType:"submit",className:"submit-form-button",children:"Register"}),Object(n.jsxs)("span",{style:{marginLeft:10},children:["Or ",Object(n.jsx)(o.b,{to:"/",children:"login!"})]})]})]})})})}),A=r(71),D=(r(364),function(){var e=N.a.useForm(),t=Object(b.a)(e,1)[0],r=Object(s.useState)(""),a=Object(b.a)(r,2),c=a[0],i=a[1],j=Object(s.useState)(""),l=Object(b.a)(j,2),m=l[0],d=l[1],h=Object(s.useState)(!1),f=Object(b.a)(h,2),p=(f[0],f[1],Object(s.useState)(!1)),x=Object(b.a)(p,2),g=(x[0],x[1],Object(s.useState)(!1)),S=Object(b.a)(g,2),k=S[0],I=S[1],q=Object(u.e)();O();return Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsx)("div",{className:"form-wrapper",children:Object(n.jsxs)(N.a,{name:"normal_login",form:t,className:"login-form",initialValues:{remember:!0},onFinish:function(e){I(!0),U(c,m).then((function(e){I(!1),e.success?(P.b.success("Logged In"),q.push("/game")):P.b.error("Incorrect username or password")}))},children:[Object(n.jsx)("h1",{children:"The Best RPG"}),Object(n.jsx)("h3",{children:"Sign In"}),Object(n.jsx)(F.a,{hasFeedback:!0,name:"username",rules:[{required:!0,message:"Username is Required!"}],children:Object(n.jsx)(y.a,{autoComplete:"off",type:"text",value:c,onChange:function(e){return i(e.target.value)},prefix:Object(n.jsx)(v.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(n.jsx)(A.a,{trigger:["focus"],title:"Coming Soon",placement:"right",children:Object(n.jsx)(N.a.Item,{hasFeedback:!0,name:"password",rules:[{required:!0,message:"Password is Required!"}],children:Object(n.jsx)(y.a.Password,{value:m,onChange:function(e){return d(e.target.value)},placeholder:"Password",prefix:Object(n.jsx)(w.a,{className:"site-form-item-icon"})})})}),Object(n.jsxs)(F.a,{children:[Object(n.jsx)(C.a,{loading:k,type:"primary",htmlType:"submit",className:"login-form-button",children:"Log in"}),Object(n.jsxs)("span",{style:{marginLeft:10},children:["Or ",Object(n.jsx)(o.b,{to:"register",children:"register now!"})]})]})]})})})}),G=a.a.createContext({login:function(e,t){return null}}),J=function(e){return Object(n.jsx)(G.Provider,Object(l.a)({value:{login:function(){return null}}},e))},M=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(d,{children:Object(n.jsx)(J,{children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(u.a,{path:"/",exact:!0,component:D}),Object(n.jsx)(u.a,{path:"/register",component:z}),Object(n.jsx)(u.a,{path:"/game",exact:!0,component:g})]})})})})},V=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,375)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),n(e),s(e),a(e),c(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root")),V()}},[[365,1,2]]]);
//# sourceMappingURL=main.1800120b.chunk.js.map