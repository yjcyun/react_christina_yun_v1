(this.webpackJsonpreact_my_website=this.webpackJsonpreact_my_website||[]).push([[0],{30:function(e,n,t){e.exports=t.p+"static/media/fabric-1.05b95c22.png"},31:function(e,n,t){e.exports=t.p+"static/media/adopt-1.df6f4e49.png"},32:function(e,n,t){e.exports=t.p+"static/media/plant-1.3cb1c60d.png"},33:function(e,n,t){e.exports=t.p+"static/media/dognews.bbcbef33.png"},34:function(e,n,t){e.exports=t.p+"static/media/personalwebsite.e0ecd5c7.png"},35:function(e,n,t){e.exports=t.p+"static/media/mainBcg.1943024b.png"},36:function(e,n,t){e.exports=t.p+"static/media/error.e971d617.png"},37:function(e,n,t){e.exports=t(49)},48:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(26),l=t.n(i),c=t(9),o=t(2),m=t(4),s=t(5);function d(){var e=Object(m.a)(["\nheight: calc(100vh - 79px);\nmargin-top: 3rem;\n\n.hero-text{\n  text-align:center;\n  margin: 3rem auto;\n}\n\n.fadeInAnimated {\n  opacity: 0;\n  animation: fadein 0.4s forwards;\n}\n\n.hero-text-1{\n  animation-delay:0.4s;\n}\n\n.hero-text-2{\n  animation-delay:1.3s;\n}\n\n@keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\nhr {\n  margin: 1rem auto;\n}\n\n.hero-text h1 {\n  font-size: 1.8rem;\n}\n\n.img-container{\n  margin-left: 2rem;\n}\n\n@media (min-width: 768px) {\n  max-width: 1170px;\n  margin: 0 auto;\n  display:flex;\n  justify-content:center;\n  align-items: center;\n\n  .img-container{\n    flex: 1;\n  }\n\n  .hero-text {\n    flex:1;\n    padding-left: 5rem;\n  }\n\n  .hero-text h1{\n    font-size: 2.5rem;\n    text-align: left;\n  }\n\n  hr{\n    margin: 2rem 0;\n  }\n}\n"]);return d=function(){return e},e}var u=s.a.section(d()),p=function(e){var n=e.title,t=e.title2,a=e.title3,i=e.title4,l=e.img,c=e.children;return r.a.createElement(u,null,r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:l,alt:"avatar"})),r.a.createElement("div",{className:"hero-text"},r.a.createElement("div",{className:"hero-text-1 fadeInAnimated"},r.a.createElement("h1",null,n,r.a.createElement("br",null),t)),r.a.createElement("div",{className:"hero-text-2 fadeInAnimated"},r.a.createElement("hr",{className:"title-hr"}),r.a.createElement("h1",null,a,r.a.createElement("br",null),i)),c))};function f(){var e=Object(m.a)(["\nmargin: 3rem auto;\nwidth: 90%;\npadding: 2rem;\nborder: 1px solid #ffaeae;\nbackground: var(--lightestColor);\nborder-radius: 10px;\ntext-align: center;\nposition: relative;\ntransition: var(--mainTransition);\n\n.card-skill.large {\n  display: none\n}\n\n.img-container {\n  margin: 2rem auto;\n}\n\n.card-skill {\n  display:inline-block;\n}\n\n.card-skill span{\n  border: 1px solid grey;\n  border-radius: 1rem;\n  margin: 0 0.3rem;\n  padding: 0.1rem 0.4rem;\n  line-height: 2;\n}\n\n.card-title{\n  text-transform: capitalize;\n  margin-bottom: 1rem;\n  font-size:2rem;\n  font-family: 'Playfair Display', serif;\n}\n\n\n.btn {\n  padding: 0.5rem 1rem;\n  display: inline;\n  margin: 1.5rem 0.5rem 0 0.5rem;\n  border-radius: 0;\n}\n\n  @media (max-width: 380px) {\n    .btn {\n      padding: 0.5rem 0.7rem;\n      margin: 1.5rem 0.4rem 0 0;\n      font-size: 0.9rem;\n    }\n  }\n\n  @media (min-width: 996px) {\n    padding: 0;\n    width: 80%;\n    &:hover {\n      transform: scale(1.05);\n      background: #fff;\n    }\n    .img-container{\n      flex: 2;\n    }\n    .img-container img{\n      width: 80%;\n    }\n    .card-text-container{\n      flex:3;\n      padding: 2rem;\n    }\n    .card-skills {\n      display: flex;\n      flex-direction: row;\n      justify-content:center;\n      align-items: center;\n      position: relative;\n    }\n    .card-skill {\n      display: none;\n    }\n    .card-skill.large {\n      display: inline-block;\n      margin-bottom: 3rem;\n    }\n    .card-subtitle {\n      width: 25rem;\n      margin: 0 auto;\n    }\n    .card-title{\n      font-size: 2.8rem;\n    }\n  }\n"]);return f=function(){return e},e}var h=s.a.div(f()),g=function(e){var n=e.title,t=e.skills,a=e.img,i=e.subtitle,l=e.live,c=e.github;return r.a.createElement(h,null,r.a.createElement("div",{className:"card-skills"},t.map((function(e){return r.a.createElement("div",{key:e,className:"card-skill"},r.a.createElement("span",null,e))})),r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:a,alt:"project screenshot"})),r.a.createElement("div",{className:"card-text-container"},t.map((function(e){return r.a.createElement("div",{key:e,className:"card-skill large"},r.a.createElement("span",null,e))})),r.a.createElement("h1",{className:"card-title"},n),r.a.createElement("p",{className:"card-subtitle"},i),r.a.createElement("a",{href:l,className:"link-icon"},r.a.createElement("button",{className:"btn"},"Live Demo")),r.a.createElement("a",{href:c,className:"link-icon"},r.a.createElement("button",{className:"btn"},"Github")))))};function b(){var e=Object(m.a)(["\n text-align:center;\n margin-top: 5rem;\n text-transform:uppercase;\n font-size:1.7rem;\n font-weight: bold;\n\n .title-text{\n   letter-spacing: 0.1rem;\n }\n\n .title-hr{\n   margin: 1rem auto;\n }\n "]);return b=function(){return e},e}var E=s.a.div(b()),v=function(e){var n=e.title;return r.a.createElement(E,null,r.a.createElement("span",{className:"title-text"},n),r.a.createElement("hr",{className:"title-hr"}))},y=t(23),x=t(15),w=t(16),k=t(18),j=t(17),N=[{id:0,text:"home",path:"/"},{id:1,text:"projects",path:"/projects"},{id:2,text:"contact",path:"/contact"}],O=t(30),C=t.n(O),S=t(31),P=t.n(S),z=t(32),T=t.n(z),_=t(33),A=t.n(_),I=t(34),D=t.n(I),L=[{id:3,title:"Dog News",subtitle:"A full-stack forum inspired by Hacker News",skills:["React","Semantic UI","Firebase"],img:A.a,recent:!0,github:"https://github.com/yjcyun/react_dogs_news",live:"https://dog-news-b10d7.web.app"},{id:4,title:"Personal Website",subtitle:"A minimal website with backend supported by Strapi",skills:["React","Gatsby","Strapi","Styled-Components"],img:D.a,recent:!1,github:"https://github.com/yjcyun/gatsby_alex_leung",live:"https://alexleung.ca"},{id:0,title:"thread & needle",subtitle:"An online fabric store with a functional shopping cart and Paypal.",skills:["React","Context API","Styled-Components"],img:C.a,recent:!0,github:"https://github.com/yjcyun/react_fabric_store",live:"https://threadandneedle.netlify.app/"},{id:1,title:"adopt, don't shop",subtitle:"A dog adoption site with a list of adoptable dogs and information on each dog.",skills:["React","Context API","CSS"],img:P.a,recent:!1,github:"https://github.com/yjcyun/react_adopt_dog",live:"https://react-adopt-dog.netlify.app/"},{id:2,title:"plantiful",subtitle:"A plant store with shopping cart",skills:["Javascript","CSS","HTML"],img:T.a,recent:!0,github:"https://github.com/yjcyun/Plantiful_plants_store",live:"https://yjcyun.github.io/Plantiful_plants_store/"}],R=r.a.createContext(),B=function(e){Object(k.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(x.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={links:N,sidebarOpen:!1,projects:[],recentProjects:[]},e.handleSidebar=function(){e.setState({sidebarOpen:!e.state.sidebarOpen})},e.setProjects=function(n){var t=n.filter((function(e){return!0===e.recent}));e.setState({projects:n,recentProjects:t})},e}return Object(w.a)(t,[{key:"componentDidMount",value:function(){this.setProjects(L)}},{key:"render",value:function(){return r.a.createElement(R.Provider,{value:Object(y.a)(Object(y.a)({},this.state),{},{handleSidebar:this.handleSidebar})},this.props.children)}}]),t}(a.Component),Y=R.Consumer;function F(){var e=Object(m.a)(["\n  padding: 1rem 0;\n"]);return F=function(){return e},e}var G=s.a.section(F()),H=function(){return r.a.createElement(G,null,r.a.createElement(v,{title:"Recent Projects"}),r.a.createElement(Y,null,(function(e){return e.recentProjects.map((function(e){return r.a.createElement(g,Object.assign({key:e.id},e))}))})),r.a.createElement(c.b,{to:"/projects"},r.a.createElement("button",{className:"btn"},"view more")))},M=t(35),q=t.n(M),J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{img:q.a,title:"Hi there,",title2:"I'm Christina.",title3:"A React developer",title4:"in Toronto, ON"}),r.a.createElement(H,null))},U=function(){return r.a.createElement(Y,null,(function(e){var n=e.projects;return r.a.createElement("div",{style:{marginBottom:"6rem"}},r.a.createElement(v,{title:"Projects"}),n.map((function(e){return r.a.createElement(g,Object.assign({key:e.id},e))})))}))},W=t(10);function Z(){var e=Object(m.a)(["\n .contact-text {\n    width: 80%;\n    max-width: 30rem;\n    text-align: center;\n    margin: 3rem auto;\n    padding-top: 3rem;\n  }\n\n  .contact-text h1{\n    line-height:1.5;\n    margin-bottom: 2rem;\n    font-size: 2rem;\n  }\n\n  .footer-icon{\n    font-size: 2.3rem;\n    color: black;\n    margin: 1rem 2rem;\n    transition: var(--mainTransition);\n  }\n\n  .footer-icon:hover {\n    transform: translateY(-1rem);\n  }\n\n  .contact {\n    max-width: 35rem;\n    width: 80%;\n    text-align: center;\n    margin: 1rem auto;\n  }\n\n  input, textarea {\n    display: block;\n    width: 100%;\n    padding: 0.8rem;\n    margin: 0.7rem 0;\n    outline: none;\n    font-size: 1rem;\n    ::placeholder {\n      font-family: 'Poppins', sans-serif;\n    }\n  } \n"]);return Z=function(){return e},e}var K=s.a.section(Z()),Q=function(){return r.a.createElement(K,null,r.a.createElement("div",{className:"contact-text"},r.a.createElement("h1",null,"Find me on social media or send me a message!"),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:"https://www.linkedin.com/in/christina-yun-58954a123/"},r.a.createElement(W.b,{className:"footer-icon"})),r.a.createElement("a",{href:"mailto:yjc.yun@gmail.com"},r.a.createElement(W.c,{className:"footer-icon"})),r.a.createElement("a",{href:"https://github.com/yjcyun"},r.a.createElement(W.a,{className:"footer-icon"})))),r.a.createElement("div",{className:"contact"},r.a.createElement("form",{action:"https://formspree.io/christina5707@gmail.com",method:"POST"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Name",required:!0}),r.a.createElement("input",{type:"email",name:"email",placeholder:"Email",required:!0}),r.a.createElement("textarea",{cols:"30",rows:"15",placeholder:"Message",required:!0}),r.a.createElement("button",{className:"btn",type:"submit",style:{marginTop:"2rem"}},"send"))))},V=t(36),X=t.n(V),$=function(){return r.a.createElement(p,{img:X.a,title:"404",title3:"Oops!",title4:"This page does not exist"},r.a.createElement(c.b,{to:"/"},r.a.createElement("button",{className:"btn left-btn",style:{marginTop:"3rem"}},"return home")))},ee=t(22);function ne(){var e=Object(m.a)(["\n  position:fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 2rem;\n  z-index:1;\n  background: white;\n\n  .nav-header {\n    display:flex;\n    justify-content:space-between;\n  }\n\n  .nav-btn{\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    outline: none;\n  }\n  /* ********TODO: ADD TRANSITION BETWEEN TOGGLE******* */\n\n  .nav-icon {\n    font-size: 1.5rem;\n  }\n\n  .logo {\n    font-size: 2rem;\n    font-family: 'Sacramento', cursive;\n    font-weight: bold;\n    color: black;\n    text-decoration:none;\n  }\n\n  .nav-links {\n    height: 0;\n    overflow: hidden;\n    transition: all 0.3s linear;\n    list-style: none;\n    transform: translateY(20%);\n  }\n\n  .nav-links a {\n    display:block;\n    text-decoration: none;\n    padding: 1rem 0;\n    color: black;\n    transition: var(--mainTransition);\n    text-align: center;\n    font-weight: 600;\n    font-size: 2rem;\n  }\n\n  .show-nav {\n    height: 100vh;\n  }\n\n  @media (min-width: 768px) {\n    .nav-btn {\n      display: none;\n    }\n\n    .nav-center {\n      max-width: 1170px;\n      margin: 0 auto;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n\n    .nav-links {\n      height: auto;\n      display: flex;\n      margin-left: 4rem;\n      transform: translateY(0);\n    }\n\n    .nav-links a {\n      padding: 0 1rem;\n      font-size: 1.2rem;\n    }\n  }\n"]);return ne=function(){return e},e}var te=s.a.nav(ne()),ae=function(){return r.a.createElement(Y,null,(function(e){var n=e.links,t=e.sidebarOpen,a=e.handleSidebar;return r.a.createElement(te,{className:"navbar"},r.a.createElement("div",{className:"nav-center"},r.a.createElement("div",{className:"nav-header"},r.a.createElement(c.b,{to:"/",className:"logo"},r.a.createElement("p",null,"Christina Yun")),t?r.a.createElement("button",{className:"nav-btn",onClick:a},r.a.createElement(ee.a,{className:"nav-icon close"})):r.a.createElement("button",{className:"nav-btn",onClick:a},r.a.createElement(ee.b,{className:"nav-icon open"}))),r.a.createElement("ul",{className:t?"nav-links show-nav":"nav-links"},n.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(c.b,{to:e.path,onClick:a},e.text))})))))}))};function re(){var e=Object(m.a)(["\n  .wave-container {\n    position:relative;\n    overflow:hidden;\n    background: rgb(255,255,255);\n    background: linear-gradient(rgba(255,255,255,1) 0%, rgba(255,225,225,1) 100%);\n    text-align:center;\n  }\n\n  h2 {\n    margin-bottom:2rem;\n  }\n\n  .footer-icon{\n    font-size: 2rem;\n    color: black;\n    margin: 0 1rem 3rem 1rem;\n    transition: var(--mainTransition);\n  }\n\n  .footer-icon:hover {\n    transform: translateY(-1rem);\n  }\n\n  @media (min-width: 768px) {\n    .footer-text{\n      margin-top: -5rem;\n      margin-bottom: 3rem;\n    }\n  }\n"]);return re=function(){return e},e}var ie=s.a.footer(re()),le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,null,r.a.createElement("div",{className:"wave-container"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},r.a.createElement("path",{fill:"#fff",fillOpacity:"1",d:"M0,64L48,58.7C96,53,192,43,288,74.7C384,107,480,181,576,176C672,171,768,85,864,74.7C960,64,1056,128,1152,133.3C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"})),r.a.createElement("div",{className:"footer-text"},r.a.createElement("h2",null,"Say Hi!"),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:"https://www.linkedin.com/in/christina-yun-58954a123/"},r.a.createElement(W.b,{className:"footer-icon"})),r.a.createElement("a",{href:"mailto:yjc.yun@gmail.com"},r.a.createElement(W.c,{className:"footer-icon"})),r.a.createElement("a",{href:"https://github.com/yjcyun"},r.a.createElement(W.a,{className:"footer-icon"})))))))},ce=function(e){Object(k.a)(t,e);var n=Object(j.a)(t);function t(){return Object(x.a)(this,t),n.apply(this,arguments)}return Object(w.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),t}(r.a.Component),oe=Object(o.f)(ce);var me=function(){return r.a.createElement(c.a,null,r.a.createElement(oe,null),r.a.createElement(ae,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(J,null)),r.a.createElement(o.a,{exact:!0,path:"/projects"},r.a.createElement(U,null)),r.a.createElement(o.a,{path:"/contact"},r.a.createElement(Q,null)),r.a.createElement(o.a,{path:"*"},r.a.createElement($,null))),r.a.createElement(le,null))};t(48);l.a.render(r.a.createElement(B,null,r.a.createElement(me,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.5a07927d.chunk.js.map