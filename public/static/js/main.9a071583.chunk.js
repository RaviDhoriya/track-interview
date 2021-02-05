(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{125:function(e,t,c){},189:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),s=c.n(n),i=c(21),r=c.n(i),j=(c(125),c(206)),o=c(117),d=c(211),l=c(118),b=c(69),h=c(73),u=c(24),O=c(13),x=c(199),f=function(){return Object(a.jsxs)(x.a,{children:[Object(a.jsx)("h3",{children:"Track Interview"}),"Welcome to Track Interview App"]})},v=c(10),m=c(200),p=c(201),g={BASE:"https://trackinterview.herokuapp.com",headers:function(){return{"Content-Type":"application/json"}},getMyJobs:function(e){try{var t={};t.headers=g.headers(),t.method="GET",fetch(g.BASE+"/api/jobs",t).then((function(e){return e.json()})).then((function(t){return e(t)}))}catch(c){e({status:!1,message:"Failed to get Jobs",error:c})}},getJobDetails:function(e,t){try{var c={};c.headers=g.headers(),c.method="GET",fetch("".concat(g.BASE,"/api/jobs/").concat(e),c).then((function(e){return e.json()})).then((function(e){return t(e)}))}catch(a){t({status:!1,message:"Failed to get job details",error:a})}},newJob:function(e,t){try{var c={};c.headers=g.headers(),c.method="POST",c.body=JSON.stringify(e),fetch(g.BASE+"/api/jobs",c).then((function(e){return e.json()})).then((function(e){return t(e)}))}catch(a){t({status:!1,message:"Failed to add Job",error:a})}},editJob:function(e,t){try{var c={};c.headers=g.headers(),c.method="PUT",c.body=JSON.stringify(e),fetch(g.BASE+"/api/jobs",c).then((function(e){return e.json()})).then((function(e){return t(e)}))}catch(a){t({status:!1,message:"Failed to edit Job",error:a})}},deleteJob:function(e,t){try{var c={};c.headers=g.headers(),c.method="DELETE",c.body=JSON.stringify(e),fetch(g.BASE+"/api/jobs",c).then((function(e){return e.json()})).then((function(e){return t(e)}))}catch(a){t({status:!1,message:"Failed to delete Job",error:a})}},newActivity:function(e,t){try{var c={};c.headers=g.headers(),c.method="POST",c.body=JSON.stringify(e),fetch(g.BASE+"/api/activities",c).then((function(e){return e.json()})).then((function(e){return t(e)}))}catch(a){t({status:!1,message:"Failed to add activity",error:a})}},editActivity:function(e,t){try{var c={};c.headers=g.headers(),c.method="PUT",c.body=JSON.stringify(e),fetch(g.BASE+"/api/activities",c).then((function(e){return e.json()})).then((function(e){return t(e)}))}catch(a){t({status:!1,message:"Failed to edit activity",error:a})}},deleteActivity:function(e,t){try{var c={};c.headers=g.headers(),c.method="DELETE",c.body=JSON.stringify(e),fetch(g.BASE+"/api/activities",c).then((function(e){return e.json()})).then((function(e){return t(e)}))}catch(a){t({status:!1,message:"Failed to delete activity",error:a})}}},y=g,_=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){y.getMyJobs((function(e){e.status?s(e.data):console.error("Failed to load My Jobs")}))}),[]),Object(a.jsx)("div",{children:Object(a.jsxs)(x.a,{children:[Object(a.jsx)(m.a,{as:u.b,to:"/job-add",variant:"outline-primary",className:"float-right",children:"[+] New Job"}),Object(a.jsx)("h3",{children:"Dashboard"}),Object(a.jsxs)(p.a,{striped:!0,bordered:!0,hover:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Sr#"}),Object(a.jsx)("td",{children:"Position"}),Object(a.jsx)("td",{children:"Company"}),Object(a.jsx)("td",{children:"Status"}),Object(a.jsx)("td",{children:"Applied"}),Object(a.jsx)("td",{children:"Action"})]})}),Object(a.jsx)("tbody",{children:c.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t+1}),Object(a.jsx)("td",{children:Object(a.jsx)(u.b,{to:"/job/".concat(e._id),children:e.name})}),Object(a.jsx)("td",{children:e.company}),Object(a.jsx)("td",{children:e.status}),Object(a.jsx)("td",{children:e.applied}),Object(a.jsxs)("td",{children:[Object(a.jsx)(m.a,{as:u.b,to:"/job-edit/".concat(e._id),children:"Edit"})," ",Object(a.jsx)(m.a,{variant:"danger",onClick:function(t){return function(e){if(window.confirm('Do you want to delete job "'.concat(e.name," - ").concat(e.company,"?"))){var t={};t.job_id=e._id,y.deleteJob(t,(function(t){if(t.status){var a=c.filter((function(t){return t._id!==e._id}));s(a)}}))}}(e)},children:"Delete"})]})]},e._id)}))})]})]})})},S=c(209),w=c(202),C=c(109),k=c(106),J=c(108),E=c(107),N=c(203),A=c(58),D=c.n(A),T=(c(94),function(){var e=Object(O.f)(),t=Object(O.g)().job_id,c=Object(n.useState)(""),s=Object(v.a)(c,2),i=s[0],r=s[1],j=Object(n.useState)(""),o=Object(v.a)(j,2),d=o[0],l=o[1],b=Object(n.useState)(""),h=Object(v.a)(b,2),u=h[0],f=h[1],p=Object(n.useState)(""),g=Object(v.a)(p,2),_=g[0],A=g[1],T=Object(n.useState)(""),L=Object(v.a)(T,2),R=L[0],B=L[1],F=Object(n.useState)(""),M=Object(v.a)(F,2),P=M[0],U=M[1],I=Object(n.useState)([]),H=Object(v.a)(I,2),G=H[0],z=H[1],W=Object(n.useState)(""),q=Object(v.a)(W,2),K=q[0],Q=q[1],V=Object(n.useState)(0),X=Object(v.a)(V,2),Y=X[0],Z=X[1],$=Object(n.useState)(0),ee=Object(v.a)($,2),te=ee[0],ce=ee[1],ae=Object(n.useState)(""),ne=Object(v.a)(ae,2),se=ne[0],ie=ne[1],re=Object(n.useState)(""),je=Object(v.a)(re,2),oe=je[0],de=je[1],le=Object(n.useState)(""),be=Object(v.a)(le,2),he=be[0],ue=be[1],Oe=Object(n.useState)(""),xe=Object(v.a)(Oe,2),fe=xe[0],ve=xe[1],me=Object(n.useState)(new Date),pe=Object(v.a)(me,2),ge=pe[0],ye=pe[1],_e=Object(n.useState)("applied"),Se=Object(v.a)(_e,2),we=Se[0],Ce=Se[1],ke=Object(n.useState)({msg:"",variant:""}),Je=Object(v.a)(ke,2),Ee=Je[0],Ne=Je[1];Object(n.useEffect)((function(){t&&y.getJobDetails(t,(function(e){if(console.log(e),e.status){var c=e.data;r(c.name),l(c.company),f(c.job_url),A(c.review_url),B(c.linkedin_url),U(c.source),z(c.skills),Q(c.location),Z(c.ctc_min),ce(c.ctc_max),ie(c.notes),de(c.hr.name),ue(c.hr.email),ve(c.hr.phone),ye(new Date(c.applied)),Ce(c.status)}else console.error("Job not found."),t=void 0}))}),[]);return Object(a.jsxs)(x.a,{children:[Object(a.jsx)("h3",{children:void 0===t?"Create New Job":"Edit Job details"}),Object(a.jsxs)(S.a,{children:[Object(a.jsxs)(w.a,{children:[Object(a.jsx)(C.a,{children:Object(a.jsxs)(k.a,{children:[Object(a.jsx)(J.a,{children:"Job Position"}),Object(a.jsx)(E.a,{type:"text",placeholder:"Enter Job Position",value:i,onChange:function(e){return r(e.target.value)}})]})}),Object(a.jsx)(C.a,{children:Object(a.jsxs)(w.a,{children:[Object(a.jsx)(C.a,{children:Object(a.jsxs)(k.a,{children:[Object(a.jsx)(J.a,{children:"Company"}),Object(a.jsx)(E.a,{type:"text",placeholder:"Enter Company Name",value:d,onChange:function(e){return l(e.target.value)}})]})}),Object(a.jsx)(C.a,{children:Object(a.jsxs)(k.a,{children:[Object(a.jsx)(J.a,{children:"Applied On"}),Object(a.jsx)(D.a,{as:E.a,selected:ge,onChange:function(e){return ye(e)}})]})})]})})]}),Object(a.jsxs)(w.a,{children:[Object(a.jsx)(C.a,{children:Object(a.jsxs)(k.a,{children:[Object(a.jsx)(J.a,{children:"Job URL"}),Object(a.jsx)(E.a,{type:"url",placeholder:"Enter Job URL",value:u,onChange:function(e){return f(e.target.value)}})]})}),Object(a.jsx)(C.a,{children:Object(a.jsxs)(k.a,{children:[Object(a.jsx)(J.a,{children:"LinkedIn URL"}),Object(a.jsx)(E.a,{type:"text",placeholder:"Enter LinkedIn URL",value:R,onChange:function(e){return B(e.target.value)}})]})}),Object(a.jsx)(C.a,{children:Object(a.jsxs)(k.a,{children:[Object(a.jsxs)(J.a,{children:["Review URL ",Object(a.jsx)("small",{children:"(eg. Glassdoor)"})]}),Object(a.jsx)(E.a,{type:"url",placeholder:"Enter Review URL",value:_,onChange:function(e){return A(e.target.value)}})]})}),Object(a.jsx)(C.a,{children:Object(a.jsxs)(k.a,{children:[Object(a.jsx)(J.a,{children:"Source"}),Object(a.jsx)(E.a,{type:"text",placeholder:"Enter Job Source",value:P,onChange:function(e){return U(e.target.value)}})]})})]}),Object(a.jsxs)(w.a,{children:[Object(a.jsx)(C.a,{children:Object(a.jsxs)(k.a,{children:[Object(a.jsx)(J.a,{children:"Skills"}),Object(a.jsx)(E.a,{type:"text",placeholder:"Skills needed for this job",value:G.join(","),onChange:function(e){return z(e.target.value.split(","))}})]})}),Object(a.jsx)(C.a,{children:Object(a.jsxs)(k.a,{children:[Object(a.jsx)(J.a,{children:"Job Location"}),Object(a.jsx)(E.a,{type:"text",placeholder:"Enter Job Location",value:K,onChange:function(e){return Q(e.target.value)}})]})}),Object(a.jsx)(C.a,{children:Object(a.jsxs)(k.a,{children:[Object(a.jsx)(J.a,{children:"Minimum CTC"}),Object(a.jsx)(E.a,{type:"text",placeholder:"Minimum CTC",value:Y,onChange:function(e){return Z(e.target.value)}})]})}),Object(a.jsx)(C.a,{children:Object(a.jsxs)(k.a,{children:[Object(a.jsx)(J.a,{children:"Maximum CTC"}),Object(a.jsx)(E.a,{type:"text",placeholder:"Maximum CTC",value:te,onChange:function(e){return ce(e.target.value)}})]})})]}),Object(a.jsxs)(w.a,{children:[Object(a.jsx)(C.a,{children:Object(a.jsxs)(k.a,{children:[Object(a.jsx)(J.a,{children:"Notes"}),Object(a.jsx)(E.a,{as:"textarea",rows:"3",placeholder:"Notes about this Job",value:se,onChange:function(e){return ie(e.target.value)}})]})}),Object(a.jsxs)(C.a,{children:[Object(a.jsx)("div",{children:"HR Contact"}),Object(a.jsxs)(w.a,{children:[Object(a.jsx)(C.a,{children:Object(a.jsx)(k.a,{children:Object(a.jsx)(E.a,{type:"text",placeholder:"HR Name",value:oe,onChange:function(e){return de(e.target.value)}})})}),Object(a.jsx)(C.a,{children:Object(a.jsx)(k.a,{children:Object(a.jsx)(E.a,{type:"email",placeholder:"HR Email Address",value:he,onChange:function(e){return ue(e.target.value)}})})})]}),Object(a.jsxs)(w.a,{children:[Object(a.jsx)(C.a,{children:Object(a.jsx)(k.a,{children:Object(a.jsx)(E.a,{type:"tel",placeholder:"HR Phone Number",value:fe,onChange:function(e){return ve(e.target.value)}})})}),Object(a.jsx)(C.a,{children:Object(a.jsx)(k.a,{children:Object(a.jsx)(E.a,{as:"select",onChange:function(e){return Ce(e.target.value)},children:["pending","applied","response","interviewing","waiting","rejected","offer_recieved","decline"].map((function(e,t){return Object(a.jsx)("option",{value:e,selected:e===we,children:e},"x".concat(t))}))})})})]})]})]}),Object(a.jsx)(w.a,{children:Object(a.jsxs)(C.a,{children:[Object(a.jsx)(m.a,{variant:"primary",className:"mr-3",onClick:function(c){return function(c){var a={};a.name=i,a.company=d,a.job_url=u,a.review_url=_,a.linkedin_url=R,a.source=P,a.skills=G,a.location=K,a.ctc_min=Y,a.ctc_max=te,a.notes=se,a.hr={name:oe,email:he,phone:fe},a.applied=""===ge||void 0===ge||null===ge?null:ge.toString(),a.status=we,t?(a.job_id=t,y.editJob(a,(function(t){t.status?(Ne({msg:t.message,variant:"success"}),e.goBack()):Ne({msg:t.message,variant:"danger"})}))):y.newJob(a,(function(t){t.status?(Ne({msg:t.message,variant:"success"}),e.goBack()):Ne({msg:t.message,variant:"danger"})}))}()},children:"Save"}),Object(a.jsx)(m.a,{variant:"secondary",onClick:function(){return e.goBack()},children:"Cancel"})]})}),Object(a.jsx)(w.a,{children:Object(a.jsxs)(C.a,{children:[Object(a.jsx)("br",{}),Object(a.jsx)(N.a,{show:""!==Ee.msg,variant:Ee.variant,dismissible:!0,onClose:function(){return Ne({msg:"",variant:""})},children:Ee.msg})]})})]})]})}),L=c(30),R=c(205),B=c(37),F=c(116),M=c(41),P=c(210),U=c(208),I=c(114),H=c(113),G=c(204),z=c(115),W=c(68),q=Object(n.forwardRef)((function(e,t){var c={body:"",is_schedule:!1,schedule_date:new Date,schedule_done:!1},s=Object(n.useState)(!1),i=Object(v.a)(s,2),r=i[0],j=i[1],o=Object(n.useState)(!1),d=Object(v.a)(o,2),l=d[0],b=d[1],h=Object(n.useState)(c),u=Object(v.a)(h,2),O=u[0],x=u[1],f=Object(n.useState)(new Date),p=Object(v.a)(f,2),g=(p[0],p[1],e.job);Object(n.useImperativeHandle)(t,(function(){return{showModal:function(e){j(!0),null==e?(b(!1),x(c)):(b(!0),e.schedule_date=new Date(e.schedule_date),e.is_schedule?e.is_schedule=!0:e.is_schedule=!1,e.schedule_done?e.schedule_done=!0:e.schedule_done=!1,x(e))}}}));return Object(a.jsxs)(U.a,{show:r,onHide:function(){},children:[Object(a.jsx)(W.a,{children:Object(a.jsx)(I.a,{children:l?"Edit Activity":"New Activity"})}),Object(a.jsx)(H.a,{children:Object(a.jsxs)(S.a,{children:[Object(a.jsxs)(k.a,{children:[Object(a.jsx)(J.a,{children:"Description"}),Object(a.jsx)(E.a,{type:"text",placeholder:"Description",value:O.body,onChange:function(e){return x(Object(L.a)(Object(L.a)({},O),{},{body:e.target.value}))}})]}),Object(a.jsx)(J.a,{children:"Set Reminder"}),Object(a.jsxs)(G.a,{children:[Object(a.jsx)(G.a.Prepend,{children:Object(a.jsx)(G.a.Checkbox,{checked:O.is_schedule,onChange:function(e){return x(Object(L.a)(Object(L.a)({},O),{},{is_schedule:!O.is_schedule}))}})}),Object(a.jsx)(D.a,{as:E.a,selected:O.schedule_date,onChange:function(e){return x(Object(L.a)(Object(L.a)({},O),{},{schedule_date:new Date(e)}))}})]})]})}),Object(a.jsxs)(z.a,{children:[Object(a.jsx)(m.a,{variant:"primary",onClick:function(){var t={};t.job_id=g._id,t.body=O.body,t.is_schedule=O.is_schedule,t.schedule_date=O.schedule_date,t.schedule_done=O.schedule_done,l?(t.activity_id=O._id,y.editActivity(t,(function(t){t.status&&(j(!1),e.parentCallback())}))):y.newActivity(t,(function(t){t.status&&(j(!1),e.parentCallback())}))},children:"Save"}),Object(a.jsx)(m.a,{variant:"secondary",onClick:function(){j(!1),e.parentCallback()},children:"Cancel"})]})]})})),K=function(){var e=Object(O.g)().job_id,t=Object(n.useState)({skills:[],activities:[]}),c=Object(v.a)(t,2),i=c[0],r=c[1],j=Object(n.useRef)(),o=function(){y.getJobDetails(e,(function(e){e.status&&r(e.data)}))};Object(n.useEffect)((function(){o()}),[]);return Object(a.jsxs)(x.a,{children:[Object(a.jsx)("hr",{}),Object(a.jsx)(w.a,{children:Object(a.jsx)(C.a,{children:Object(a.jsxs)(R.a,{children:[Object(a.jsxs)("h3",{className:"company-name",children:[i.company," ",Object(a.jsxs)("small",{children:["(",i.location,")"]})]}),Object(a.jsxs)("div",{className:"position-name",children:[i.name," ",Object(a.jsx)("small",{children:Object(a.jsxs)("a",{href:i.job_url,target:"_new",children:[i.source," ",Object(a.jsx)(B.a,{icon:M.b})]})})]}),Object(a.jsxs)("div",{className:"icon-row",children:[Object(a.jsxs)("a",{href:i.linkedin_url,target:"_new",children:[Object(a.jsx)(B.a,{icon:F.a})," LinkedIn"]})," ","|"," ",Object(a.jsxs)("a",{href:i.review_url,target:"_new",children:[Object(a.jsx)(B.a,{icon:M.d})," Glassdoor Review"]})," "]}),Object(a.jsx)("div",{className:"skill-row",children:i.skills.map((function(e,t){return Object(a.jsx)("span",{className:"skill-tag",children:e})}))}),Object(a.jsxs)("div",{className:"ctc-row",children:["CTC: ",i.ctc_min,""!==i.ctc_max?" - "+i.ctc_max:""]})]})})}),Object(a.jsx)(w.a,{children:Object(a.jsx)(C.a,{children:Object(a.jsxs)("div",{className:"activity-add",children:[Object(a.jsxs)(m.a,{variant:"success",className:"float-right",onClick:function(){return j.current.showModal(null)},children:[Object(a.jsx)(B.a,{icon:M.c})," New Activity"]}),Object(a.jsxs)(m.a,{as:u.b,variant:"warning",className:"float-right mr-3",to:"/job-edit/".concat(i._id),children:[Object(a.jsx)(B.a,{icon:M.a})," Edit"]}),Object(a.jsx)(q,{job:i,ref:j,parentCallback:function(){o()}})]})})}),Object(a.jsx)(w.a,{children:Object(a.jsx)(C.a,{className:"activity-list",children:i.activities.map((function(e,t){return Object(a.jsx)(s.a.Fragment,{children:Object(a.jsxs)("div",{className:"activity-box",children:[Object(a.jsxs)("div",{className:"activity-buttons",children:[Object(a.jsx)(m.a,{variant:"danger",size:"sm",onClick:function(){!function(e){if(window.confirm("Do you want to delete this activity?")){var t={};t.activity_id=e._id,y.deleteActivity(t,(function(t){if(t.status){var c=i.activities.filter((function(t){return t._id!==e._id}));r(Object(L.a)(Object(L.a)({},i),{},{activities:c}))}}))}}(e)},children:Object(a.jsx)(B.a,{icon:M.e})}),"  ",Object(a.jsx)(m.a,{variant:"warning",size:"sm",onClick:function(){return j.current.showModal(e)},children:Object(a.jsx)(B.a,{icon:M.a})})]}),Object(a.jsxs)("div",{className:"activity-head",children:["".concat(new Date(e.stamp).toLocaleDateString()," ").concat(new Date(e.stamp).toLocaleTimeString())," ",Object(a.jsx)(P.a,{date:new Date(e.stamp),locale:"en-US"})]}),Object(a.jsx)("div",{className:"activity-body",children:e.body})]})},t)}))})})]})},Q=c(207),V=c(92);Q.a.addDefaultLocale(V),Q.a.addLocale(V);var X=function(){return Object(a.jsxs)(u.a,{children:[Object(a.jsxs)(j.a,{children:[Object(a.jsx)(o.a,{children:"Track Interview"}),Object(a.jsx)(b.a,{"aria-controls":"nav"}),Object(a.jsx)(h.a,{id:"nav",children:Object(a.jsxs)(d.a,{className:"mr-auto",children:[Object(a.jsx)(l.a,{as:u.b,to:"/",children:"Home"}),Object(a.jsx)(l.a,{as:u.b,to:"/dashboard",children:"Dashboard"})]})})]}),Object(a.jsxs)(O.c,{children:[Object(a.jsx)(O.a,{path:"/dashboard",children:Object(a.jsx)(_,{})}),Object(a.jsx)(O.a,{path:"/job-add",children:Object(a.jsx)(T,{})}),Object(a.jsx)(O.a,{path:"/job-edit/:job_id",children:Object(a.jsx)(T,{})}),Object(a.jsx)(O.a,{path:"/job/:job_id",children:Object(a.jsx)(K,{})}),Object(a.jsx)(O.a,{path:"/",children:Object(a.jsx)(f,{})})]})]})};r.a.render(Object(a.jsx)(x.a,{children:Object(a.jsx)(X,{})}),document.getElementById("root"))}},[[189,1,2]]]);
//# sourceMappingURL=main.9a071583.chunk.js.map