(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{100:function(e,a,t){},114:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),b=t(7),i=t.n(b),c=(t(99),t(100),t(139)),r=t(155),s=t(19),o=t(27),h=t(8),j=t(17),d=t(146),m=t(147),p=t(148),x=t(80),O=t.n(x),u=t(156),g=t(141),f=t(143),y=t(144),w=t(145),v=t(77),k=t.n(v),I=t(52),N=t.n(I),S=t(76),C=t.n(S),R=t(78),T=t.n(R),z=t(79),F=t.n(z),D=t(2),U=Object(c.a)((function(e){var a;return{root:{display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Roboto"},appBar:{background:"rgba(20,20,20,0.7)"},icon:{color:"#fff",fontSize:"2rem"},appBarTitle:{flexGrow:"0"},spacer:{flexGrow:"1",width:0},appBarWrapper:{width:"80%",margin:"0 auto"},title:(a={color:"#fff",fontSize:"4.5rem"},Object(h.a)(a,e.breakpoints.down("sm"),{fontSize:"3rem"}),Object(h.a)(a,"padding","1rem"),a),menuList:Object(h.a)({width:300},e.breakpoints.down("xs"),{width:"80vw",display:"flex",justifyContent:"center"}),menuItemText:Object(h.a)({fontSize:20},e.breakpoints.down("xs"),{fontSize:30}),menuItemIcon:Object(h.a)({color:"white",fontSize:30},e.breakpoints.down("xs"),{fontSize:35}),drawer:Object(h.a)({background:"rgb(40,40,40)",color:"white"},e.breakpoints.down("xs"),{justifyContent:"center"})}}));function W(){var e,a=U(),t=n.a.useState({isOpen:!1}),l=Object(o.a)(t,2),b=l[0],i=l[1],c=function(e,a){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&i(Object(s.a)(Object(s.a)({},b),{},Object(h.a)({},e,a)))}};return Object(D.jsxs)("div",{className:a.root,id:"header",children:[Object(D.jsx)(d.a,{className:a.appBar,elevation:0,children:Object(D.jsxs)(m.a,{className:a.appBarWrapper,children:[Object(D.jsx)(j.b,{to:"/",style:{textDecoration:"none",color:"inherit"},className:a.appBarTitle,children:Object(D.jsx)("h1",{children:"Colton Glick"})}),Object(D.jsx)("div",{className:a.spacer}),Object(D.jsx)(p.a,{onClick:c("isOpen",!0),children:Object(D.jsx)(O.a,{className:a.icon})})]})}),Object(D.jsx)(u.a,{anchor:"right",open:b.isOpen,onClose:c("isOpen",!1),classes:{paper:a.drawer},children:(e="isOpen",Object(D.jsx)("div",{className:a.menuList,role:"presentation",onClick:c(e,!1),onKeyDown:c(e,!1),children:Object(D.jsxs)(g.a,{children:[Object(D.jsx)(j.b,{to:"/",style:{textDecoration:"none",color:"inherit"},children:Object(D.jsxs)(f.a,{button:!0,children:[Object(D.jsxs)(y.a,{children:[" ",Object(D.jsx)(C.a,{className:a.menuItemIcon})," "]}),Object(D.jsx)(w.a,{classes:{primary:a.menuItemText},primary:"Home"})]})}),Object(D.jsx)(j.b,{to:"/about",style:{textDecoration:"none",color:"inherit"},children:Object(D.jsxs)(f.a,{button:!0,children:[Object(D.jsxs)(y.a,{children:[" ",Object(D.jsx)(k.a,{className:a.menuItemIcon})," "]}),Object(D.jsx)(w.a,{classes:{primary:a.menuItemText},primary:"About Me"})]})}),Object(D.jsx)(j.b,{to:"/resume",style:{textDecoration:"none",color:"inherit"},children:Object(D.jsxs)(f.a,{button:!0,children:[Object(D.jsxs)(y.a,{children:[" ",Object(D.jsx)(N.a,{className:a.menuItemIcon})," "]}),Object(D.jsx)(w.a,{classes:{primary:a.menuItemText},primary:"Resume"})]})}),Object(D.jsx)("a",{href:"https://github.com/c-glick",style:{textDecoration:"none",color:"inherit"},children:Object(D.jsxs)(f.a,{button:!0,children:[Object(D.jsxs)(y.a,{children:[" ",Object(D.jsx)(T.a,{className:a.menuItemIcon})," "]}),Object(D.jsx)(w.a,{classes:{primary:a.menuItemText},primary:"GitHub"})]})}),Object(D.jsx)("a",{href:"https://www.linkedin.com/in/colton-glick/",style:{textDecoration:"none",color:"inherit"},children:Object(D.jsxs)(f.a,{button:!0,children:[Object(D.jsxs)(y.a,{children:[" ",Object(D.jsx)(F.a,{className:a.menuItemIcon})," "]}),Object(D.jsx)(w.a,{classes:{primary:a.menuItemText},primary:"LinkedIn"})]})})]})}))})]})}var B=t(9),A=t(150),H=t(82),M=t.n(H),E=t(81),G=Object(c.a)((function(e){var a;return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontFamily:"Roboto"},container:{textAlign:"center"},title:(a={color:"#fff",fontSize:"4.5rem"},Object(h.a)(a,e.breakpoints.down("sm"),{fontSize:"3rem"}),Object(h.a)(a,"padding","1rem"),a),subtitle:{fontWeight:"100"},goDown:{color:"#fff",fontSize:"5rem"}}}));function L(){var e=G(),a=Object(l.useState)(!1),t=Object(o.a)(a,2),n=t[0],b=t[1];return Object(l.useEffect)((function(){b(!0)}),[]),Object(D.jsx)("div",{className:e.root,id:"header",children:Object(D.jsx)(A.a,Object(s.a)(Object(s.a)({in:n},n?{timeout:1e3}:{}),{},{collapsedHeight:50,children:Object(D.jsxs)("div",{className:e.container,children:[Object(D.jsxs)("h1",{className:e.title,children:["Colton Glick",Object(D.jsx)("br",{}),Object(D.jsx)("span",{className:e.subtitle,children:"Software Engineer"})]}),Object(D.jsx)(E.Link,{to:"projectCards",smooth:!0,duration:500,offset:-80,children:Object(D.jsx)(p.a,{children:Object(D.jsx)(M.a,{className:e.goDown})})})]})}))})}var J=t(151),P=t(153),_=t(152),K=t(53),V=t(83),q=Object(c.a)((function(e){var a;return{root:(a={maxWidth:645,minWidth:400},Object(h.a)(a,e.breakpoints.down("xs"),{minWidth:0}),Object(h.a)(a,"background","rgba(0,0,0,0.5)"),Object(h.a)(a,"margin","20px"),Object(h.a)(a,"transition","transform 0.15s ease-in-out"),a),media:{height:440},titleWrapper:{display:"flex",justifyContent:"space-between"},title:{fontFamily:"Roboto",fontWeight:"bold",fontSize:"2rem",color:"#fff"},subTitle:{fontFamily:"Roboto",fontWeight:"thin",fontSize:"1rem",color:"#aaa"},desc:{fontFamily:"Roboto",fontSize:"1rem",color:"#ddd"},cardHovered:{transform:"scale3d(1.05, 1.05, 1)"},wrapper:{minHeight:500}}}));function Q(e){var a=e.project,t=q(),n=Object(l.useState)({raised:!1,shadow:1}),b=Object(o.a)(n,2),i=b[0],c=b[1],r=Object(V.a)({threshold:.65,triggerOnce:!0}),h=r.ref,j=r.inView;return Object(D.jsx)("div",{ref:h,className:t.wrapper,children:Object(D.jsx)(A.a,Object(s.a)(Object(s.a)({in:j},j?{timeout:a.time}:{}),{},{children:Object(D.jsxs)(J.a,{className:t.root,classes:{root:i.raised?t.cardHovered:""},onMouseOver:function(){return c({raised:!0,shadow:3})},onMouseOut:function(){return c({raised:!1,shadow:1})},raised:i.raised,zdepth:i.shadow,children:[Object(D.jsx)(_.a,{className:t.media,image:a.imageUrl,title:a.title}),Object(D.jsxs)(P.a,{children:[Object(D.jsxs)("div",{className:t.titleWrapper,children:[Object(D.jsx)(K.a,{gutterBottom:!0,variant:"h5",component:"h2",className:t.title,children:a.title}),Object(D.jsx)(K.a,{gutterBottom:!0,variant:"h5",component:"h2",className:t.subTitle,children:a.date})]}),Object(D.jsx)(K.a,{variant:"body2",color:"textSecondary",component:"p",className:t.desc,children:a.desc})]})]})}))})}var X=[{title:"OpenUAS, Boeing Fellowship",desc:"Autonomous landing, flight simulation, and improved power usage. I worked on an unmanned aircaft system (UAS) with the OpenUAS team at ISU during my Boeing fellowship. Culminating into our research paper being published by the IEEE at ICUAS 2021.",date:"2020 - 2021",imageUrl:"/img/OpenUAS_2.jpg",time:800,link:"/test1"},{title:"Responsive LED Display",desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",date:"2020",imageUrl:"/img/oldtest.jpg",time:800,link:"/test2"},{title:"FIRST Robotics, Mentor",desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",date:"2018 - current",imageUrl:"/img/test.jpg",time:800,link:"/test3"},{title:"FIRST Robotics, Captain",desc:"second index blah blah blah blah blah blah blah blah blah ah blah blah blah blah blah blah blah blah blah blah blah blah ",date:"2017 - 2018",imageUrl:"/img/oldtest.jpg",time:800,link:"/test4"},{title:"FIRST Robotics, Programmer",desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",date:"2016 - 2017",imageUrl:"/img/oldtest.jpg",time:800,link:"/test5"},{title:"test project 6",desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",date:"2015 - 2016",imageUrl:"/img/oldtest.jpg",time:800,link:"/test6"},{title:"test project 7",desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah  blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",date:"2018 - 2019",imageUrl:"/img/oldtest.jpg",time:800,link:"/test7"}],Y=Object(c.a)((function(e){return{root:Object(h.a)({minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"},e.breakpoints.down("sm"),{flexDirection:"column"})}}));function Z(){var e=Y();return Object(D.jsx)("div",{className:e.root,id:"projectCards",children:X.map((function(e,a){return Object(D.jsx)(j.b,{to:e.link,style:{textDecoration:"none",color:"inherit"},children:Object(D.jsx)(Q,{project:e})})}))})}var $=Object(c.a)((function(e){return{root:{minHeight:"100vh",backgroundImage:"linear-gradient(to top right, #38247e, #37338e, #34429e, #3051ad, #2a5fbc, #1573cb, #0087d7, #009ae2, #00b5e7, #00ccdd, #3ee1cc, #8ef2b9)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundAttachment:"fixed"},spacer:{height:"20vh"}}}));function ee(){var e=$();return Object(D.jsxs)("div",{className:e.root,children:[Object(D.jsx)(L,{}),Object(D.jsx)(Z,{}),Object(D.jsx)("div",{className:e.spacer})]})}var ae=t(85),te=t(154),le=t(149),ne=Object(c.a)((function(e){var a;return{root:{minHeight:"100vh",backgroundImage:"linear-gradient(to top right, #38247e, #37338e, #34429e, #3051ad, #2a5fbc, #1573cb, #0087d7, #009ae2, #00b5e7, #00ccdd, #3ee1cc, #8ef2b9)"},container:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",padding:"50px"},spacer:{minHeight:"80px"},paper:{maxWidth:"90vw",padding:e.spacing(5),textAlign:"center",backgroundColor:"rgb(60,60,60)",color:"white",fontSize:"18px"},title:{fontSize:"2em",textAlign:"left"},image:(a={float:"right",padding:"10px",width:"30rem"},Object(h.a)(a,e.breakpoints.down("md"),{width:"20rem"}),Object(h.a)(a,e.breakpoints.down("xs"),{width:"15rem",float:"none"}),a),para:{textAlign:"left",maxWidth:"50rem"}}}));function be(){var e=ne(),a=Object(l.useState)(!1),t=Object(o.a)(a,2),n=t[0],b=t[1];return Object(l.useEffect)((function(){b(!0)}),[]),Object(D.jsxs)("div",{className:e.root,children:[Object(D.jsx)("div",{className:e.spacer}),Object(D.jsx)("div",{className:e.container,children:Object(D.jsx)(le.a,Object(s.a)(Object(s.a)({in:n},n?{timeout:500}:{}),{},{direction:"up",children:Object(D.jsx)(ae.a,{className:e.paper,children:Object(D.jsxs)(te.a,{container:!0,spacing:3,direction:"row",children:[Object(D.jsx)(te.a,{item:!0,xs:12,sm:10,children:Object(D.jsx)("div",{className:e.title,children:"Hi \ud83d\udc4b, Welcome to my Website!"})}),Object(D.jsx)(te.a,{item:!0,xs:12,sm:2,children:Object(D.jsx)(j.b,{to:"/resume",style:{textDecoration:"none",color:"inherit"},children:Object(D.jsxs)(f.a,{button:!0,children:[Object(D.jsxs)(y.a,{children:[" ",Object(D.jsx)(N.a,{className:e.menuItemIcon})," "]}),Object(D.jsx)(w.a,{classes:{primary:e.menuItemText},primary:"Resume"})]})})}),Object(D.jsxs)(te.a,{item:!0,xs:12,children:[Object(D.jsx)("img",{className:e.image,src:"/img/profile_picture.png",alt:"Colton Glick"}),Object(D.jsx)("p",{className:e.para,children:"My name is Colton Glick, I am currently a student studying software engineering at Iowa State University."}),Object(D.jsx)("p",{className:e.para,children:"I enjoy programming and coming up with clever solutions to challenging problems. Throughout my years I have worked on numerous projects that can be viewed on the home page, ranging from Boeing flight simulators, to FIRST Robotics Competition (FRC), to this very website."}),Object(D.jsxs)("p",{className:e.para,children:["Some of my experience includes:",Object(D.jsx)("br",{})," FRC programmer & driver, FRC Captain, FRC Mentor, John Deere, Boeing Fellowship, and Boeing Intern."]}),Object(D.jsx)("p",{className:e.para,children:"I began my journey into programming during my sophomore year of high school. I heard about this robotics club that started up and was interested in joining. My first year on our FIRST Robotics Competition (FRC) team, #6164 The Moonshot Slaybots, I learned the basics of Java programming."})]})]})})}))})]})}var ie=Object(c.a)((function(e){return{root:{background:"rgb(40,40,40)"}}}));function ce(){var e=ie();return Object(D.jsxs)("div",{className:e.root,children:[Object(D.jsx)(r.a,{}),Object(D.jsx)(W,{}),Object(D.jsxs)(B.c,{children:["  ",Object(D.jsx)(B.a,{exact:!0,path:"/",children:Object(D.jsx)(ee,{})}),Object(D.jsx)(B.a,{path:"/about",children:Object(D.jsx)(be,{})}),Object(D.jsxs)(B.a,{path:"/:id",children:[Object(D.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%"},children:Object(D.jsx)("h1",{children:"404"})}),"   "]})]})]})}i.a.render(Object(D.jsx)(n.a.StrictMode,{children:Object(D.jsx)(j.a,{children:Object(D.jsx)(ce,{})})}),document.getElementById("root"))},99:function(e,a,t){}},[[114,1,2]]]);
//# sourceMappingURL=main.ec5e45a3.chunk.js.map