(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),o=a.n(l),c=(a(56),a(2)),i=a(3),s=a(5),m=a(4),u=a(10),p=(a(35),a(24)),h=a.n(p),d=a(47),b=a(20),E=a(6),v=a(25),g=a.n(v),f=g.a.initializeApp({apiKey:"AIzaSyDdnZQkBPyg0tMfD873IM5hXutIHFb4UY8",authDomain:"covid-checkin-4cfae.firebaseapp.com",databaseURL:"https://covid-checkin-4cfae.firebaseio.com",projectId:"covid-checkin-4cfae",storageBucket:"covid-checkin-4cfae.appspot.com",messagingSenderId:"909798680205",appId:"1:909798680205:web:02bd646b8dc0239e9764c4",measurementId:"G-9Y6KWK7EGP"}),y=new g.a.auth.GoogleAuthProvider;g.a.analytics();a(45);var N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({name:e.target.value})},n.handlesSubmit=function(e){e.preventDefault();var t={name:n.state.name};h()({method:"post",url:"/api/createUsername",data:{user:t}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},n.authEmailPassword=n.authEmailPassword.bind(Object(b.a)(n)),n.state={redirect:!1,name:""},n}return Object(i.a)(a,[{key:"authEmailPassword",value:function(e){var t=this;e.preventDefault(),console.log("authed with email");var a=this.emailInput.value,n=this.passwordInput.value;console.log(a),f.auth().fetchSignInMethodsForEmail(a).then((function(e){if(0===e.length)return f.auth().createUserWithEmailAndPassword(a,n),t.props.history.push("/"),r.a.createElement(E.a,{to:"/"});-1===e.indexOf("password")?(t.loginForm.reset(),alert("Email already In use")):(alert("failed to create user, try again later"),console.log("failed to create user"))})).then((function(e){e&&e.email&&(t.loginForm.reset(),t.setState({redirect:!0}))})).catch((function(e){console.log(e),alert(e)}))}},{key:"additionalSignUp",value:function(){}},{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(E.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"loginPage"},r.a.createElement("h1",null,"SignUp"),r.a.createElement("form",Object(d.a)({onSubmit:function(t){e.authEmailPassword(t)},ref:function(t){e.loginForm=t}},"onSubmit",this.handlesSubmit),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputUsername"},"Username"),r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",ref:function(t){e.emailInput=t},onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",name:"pass",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",ref:function(t){e.passwordInput=t}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"btn btn-primary",onSubmit:this.props.handleSubmit},"Create User")))),r.a.createElement("div",null))}}]),a}(n.Component),O=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar sticky-top navbar-expand-lg navbar navbar-dark bg-dark ",id:"navbar nav"},r.a.createElement(u.b,{to:"/",className:"navbar-brand"}," Covid Check-In"),r.a.createElement("div",{className:"collapse navbar-collapse navbar-right",id:"navbarNav"},r.a.createElement("ul",{className:"nav navbar-nav mr-auto"}),r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement(u.b,{to:"/",className:"nav-link"},r.a.createElement("li",null,"Home")),!1===this.props.authenticated?r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{to:"/login",className:"nav-link"},r.a.createElement("li",null,"Login")),r.a.createElement(u.b,{to:"/signup",className:"nav-link"},r.a.createElement("li",null,"SignUp"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,"value: ",this.props.value),r.a.createElement(u.b,{to:"/checkin",className:"nav-link"},r.a.createElement("li",null,"CheckIn")),r.a.createElement(u.b,{to:"/search",className:"nav-link"},r.a.createElement("li",null,"Search")),r.a.createElement(u.b,{to:"/logout",className:"nav-link "},"Logout"))))))}}]),a}(n.Component),k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).authWithGoogle=n.authWithGoogle.bind(Object(b.a)(n)),n.authEmailPassword=n.authEmailPassword.bind(Object(b.a)(n)),n.state={redirect:!1},n}return Object(i.a)(a,[{key:"authWithGoogle",value:function(){var e=this;console.log("authed with google"),f.auth().signInWithPopup(y).then((function(t,a){a?console.log(a):e.setState({redirect:!0})}))}},{key:"authEmailPassword",value:function(e){var t=this;e.preventDefault(),console.log("authed with email");var a=this.emailInput.value,n=this.passwordInput.value;console.log(a),f.auth().fetchSignInMethodsForEmail(a).then((function(e){return 0===e.length?(f.auth().createUserWithEmailAndPassword(a,n),t.props.history.push("/"),r.a.createElement(E.a,{to:"/"})):-1!==e.indexOf("password")?(console.log("user signed in"),f.auth().signInWithEmailAndPassword(a,n),t.props.history.push("/"),r.a.createElement(E.a,{to:"/"})):(t.loginForm.reset(),void alert("Try an alternative login, such as Google"))})).then((function(e){e&&e.email&&(t.loginForm.reset(),t.setState({redirect:!0}))})).catch((function(e){console.log(e),alert(e)}))}},{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(E.a,{to:"/"}):r.a.createElement("div",{className:"loginPage"},r.a.createElement("h1",null,"Login"),r.a.createElement("div",{className:"googleLogin"},r.a.createElement("button",{className:"btn btn-success",onClick:function(){e.authWithGoogle()}}," Log in with Google")),r.a.createElement("form",{className:"ui form",onSubmit:function(t){e.authEmailPassword(t)},ref:function(t){e.loginForm=t}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",ref:function(t){e.emailInput=t}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",name:"pass",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",ref:function(t){e.passwordInput=t}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}}]),a}(n.Component),j=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={redirect:!1},e}return Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this;f.auth().signOut().then((function(t){e.setState({redirect:!0})}))}},{key:"render",value:function(){return!0===this.state.redirect?(console.log("logged out"),r.a.createElement(E.a,{to:"/"})):r.a.createElement("div",{style:{height:"100%"}},r.a.createElement("h1",{style:{textAlign:"center"}}," Logging out"))}}]),a}(n.Component);a(86);var w=function(){return r.a.createElement("div",{className:"App body"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Welcome to the Covid Check-In Website!")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",id:"padding"},r.a.createElement("div",{className:"col-sm"},r.a.createElement("h3",{id:"text"},"Information Section"),r.a.createElement("p",{id:"text"},"This is a website created to better apply social distancing in our regular day to day life outside of the home. Paticapants of the app would be able to checkin to stores upon arrival and be aware of how many people have checked into a particular store or area and plan accordingly.")),r.a.createElement("div",{className:"col-sm"},r.a.createElement("h3",{id:"text"},"About Us"),r.a.createElement("p",{id:"text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, perspiciatis. Facilis, laboriosam. Doloremque voluptate sint, dolor, et laudantium ipsa minima hic repudiandae nisi tempore unde porro ex dignissimos saepe deserunt.")),r.a.createElement("div",{className:"col-sm"},r.a.createElement("h3",{id:"text"},"Our Vision"),r.a.createElement("p",{id:"text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, perspiciatis. Facilis, laboriosam. Doloremque voluptate sint, dolor, et laudantium ipsa minima hic repudiandae nisi tempore unde porro ex dignissimos saepe deserunt."))),r.a.createElement("small",{style:{color:"#FFFFFF"}},"Copyright @ Covid Check-In 2020 ")))},S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container center",id:"checkin"},r.a.createElement("h1",null,"To do"),r.a.createElement("ul",null,r.a.createElement("li",null,"Displays Currently Checked in store",r.a.createElement("p",null,"- checkin or out button"),r.a.createElement("p",null,"- view # of people checked in")),r.a.createElement("li",null,"Displays previously checked in stores(password protected) "))))}}]),a}(n.Component),I=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Search"),r.a.createElement("div",{id:"center"},r.a.createElement(u.b,{to:"/search/map",id:"buttons",className:"btn btn-secondary "},"Heat Map"),r.a.createElement(u.b,{to:"/search/filter",className:"btn btn-secondary",id:"buttons"},"Filter"),r.a.createElement(u.b,{to:"/search/searchstore",className:"btn btn-secondary",id:"buttons"},"Search Stores")),r.a.createElement("div",{id:"margins "},r.a.createElement("h1",null,"To do"),r.a.createElement("ul",null,r.a.createElement("li",null,"Heat Map "),r.a.createElement("li",null,"Filtering # of people"),r.a.createElement("li",null,"search by store(see # of people) ")))))}}]),a}(n.Component),F=(a(87),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,r.a.createElement("input",{className:"form-control mr-sm-2 container",id:"search",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search")))}}]),a}(n.Component)),C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Hello")}}]),a}(n.Component),x=a(34),L={width:"80%",height:"70%"},P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={name:"Brampton City Center",theLat:43.716589,theLng:-79.723921},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{margin:"auto",justifyContent:"center",textAlign:"center"}},r.a.createElement("h1",{id:"remove"},"Maps"),r.a.createElement("h5",{style:{marginTop:"3px",marginBottom:"6px"}},"Use the search bar to find locations or stores "),r.a.createElement("h3",null,"Location: ",this.state.name)),r.a.createElement("div",{className:"container"},r.a.createElement(x.Map,{google:this.props.google,zoom:14,style:L,initialCenter:{lat:this.state.theLat,lng:this.state.theLng}})))}}]),a}(n.Component),A=Object(x.GoogleApiWrapper)({apiKey:"AIzaSyDoSD0RfKO_FVMJ9I14kMkTowIkEUJYPyA"})(P),W=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"createStore container"},r.a.createElement("h1",null,"Add Store"),r.a.createElement("form",{method:"POST",action:"/admin/newstore"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Store/Location Name"),r.a.createElement("input",{type:"text",name:"storeName",className:"form-control",id:"storeName","aria-describedby":"storeName",placeholder:" store/Location Name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"longitude"},"Longitude"),r.a.createElement("input",{type:"number",step:"0.0001",name:"storeLng",className:"form-control",id:"storeLng",placeholder:"Longitude of Store"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"latitude"},"Latitude"),r.a.createElement("input",{type:"number",step:"0.0001",name:"storeLat",className:"form-control",id:"storeLat",placeholder:"Latitude of Store"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Create Store Location")))}}]),a}(n.Component),U=a(50),M=a(49),D=(n.Component,function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={stores:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("/api/stores").then((function(t){var a=t.data;e.setState({stores:a})}))}},{key:"render",value:function(){return r.a.createElement("ul",null,this.state.stores.map((function(e){return r.a.createElement("li",null,e.name)})))}}]),a}(r.a.Component)),G=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={authenticated:!1,loading:!0},e}return Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.removeAuthListener=f.auth().onAuthStateChanged((function(t){t?e.setState({authenticated:!0,loading:!1}):e.setState({authenticated:!1,loading:!1})}))}},{key:"componentWillUnmount",value:function(){this.removeAuthListener()}},{key:"render",value:function(){return!0===this.state.loading?r.a.createElement("div",{className:"loading"},"Loading\u2026"):r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement(O,{authenticated:this.state.authenticated,userName:this.state.userName,value:this.state.value}),r.a.createElement(E.d,null,r.a.createElement(E.b,{exact:!0,path:"/",component:w}),r.a.createElement(E.b,{path:"/login",component:k}),r.a.createElement(E.b,{path:"/signup",component:N}),r.a.createElement(E.b,{path:"/checkin",component:S}),r.a.createElement(E.b,{exact:!0,path:"/logout",component:j}),r.a.createElement(E.b,{exact:!0,path:"/search/map",component:A}),r.a.createElement(E.b,{exact:!0,path:"/search/filter",component:C}),r.a.createElement(E.b,{exact:!0,path:"/search/searchstore",component:F}),r.a.createElement(E.b,{path:"/search",component:I}),r.a.createElement(E.b,{path:"/admin/newstore",component:W}),r.a.createElement(E.b,{path:"/admin/stores",component:D}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(103),a(104);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,a){},51:function(e,t,a){e.exports=a(105)},56:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.900dbf53.chunk.js.map