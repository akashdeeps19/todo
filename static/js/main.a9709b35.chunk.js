(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{78:function(e,t,a){e.exports=a(89)},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),c=a.n(r),i=a(8),l=a(12),s=a.n(l),u=Object(n.createContext)(),d=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)([]),d=Object(i.a)(l,2),m=d[0],f=d[1],h="https://akashdeeps19-todoserver.glitch.me";return Object(n.useEffect)((function(){!function(){var e,t;s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(fetch(h+"/events/todos"));case 2:return e=a.sent,a.next=5,s.a.awrap(e.json());case 5:return t=a.sent,console.log(t),c(t),a.next=10,s.a.awrap(fetch(h+"/events/dones"));case 10:return e=a.sent,a.next=13,s.a.awrap(e.json());case 13:t=a.sent,console.log(t),f(t);case 16:case"end":return a.stop()}}))}()}),[]),o.a.createElement(u.Provider,{value:[r,c,m,f]},e.children)},m=a(18),f=a(125),h=a(129),p=a(130),b=a(137),v=a(132),g=a(135),E=a(128),j=a(136),w=a(144),O=a(43),x=a(131),k=a(147),C=a(134),y=a(133),S=a(65),T=a.n(S),D=Object(f.a)((function(e){return{card:{position:"relative",width:"90%",height:"5%",margin:"auto",marginBottom:10,background:"#333",color:"white"},header:{position:"relative"},subheader:{marginTop:15},delete:{position:"absolute",top:60,left:"80%"},check:{color:"white"},title:{textDecoration:"none"},titleS:{textDecoration:"line-through",textDecorationColor:"rgba(255,255,255,0.7)"},expand:{transform:"rotate(0deg)",marginLeft:"auto",position:"top",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}}));function N(e){var t=Object(n.useContext)(u),a=Object(i.a)(t,4),r=a[0],c=a[1],l=a[2],d=a[3],f=D(),S=Object(n.useState)(!1),N=Object(i.a)(S,2),_=N[0],P=N[1],L=Object(n.useState)(!1),W=Object(i.a)(L,2),A=W[0],B=W[1],I=Object(n.useState)(!1),J=Object(i.a)(I,2),F=J[0],z=J[1],H="https://akashdeeps19-todoserver.glitch.me",R=function(){var e,t,a,n=arguments;return s.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:"",t=n.length>1&&void 0!==n[1]?n[1]:"",o.prev=2,o.next=5,s.a.awrap(fetch(e,{method:t}));case 5:return a=o.sent,o.next=8,s.a.awrap(a.json());case 8:return o.abrupt("return",o.sent);case 11:o.prev=11,o.t0=o.catch(2),console.log(o.t0);case 14:case"end":return o.stop()}}),null,null,[[2,11]])};return o.a.createElement(E.a,{in:!A,timeout:500},o.a.createElement(h.a,{className:f.card,onClick:function(){P(!_)}},o.a.createElement(p.a,{className:f.header,action:o.a.createElement(w.a,{color:"primary",checked:e.todo.done,className:f.check,onChange:function(){var t,a,n,o;return s.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return B(!0),i.next=3,s.a.awrap(R("".concat(H,"/events/updateDone/").concat(e.todo._id,"&").concat(!e.todo.done),"PATCH"));case 3:i.sent,e.todo.done?((n=l.filter((function(t){return t._id==e.todo._id})))[0].done=!1,c([n[0]].concat(Object(m.a)(r))),o=l.filter((function(t){return t._id!=e.todo._id})),setTimeout((function(){return d(o)}),500)):((t=r.filter((function(t){return t._id==e.todo._id})))[0].done=!0,d([t[0]].concat(Object(m.a)(l))),a=r.filter((function(t){return t._id!=e.todo._id})),setTimeout((function(){return c(a)}),500));case 5:case"end":return i.stop()}}))}}),title:o.a.createElement(O.a,{className:e.todo.done?f.titleS:f.title,variant:"h5"},e.todo.title),subheader:o.a.createElement(O.a,{className:f.subheader,variant:"body2"},new Date(e.todo.deadline).toDateString()+" "+new Date(e.todo.deadline).toLocaleTimeString("en-IN"))}),o.a.createElement(v.a,{disableSpacing:!0},o.a.createElement(x.a,{className:f.delete,"aria-label":"delete",onClick:function(){return z(!0)}},o.a.createElement(T.a,{color:"secondary"})),o.a.createElement(k.a,{open:F,onClose:function(){return z(!1)}},o.a.createElement(y.a,null,"Delete?"),o.a.createElement(C.a,null,o.a.createElement(g.a,{onClick:function(){z(!1)}},"Cancel"),o.a.createElement(g.a,{onClick:function(){z(!1),function(){var t,a;s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return B(!0),n.next=3,s.a.awrap(R("".concat(H,"/events/").concat(e.todo._id),"DELETE"));case 3:n.sent,e.todo.done?(a=l.filter((function(t){return t._id!=e.todo._id})),setTimeout((function(){return d(a)}),500)):(t=r.filter((function(t){return t._id!=e.todo._id})),setTimeout((function(){return c(t)}),500));case 5:case"end":return n.stop()}}))}()}},"Delete")))),o.a.createElement(j.a,{in:_,timeout:"auto",unmountOnExit:!0},o.a.createElement(b.a,null,o.a.createElement(O.a,null,e.todo.description),o.a.createElement(O.a,null,e.todo.reminder?new Date(e.todo.reminderTime).toDateString()+" "+new Date(e.todo.reminderTime).toLocaleTimeString("en-IN"):"No reminder"),o.a.createElement(O.a,null,"Label : ",e.todo.label)))))}var _=function(e){var t=Object(n.useContext)(u),a=Object(i.a)(t,4),r=a[0],c=(a[1],a[2]),l=(a[3],o.a.useState([])),s=Object(i.a)(l,2);s[0],s[1];return o.a.createElement("div",null,r.map((function(t){return"Todos"===e.head&&o.a.createElement(N,{key:t._id,todo:t})})),c.map((function(t){return"Todos"!==e.head&&o.a.createElement(N,{key:t._id,todo:t})})))},P=a(7),L=a(13),W=a(141),A=a(54),B=a(142),I=a(140),J=a(139),F=a(66),z=a.n(F),H=a(138),R=a(20),$=Object(f.a)((function(e){return{fab:{position:"fixed",width:55,height:55,right:"40%",bottom:"5%"},form:{margin:0},actions:{position:"absolute",bottom:"35%",left:"45%"},text:{color:"white"}}}));function q(){var e=$(),t=Object(n.useContext)(u),a=Object(i.a)(t,2),r=(a[0],a[1]),c=Object(n.useState)(""),l=Object(i.a)(c,2),d=l[0],f=l[1],h=Object(n.useState)(""),p=Object(i.a)(h,2),b=p[0],v=p[1],E=Object(n.useState)(Date.now()),j=Object(i.a)(E,2),O=j[0],x=j[1],S=Object(n.useState)(!0),T=Object(i.a)(S,2),D=T[0],N=T[1],_=Object(n.useState)(Date.now()),F=Object(i.a)(_,2),q=F[0],G=F[1],K=Object(n.useState)(""),M=Object(i.a)(K,2),Q=M[0],U=(M[1],Object(n.useState)(!1)),V=Object(i.a)(U,2),X=V[0],Y=V[1],Z=Object(R.a)(),ee=Object(H.a)(Z.breakpoints.down("sm")),te=function(){var e,t,a,n=arguments;return s.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:"",t=n.length>1&&void 0!==n[1]?n[1]:{},o.next=4,s.a.awrap(fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(t)}));case 4:return a=o.sent,o.next=7,s.a.awrap(a.json());case 7:return o.abrupt("return",o.sent);case 8:case"end":return o.stop()}}))},ae=function(e){"add"==e.currentTarget.id&&function(e){var t,a;s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),t={title:d,description:b,deadline:O,done:!1,reminder:D,reminderTime:q,reminded:!D,label:Q},n.prev=2,n.next=5,s.a.awrap(te("https://akashdeeps19-todoserver.glitch.me/events",t));case 5:a=n.sent,r((function(e){return[a].concat(Object(m.a)(e))})),console.log(a),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),console.error(n.t0);case 13:case"end":return n.stop()}}),null,null,[[2,10]])}(e),x(Date.now()),N(!0),v(""),f(""),G(Date.now()),Y(!X)};return o.a.createElement("div",null,o.a.createElement(J.a,{className:e.fab,color:"primary",onClick:function(){return Y(!0)}},o.a.createElement(z.a,null)),o.a.createElement(k.a,{fullScreen:ee,PaperProps:{style:{backgroundColor:"beige"}},className:e.form,open:X,onClose:function(){return Y(!X)},"aria-labelledby":"form-dialog-title"},o.a.createElement(y.a,{className:e.form,id:"form-dialog-title"},"Todo"),o.a.createElement(I.a,{className:e.form},o.a.createElement(B.a,{autoFocus:!0,margin:"dense",id:"title",type:"text",fullWidth:!0,label:"Title",value:d,color:"textPrimary",onChange:function(e){return f(e.target.value)}}),o.a.createElement(B.a,{margin:"dense",id:"description",type:"text",label:"Descp",fullWidth:!0,color:"white",value:b,onChange:function(e){return v(e.target.value)}}),o.a.createElement(L.a,{utils:A.a},o.a.createElement(W.a,{color:"white",value:O,onChange:x,label:"Deadline"})),o.a.createElement(w.a,{value:D,onChange:function(e){return N(!D)},checked:D,color:"white"}),D&&o.a.createElement(L.a,{utils:A.a},o.a.createElement(W.a,{color:"white",value:q,onChange:G,label:"Reminder"}))),o.a.createElement(C.a,null,o.a.createElement(g.a,Object(P.a)({color:"white",id:"cancel",onClick:function(e){return ae(e)}},"color","primary"),"Cancel"),o.a.createElement(g.a,Object(P.a)({color:"white",id:"add",onClick:function(e){return ae(e)}},"color","primary"),"Add"))))}a(88);var G=Object(f.a)((function(e){return{head:{backgroundColor:"black",height:60,width:"100%",fontSize:32,color:"white",fontFamily:"sans-serif",textAlign:"center",position:"fixed",top:0},list:{position:"absolute",top:65,width:"100%",background:"black"},text:{top:15}}}));var K=function(){var e=G(),t=o.a.useState("Todos"),a=Object(i.a)(t,2),n=a[0],r=a[1];return o.a.createElement("div",null,o.a.createElement(d,null,o.a.createElement("div",{className:e.list},o.a.createElement(_,{head:n})),o.a.createElement(q,null)),o.a.createElement("div",{className:e.head},o.a.createElement(O.a,{variant:"h3",className:e.text,onClick:function(){r("Todos"==n?"Done":"Todos")}},n)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[78,1,2]]]);
//# sourceMappingURL=main.a9709b35.chunk.js.map