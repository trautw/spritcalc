(window.webpackJsonpcalc=window.webpackJsonpcalc||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=(a(14),a(1)),s=a(2),u=a(4),i=a(3),h=a(5),m=a(8),p=a.n(m),g=(a(15),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:"square"},this.props.value)}}]),t}(r.a.Component)),d=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={title:e.value},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("input",{type:"text",name:"title",value:this.props.value,onChange:this.props.onChange})}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={start:100,end:300,range:200},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"calc",value:function(){return 17}},{key:"handleRangeChange",value:function(e){var t=Number(e.target.value),a=t+this.state.start;this.setState({end:a,range:t})}},{key:"handleStartChange",value:function(e){var t=Number(e.target.value),a=this.state.end-t;this.setState({start:t,range:a})}},{key:"handleEndChange",value:function(e){var t=Number(e.target.value),a=t-this.state.start;this.setState({end:t,range:a})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,"Start ",r.a.createElement(d,{value:this.state.start.toString(),onChange:function(t){return e.handleStartChange(t)}}),r.a.createElement("p",null),"Ende ",r.a.createElement(d,{value:this.state.end.toString(),onChange:function(t){return e.handleEndChange(t)}}),r.a.createElement("p",null),"Entfernung ",r.a.createElement(d,{value:this.state.range.toString(),onChange:function(t){return e.handleRangeChange(t)}}),r.a.createElement("p",null))}}]),t}(r.a.Component),f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),r.a.createElement(g,{value:"99"}),r.a.createElement(v,{startValue:"111"}),r.a.createElement("p",null,"Edit the ",r.a.createElement("code",null,"src/App.tsx")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.a8305964.chunk.js.map