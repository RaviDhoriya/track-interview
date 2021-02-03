(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{49:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),j=c.n(n),r=c(18),s=c.n(r),i=(c(49),c(62)),l=c(40),b=c(64),o=c(43),d=c(22),h=c(24),O=c(15),u=c(6),x=c(58),p=function(){return Object(a.jsxs)(x.a,{children:[Object(a.jsx)("h3",{children:"Track Interview"}),"Welcome to Track Interview App"]})},v=c(9),m=c(59),f=c(60),g={BASE:"https://trackinterview.herokuapp.com",headers:function(){return{"Content-Type":"application/json"}},getMyJobs:function(e){try{var t={};t.headers=g.headers(),t.method="GET",fetch(g.BASE+"/api/jobs",t).then((function(e){return e.json()})).then((function(t){return e(t)}))}catch(c){e({status:!1,message:"Failed to get Jobs",error:c})}},newJob:function(e,t){try{var c={};c.headers=g.headers(),c.method="POST",c.body=JSON.stringify(e),fetch(g.BASE+"/api/jobs",c).then((function(e){return e.json()})).then((function(e){return t(e)}))}catch(a){t({status:!1,message:"Failed to add Job",error:a})}}},y=g,C=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),c=t[0],j=t[1];return Object(n.useEffect)((function(){y.getMyJobs((function(e){e.status?(console.log(e),j(e.data)):console.error("Failed to load My Jobs")}))}),[]),Object(a.jsx)("div",{children:Object(a.jsxs)(x.a,{children:[Object(a.jsx)(m.a,{as:O.b,to:"/job-add",variant:"outline-primary",className:"float-right",children:"[+] New Job"}),Object(a.jsx)("h3",{children:"Dashboard"}),Object(a.jsxs)(f.a,{striped:!0,bordered:!0,hover:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Sr#"}),Object(a.jsx)("td",{children:"Position"}),Object(a.jsx)("td",{children:"Company"}),Object(a.jsx)("td",{children:"Status"}),Object(a.jsx)("td",{children:"Applied"}),Object(a.jsx)("td",{children:"Action"})]})}),Object(a.jsx)("tbody",{children:c.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t+1}),Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.company}),Object(a.jsx)("td",{children:e.status}),Object(a.jsx)("td",{children:e.applied}),Object(a.jsx)("td",{children:"View | Edit | Delete"})]},e._id)}))})]})]})})},S=c(63),J=c(61),w=c(39),E=c(36),k=c(38),N=c(37),T=function(e){var t=Object(n.useState)(""),c=Object(v.a)(t,2),j=c[0],r=c[1],s=Object(n.useState)(""),i=Object(v.a)(s,2),l=i[0],b=i[1],o=Object(n.useState)(""),d=Object(v.a)(o,2),h=d[0],u=d[1],p=Object(n.useState)(""),f=Object(v.a)(p,2),g=f[0],C=f[1],T=Object(n.useState)([]),M=Object(v.a)(T,2),A=M[0],R=M[1],H=Object(n.useState)(""),P=Object(v.a)(H,2),B=P[0],D=P[1],I=Object(n.useState)(0),L=Object(v.a)(I,2),_=L[0],F=L[1],U=Object(n.useState)(0),G=Object(v.a)(U,2),V=G[0],W=G[1],q=Object(n.useState)(""),z=Object(v.a)(q,2),K=z[0],Q=z[1],X=Object(n.useState)(""),Y=Object(v.a)(X,2),Z=Y[0],$=Y[1],ee=Object(n.useState)(""),te=Object(v.a)(ee,2),ce=te[0],ae=te[1],ne=Object(n.useState)(""),je=Object(v.a)(ne,2),re=je[0],se=je[1];return Object(a.jsxs)(x.a,{children:[Object(a.jsx)("h3",{children:"Create New Job"}),Object(a.jsxs)(S.a,{children:[Object(a.jsxs)(J.a,{children:[Object(a.jsx)(w.a,{children:Object(a.jsxs)(E.a,{children:[Object(a.jsx)(k.a,{children:"Job Position"}),Object(a.jsx)(N.a,{type:"text",placeholder:"Enter Job Position",value:j,onChange:function(e){return r(e.target.value)}})]})}),Object(a.jsx)(w.a,{children:Object(a.jsxs)(E.a,{children:[Object(a.jsx)(k.a,{children:"Company"}),Object(a.jsx)(N.a,{type:"text",placeholder:"Enter Company Name",value:l,onChange:function(e){return b(e.target.value)}})]})})]}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(w.a,{children:Object(a.jsxs)(E.a,{children:[Object(a.jsx)(k.a,{children:"Job URL"}),Object(a.jsx)(N.a,{type:"url",placeholder:"Enter Job URL",value:h,onChange:function(e){return u(e.target.value)}})]})}),Object(a.jsx)(w.a,{children:Object(a.jsxs)(E.a,{children:[Object(a.jsx)(k.a,{children:"Source"}),Object(a.jsx)(N.a,{type:"text",placeholder:"Enter Job Source",value:g,onChange:function(e){return C(e.target.value)}})]})})]}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(w.a,{children:Object(a.jsxs)(E.a,{children:[Object(a.jsx)(k.a,{children:"Skills"}),Object(a.jsx)(N.a,{type:"text",placeholder:"Skills needed for this job",value:A.join(","),onChange:function(e){return R(e.target.value.split(","))}})]})}),Object(a.jsx)(w.a,{children:Object(a.jsxs)(E.a,{children:[Object(a.jsx)(k.a,{children:"Job Location"}),Object(a.jsx)(N.a,{type:"text",placeholder:"Enter Job Location",value:B,onChange:function(e){return D(e.target.value)}})]})}),Object(a.jsx)(w.a,{children:Object(a.jsxs)(E.a,{children:[Object(a.jsx)(k.a,{children:"Minimum CTC"}),Object(a.jsx)(N.a,{type:"text",placeholder:"Minimum CTC",value:_,onChange:function(e){return F(e.target.value)}})]})}),Object(a.jsx)(w.a,{children:Object(a.jsxs)(E.a,{children:[Object(a.jsx)(k.a,{children:"Maximum CTC"}),Object(a.jsx)(N.a,{type:"text",placeholder:"Maximum CTC",value:V,onChange:function(e){return W(e.target.value)}})]})})]}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(w.a,{children:Object(a.jsxs)(E.a,{children:[Object(a.jsx)(k.a,{children:"Notes"}),Object(a.jsx)(N.a,{as:"textarea",rows:"3",placeholder:"Notes about this Job",value:K,onChange:function(e){return Q(e.target.value)}})]})}),Object(a.jsxs)(w.a,{children:[Object(a.jsx)("div",{children:"HR Contact"}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(w.a,{children:Object(a.jsx)(E.a,{children:Object(a.jsx)(N.a,{type:"text",placeholder:"HR Name",value:Z,onChange:function(e){return $(e.target.value)}})})}),Object(a.jsx)(w.a,{children:Object(a.jsx)(E.a,{children:Object(a.jsx)(N.a,{type:"email",placeholder:"HR Email Address",value:ce,onChange:function(e){return ae(e.target.value)}})})})]}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(w.a,{children:Object(a.jsx)(E.a,{children:Object(a.jsx)(N.a,{type:"tel",placeholder:"HR Phone Number",value:re,onChange:function(e){return se(e.target.value)}})})}),Object(a.jsx)(w.a,{})]})]})]}),Object(a.jsx)(J.a,{children:Object(a.jsxs)(w.a,{children:[Object(a.jsx)(m.a,{variant:"primary",className:"mr-3",onClick:function(e){return function(e){var t={};t.name=j,t.company=l,t.job_url=h,t.source=g,t.skills=A,t.location=B,t.ctc_min=_,t.ctc_max=V,t.notes=K,t.hr={name:Z,email:ce,phone:re},t.applied=(new Date).toString(),y.newJob(t,(function(e){console.log(e)}))}()},children:"Save"}),Object(a.jsx)(m.a,{variant:"secondary",as:O.b,to:"/dashboard",children:"Cancel"})]})})]})]})};var M=function(){return Object(a.jsxs)(O.a,{children:[Object(a.jsxs)(i.a,{children:[Object(a.jsx)(l.a,{children:"Track Interview"}),Object(a.jsx)(d.a,{"aria-controls":"nav"}),Object(a.jsx)(h.a,{id:"nav",children:Object(a.jsxs)(b.a,{className:"mr-auto",children:[Object(a.jsx)(o.a,{as:O.b,to:"/",children:"Home"}),Object(a.jsx)(o.a,{as:O.b,to:"/dashboard",children:"Dashboard"})]})})]}),Object(a.jsxs)(u.c,{children:[Object(a.jsx)(u.a,{path:"/dashboard",children:Object(a.jsx)(C,{})}),Object(a.jsx)(u.a,{path:"/job-add",children:Object(a.jsx)(T,{})}),Object(a.jsx)(u.a,{path:"/",children:Object(a.jsx)(p,{})})]})]})};s.a.render(Object(a.jsx)(j.a.StrictMode,{children:Object(a.jsx)(x.a,{children:Object(a.jsx)(M,{})})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.85c151c6.chunk.js.map