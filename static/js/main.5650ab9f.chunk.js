(this.webpackJsonpgrocery_list=this.webpackJsonpgrocery_list||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(8),r=n.n(i),a=(n(13),n(14),n(4)),l=n(7),o=n(0);var u=function(){var e=Object(c.useContext)(h),t=e.list,n=e.setList,s=Object(c.useState)(""),i=Object(a.a)(s,2),r=i[0],u=i[1],j=Object(c.useState)(),b=Object(a.a)(j,2),d=b[0],O=b[1],m=!0;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{className:"input-form",onSubmit:function(e){e.preventDefault(),d>=1?(t.map((function(e){e.listItem.toLowerCase()===r.toLowerCase()&&(e.repetation=e.repetation+parseInt(d,10),u(""),O(),n(Object(l.a)(t)),m=!1,document.getElementById("numberInput").value="")})),m&&(n([].concat(Object(l.a)(t),[{listItem:r,repetation:parseInt(d,10),isPurchased:!1}])),u(""),O(),document.getElementById("numberInput").value="")):(document.getElementById("showNotification").innerHTML="Quantity must be greater than 0.",u(""),O(),document.getElementById("numberInput").value="")},children:[Object(o.jsx)("input",{id:"textInput",type:"text",name:"item",placeholder:"Add New Item",value:r,onChange:function(e){var t=e.target.value;console.log(t),u(t)},onClick:function(){document.getElementById("showNotification").innerHTML=""},required:!0}),Object(o.jsx)("input",{id:"numberInput",type:"number",name:"numberOfItem",placeholder:"Quantity",onChange:function(e){var t=e.target.value;console.log(t),O(t),console.log(d)},required:!0}),Object(o.jsx)("button",{id:"add-btn",className:"btn",type:"submit",children:"ADD"}),Object(o.jsx)("button",{className:"btn",type:"button",onClick:function(){n([])},children:"Clear All"})]}),Object(o.jsx)("p",{id:"showNotification"})]})},j=n(2);var b=function(){var e=Object(c.useContext)(h),t=e.list,n=e.setList;return Object(o.jsx)("div",{className:"grocery-list",children:Object(o.jsxs)("table",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Items"}),Object(o.jsx)("th",{children:"Quantity"}),Object(o.jsx)("th",{children:"Purchase"}),Object(o.jsx)("th",{children:"Delete"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{}),Object(o.jsx)("td",{}),Object(o.jsx)("td",{}),Object(o.jsx)("td",{})]}),t.map((function(e){console.log(e.listItem);var c=e.listItem,s=e.repetation,i=e.isPurchased;if(!e.isDeleted)return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("tr",{style:{background:i?"red":"white"},children:[Object(o.jsx)("td",{onClick:function(){var e=t.map((function(e){return e.listItem===c?Object(j.a)(Object(j.a)({},e),{},{isPurchased:!e.isPurchased}):e}));n(e)},children:c}),Object(o.jsx)("td",{children:s}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{className:"purchase_btn",onClick:function(){var e=t.map((function(e){return e.listItem===c?Object(j.a)(Object(j.a)({},e),{},{isPurchased:!e.isPurchased}):e}));n(e)},children:"Purchase"})}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{onClick:function(){var e=t.map((function(e){return e.listItem===c?Object(j.a)(Object(j.a)({},e),{},{isDeleted:!e.isDeleted}):e}));n(e)},children:"Delete"})})]})})}))]})})};var d=function(){var e,t=Object(c.useContext)(h),n=t.list,s=t.setList,i=0;return e=0===n.length?[0]:n.map((function(e){return e.isDeleted||(i+=e.repetation),i})),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h4",{children:["Total number of Grocery items :"," ",e[e.length-1]]}),Object(o.jsx)("button",{className:"btn",onClick:function(){s(n.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{isPurchased:!0})})))},children:"Purchase All"})]})},h=Object(c.createContext)();var O=function(){var e=Object(c.useState)([{listItem:"Honey",repetation:1,isPurchased:!1,isDeleted:!1}]),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(o.jsx)(h.Provider,{value:{list:n,setList:s},children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"title",children:"Grocery List"}),Object(o.jsx)(u,{}),Object(o.jsx)(b,{}),Object(o.jsx)(d,{})]})})};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5650ab9f.chunk.js.map