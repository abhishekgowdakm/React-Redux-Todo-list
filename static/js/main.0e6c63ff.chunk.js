(this.webpackJsonptodoredux=this.webpackJsonptodoredux||[]).push([[0],{10:function(e,t,n){e.exports=n(23)},15:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),u=n.n(o),c=(n(15),n(9)),i=n(3);n(22);var l=Object(i.b)((function(e){return{sub:e.arr}}),(function(e){return{onSubmit:function(t){return e(function(e){return{type:"ADD",value:e}}(t))},onDelete:function(t){return e(function(e){return{type:"DELETE",value:e}}(t))}}}))((function(e){var t=Object(r.useState)(""),n=Object(c.a)(t,2),o=n[0],u=n[1],i=e.sub.map((function(t,n){return a.a.createElement("p",{key:n,className:"main_paragraph",onClick:function(){return function(t){e.onDelete(t)}(n)}},"\u2022 ",t)}));return a.a.createElement("div",{className:"main_todolist"},a.a.createElement("h1",null,"Todo List"),a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit(o)}},a.a.createElement("input",{type:"text",className:"main_input",placeholder:"i.e meeting at 5 PM",onChange:function(e){u(e.target.value)}}),a.a.createElement("button",{type:"submit",className:"main_button"},"Add")),i)}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(2),m={arr:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return{arr:e.arr.concat(t.value)};case"DELETE":return{arr:e.arr.filter((function(e,n){return n!==t.value}))};default:return{arr:e.arr}}},d=Object(s.b)(f);u.a.render(a.a.createElement(i.a,{store:d},a.a.createElement(a.a.StrictMode,null,a.a.createElement(l,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.0e6c63ff.chunk.js.map