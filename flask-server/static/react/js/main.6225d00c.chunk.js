(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),o=a.n(l),c=(a(60),a(2)),i=a(3),s=a(5),m=a(4),u=a(11),h=a(6),d=(a(38),a(9)),p=a.n(d),E=a(32),b=a.n(E),g=b.a.initializeApp({apiKey:"AIzaSyDdnZQkBPyg0tMfD873IM5hXutIHFb4UY8",authDomain:"covid-checkin-4cfae.firebaseapp.com",databaseURL:"https://covid-checkin-4cfae.firebaseio.com",projectId:"covid-checkin-4cfae",storageBucket:"covid-checkin-4cfae.appspot.com",messagingSenderId:"909798680205",appId:"1:909798680205:web:02bd646b8dc0239e9764c4",measurementId:"G-9Y6KWK7EGP"}),f=new b.a.auth.GoogleAuthProvider;b.a.analytics();var v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidUpdate=n.componentDidUpdate.bind(Object(u.a)(n)),n.state={redirect:!1,username:""},n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){var e=this;g.auth().onAuthStateChanged((function(t){if(t){var a=(t=g.auth().currentUser).uid;p.a.get("/api/getUser",{params:{firebaseId:a}}).then((function(t){var a=t.data[0].name;e.state.username!==a&&e.setState({username:a})}))}}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar sticky-top navbar-expand-lg navbar navbar-dark bg-dark ",id:"navbar nav"},r.a.createElement(h.b,{to:"/",className:"navbar-brand"}," Covid Check-In"),r.a.createElement("div",{className:"collapse navbar-collapse navbar-right",id:"navbarNav"},r.a.createElement("ul",{className:"nav navbar-nav mr-auto"}),r.a.createElement("ul",{className:"nav navbar-nav"},!1===this.props.authenticated?r.a.createElement(r.a.Fragment,null,r.a.createElement(h.b,{to:"/",className:"nav-link"},r.a.createElement("li",null,"Home")),r.a.createElement(h.b,{to:"/login",className:"nav-link"},r.a.createElement("li",null,"Login")),r.a.createElement(h.b,{to:"/signup",className:"nav-link"},r.a.createElement("li",null,"SignUp"))):r.a.createElement(r.a.Fragment,null,this.componentDidUpdate(),r.a.createElement("div",{style:{paddingRight:"400px",paddingTop:"7px"}},r.a.createElement("span",{style:{color:"white"}}," You are signed in as,   "),r.a.createElement("span",{style:{color:"#4ac6f7",fontWeight:"bold"}}," ",this.state.username)),r.a.createElement(h.b,{to:"/",className:"nav-link"},r.a.createElement("li",null,"Home")),r.a.createElement(h.b,{to:"/checkin/checkin",className:"nav-link"},r.a.createElement("li",null,"CheckIn")),r.a.createElement(h.b,{to:"/search",className:"nav-link"},r.a.createElement("li",null,"Search")),r.a.createElement(h.b,{to:"/logout",className:"nav-link "},"Logout"))))))}}]),a}(n.Component),y=a(8),k=(a(49),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).authWithGoogle=n.authWithGoogle.bind(Object(u.a)(n)),n.authEmailPassword=n.authEmailPassword.bind(Object(u.a)(n)),n.state={redirect:!1},n}return Object(i.a)(a,[{key:"authWithGoogle",value:function(){var e=this;console.log("authed with google"),g.auth().signInWithPopup(f).then((function(t,a){a?console.log(a):e.setState({redirect:!0})}))}},{key:"authEmailPassword",value:function(e){var t=this;e.preventDefault(),console.log("authed with email");var a=this.emailInput.value,n=this.passwordInput.value;console.log(a),g.auth().fetchSignInMethodsForEmail(a).then((function(e){return 0===e.length?(g.auth().createUserWithEmailAndPassword(a,n),t.props.history.push("/"),r.a.createElement(y.a,{to:"/"})):-1!==e.indexOf("password")?(console.log("user signed in"),g.auth().signInWithEmailAndPassword(a,n),t.props.history.push("/"),r.a.createElement(y.a,{to:"/"})):(t.loginForm.reset(),void alert("Try an alternative login, such as Google"))})).then((function(e){e&&e.email&&(t.loginForm.reset(),t.setState({redirect:!0}))})).catch((function(e){console.log(e),alert(e)}))}},{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(y.a,{to:"/"}):r.a.createElement("div",{className:"loginPage"},r.a.createElement("h1",null,"Login"),r.a.createElement("div",{className:"googleLogin"},r.a.createElement("button",{className:"btn btn-success",onClick:function(){e.authWithGoogle()}}," Log in with Google")),r.a.createElement("form",{className:"ui form",onSubmit:function(t){e.authEmailPassword(t)},ref:function(t){e.loginForm=t}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",ref:function(t){e.emailInput=t}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",name:"pass",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",ref:function(t){e.passwordInput=t}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}}]),a}(n.Component)),O=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({name:e.target.value})},n.authEmailPassword=n.authEmailPassword.bind(Object(u.a)(n)),n.state={redirect:!1},n}return Object(i.a)(a,[{key:"authEmailPassword",value:function(e){var t=this,a=this.props.history;e.preventDefault(),console.log("authed with email");var n=this.emailInput.value,r=this.passwordInput.value,l=this.usernameInput.value;console.log(n),g.auth().fetchSignInMethodsForEmail(n).then((function(e){0===e.length?(g.auth().createUserWithEmailAndPassword(n,r),a.push("/"),g.auth().onAuthStateChanged((function(e){if(e){var t=(e=g.auth().currentUser).uid;console.log("id: "+t),p()({method:"post",url:"/api/createUser",data:{name:l,email:n,firebaseId:t}}).catch((function(e){console.log(e)}))}}))):-1===e.indexOf("password")?(t.loginForm.reset(),alert("Email already In use")):(alert("failed to create user, try again later"),console.log("failed to create user"))})).then((function(e){e&&e.email&&(t.loginForm.reset(),t.setState({redirect:!0}))})).catch((function(e){console.log(e),alert(e)}))}},{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(y.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"loginPage"},r.a.createElement("h1",null,"SignUp"),r.a.createElement("form",{onSubmit:function(t){e.authEmailPassword(t)},ref:function(t){e.loginForm=t}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputUsername"},"Username"),r.a.createElement("input",{type:"text",name:"username",ref:function(t){e.usernameInput=t}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",ref:function(t){e.emailInput=t},onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",name:"pass",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",ref:function(t){e.passwordInput=t}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Create User")))),r.a.createElement("div",null))}}]),a}(n.Component),j=Object(y.g)(O),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={redirect:!1},e}return Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this;g.auth().signOut().then((function(t){e.setState({redirect:!0})}))}},{key:"render",value:function(){return!0===this.state.redirect?(console.log("logged out"),r.a.createElement(y.a,{to:"/"})):r.a.createElement("div",{style:{height:"100%"}},r.a.createElement("h1",{style:{textAlign:"center"}}," Logging out"))}}]),a}(n.Component);a(90);var N=function(){return r.a.createElement("div",{className:"App body"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Welcome to the Covid Check-In Website!")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",id:"padding"},r.a.createElement("div",{className:"col-sm"},r.a.createElement("h3",{id:"text"},"Information Section"),r.a.createElement("p",{id:"text"},"This is a website created to better apply social distancing in our regular day to day life outside of the home. Paticapants of the app would be able to checkin to stores upon arrival and be aware of how many people have checked into a particular store or area and plan accordingly.")),r.a.createElement("div",{className:"col-sm"},r.a.createElement("h3",{id:"text"},"About Us"),r.a.createElement("p",{id:"text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, perspiciatis. Facilis, laboriosam. Doloremque voluptate sint, dolor, et laudantium ipsa minima hic repudiandae nisi tempore unde porro ex dignissimos saepe deserunt.")),r.a.createElement("div",{className:"col-sm"},r.a.createElement("h3",{id:"text"},"Our Vision"),r.a.createElement("p",{id:"text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, perspiciatis. Facilis, laboriosam. Doloremque voluptate sint, dolor, et laudantium ipsa minima hic repudiandae nisi tempore unde porro ex dignissimos saepe deserunt."))),r.a.createElement("small",{style:{color:"#FFFFFF"}},"Copyright @ Covid Check-In 2020 ")))},w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=n.componentDidMount.bind(Object(u.a)(n)),n.checkOut=n.checkOut.bind(Object(u.a)(n)),n.state={storeName:"",timeIn:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.auth().onAuthStateChanged((function(t){if(t){var a=(t=g.auth().currentUser).uid;console.log("id: "+a),p.a.get("/api/checkins",{params:{firebaseId:a}}).then((function(t){console.log(t),console.log(t.data),console.log(t.data[0]);var a=t.data[0],n=a.name,r=a.timeIn,l=a.timeOut;console.log("timeIn",r,"timeOut",l),"0"===l&&(e.setState({storeName:n}),e.setState({timeIn:r}),e.setState({timeOut:l}))}))}}))}},{key:"checkOut",value:function(){console.log("triggered?"),g.auth().onAuthStateChanged((function(e){if(e){var t=(e=g.auth().currentUser).uid,a=(new Date).toLocaleTimeString();console.log("id: "+t),console.log("checked out"),p()({method:"post",url:"/api/updateCheckin",data:{timeOut:a,firebaseId:t}}).catch((function(e){console.log(e)}))}})),console.log("checked out")}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,"0"!==this.state.timeOut?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null," No store currently signed into "),r.a.createElement(h.b,{to:"/checkin/history"},r.a.createElement("button",null,"CheckIn History"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h2",null," You are currently signed into: ",this.state.storeName," "),r.a.createElement(h.b,{to:"/search/searchstore"},r.a.createElement("button",{onClick:function(){return e.checkOut()}}," Check out?")),r.a.createElement("div",null),r.a.createElement(h.b,{to:"/checkin/history"},r.a.createElement("button",null,"CheckIn History")))))}}]),a}(n.Component),I=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Search"),r.a.createElement("div",{id:"center"},r.a.createElement(h.b,{to:"/search/map",id:"buttons",className:"btn btn-secondary "},"Heat Map"),r.a.createElement(h.b,{to:"/search/filter",className:"btn btn-secondary",id:"buttons"},"Filter"),r.a.createElement(h.b,{to:"/search/searchstore",className:"btn btn-secondary",id:"buttons"},"Search Stores")),r.a.createElement("div",{id:"margins "},r.a.createElement("h1",null,"To do"),r.a.createElement("ul",null,r.a.createElement("li",null,"Heat Map "),r.a.createElement("li",null,"Filtering # of people"),r.a.createElement("li",null,"search by store(see # of people) ")))))}}]),a}(n.Component),C=(a(91),a(30)),x=a.n(C),L=a(52),F=a(25),A=a.n(F),P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=n.componentDidMount.bind(Object(u.a)(n)),n.printList=n.printList.bind(Object(u.a)(n)),n.address=n.address.bind(Object(u.a)(n)),n.capacityRetriveal=n.capacityRetriveal.bind(Object(u.a)(n)),n.state={allStores:[],List:[],stores:[],object:[],test:"Johnny",id:"",statement:!1,countersList:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.capacityRetriveal();var e=this;p.a.get("/api/stores",{}).then((function(t){for(var a=t.data,n=a.length,r=[],l=0;l<n;l++)r.push(a[l]);e.state.List!==r&&e.setState({List:r}),e.state.allStores!==a&&e.setState({allStores:a})}))}},{key:"capacityRetriveal",value:function(){var e=this;p.a.get("/api/capacityOfStore",{}).then((function(t){console.log("response:",t.data,"tpyeof: ",typeof t.data);var a=t.data,n=Object.values(a);console.log("counterList: ",n,"type: ",typeof n),e.state.countersList!==n&&e.setState({countersList:n})}))}},{key:"isCheckedIn",value:function(){g.auth().onAuthStateChanged((function(e){if(e){var t=(e=g.auth().currentUser).uid;console.log("id: "+t),p.a.get("/api/checkins",{params:{firebaseId:t}}).then((function(e){console.log(e),console.log(e.data),console.log(e.data[0]),"0"===e.data[0].timeOut&&this.setState({statement:!0})}))}}))}},{key:"address",value:function(e,t){A.a.setApiKey("AIzaSyDoSD0RfKO_FVMJ9I14kMkTowIkEUJYPyA"),A.a.enableDebug(),A.a.fromLatLng(e,t).then((function(e){var t=e.results[0].formatted_address;return console.log(t),t}),(function(e){console.error(e)}))}},{key:"printList",value:function(){var e=this,t=this.state.List,a=[],n=this.state.countersList,l=[],o=this.state.countersList.length;console.log("len: ",o);for(var c=0;c<o;c++)l.push(n[c].number);console.log("List: ",l,typeof l);for(var i=0;i<t.length;i++)a.push(t[i]);return r.a.createElement("div",null,r.a.createElement("table",{style:{marginBottom:"0px"},class:"table"},r.a.createElement("thead",{class:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"323px"},scope:"col"},"Name"),r.a.createElement("th",{style:{width:"323px"},scope:"col"},"Location"),r.a.createElement("th",{style:{width:"333px"},scope:"col"},"Current Capacity "),r.a.createElement("th",{scope:"col"},"Check Into")))),a.map((function(t,a){return r.a.createElement("div",null,r.a.createElement("table",{class:"table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{style:{width:"323px"}}," ",t.name),r.a.createElement("td",{style:{width:"323px"}},"Pending"),r.a.createElement("td",{style:{width:"323px"}},l[a]),r.a.createElement("td",null,r.a.createElement(h.b,{in:t,to:"/checkIn/current"},r.a.createElement("button",{style:{marginLeft:"6px"},onClick:function(){return e.settingObject(t)}}," Check Into")))))))})))}},{key:"settingObject",value:function(e){var t=this;(console.log("onlick atitvated"),console.log("i: ",e),this.state.object!==e)&&function(){var e=Object(L.a)(x.a.mark((function e(a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setState({object:a});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()().then((function(){return t.createChechkin(e)}))}},{key:"createChechkin",value:function(e){g.auth().onAuthStateChanged((function(t){if(t){var a=(t=g.auth().currentUser).uid,n=(new Date).toLocaleTimeString(),r=e._id.$oid;p()({method:"post",url:"/api/checkInto",data:{time:n,firebaseId:a,i:e,storeId:r}}).catch((function(e){console.log(e)}))}}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},!0===this.state.statement?r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"You are already checked into a store ")):r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,r.a.createElement("input",{className:"form-control mr-sm-2 container",id:"search",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search")),this.printList(),r.a.createElement(h.b,{to:"/search"},r.a.createElement("button",null," Back ")," "))))}}]),a}(n.Component),U=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"getAllStores",value:function(){p.a.get("/api/stores",{}).then((function(e){console.log(e),console.log(e.data);var t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null," ",t[0].name," "),r.a.createElement("table",null,r.a.createElement("th",null,"Stores"),r.a.createElement("tr",null," ",t[0].name," ")),r.a.createElement("form",null,r.a.createElement("input",{className:"form-control mr-sm-2 container",id:"search",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search")))}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.getAllStores(),r.a.createElement("div",null,"Hello"))}}]),a}(n.Component),D=a(24),M={width:"80%",height:"70%"},W=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={name:"Brampton City Center",theLat:43.716589,theLng:-79.723921},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{margin:"auto",justifyContent:"center",textAlign:"center"}},r.a.createElement("h1",{id:"remove"},"Maps"),r.a.createElement("h5",{style:{marginTop:"3px",marginBottom:"6px"}},"Use the search bar to find locations or stores "),r.a.createElement("h3",null,"Location: ",this.state.name)),r.a.createElement("div",{className:"container"},r.a.createElement(D.Map,{google:this.props.google,zoom:14,style:M,initialCenter:{lat:this.state.theLat,lng:this.state.theLng}})))}}]),a}(n.Component),T=Object(D.GoogleApiWrapper)({apiKey:"AIzaSyDoSD0RfKO_FVMJ9I14kMkTowIkEUJYPyA"})(W),G=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"createStore container"},r.a.createElement("h1",null,"Add Store"),r.a.createElement("form",{method:"POST",action:"/api/newstore"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Store/Location Name"),r.a.createElement("input",{type:"text",name:"storeName",className:"form-control",id:"storeName","aria-describedby":"storeName",placeholder:" store/Location Name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"longitude"},"Longitude"),r.a.createElement("input",{type:"number",step:"0.0001",name:"storeLng",className:"form-control",id:"storeLng",placeholder:"Longitude of Store"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"latitude"},"Latitude"),r.a.createElement("input",{type:"number",step:"0.0001",name:"storeLat",className:"form-control",id:"storeLat",placeholder:"Latitude of Store"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Create Store Location")))}}]),a}(n.Component),H=a(54),B=a(53),Y=(n.Component,function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={stores:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/stores").then((function(t){var a=t.data;e.setState({stores:a})}))}},{key:"render",value:function(){return r.a.createElement("ul",null,this.state.stores.map((function(e){return r.a.createElement("li",null,e.name)})))}}]),a}(r.a.Component)),R=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container center",id:"Current"},r.a.createElement("h1",null,"You are singed in at this store")))}}]),a}(n.Component),J=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=n.componentDidMount.bind(Object(u.a)(n)),n.state={allCheckins:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.auth().onAuthStateChanged((function(t){if(t){var a=(t=g.auth().currentUser).uid;console.log("id: "+a),p.a.get("/api/allCheckins",{params:{firebaseId:a}}).then((function(t){console.log(t),console.log(t.data),console.log(t.data[0]);var a=t.data;a.length;e.state.allCheckins!==a&&e.setState({allCheckins:a})}))}}))}},{key:"printList",value:function(){var e=this.state.allCheckins;return r.a.createElement("div",null,r.a.createElement("h1",null,"All Checkins"),r.a.createElement("table",{style:{marginBottom:"0px"},class:"table"},r.a.createElement("thead",{class:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"494px"},scope:"col"},"Store Name"),r.a.createElement("th",{style:{width:"468px"},scope:"col"},"TimeIn"),r.a.createElement("th",{scope:"col"},"TimeOut")))),e.map((function(e){return r.a.createElement("div",null,r.a.createElement("table",{class:"table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{style:{width:"494px"}}," ",e.name),r.a.createElement("td",{style:{width:"468px"}},e.timeIn),r.a.createElement("td",null,e.timeOut)))))})))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,!0===this.state.statement?r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"You are already checked into a store ")):r.a.createElement(r.a.Fragment,null,this.printList()))}}]),a}(n.Component),K=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleLanguage=function(t){e.setState({username:t})},e.state={authenticated:!1,loading:!0,username:""},e}return Object(i.a)(a,[{key:"getUserName",value:function(){var e=this;p.a.get("/api/createUser").then((function(t){console.log("jello");var a=t.data;console.log("type of username: ",typeof a,"username: ",a),e.setState({username:a})}))}},{key:"componentWillMount",value:function(){var e=this;this.removeAuthListener=g.auth().onAuthStateChanged((function(t){t?e.setState({authenticated:!0,loading:!1}):e.setState({authenticated:!1,loading:!1})}))}},{key:"componentWillUnmount",value:function(){this.removeAuthListener()}},{key:"render",value:function(){var e=this;return!0===this.state.loading?r.a.createElement("div",{className:"loading"},"Loading\u2026"):r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement(v,{authenticated:this.state.authenticated,username:this.state.username}),r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:"/",component:N}),r.a.createElement(y.b,{path:"/login",component:function(){return r.a.createElement(k,{username:e.state.username})}}),r.a.createElement(y.b,{exact:!0,path:"/signup",component:j}),r.a.createElement(y.b,{exact:!0,path:"/checkin/checkin",component:w}),r.a.createElement(y.b,{exact:!0,path:"/checkin/current",component:R}),r.a.createElement(y.b,{exact:!0,path:"/checkin/history",component:J}),r.a.createElement(y.b,{exact:!0,path:"/logout",component:S}),r.a.createElement(y.b,{exact:!0,path:"/search/map",component:T}),r.a.createElement(y.b,{exact:!0,path:"/search/filter",component:U}),r.a.createElement(y.b,{exact:!0,path:"/search/searchstore",component:P}),r.a.createElement(y.b,{path:"/search",component:I}),r.a.createElement(y.b,{path:"/api/newstore",component:G}),r.a.createElement(y.b,{path:"/admin/stores",component:Y}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(107),a(108);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e,t,a){},55:function(e,t,a){e.exports=a(109)},60:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.6225d00c.chunk.js.map