(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{302:function(e,a,t){"use strict";var r=t(5),n=function(e,a){return"linear-gradient(180deg, ".concat(e," 0%, ").concat(a," 100%)")},i=n(r.a.grey[400],r.a.grey[600]),s=n(r.a.blue[700],r.a.blue[900]),l=n(r.a.indigo[400],r.a.indigo[600]),o=n(r.a.green[400],r.a.green[600]),c=n(r.a.orange[400],r.a.orange[700]),u=n(r.a.red[500],r.a.red[700]);a.a={grey:i,blue:s,indigo:l,green:o,orange:c,red:u}},328:function(e,a,t){"use strict";t.r(a);var r=t(28),n=t(0),i=t.n(n),s=t(286),l=t(313),o=t(314),c=t(274),u=t(281),d=t(317),m=t(289),g=t(308),p=t.n(g),b=t(43),f=t(302),h=t(7),v=t.n(h),w=t(17),E=t(18),y=t(35),j=t(10),O=t(306),x=t.n(O),N=t(2),k=t(40),R=t(324),S=t(278),T=t(19),B=t(25),C={email:{presence:{allowEmpty:!1,message:"is required"},email:!0},password:{presence:{allowEmpty:!1,message:"is required"}}},D=Object(s.a)(function(e){return{root:{},fields:{margin:e.spacing(-1),display:"flex",flexWrap:"wrap","& > *":{flexGrow:1,margin:e.spacing(1)}},submitButton:{marginTop:e.spacing(2),width:"100%"}}}),W=function(e){var a=e.className,t=Object(j.a)(e,["className"]),s=D(),l=(Object(T.a)(),Object(k.c)()),o=Object(n.useState)({isValid:!1,values:{},touched:{},errors:{}}),c=Object(y.a)(o,2),u=c[0],d=c[1];Object(n.useEffect)(function(){var e=x()(u.values,C);d(function(a){return Object(E.a)({},a,{isValid:!e,errors:e||{}})})},[u.values]);var m=function(e){e.persist(),d(function(a){return Object(E.a)({},a,{values:Object(E.a)({},a.values,Object(r.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)),touched:Object(E.a)({},a.touched,Object(r.a)({},e.target.name,!0))})})},g=function(){var a=Object(w.a)(v.a.mark(function a(t){return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),l(Object(B.p)(u.values.email,u.values.password,e.history,e.enqueueSnackbar));case 2:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}(),p=function(e){return!(!u.touched[e]||!u.errors[e])};return i.a.createElement("form",Object.assign({},t,{className:Object(N.a)(s.root,a),onSubmit:g}),i.a.createElement("div",{className:s.fields},i.a.createElement(R.a,{error:p("email"),fullWidth:!0,helperText:p("email")?u.errors.email[0]:null,label:"Email address",name:"email",onChange:m,value:u.values.email||"",variant:"outlined"}),i.a.createElement(R.a,{error:p("password"),fullWidth:!0,helperText:p("password")?u.errors.password[0]:null,label:"Password",name:"password",onChange:m,type:"password",value:u.values.password||"",variant:"outlined"})),i.a.createElement(S.a,{className:s.submitButton,color:"secondary",disabled:!u.isValid,size:"large",type:"submit",variant:"contained"},"Sign in"))},q=t(326),I=Object(s.a)(function(e){return{root:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:e.spacing(6,2)},card:{width:e.breakpoints.values.md,maxWidth:"100%",overflow:"unset",display:"flex",position:"relative","& > *":{flexGrow:1,flexBasis:"50%",width:"50%"}},content:{padding:e.spacing(8,4,3,4)},media:Object(r.a)({borderTopRightRadius:4,borderBottomRightRadius:4,padding:e.spacing(3),color:e.palette.white,display:"flex",flexDirection:"column",justifyContent:"flex-end"},e.breakpoints.down("md"),{display:"none"}),icon:{backgroundImage:f.a.green,color:e.palette.white,borderRadius:e.shape.borderRadius,padding:e.spacing(1),position:"absolute",top:-32,left:e.spacing(3),height:64,width:64,fontSize:32},loginForm:{marginTop:e.spacing(3)},divider:{margin:e.spacing(2,0)},person:{marginTop:e.spacing(2),display:"flex"},avatar:{marginRight:e.spacing(2)}}}),V=function(e){var a=I(),t=Object(k.d)(function(e){return e.OtherReducer.errorMessage});return i.a.createElement(b.b,{className:a.root,title:"Login"},i.a.createElement(l.a,{className:a.card},i.a.createElement(o.a,{className:a.content},i.a.createElement(p.a,{className:a.icon}),i.a.createElement(c.a,{gutterBottom:!0,variant:"h3"},"User Sign in"),i.a.createElement(c.a,{variant:"subtitle2"},"user1@gmail.com , 123456 ",i.a.createElement("br",null),"user2@gmail.com , 123456 ",i.a.createElement("br",null),"user3@gmail.com , 123456 ",i.a.createElement("br",null)),t&&i.a.createElement(q.a,{style:{marginTop:10},variant:"filled",severity:"error"},t),i.a.createElement(W,{className:a.loginForm,history:e.history}),i.a.createElement(u.a,{className:a.divider}),i.a.createElement("a",{href:"/auth/admin/login"},"Want to login as Admin? Click here")),i.a.createElement(d.a,{className:a.media,image:"/images/auth.png",title:"Cover"},i.a.createElement(c.a,{color:"inherit",variant:"subtitle1"},"I used Dexie.js for store data in locally. Dexie.js is a wrapper of indexDB."),i.a.createElement("div",{className:a.person},i.a.createElement(m.a,{alt:"Person",className:a.avatar,src:"/images/sultan.jpg"}),i.a.createElement("div",null,i.a.createElement(c.a,{color:"inherit",variant:"body1"},"Sultan Mahamud"),i.a.createElement(c.a,{color:"inherit",variant:"body2"},"Software Engineer"))))))};t.d(a,"default",function(){return V})}}]);
//# sourceMappingURL=10.2e38eba9.chunk.js.map