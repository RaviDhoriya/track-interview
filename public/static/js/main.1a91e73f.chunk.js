(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{128:function(e,t,c){},199:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),s=c.n(n),r=c(22),i=c.n(r),j=c(10),o=(c(128),c(216)),d=c(121),l=c(220),b=c(122),u=c(71),h=c(75),O=c(18),x=c(13),f=c(209),v={BASE:"https://trackinterview.herokuapp.com",headers:function(){var e={"Content-Type":"application/json"},t=localStorage.getItem("token")||!1;return t&&(e.Authorization="Bearer "+t),e},login:function(e,t){try{var c={};c.headers=v.headers(),c.method="POST",c.body=JSON.stringify(e),fetch(v.BASE+"/api/login",c).then((function(e){return e.json()})).then((function(e){return t(e)}))}catch(a){t({status:!1,message:"Failed to validate user",error:a})}},signup:function(e,t){try{var c={};c.headers=v.headers(),c.method="POST",c.body=JSON.stringify(e),fetch(v.BASE+"/api/signup",c).then((function(e){return e.json()})).then((function(e){return t(e)}))}catch(a){t({status:!1,message:"Failed to register new user",error:a})}},getJobStats:function(e){try{var t={};t.headers=v.headers(),t.method="GET",fetch(v.BASE+"/api/jobs/stats",t).then((function(e){return e.json()})).then((function(t){return e(t)}))}catch(c){e({status:!1,message:"Failed to get Job stats",error:c})}},getMyJobs:function(e,t){try{var c={};c.headers=v.headers(),c.method="POST",c.body=JSON.stringify(e),fetch(v.BASE+"/api/jobs",c).then((function(e){return e.json()})).then((function(e){return t(e)}))}catch(a){t({status:!1,message:"Failed to get Jobs",error:a})}},getJobDetails:function(e,t){try{var c={};c.headers=v.headers(),c.method="GET",fetch("".concat(v.BASE,"/api/jobs/").concat(e),c).then((function(e){return e.json()})).then((function(e){return t(e)}))}catch(a){t({status:!1,message:"Failed to get job details",error:a})}},newJob:function(e,t){try{var c={};c.headers=v.headers(),c.method="POST",c.body=JSON.stringify(e),fetch(v.BASE+"/api/jobs",c).then((function(e){return e.json()})).then((function(e){return t(e)}))}catch(a){t({status:!1,message:"Failed to add Job",error:a})}},editJob:function(e,t){try{var c={};c.headers=v.headers(),c.method="PUT",c.body=JSON.stringify(e),fetch(v.BASE+"/api/jobs",c).then((function(e){return e.json()})).then((function(e){return t(e)}))}catch(a){t({status:!1,message:"Failed to edit Job",error:a})}},deleteJob:function(e,t){try{var c={};c.headers=v.headers(),c.method="DELETE",c.body=JSON.stringify(e),fetch(v.BASE+"/api/jobs",c).then((function(e){return e.json()})).then((function(e){return t(e)}))}catch(a){t({status:!1,message:"Failed to delete Job",error:a})}},newActivity:function(e,t){try{var c={};c.headers=v.headers(),c.method="POST",c.body=JSON.stringify(e),fetch(v.BASE+"/api/activities",c).then((function(e){return e.json()})).then((function(e){return t(e)}))}catch(a){t({status:!1,message:"Failed to add activity",error:a})}},editActivity:function(e,t){try{var c={};c.headers=v.headers(),c.method="PUT",c.body=JSON.stringify(e),fetch(v.BASE+"/api/activities",c).then((function(e){return e.json()})).then((function(e){return t(e)}))}catch(a){t({status:!1,message:"Failed to edit activity",error:a})}},deleteActivity:function(e,t){try{var c={};c.headers=v.headers(),c.method="DELETE",c.body=JSON.stringify(e),fetch(v.BASE+"/api/activities",c).then((function(e){return e.json()})).then((function(e){return t(e)}))}catch(a){t({status:!1,message:"Failed to delete activity",error:a})}}},g=v,m=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("data")||"{}")),t=Object(j.a)(e,2),c=t[0],s=(t[1],Object(n.useState)([])),r=Object(j.a)(s,2),i=r[0],o=r[1],d=new Map;d.set("interviewing","Interviewing"),d.set("response","Got Response"),d.set("applied","Applied"),d.set("waiting","Waiting"),d.set("rejected","Got Rejected"),d.set("offer_recieved","Offer Received"),d.set("decline","Declined Offer"),d.set("pending","Pending");return Object(n.useEffect)((function(){g.getJobStats((function(e){o(e.data)}))}),[]),Object(a.jsxs)(f.a,{children:[Object(a.jsxs)("h3",{children:["Hi ",c.name,"!"]}),"Welcome to Track Interview App!",i.map((function(e){return Object(a.jsxs)(O.b,{className:"quick-links",to:"/dashboard/".concat(e._id),children:[" ",d.get(e._id)," (",e.count,")"]})}))]})},p=c(210),y=c(211),S=c(109),w=c.n(S),_=function(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),s=c[0],r=c[1],i=Object(x.g)().job_status;return Object(n.useEffect)((function(){!function(){var t={};i&&(t.filter={status:i}),g.getMyJobs(t,(function(t){t.status?r(t.data):e.logout()}))}()}),[]),Object(a.jsx)("div",{children:Object(a.jsxs)(f.a,{children:[Object(a.jsx)(p.a,{as:O.b,to:"/job-add",variant:"outline-primary",className:"float-right",children:"[+] New Job"}),Object(a.jsx)("h3",{children:"Dashboard"}),Object(a.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Sr#"}),Object(a.jsx)("td",{children:"Position"}),Object(a.jsx)("td",{children:"Company"}),Object(a.jsx)("td",{children:"Status"}),Object(a.jsx)("td",{children:"Updated"}),Object(a.jsx)("td",{children:"Action"})]})}),Object(a.jsx)("tbody",{children:s.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t+1}),Object(a.jsx)("td",{children:Object(a.jsx)(O.b,{to:"/job/".concat(e._id),children:e.name})}),Object(a.jsx)("td",{children:e.company}),Object(a.jsx)("td",{children:e.status}),Object(a.jsx)("td",{children:Object(a.jsx)(w.a,{date:new Date(e.updated),locale:"en-US"})}),Object(a.jsxs)("td",{children:[Object(a.jsx)(p.a,{as:O.b,to:"/job-edit/".concat(e._id),children:"Edit"})," ",Object(a.jsx)(p.a,{variant:"danger",onClick:function(t){return function(e){if(window.confirm('Do you want to delete job "'.concat(e.name," - ").concat(e.company,"?"))){var t={};t.job_id=e._id,g.deleteJob(t,(function(t){if(t.status){var c=s.filter((function(t){return t._id!==e._id}));r(c)}}))}}(e)},children:"Delete"})]})]},e._id)}))})]})]})})},C=c(218),k=c(212),E=c(113),J=c(110),N=c(112),A=c(111),D=c(213),L=c(60),T=c.n(L),P=(c(97),function(){var e=Object(x.f)(),t=Object(x.g)().job_id,c=Object(n.useState)(""),s=Object(j.a)(c,2),r=s[0],i=s[1],o=Object(n.useState)(""),d=Object(j.a)(o,2),l=d[0],b=d[1],u=Object(n.useState)(""),h=Object(j.a)(u,2),O=h[0],v=h[1],m=Object(n.useState)(""),y=Object(j.a)(m,2),S=y[0],w=y[1],_=Object(n.useState)(""),L=Object(j.a)(_,2),P=L[0],R=L[1],B=Object(n.useState)(""),I=Object(j.a)(B,2),F=I[0],U=I[1],M=Object(n.useState)([]),H=Object(j.a)(M,2),G=H[0],z=H[1],W=Object(n.useState)(""),q=Object(j.a)(W,2),K=q[0],Q=q[1],V=Object(n.useState)(0),X=Object(j.a)(V,2),Y=X[0],Z=X[1],$=Object(n.useState)(0),ee=Object(j.a)($,2),te=ee[0],ce=ee[1],ae=Object(n.useState)(""),ne=Object(j.a)(ae,2),se=ne[0],re=ne[1],ie=Object(n.useState)(""),je=Object(j.a)(ie,2),oe=je[0],de=je[1],le=Object(n.useState)(""),be=Object(j.a)(le,2),ue=be[0],he=be[1],Oe=Object(n.useState)(""),xe=Object(j.a)(Oe,2),fe=xe[0],ve=xe[1],ge=Object(n.useState)(new Date),me=Object(j.a)(ge,2),pe=me[0],ye=me[1],Se=Object(n.useState)("applied"),we=Object(j.a)(Se,2),_e=we[0],Ce=we[1],ke=Object(n.useState)({msg:"",variant:""}),Ee=Object(j.a)(ke,2),Je=Ee[0],Ne=Ee[1];Object(n.useEffect)((function(){t&&g.getJobDetails(t,(function(e){if(console.log(e),e.status){var c=e.data;i(c.name),b(c.company),v(c.job_url),w(c.review_url),R(c.linkedin_url),U(c.source),z(c.skills),Q(c.location),Z(c.ctc_min),ce(c.ctc_max),re(c.notes),de(c.hr.name),he(c.hr.email),ve(c.hr.phone),ye(new Date(c.applied)),Ce(c.status)}else console.error("Job not found."),t=void 0}))}),[]);return Object(a.jsxs)(f.a,{children:[Object(a.jsx)("h3",{children:void 0===t?"Create New Job":"Edit Job details"}),Object(a.jsxs)(C.a,{children:[Object(a.jsxs)(k.a,{children:[Object(a.jsx)(E.a,{children:Object(a.jsxs)(J.a,{children:[Object(a.jsx)(N.a,{children:"Job Position"}),Object(a.jsx)(A.a,{type:"text",placeholder:"Enter Job Position",value:r,onChange:function(e){return i(e.target.value)}})]})}),Object(a.jsx)(E.a,{children:Object(a.jsxs)(k.a,{children:[Object(a.jsx)(E.a,{children:Object(a.jsxs)(J.a,{children:[Object(a.jsx)(N.a,{children:"Company"}),Object(a.jsx)(A.a,{type:"text",placeholder:"Enter Company Name",value:l,onChange:function(e){return b(e.target.value)}})]})}),Object(a.jsx)(E.a,{children:Object(a.jsxs)(J.a,{children:[Object(a.jsx)(N.a,{children:"Applied On"}),Object(a.jsx)(T.a,{as:A.a,selected:pe,onChange:function(e){return ye(e)}})]})})]})})]}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(E.a,{children:Object(a.jsxs)(J.a,{children:[Object(a.jsx)(N.a,{children:"Job URL"}),Object(a.jsx)(A.a,{type:"url",placeholder:"Enter Job URL",value:O,onChange:function(e){return v(e.target.value)}})]})}),Object(a.jsx)(E.a,{children:Object(a.jsxs)(J.a,{children:[Object(a.jsx)(N.a,{children:"LinkedIn URL"}),Object(a.jsx)(A.a,{type:"text",placeholder:"Enter LinkedIn URL",value:P,onChange:function(e){return R(e.target.value)}})]})}),Object(a.jsx)(E.a,{children:Object(a.jsxs)(J.a,{children:[Object(a.jsxs)(N.a,{children:["Review URL ",Object(a.jsx)("small",{children:"(eg. Glassdoor)"})]}),Object(a.jsx)(A.a,{type:"url",placeholder:"Enter Review URL",value:S,onChange:function(e){return w(e.target.value)}})]})}),Object(a.jsx)(E.a,{children:Object(a.jsxs)(J.a,{children:[Object(a.jsx)(N.a,{children:"Source"}),Object(a.jsx)(A.a,{type:"text",placeholder:"Enter Job Source",value:F,onChange:function(e){return U(e.target.value)}})]})})]}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(E.a,{children:Object(a.jsxs)(J.a,{children:[Object(a.jsx)(N.a,{children:"Skills"}),Object(a.jsx)(A.a,{type:"text",placeholder:"Skills needed for this job",value:G.join(","),onChange:function(e){return z(e.target.value.split(","))}})]})}),Object(a.jsx)(E.a,{children:Object(a.jsxs)(J.a,{children:[Object(a.jsx)(N.a,{children:"Job Location"}),Object(a.jsx)(A.a,{type:"text",placeholder:"Enter Job Location",value:K,onChange:function(e){return Q(e.target.value)}})]})}),Object(a.jsx)(E.a,{children:Object(a.jsxs)(J.a,{children:[Object(a.jsx)(N.a,{children:"Minimum CTC"}),Object(a.jsx)(A.a,{type:"text",placeholder:"Minimum CTC",value:Y,onChange:function(e){return Z(e.target.value)}})]})}),Object(a.jsx)(E.a,{children:Object(a.jsxs)(J.a,{children:[Object(a.jsx)(N.a,{children:"Maximum CTC"}),Object(a.jsx)(A.a,{type:"text",placeholder:"Maximum CTC",value:te,onChange:function(e){return ce(e.target.value)}})]})})]}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(E.a,{children:Object(a.jsxs)(J.a,{children:[Object(a.jsx)(N.a,{children:"Notes"}),Object(a.jsx)(A.a,{as:"textarea",rows:"3",placeholder:"Notes about this Job",value:se,onChange:function(e){return re(e.target.value)}})]})}),Object(a.jsxs)(E.a,{children:[Object(a.jsx)("div",{children:"HR Contact"}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(E.a,{children:Object(a.jsx)(J.a,{children:Object(a.jsx)(A.a,{type:"text",placeholder:"HR Name",value:oe,onChange:function(e){return de(e.target.value)}})})}),Object(a.jsx)(E.a,{children:Object(a.jsx)(J.a,{children:Object(a.jsx)(A.a,{type:"email",placeholder:"HR Email Address",value:ue,onChange:function(e){return he(e.target.value)}})})})]}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(E.a,{children:Object(a.jsx)(J.a,{children:Object(a.jsx)(A.a,{type:"tel",placeholder:"HR Phone Number",value:fe,onChange:function(e){return ve(e.target.value)}})})}),Object(a.jsx)(E.a,{children:Object(a.jsx)(J.a,{children:Object(a.jsx)(A.a,{as:"select",onChange:function(e){return Ce(e.target.value)},children:["pending","applied","response","interviewing","waiting","rejected","offer_recieved","decline"].map((function(e,t){return Object(a.jsx)("option",{value:e,selected:e===_e,children:e},"x".concat(t))}))})})})]})]})]}),Object(a.jsx)(k.a,{children:Object(a.jsxs)(E.a,{children:[Object(a.jsx)(p.a,{variant:"primary",className:"mr-3",onClick:function(c){return function(c){var a={};a.name=r,a.company=l,a.job_url=O,a.review_url=S,a.linkedin_url=P,a.source=F,a.skills=G,a.location=K,a.ctc_min=Y,a.ctc_max=te,a.notes=se,a.hr={name:oe,email:ue,phone:fe},a.applied=""===pe||void 0===pe||null===pe?null:pe.toString(),a.status=_e,t?(a.job_id=t,g.editJob(a,(function(t){t.status?(Ne({msg:t.message,variant:"success"}),e.goBack()):Ne({msg:t.message,variant:"danger"})}))):g.newJob(a,(function(t){t.status?(Ne({msg:t.message,variant:"success"}),e.goBack()):Ne({msg:t.message,variant:"danger"})}))}()},children:"Save"}),Object(a.jsx)(p.a,{variant:"secondary",onClick:function(){return e.goBack()},children:"Cancel"})]})}),Object(a.jsx)(k.a,{children:Object(a.jsxs)(E.a,{children:[Object(a.jsx)("br",{}),Object(a.jsx)(D.a,{show:""!==Je.msg,variant:Je.variant,dismissible:!0,onClose:function(){return Ne({msg:"",variant:""})},children:Je.msg})]})})]})]})}),R=c(30),B=c(215),I=c(37),F=c(120),U=c(43),M=c(219),H=c(217),G=c(118),z=c(117),W=c(214),q=c(119),K=c(70),Q=Object(n.forwardRef)((function(e,t){var c={body:"",is_schedule:!1,schedule_date:new Date,schedule_done:!1},s=Object(n.useState)(!1),r=Object(j.a)(s,2),i=r[0],o=r[1],d=Object(n.useState)(!1),l=Object(j.a)(d,2),b=l[0],u=l[1],h=Object(n.useState)(c),O=Object(j.a)(h,2),x=O[0],f=O[1],v=Object(n.useState)(new Date),m=Object(j.a)(v,2),y=(m[0],m[1],e.job);Object(n.useImperativeHandle)(t,(function(){return{showModal:function(e){o(!0),null==e?(u(!1),f(c)):(u(!0),e.schedule_date=new Date(e.schedule_date),e.is_schedule?e.is_schedule=!0:e.is_schedule=!1,e.schedule_done?e.schedule_done=!0:e.schedule_done=!1,f(e))}}}));return Object(a.jsxs)(H.a,{show:i,onHide:function(){},children:[Object(a.jsx)(K.a,{children:Object(a.jsx)(G.a,{children:b?"Edit Activity":"New Activity"})}),Object(a.jsx)(z.a,{children:Object(a.jsxs)(C.a,{children:[Object(a.jsxs)(J.a,{children:[Object(a.jsx)(N.a,{children:"Description"}),Object(a.jsx)(A.a,{type:"text",placeholder:"Description",value:x.body,onChange:function(e){return f(Object(R.a)(Object(R.a)({},x),{},{body:e.target.value}))}})]}),Object(a.jsx)(N.a,{children:"Set Reminder"}),Object(a.jsxs)(W.a,{children:[Object(a.jsx)(W.a.Prepend,{children:Object(a.jsx)(W.a.Checkbox,{checked:x.is_schedule,onChange:function(e){return f(Object(R.a)(Object(R.a)({},x),{},{is_schedule:!x.is_schedule}))}})}),Object(a.jsx)(T.a,{as:A.a,selected:x.schedule_date,onChange:function(e){return f(Object(R.a)(Object(R.a)({},x),{},{schedule_date:new Date(e)}))}})]})]})}),Object(a.jsxs)(q.a,{children:[Object(a.jsx)(p.a,{variant:"primary",onClick:function(){var t={};t.job_id=y._id,t.body=x.body,t.is_schedule=x.is_schedule,t.schedule_date=x.schedule_date,t.schedule_done=x.schedule_done,b?(t.activity_id=x._id,g.editActivity(t,(function(t){t.status&&(o(!1),e.parentCallback())}))):g.newActivity(t,(function(t){t.status&&(o(!1),e.parentCallback())}))},children:"Save"}),Object(a.jsx)(p.a,{variant:"secondary",onClick:function(){o(!1),e.parentCallback()},children:"Cancel"})]})]})})),V=function(){var e=Object(x.g)().job_id,t=Object(n.useState)({skills:[],activities:[]}),c=Object(j.a)(t,2),r=c[0],i=c[1],o=Object(n.useRef)(),d=function(){g.getJobDetails(e,(function(e){e.status&&i(e.data)}))};Object(n.useEffect)((function(){d()}),[]);return Object(a.jsxs)(f.a,{children:[Object(a.jsx)("hr",{}),Object(a.jsx)(k.a,{children:Object(a.jsx)(E.a,{children:Object(a.jsxs)(B.a,{children:[Object(a.jsxs)("h3",{className:"company-name",children:[r.company," ",Object(a.jsxs)("small",{children:["(",r.location,")"]})]}),Object(a.jsxs)("div",{className:"position-name",children:[r.name," ",Object(a.jsx)("small",{children:Object(a.jsxs)("a",{href:r.job_url,target:"_new",children:[r.source," ",Object(a.jsx)(I.a,{icon:U.b})]})})]}),Object(a.jsxs)("div",{className:"icon-row",children:[Object(a.jsxs)("a",{href:r.linkedin_url,target:"_new",children:[Object(a.jsx)(I.a,{icon:F.a})," LinkedIn"]})," ","|"," ",Object(a.jsxs)("a",{href:r.review_url,target:"_new",children:[Object(a.jsx)(I.a,{icon:U.d})," Glassdoor Review"]})," "]}),Object(a.jsx)("div",{className:"skill-row",children:r.skills.map((function(e,t){return Object(a.jsx)("span",{className:"skill-tag",children:e})}))}),Object(a.jsxs)("div",{className:"ctc-row",children:["CTC: ",r.ctc_min,""!==r.ctc_max?" - "+r.ctc_max:""]})]})})}),Object(a.jsx)(k.a,{children:Object(a.jsx)(E.a,{children:Object(a.jsxs)("div",{className:"activity-add",children:[Object(a.jsxs)(p.a,{variant:"success",className:"float-right",onClick:function(){return o.current.showModal(null)},children:[Object(a.jsx)(I.a,{icon:U.c})," New Activity"]}),Object(a.jsxs)(p.a,{as:O.b,variant:"warning",className:"float-right mr-3",to:"/job-edit/".concat(r._id),children:[Object(a.jsx)(I.a,{icon:U.a})," Edit"]}),Object(a.jsx)(Q,{job:r,ref:o,parentCallback:function(){d()}})]})})}),Object(a.jsx)(k.a,{children:Object(a.jsx)(E.a,{className:"activity-list",children:r.activities.map((function(e,t){return Object(a.jsx)(s.a.Fragment,{children:Object(a.jsxs)("div",{className:"activity-box",children:[Object(a.jsxs)("div",{className:"activity-buttons",children:[Object(a.jsx)(p.a,{variant:"danger",size:"sm",onClick:function(){!function(e){if(window.confirm("Do you want to delete this activity?")){var t={};t.activity_id=e._id,g.deleteActivity(t,(function(t){if(t.status){var c=r.activities.filter((function(t){return t._id!==e._id}));i(Object(R.a)(Object(R.a)({},r),{},{activities:c}))}}))}}(e)},children:Object(a.jsx)(I.a,{icon:U.e})}),"  ",Object(a.jsx)(p.a,{variant:"warning",size:"sm",onClick:function(){return o.current.showModal(e)},children:Object(a.jsx)(I.a,{icon:U.a})})]}),Object(a.jsxs)("div",{className:"activity-head",children:["".concat(new Date(e.stamp).toLocaleDateString()," ").concat(new Date(e.stamp).toLocaleTimeString())," ",Object(a.jsx)(M.a,{date:new Date(e.stamp),locale:"en-US"})]}),Object(a.jsx)("div",{className:"activity-body",children:e.body})]})},t)}))})})]})},X=c(107),Y=c(94),Z=function(e){var t=Object(n.useState)(""),c=Object(j.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)(""),o=Object(j.a)(i,2),d=o[0],l=o[1],b=Object(n.useState)(""),u=Object(j.a)(b,2),h=u[0],O=u[1],x=Object(n.useState)(""),v=Object(j.a)(x,2),m=v[0],y=v[1],S=Object(n.useState)(""),w=Object(j.a)(S,2),_=w[0],D=w[1],L=Object(n.useState)(""),T=Object(j.a)(L,2),P=T[0],R=T[1],I=e.parentCheckLogin,F=function(e){localStorage.setItem("token",e.token),localStorage.setItem("data",JSON.stringify(e.user)),I()};return Object(a.jsx)(n.Fragment,{children:Object(a.jsxs)(f.a,{children:[Object(a.jsx)(B.a,{children:Object(a.jsx)("h2",{children:"Track Interview"})}),Object(a.jsx)("br",{}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(E.a,{children:Object(a.jsxs)(C.a,{children:[Object(a.jsx)("center",{children:Object(a.jsx)("h3",{children:"Login"})}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(N.a,{children:"Email"}),Object(a.jsx)(A.a,{type:"text",placeholder:"Enter Email address",value:s,onChange:function(e){return r(e.target.value)}})]}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(N.a,{children:"Password"}),Object(a.jsx)(A.a,{type:"password",placeholder:"Enter Password",value:d,onChange:function(e){return l(e.target.value)}})]}),Object(a.jsx)(p.a,{onClick:function(){return function(){var e={};e.email=s,e.password=d,g.login(e,(function(e){e.status?F(e.data):alert(e.message)}))}()},children:"Login"})]})}),Object(a.jsx)(E.a,{children:Object(a.jsxs)(C.a,{children:[Object(a.jsx)("center",{children:Object(a.jsx)("h3",{children:"Signup"})}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(N.a,{children:"Name"}),Object(a.jsx)(A.a,{type:"text",placeholder:"Enter Name",value:h,onChange:function(e){return O(e.target.value)}})]}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(N.a,{children:"Email"}),Object(a.jsx)(A.a,{type:"text",placeholder:"Enter Email address",value:m,onChange:function(e){return y(e.target.value)}})]}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(N.a,{children:"Password"}),Object(a.jsx)(A.a,{type:"password",placeholder:"Enter Password",value:_,onChange:function(e){return D(e.target.value)}})]}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(N.a,{children:"Confirm Password"}),Object(a.jsx)(A.a,{type:"password",placeholder:"Confirm Password",value:P,onChange:function(e){return R(e.target.value)}})]}),Object(a.jsx)(p.a,{onClick:function(){return function(){var e={};e.name=h,e.email=m,e.password=_,g.signup(e,(function(e){e.status?F(e.data):alert(e.message)}))}()},children:"Signup"})]})})]})]})})};X.a.addDefaultLocale(Y),X.a.addLocale(Y);var $=function(){var e=function(){return localStorage.getItem("token")||!1},t=Object(n.useState)(e()),c=Object(j.a)(t,2),s=c[0],r=c[1],i=function(){r(e())},f=function(){localStorage.removeItem("token"),localStorage.removeItem("data"),i()};return s?Object(a.jsxs)(O.a,{children:[Object(a.jsxs)(o.a,{children:[Object(a.jsx)(d.a,{children:"Track Interview"}),Object(a.jsx)(u.a,{"aria-controls":"nav"}),Object(a.jsx)(h.a,{id:"nav",children:Object(a.jsxs)(l.a,{className:"mr-auto",children:[Object(a.jsx)(b.a,{as:O.b,to:"/",children:"Home"}),Object(a.jsx)(b.a,{as:O.b,to:"/dashboard",children:"Dashboard"}),Object(a.jsx)(b.a,{onClick:function(){return f()},children:"Logout"})]})})]}),Object(a.jsxs)(x.c,{children:[Object(a.jsx)(x.a,{path:"/dashboard/:job_status?",children:Object(a.jsx)(_,{logout:f})}),Object(a.jsx)(x.a,{path:"/job-add",children:Object(a.jsx)(P,{})}),Object(a.jsx)(x.a,{path:"/job-edit/:job_id",children:Object(a.jsx)(P,{})}),Object(a.jsx)(x.a,{path:"/job/:job_id",children:Object(a.jsx)(V,{})}),Object(a.jsx)(x.a,{path:"/",children:Object(a.jsx)(m,{})})]})]}):Object(a.jsx)(Z,{parentCheckLogin:i})};i.a.render(Object(a.jsx)(f.a,{children:Object(a.jsx)($,{})}),document.getElementById("root"))}},[[199,1,2]]]);
//# sourceMappingURL=main.1a91e73f.chunk.js.map