(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{65:function(a,l,e){},80:function(a,l,e){"use strict";e.r(l);var b=e(0),h=e.n(b),t=e(9),c=e.n(t),i=(e(65),e(98)),r=e(106),s=e(19),o=e(30),n=e(13),d=e(100),j=e(101),m=e(107),p=e(108),O=e(53),g=e.n(O),x=e(54),f=e.n(x),u=e(47),v=e(2),w=Object(i.a)((function(a){var l;return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontFamily:"Roboto"},appBar:{background:"rgba(0,0,0,0.3)"},icon:{color:"#fff",fontSize:"2rem"},appBarTitle:{flexGrow:"1"},appBarWrapper:{width:"80%",margin:"0 auto"},container:{textAlign:"center"},title:(l={color:"#fff",fontSize:"4.5rem"},Object(n.a)(l,a.breakpoints.down("sm"),{fontSize:"3rem"}),Object(n.a)(l,"padding","1rem"),l),goDown:{color:"#fff",fontSize:"5rem"}}}));function N(){var a=w(),l=Object(b.useState)(!1),e=Object(o.a)(l,2),h=e[0],t=e[1];return Object(b.useEffect)((function(){t(!0)}),[]),Object(v.jsxs)("div",{className:a.root,id:"header",children:[Object(v.jsx)(d.a,{className:a.appBar,elevation:0,children:Object(v.jsxs)(j.a,{className:a.appBarWrapper,children:[Object(v.jsx)("h1",{className:a.appBarTitle,children:"Colton Glick"}),Object(v.jsx)(m.a,{children:Object(v.jsx)(g.a,{className:a.icon})})]})}),Object(v.jsx)(p.a,Object(s.a)(Object(s.a)({in:h},h?{timeout:1e3}:{}),{},{collapsedHeight:50,children:Object(v.jsxs)("div",{className:a.container,children:[Object(v.jsxs)("h1",{className:a.title,children:["Colton Glick,",Object(v.jsx)("br",{}),"Software Engineer"]}),Object(v.jsx)(u.Link,{to:"projectCards",smooth:!0,duration:500,children:Object(v.jsx)(m.a,{children:Object(v.jsx)(f.a,{className:a.goDown})})})]})}))]})}var k=e(102),y=e(104),S=e(103),z=e(105),B=e(55),U=Object(i.a)({root:{maxWidth:645,background:"rgba(0,0,0,0.5)",margin:"20px",transition:"transform 0.15s ease-in-out"},media:{height:440},title:{fontFamily:"Roboto",fontWeight:"bold",fontSize:"2rem",color:"#fff"},desc:{fontFamily:"Roboto",fontSize:"1rem",color:"#ddd"},cardHovered:{transform:"scale3d(1.05, 1.05, 1)"},wrapper:{minHeight:500}});function C(a){var l=a.project,e=(a.startAnim,U()),h=Object(b.useState)({raised:!1,shadow:1}),t=Object(o.a)(h,2),c=t[0],i=t[1],r=Object(B.a)({threshold:.7,triggerOnce:!0}),n=r.ref,d=r.inView;r.entry;return Object(v.jsx)("div",{ref:n,className:e.wrapper,children:Object(v.jsx)(p.a,Object(s.a)(Object(s.a)({in:d},d?{timeout:l.time}:{}),{},{children:Object(v.jsxs)(k.a,{className:e.root,classes:{root:c.raised?e.cardHovered:""},onMouseOver:function(){return i({raised:!0,shadow:3})},onMouseOut:function(){return i({raised:!1,shadow:1})},raised:c.raised,zdepth:c.shadow,children:[Object(v.jsx)(S.a,{className:e.media,image:l.imageUrl,title:l.title}),Object(v.jsxs)(y.a,{children:[Object(v.jsx)(z.a,{gutterBottom:!0,variant:"h5",component:"h2",className:e.title,children:l.title}),Object(v.jsx)(z.a,{variant:"body2",color:"textSecondary",component:"p",className:e.desc,children:l.desc})]})]})}))})}var H=[{title:"test project 1",desc:"this is the first index in my projects list blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",imageUrl:"/img/test.jpg",time:800},{title:"test project 2",desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",imageUrl:"/img/oldtest.jpg",time:800},{title:"test project 3",desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",imageUrl:"/img/test.jpg",time:800},{title:"test project 4",desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",imageUrl:"/img/oldtest.jpg",time:800},{title:"test project 5",desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",imageUrl:"/img/oldtest.jpg",time:800},{title:"test project 6",desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",imageUrl:"/img/oldtest.jpg",time:800},{title:"test project 7",desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",imageUrl:"/img/oldtest.jpg",time:800}],W=Object(i.a)((function(a){return{root:Object(n.a)({minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"},a.breakpoints.down("md"),{flexDirection:"column"})}})),I=function(){var a=W();return Object(v.jsxs)("div",{className:a.root,id:"projectCards",children:[Object(v.jsx)("div",{id:"0",children:Object(v.jsx)(C,{project:H[0]})}),Object(v.jsx)("div",{id:"1",children:Object(v.jsx)(C,{project:H[1]})}),Object(v.jsx)("div",{id:"2",children:Object(v.jsx)(C,{project:H[2]})}),Object(v.jsx)("div",{id:"3",children:Object(v.jsx)(C,{project:H[3]})}),Object(v.jsx)("div",{id:"4",children:Object(v.jsx)(C,{project:H[4]})})]})},R=Object(i.a)((function(a){return{root:{minHeight:"100vh",backgroundImage:"url(/img/oldtest.jpg)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundAttachment:"fixed"},spacer:{height:"20vh"}}}));function A(){var a=R();return Object(v.jsxs)("div",{className:a.root,children:[Object(v.jsx)(r.a,{}),Object(v.jsx)(N,{}),Object(v.jsx)(I,{}),Object(v.jsx)("div",{className:a.spacer})]})}c.a.render(Object(v.jsx)(h.a.StrictMode,{children:Object(v.jsx)(A,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.9c4198c2.chunk.js.map