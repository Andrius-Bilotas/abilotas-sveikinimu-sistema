(this["webpackJsonpstakalka-re"]=this["webpackJsonpstakalka-re"]||[]).push([[0],{31:function(e,a,t){e.exports=t(59)},59:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(28),c=t.n(i),r=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,60)).then((function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,i=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),i(e),c(e)}))},s=(t(36),t(1)),m=t(7);var o=function(e){return l.a.createElement("div",null,l.a.createElement("header",{className:"container-fluid py-3",style:{backgroundColor:"#6495ED"}},l.a.createElement("div",{className:"row"},l.a.createElement("ul",{className:"nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/",className:"nav-link",style:{color:"black"}},"Sveikinimai")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/administracija",className:"nav-link",style:{color:"black"}},"Sveikinim\u0173 administracija")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/vietos",className:"nav-link",style:{color:"black"}},"Sveikinim\u0173 vietos"))))),e.children)},u=t(8),p=t(9),v=t(12),E=t(11),h=t(10),d=t.n(h);var k=function(e){var a=e.sveikinimas;return l.a.createElement("div",{className:"card mx-auto mb-5",style:{width:"18rem"}},l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("h5",{className:"card-title"},"Sveikina: ",a.vardasPavarde),l.a.createElement("p",{className:"card-text"},"Linki: ",a.tekstas),l.a.createElement("p",{className:"card-text"},l.a.createElement("b",null,"Data: ",a.data)),l.a.createElement("p",{className:"card-text"},"Laikas: ",a.laikas),l.a.createElement(m.b,{to:"/sveikinimai/".concat(a.id),className:"btn btn-primary"},"Pla\u010diau")))},b=function(e){Object(v.a)(t,e);var a=Object(E.a)(t);function t(){var e;return Object(u.a)(this,t),(e=a.call(this)).state={sveikinimai:[]},e}return Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.title="Sveikinimai",d.a.get("/stakalka-ap/api/sveikinimai").then((function(a){e.setState({sveikinimai:a.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("main",{className:"container pt-3"},l.a.createElement("div",{className:"row"},this.state.sveikinimai.map((function(e){return l.a.createElement(k,{sveikinimas:e})}))))}}]),t}(n.Component);var f=function(e){var a=e.sveikinimas;return l.a.createElement("div",{className:"col"},l.a.createElement("p",null,a.paveiksliukas),l.a.createElement("h2",null,"Sveikina: ",a.vardasPavarde),l.a.createElement("p",null,"Linki: ",a.tekstas),l.a.createElement("p",null,"Data: ",a.data),l.a.createElement("p",null,"Laikas: ",a.laikas),l.a.createElement("p",null,"\u012era\u0161as: ",a.audio),l.a.createElement("p",null,"Tipas: ",a.tipas))},g=function(e){Object(v.a)(t,e);var a=Object(E.a)(t);function t(){var e;return Object(u.a)(this,t),(e=a.call(this)).state={sveikinimas:{}},e}return Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("/stakalka-ap/api/sveikinimai/".concat(this.props.match.params.id)).then((function(a){e.setState({sveikinimas:a.data}),console.log(a.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("main",{className:"container pt-3"},l.a.createElement("div",{className:"row"},l.a.createElement(f,{sveikinimas:this.state.sveikinimas})))}}]),t}(n.Component);var N=function(e){var a=e.sveikinimas;return l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},a.id),l.a.createElement("td",null,a.vardasPavarde),l.a.createElement("td",null,a.tekstas),l.a.createElement("td",null,a.data),l.a.createElement("td",null,a.laikas),l.a.createElement("td",null,a.tipas))},y=function(e){Object(v.a)(t,e);var a=Object(E.a)(t);function t(){var e;return Object(u.a)(this,t),(e=a.call(this)).state={sveikinimai:[]},e}return Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("/stakalka-ap/api/sveikinimai").then((function(a){e.setState({sveikinimai:a.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("main",{className:"container pt-3"},l.a.createElement("div",{className:"row pb-3"},l.a.createElement(m.b,{to:"/administracija/naujas",className:"btn btn-primary"},"Prid\u0117ti sveikinim\u0105")),l.a.createElement("div",{className:"row"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Sveikintojas"),l.a.createElement("th",{scope:"col"},"Tekstas"),l.a.createElement("th",{scope:"col"},"Data"),l.a.createElement("th",{scope:"col"},"Laikas"),l.a.createElement("th",{scope:"col"},"Tipas"))),l.a.createElement("tbody",null,this.state.sveikinimai.map((function(e){return l.a.createElement(N,{sveikinimas:e})}))))))}}]),t}(n.Component),j=t(30),C=function(e){Object(v.a)(t,e);var a=Object(E.a)(t);function t(){var e;return Object(u.a)(this,t),(e=a.call(this)).handleChange=function(a){e.setState(Object(j.a)({},a.target.name,a.target.value))},e.handleSubmit=function(a){a.preventDefault(),console.log(e.state),d.a.post("/spring-boot-starter/api/products",e.state).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},e.state={tekstas:""},e}return Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("main",{className:"container pt-5"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"title"},l.a.createElement("b",null,"Title")),l.a.createElement("input",{name:"title",type:"text",className:"form-control",value:this.state.title,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"image"},l.a.createElement("b",null,"Image URL")),l.a.createElement("input",{name:"image",type:"text",className:"form-control",value:this.state.image,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"description"},l.a.createElement("b",null,"Description")),l.a.createElement("input",{name:"description",type:"text",className:"form-control",value:this.state.description,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"price"},l.a.createElement("b",null,"Price")),l.a.createElement("input",{name:"price",type:"text",className:"form-control",value:this.state.price,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"quantity"},l.a.createElement("b",null,"Quantity")),l.a.createElement("input",{name:"quantity",type:"text",className:"form-control",value:this.state.quantity,onChange:this.handleChange})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}}]),t}(n.Component);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m.a,{basename:"/stakalka-ap"},l.a.createElement(o,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:b}),l.a.createElement(s.a,{exact:!0,path:"/sveikinimai",component:b}),l.a.createElement(s.a,{exact:!0,path:"/sveikinimai/:id",component:g}),l.a.createElement(s.a,{exact:!0,path:"/administracija",component:y}),l.a.createElement(s.a,{exact:!0,path:"/administracija/naujas",component:C}),l.a.createElement(s.a,{path:"*",component:function(e){return l.a.createElement("div",null,"Route did not match",l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){return e.history.push("/")}},"Go Home"))}})))),document.getElementById("root")),r()}},[[31,1,2]]]);
//# sourceMappingURL=main.2ca7c381.chunk.js.map