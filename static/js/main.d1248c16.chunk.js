(this["webpackJsonpmini-social-network"]=this["webpackJsonpmini-social-network"]||[]).push([[0],{38:function(e,t,n){},59:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(30),s=n.n(r),i=n(9),a=n(11),o=["AU","RB","CA","CH","DE","DK","ES","FI","FR","GB","IE","IR","NO","NL","NZ","TR","US"],l=(n(38),n(1)),j=function(e){var t=e.register;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("label",{htmlFor:"countries"}),Object(l.jsx)("select",Object(a.a)(Object(a.a)({id:"countries",multiple:!0,name:"ChoosingOfCountries"},t("countries")),{},{children:o.map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}))}))]})},u=function(e){var t=e.register;return Object(l.jsxs)("select",Object(a.a)(Object(a.a)({},t("gender")),{},{id:"FilterByGender",children:[Object(l.jsx)("option",{value:"all",children:"All"}),Object(l.jsx)("option",{value:"male",children:"Male"}),Object(l.jsx)("option",{value:"female",children:"Female"})]}))},d=n(33),b=function(){var e=Object(d.a)(),t=e.register,n=e.handleSubmit;return Object(l.jsxs)("form",{action:"/Mini-Sotial-Network",className:"my-network__filter",children:[Object(l.jsx)(j,{register:t,handleSubmit:n}),Object(l.jsx)(u,{register:t}),Object(l.jsx)("button",{type:"submit",children:"Apply filters"})]})},O=n(3),m=function(e){var t=e.users;return Object(l.jsx)("div",{className:"cards",children:t.map((function(e){return Object(l.jsxs)("div",{className:"my-network__card",children:[Object(l.jsx)("div",{className:"my-network__card__img",children:Object(l.jsx)("img",{src:e.picture.large,alt:"Not found img"})}),Object(l.jsx)("p",{children:Object(l.jsx)("strong",{children:"".concat(e.name.first," ").concat(e.name.last)})}),Object(l.jsx)("p",{children:e.gender}),Object(l.jsx)("p",{children:e.nat}),Object(l.jsx)("p",{children:e.dob.date.split("T")[0]})]},e.dob.date)}))})},h=n(2),f=n.n(h),p=n(7),x=function(){var e=Object(p.a)(f.a.mark((function e(t,n,c){var r,s,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="&nat="+c.getAll("countries").join(","),s="&gender="+c.get("gender"),i="".concat("https://randomuser.me","/api/?inc=gender,name,picture,dob,nat,id&results=15").concat(s).concat(r),e.next=5,t(i).then((function(e){console.log(c),n(e.data.results)}));case 5:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),g=n(19),v=n.n(g),w=function(e){return console.log(v.a.get(e)),v.a.get(e)},k=(n(59),function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(n),a=Object(i.a)(s,2),o=a[0],j=a[1],u=new URLSearchParams(Object(O.d)().search);return Object(c.useEffect)((function(){x(w,r,u)}),[]),Object(c.useEffect)((function(){j(n)}),[n]),Object(l.jsxs)("div",{className:"my-network",children:[Object(l.jsx)(b,{users:n,setFilteredUsers:j}),Object(l.jsx)(m,{users:o})]})}),N=n(18);s.a.render(Object(l.jsxs)(N.a,{children:[Object(l.jsx)(k,{}),","]}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.d1248c16.chunk.js.map