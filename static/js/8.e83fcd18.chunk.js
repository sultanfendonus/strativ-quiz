(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{293:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]},294:function(e,t,a){"use strict";var n=a(27);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),o=(0,n(a(32)).default)(i.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},297:function(e,t,a){"use strict";var n=a(27);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),o=(0,n(a(32)).default)(i.default.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=o},300:function(e,t,a){"use strict";var n=a(27);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),o=(0,n(a(32)).default)(i.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=o},304:function(e,t,a){"use strict";var n=a(35),i=a(0),o=a.n(i),r=a(40),c=a(278),l=a(286),s=a(318),u=a(322),m=a(320),d=a(319),p=a(274),f=a(297),b=a.n(f),E=a(293),g=Object(l.a)(function(e){return{root:{padding:e.spacing(3)},container:{marginTop:e.spacing(3)},button:{marginLeft:e.spacing(1)},input:{}}});t.a=Object(r.b)(function(e){return{}})(function(e){var t=g(),a=Object(i.useState)(!1),r=Object(n.a)(a,2),l=r[0],f=r[1],v=function(){f(!1)};return o.a.createElement("div",null,o.a.createElement(c.a,{size:"small",style:{backgroundColor:"#43A048",color:"white"},variant:"contained",color:"primary",className:t.button,startIcon:o.a.createElement(b.a,null),onClick:function(){f(!0)}},"View"),o.a.createElement(s.a,{fullWidth:!0,maxWidth:"md",onClose:v,"aria-labelledby":"customized-dialog-title",open:l},o.a.createElement(d.a,{id:"customized-dialog-title",onClose:v},e.question.title),o.a.createElement(m.a,{dividers:!0},e.question.options.map(function(e,t){return e.correct?o.a.createElement(p.a,{style:{color:"blue",fontSize:16}},E.a[t],") ",e.optionText):o.a.createElement(p.a,null,E.a[t],") ",e.optionText)}),o.a.createElement(p.a,{style:{marginTop:20,fontSize:11}},"* Correct answer is highlighted by blue color.")),o.a.createElement(u.a,null,o.a.createElement(c.a,{onClick:v},"Close"))))})},305:function(e,t,a){"use strict";var n=a(301),i=a(35),o=a(0),r=a.n(o),c=a(40),l=a(25),s=a(278),u=a(286),m=a(318),d=a(322),p=a(320),f=a(319),b=a(276),E=a(274),g=a(324),v=a(325),j=a(332),O=a(321),h=a(311),y=a(300),w=a.n(y),x=a(294),C=a.n(x),k=Object(u.a)(function(e){return{root:{padding:e.spacing(3)},container:{marginTop:e.spacing(3)},button:{marginLeft:e.spacing(1)},input:{}}});t.a=Object(c.b)(function(e){return{}})(function(e){var t=k(),a=Object(o.useState)(!1),u=Object(i.a)(a,2),y=u[0],x=u[1],z=Object(o.useState)(""),S=Object(i.a)(z,2),I=S[0],L=S[1],N=Object(o.useState)([]),T=Object(i.a)(N,2),q=T[0],M=T[1],W=Object(o.useState)(""),V=Object(i.a)(W,2),B=V[0],H=V[1],P=Object(o.useState)(""),_=Object(i.a)(P,2),A=_[0],D=_[1],R=Object(c.c)();Object(o.useEffect)(function(){L(e.question.title),M(e.question.options),e.question.options.map(function(e){!0===e.correct&&D(e.optionText)})},[e.question]);var F=function(){x(!1)};return r.a.createElement("div",null,r.a.createElement(s.a,{size:"small",variant:"contained",color:"primary",className:t.button,startIcon:r.a.createElement(w.a,null),onClick:function(){x(!0)}},"Edit"),r.a.createElement(m.a,{maxWidth:"xl",onClose:F,"aria-labelledby":"customized-dialog-title",open:y},r.a.createElement(f.a,{id:"customized-dialog-title",onClose:F},"Edit Question"),r.a.createElement(p.a,{dividers:!0},r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(g.a,{onChange:function(e){return L(e.target.value)},value:I,style:{marginBottom:10,width:600},id:"question-statement",label:"Question Statement",multiline:!0,rows:4,variant:"outlined"})),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(E.a,null,"Options:")),r.a.createElement(h.a,{component:"fieldset"},r.a.createElement(j.a,{"aria-label":"gender",name:"gender1",value:A},q.map(function(e,t){return r.a.createElement("div",null,r.a.createElement(O.a,{key:t,value:e.optionText,valueIndex:t,control:r.a.createElement(v.a,null),onChange:function(e){return function(e,t){D(e.target.value),q.map(function(e,a){e.correct=a===t})}(e,t)},label:e.optionText}),r.a.createElement(b.a,{onClick:function(){return function(e){var t=q.filter(function(t,a){return a!==e});M(t)}(t)},"aria-label":"delete"},r.a.createElement(C.a,null)))}))),r.a.createElement("div",{style:{marginTop:10}},r.a.createElement(g.a,{onKeyDown:function(e){"Enter"===e.key&&(M([].concat(Object(n.a)(q),[{optionText:B,correct:!1}])),H(""))},autoFocus:!0,fullWidth:!0,value:B,onChange:function(e){return H(e.target.value)},style:{marginBottom:5},id:"question-option",label:"Input Option",placeholder:"Input an option and hit enter",variant:"outlined"}))),r.a.createElement(d.a,null,r.a.createElement(s.a,{onClick:F},"close"),r.a.createElement(s.a,{autoFocus:!0,variant:"contained",onClick:function(){var t={};t.id=e.question.id,t.title=I,t.options=q,""===I||0===q.length||""===A?alert("please input necessary field."):(R(Object(l.o)(t)),F())},color:"primary"},"Update Question"))))})},329:function(e,t,a){"use strict";a.r(t);var n=a(28),i=a(0),o=a.n(i),r=a(9),c=a(25),l=a(40),s=a(274),u=a(313),m=a(314),d=a(289),p=a(323),f=a(43),b=a(286),E=a(2),g=(a(304),a(305),a(196)),v=a(35),j=a(278),O=a(318),h=a(322),y=a(320),w=a(319),x=a(297),C=a.n(x),k=(a(293),a(209)),z=a.n(k),S=a(280),I=function(e,t){return t.map(function(t){return t.optionText===e?t.correct?"(correct)":"(wrong)":null})},L=Object(b.a)(function(e){return{root:{padding:e.spacing(3)},container:{marginTop:e.spacing(3)},button:{marginLeft:e.spacing(1)},input:{}}}),N=Object(l.b)(function(e){return{}})(function(e){var t=L(),a=Object(i.useState)(!1),n=Object(v.a)(a,2),r=n[0],c=n[1],l=function(){c(!1)};return o.a.createElement("div",null,o.a.createElement(j.a,{size:"small",variant:"contained",color:"primary",className:t.button,startIcon:o.a.createElement(C.a,null),onClick:function(){c(!0)}},"View Submission History"),o.a.createElement(O.a,{fullWidth:!0,maxWidth:"md",onClose:l,"aria-labelledby":"customized-dialog-title",open:r},o.a.createElement(w.a,{id:"customized-dialog-title",onClose:l},"Submission History"),o.a.createElement(y.a,{dividers:!0},o.a.createElement(S.a,{className:t.root},e.submissionObject.submissionHistory.map(function(t,a){return o.a.createElement("div",{style:{border:"1px solid black",padding:5,margin:5}},o.a.createElement(s.a,{variant:"h6"},t.answer," - ",I(t.answer,e.submissionObject.question.options)),o.a.createElement(s.a,{variant:"subtitle2"},z()(t.timestamp).fromNow()))}))),o.a.createElement(h.a,null,o.a.createElement(j.a,{onClick:l},"Close"))))}),T=Object(b.a)(function(e){var t;return{root:{padding:e.spacing(2)},container:{marginTop:e.spacing(1)},button:{marginLeft:e.spacing(1)},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"},cardRoot:{display:"flex",alignItems:"center",flexWrap:"wrap",marginBottom:e.spacing(.6)},content:(t={paddingLeft:10,padding:e.spacing(2),flexGrow:1,display:"flex",alignItems:"center",justifyContent:"space-between"},Object(n.a)(t,e.breakpoints.down("sm"),{width:"100%",flexWrap:"wrap"}),Object(n.a)(t,"&:last-child",{paddingBottom:e.spacing(2)}),t),header:Object(n.a)({maxWidth:"100%",width:440,display:"flex"},e.breakpoints.down("sm"),{flexBasis:"100%"}),avatar:{marginRight:e.spacing(2)},stats:Object(n.a)({padding:e.spacing(1)},e.breakpoints.down("sm"),{flexBasis:"50%"}),actions:Object(n.a)({padding:e.spacing(1)},e.breakpoints.down("sm"),{flexBasis:"50%"})}}),q=Object(l.b)(function(e){return{submissionList:e.AnswerReducer.submissionList}})(function(e){var t=Object(r.g)().questionId,a=Object(l.c)(),n=T();Object(i.useEffect)(function(){a(Object(c.k)(parseInt(t)))},[]);var b;return o.a.createElement(f.b,{className:n.root,title:"Submissions"},o.a.createElement(p.a,{className:n.container,container:!0,spacing:1,justify:"space-between"},o.a.createElement("h2",null,"Submission (",e.submissionList&&e.submissionList.length,")")),o.a.createElement(p.a,{className:n.container,container:!0,spacing:1,direction:"column"},e.submissionList&&(0===(b=e.submissionList).length?o.a.createElement(s.a,null,"No Submission Found for this question! Please check back later."):(b.forEach(function(e,t){var a=g.b.find(function(t){return t.id===parseInt(e.userId)});a&&(b[t].user=a)}),b.map(function(e){return o.a.createElement(u.a,{key:e.id,className:Object(E.a)(n.cardRoot)},o.a.createElement(m.a,{className:n.content},o.a.createElement("div",{className:n.header},o.a.createElement(d.a,{alt:"Author",className:n.avatar},"P"),o.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},o.a.createElement(s.a,{variant:"h6"},e.user&&e.user.name),o.a.createElement(s.a,{variant:"subtitle2"},"Last Submitted Answer - ",o.a.createElement("b",null,e.answerValue)," ",I(e.answerValue,e.question.options)))),o.a.createElement("div",{className:n.actions},o.a.createElement(N,{submissionObject:e}))))})))))});a.d(t,"default",function(){return q})}}]);
//# sourceMappingURL=8.e83fcd18.chunk.js.map