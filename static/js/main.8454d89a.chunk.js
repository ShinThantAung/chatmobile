(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{130:function(e,t,a){e.exports=a(179)},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),i=a.n(s);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(53),c=a(13),l=a(12),u=a.n(l),m=a(22),p=a(18),h=a(19),d=a(21),g=a(20),f=a(51),b=function(e){return{main:Object(f.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},noAccountHeader:{width:"100%"},signUpLink:{width:"100%",textDecoration:"none",color:"#303f9f",fontWeight:"bolder"},errorText:{color:"red",textAlign:"center"}}},w=a(211),v=a(230),E=a(212),x=a(184),C=a(80),y=a.n(C),k=a(209),S=a(62),O=a(215),j=a(213),N=a(227),T=a(47),F=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).userTyping=function(t,a){switch(t){case"email":e.setState({email:a.target.value});break;case"password":e.setState({password:a.target.value})}},e.submitLogin=function(){var t=Object(m.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,T.auth().signInWithEmailAndPassword(e.state.email,e.state.password).then((function(){e.props.history.push("/dashboard")}),(function(t){e.setState({serverError:!0}),console.log("Error logging in: ",t)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={email:null,password:null,serverError:!1},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("main",{className:t.main,maxWidth:"xs"},r.a.createElement(k.a,null),r.a.createElement(x.a,{className:t.paper},r.a.createElement(S.a,{component:"h1",variant:"h5"},"Log In!"),r.a.createElement("form",{onSubmit:function(t){return e.submitLogin(t)},className:t.form},r.a.createElement(w.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(v.a,{htmlFor:"login-email-input"},"Enter Your Email"),r.a.createElement(E.a,{autoComplete:"email",autoFocus:!0,onChange:function(t){return e.userTyping("email",t)},id:"login-email-input"})),r.a.createElement(w.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(v.a,{htmlFor:"login-password-input"},"Enter Your Password"),r.a.createElement(E.a,{autoComplete:"current-password",type:"password",onChange:function(t){return e.userTyping("password",t)},id:"login-password-input"})),r.a.createElement(j.a,{control:r.a.createElement(N.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Log In")),this.state.serverError?r.a.createElement(S.a,{className:alert,component:"h5",variant:"h6"},"Incorrect Login Information"):null,r.a.createElement("h5",{className:t.noAccountHeader},"Don't Have An Account?"),r.a.createElement(o.b,{className:t.signUpLink,to:"/signup"},"Sign Up!")))}}]),a}(r.a.Component),I=y()(b)(F),L=function(e){return{main:Object(f.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},hasAccountHeader:{width:"100%"},logInLink:{width:"100%",textDecoration:"none",color:"#303f9f",fontWeight:"bolder"},errorText:{color:"red",textAlign:"center"}}},B=a(47),D=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).userTyping=function(t,a){switch(t){case"email":e.setState({email:a.target.value});break;case"password":e.setState({password:a.target.value});break;case"passwordConfirmation":e.setState({passwordConfirmation:a.target.value})}},e.formIsValid=function(){return e.state.password===e.state.passwordConfirmation},e.submitSignup=function(t){t.preventDefault(),e.formIsValid()?B.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(t){var a={email:t.user.email,friends:[],messages:[]};B.firestore().collection("users").doc(e.state.email).set(a).then((function(){e.props.history.push("/dashboard")}),(function(t){console.log("Failed to add user to the database: ",t),e.setState({signupError:"Failed to add user"})}))}),(function(t){console.log("Failed to create user: ",t),e.setState({signupError:"Failed to add user"})})):e.setState({signupError:"Passwords do not match"})},e.state={email:null,password:null,passwordConfirmation:null,signupError:""},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("main",{className:t.main},r.a.createElement(k.a,null),r.a.createElement(x.a,{className:t.paper},r.a.createElement(S.a,{component:"h1",variant:"h5"},"Sign Up!"),r.a.createElement("form",{onSubmit:function(t){return e.submitSignup(t)},className:t.form},r.a.createElement(w.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(v.a,{htmlFor:"signup-email-input"},"Enter Your Email"),r.a.createElement(E.a,{autoComplete:"email",autoFocus:!0,onChange:function(t){return e.userTyping("email",t)},id:"signup-email-input"})),r.a.createElement(w.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(v.a,{htmlFor:"signup-password-input"},"Create A Password"),r.a.createElement(E.a,{type:"password",onChange:function(t){return e.userTyping("password",t)},id:"signup-password-input"})),r.a.createElement(w.a,{required:!0,fullWidth:!0,margin:"normal"},r.a.createElement(v.a,{htmlFor:"signup-password-confirmation-input"},"Confirm Your Password"),r.a.createElement(E.a,{type:"password",onChange:function(t){return e.userTyping("passwordConfirmation",t)},id:"signup-password-confirmation-input"})),r.a.createElement(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Submit")),this.state.signupError?r.a.createElement(S.a,{className:t.errorText,component:"h5",variant:"h6"},this.state.signupError):null,r.a.createElement("h5",{className:t.hasAccountHeader},"Already Have An Account?"),r.a.createElement(o.b,{className:t.logInLink,to:"/login"},"Log In!")))}}]),a}(r.a.Component),H=y()(L)(D),R=a(71),W=a(4),A=function(e){return{main:Object(f.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},errorText:{color:"red",textAlign:"center"}}},M=a(47),V=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).userTyping=function(t,a){switch(t){case"username":e.setState({username:a.target.value});break;case"message":e.setState({message:a.target.value})}},e.submitNewChat=function(){var t=Object(m.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,e.userExists();case 3:if(!t.sent){t.next=9;break}return t.next=7,e.chatExists();case 7:t.sent?e.goToChat():e.createChat();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.buildDocKey=function(){return[M.auth().currentUser.email,e.state.username].sort().join(":")},e.createChat=function(){e.props.newChatSubmitFn({sendTo:e.state.username,message:e.state.message})},e.goToChat=function(){return e.props.goToChatFn(e.buildDocKey(),e.state.message)},e.chatExists=Object(m.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.buildDocKey(),t.next=3,M.firestore().collection("chats").doc(a).get();case 3:return n=t.sent,console.log(n.exists),t.abrupt("return",n.exists);case 6:case"end":return t.stop()}}),t)}))),e.userExists=Object(m.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.firestore().collection("users").get();case 2:return a=t.sent,n=a.docs.map((function(e){return e.data().email})).includes(e.state.username),e.setState({serverError:!n}),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)}))),e.state={username:null,message:null},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("main",{className:t.main},r.a.createElement(k.a,null),r.a.createElement(x.a,{className:t.paper},r.a.createElement(S.a,{component:"h1",variant:"h3"},"Send A Message!"),r.a.createElement("form",{className:t.form,onSubmit:function(t){return e.submitNewChat(t)}},r.a.createElement(w.a,{fullWidth:!0},r.a.createElement(v.a,{hHelper:!0,texttmlFor:"new-chat-username"},"Friend's Email"),r.a.createElement(E.a,{required:!0,className:t.input,autoFocus:!0,onChange:function(t){return e.userTyping("username",t)},id:"new-chat-username"})),r.a.createElement(w.a,{fullWidth:!0},r.a.createElement(v.a,{htmlFor:"new-chat-message"},"Enter Your Message"),r.a.createElement(E.a,{required:!0,className:t.input,onChange:function(t){return e.userTyping("message",t)},id:"new-chat-message"})),r.a.createElement(O.a,{fullWidth:!0,variant:"contained",color:"primary",className:t.submit,type:"submit"},"Send")),this.state.serverError?r.a.createElement(S.a,{component:"h5",variant:"h6",className:t.errorText},"Unable to locate the user"):null))}},{key:"componentWillMount",value:function(){M.auth().currentUser||this.props.history.push("/login")}}]),a}(r.a.Component),K=Object(W.a)(A)(V),U=a(216),q=a(217),z=a(219),G=a(218),P=a(231),Y=function(e){return{root:{backgroundColor:e.palette.background.paper,height:"100%",position:"absolute",left:"0",width:"auto",flexGrow:1},paper1:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary,flex:"1 0 auto",margin:e.spacing(3)},menuroot:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},listItem:{cursor:"pointer"},newChatBtn:{borderRadius:"0px"},unreadMessage:{color:"green",position:"absolute",top:"0",right:"5px"},margin:{margin:e.spacing(1)},fabButton:{position:"absolute",zIndex:1,top:-5,left:0,right:0,margin:"0 auto"},extendedIcon:{marginRight:e.spacing(1)}}},J=a(221),Q=a(220),Z=a(111),$=a.n(Z),X=a(47),_=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).userIsSender=function(t){return t.messages[t.messages.length-1].sender===e.props.userEmail},e.newChat=function(){return e.props.newChatBtnFn()},e.selectChat=function(t){return e.props.selectChatFn(t)},e.signOut=function(){return X.auth().signOut()},e.submitMessage=function(t){var a=e.buildDocKey(e.state.chats[e.state.selectedChat].users.filter((function(t){return t!==e.state.email}))[0]);X.firestore().collection("chats").doc(a).update({messages:X.firestore.FieldValue.arrayUnion({sender:e.state.email,message:t,timestamp:Date.now()}),receiverHasRead:!1})},e.buildDocKey=function(t){return[e.state.email,t].sort().join(":")},e.newChatBtnClicked=function(){return e.setState({newChatFormVisible:!0,selectedChat:null})},e.newChatSubmit=function(){var t=Object(m.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.buildDocKey(a.sendTo),t.next=3,X.firestore().collection("chats").doc(n).set({messages:[{message:a.message,sender:e.state.email}],users:[e.state.email,a.sendTo],receiverHasRead:!1});case 3:e.setState({newChatFormVisible:!1}),e.selectChat(e.state.chats.length-1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return this.props.chats.length>0?r.a.createElement("div",{className:t.root},r.a.createElement(x.a,{className:t.paper1},r.a.createElement(S.a,{className:t.text,variant:"h5",gutterBottom:!0}),r.a.createElement(U.a,{className:t.list},this.props.chats.map((function(a,n){return r.a.createElement("div",{key:n},r.a.createElement(q.a,{button:!0,onClick:function(){return e.selectChat(n)},className:t.listItem,selected:e.props.selectedChatIndex===n,alignItems:"flex-start"},r.a.createElement(G.a,null,r.a.createElement(P.a,{alt:"Remy Sharp"},a.users.filter((function(t){return t!==e.props.userEmail}))[0].split("")[0])),r.a.createElement(z.a,{primary:a.users.filter((function(t){return t!==e.props.userEmail}))[0],secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{component:"span",color:"textPrimary"},a.messages[a.messages.length-1].message.substring(0,30)+" ..."))}),!1!==a.receiverHasRead||e.userIsSender(a)?null:r.a.createElement(Q.a,null,r.a.createElement($.a,{className:t.unreadMessage}))),r.a.createElement(J.a,null))}))))):r.a.createElement("div",{className:t.root},r.a.createElement(O.a,{variant:"contained",fullWidth:!0,color:"primary",onClick:this.newChat,className:t.newChatBtn},"New Message"),r.a.createElement(U.a,null))}}]),a}(r.a.Component),ee=Object(W.a)(Y)(_),te=function(e){return{content:{height:"calc(100vh - 70px)",overflowY:"scroll",marginTop:"-180px",width:"280px",position:"absolute"},userSent:{float:"right",boxSizing:"border-box",wordWrap:"break-word",marginTop:"10px",backgroundColor:"#5399F3",color:"white",width:"200px",height:"auto",marginLeft:"50px",borderRadius:"20px"},friendSent:{float:"left",clear:"both",boxSizing:"border-box",marginTop:"10px",marginRight:"70px",backgroundColor:"#EDF2F3",color:"black",width:"200px",borderRadius:"20px"}}},ae=(a(175),a(176),a(82)),ne=a.n(ae),re=a(229),se=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){var e=document.getElementById("chatview-container");e&&e.scrollTo(0,e.scrollHeight)},e.componentDidUpdate=function(){var e=document.getElementById("chatview-container");e&&e.scrollTo(0,e.scrollHeight)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return void 0===this.props.chat?r.a.createElement("main",{className:t.content}):void 0!==this.props.chat?r.a.createElement("div",{className:"viewChatBoard"},r.a.createElement("div",{className:"headerChatBoard"},r.a.createElement(P.a,{alt:"Remy Sharp"},this.props.chat.users.filter((function(t){return t!==e.props.userEmail}))[0].split("")[0]),r.a.createElement("span",{className:"textHeaderChatBoard"},this.props.chat.users.filter((function(t){return t!==e.props.user}))[0])),r.a.createElement("div",{className:"viewListContentChat"},this.props.chat.messages.map((function(a,n){return r.a.createElement("div",{key:n,className:a.sender===e.props.user?t.userSent:t.friendSent},r.a.createElement("div",{className:"viewListContentChat"},r.a.createElement(re.a,{title:new Date(parseInt(a.timestamp)).toUTCString()},r.a.createElement("div",null,a.message))))})),r.a.createElement("div",null))):r.a.createElement("div",{className:"viewLoading"},r.a.createElement(ne.a,{type:"bars",color:"#203152",height:"3%",width:"3%"}))}}]),a}(r.a.Component),ie=Object(W.a)(te)(se),oe=a(226),ce=a(113),le=a.n(ce),ue=function(e){return{sendBtn:{color:"blue",cursor:"pointer","&:hover":{color:"gray"}},viewInput:{flex:"1",borderradius:"4px",paddingleft:"10px",paddingright:"10px",border:"0px",height:"30px"},viewBottom:{display:"flex",flexdirection:"row",aligntems:"center",justifycontent:"center",height:"50px",bordertop:"1px solid #e8e8e8",width:"auto"},chatTextBoxContainer:{position:"absolute",bottom:"15px",margin:"-10px",marginleft:"1px",boxSizing:"border-box",overflow:"auto"},chatTextBox:{width:"240px"}}},me=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).userTyping=function(t){return 13===t.keyCode?e.submitMessage():e.setState({chatText:t.target.value})},e.messageValid=function(e){return e&&e.replace(/\s/g,"").length},e.userClickedInput=function(){return e.props.userClickedInputFn()},e.submitMessage=function(){e.messageValid(e.state.chatText)&&(e.props.submitMessageFn(e.state.chatText),document.getElementById("chattextbox").value="")},e.state={chatText:""},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.chatTextBoxContainer},r.a.createElement(oe.a,{placeholder:"Type your message..",onKeyUp:function(t){return e.userTyping(t)},id:"chattextbox",className:t.chatTextBox,onFocus:this.userClickedInput}),r.a.createElement(le.a,{onClick:this.submitMessage,className:t.sendBtn}))}}]),a}(r.a.Component),pe=Object(W.a)(ue)(me),he=function(e){return{root:{flexGrow:1},loadingroot:{justify:"center"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},unreadMessage:{color:"red",position:"absolute",top:"0",right:"5px"},signOutBtn:{position:"absolute",bottom:"0px",left:"0px",width:"300px",borderRadius:"0px",backgroundColor:"#227092",height:"35px",boxShadow:"0px 0px 2px black",color:"white"}}},de=a(225),ge=a(115),fe=a.n(ge),be=a(223),we=a(224),ve=a(214),Ee=a(114),xe=a.n(Ee),Ce=(a(177),a(47)),ye=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).signOut=function(){return Ce.auth().signOut()},e.userIsSender=function(t){return t.messages[t.messages.length-1].sender===e.props.userEmail},e.newChat=function(){return e.props.newChatBtnFn()},e.selectChat=function(t){return e.props.selectChatFn(t)},e.submitMessage=function(t){var a=e.buildDocKey(e.state.chats[e.state.selectedChat].users.filter((function(t){return t!==e.state.email}))[0]);Ce.firestore().collection("chats").doc(a).update({messages:Ce.firestore.FieldValue.arrayUnion({sender:e.state.email,message:t,timestamp:Date.now()}),receiverHasRead:!1})},e.buildDocKey=function(t){return[e.state.email,t].sort().join(":")},e.newChatBtnClicked=function(){return e.setState({newChatFormVisible:!0,selectedChat:null,showHideChatList:!1})},e.newChatSubmit=function(){var t=Object(m.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.buildDocKey(a.sendTo),t.next=3,Ce.firestore().collection("chats").doc(n).set({messages:[{message:a.message,sender:e.state.email}],users:[e.state.email,a.sendTo],receiverHasRead:!1});case 3:e.setState({newChatFormVisible:!1}),e.selectChat(e.state.chats.length-1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectChat=function(){var t=Object(m.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedChat:a,newChatFormVisible:!1,showHideChatList:!1});case 2:e.messageRead();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.goToChat=function(){var t=Object(m.a)(u.a.mark((function t(a,n){var r,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.split(":"),s=e.state.chats.find((function(e){return r.every((function(t){return e.users.includes(t)}))})),e.setState({newChatFormVisible:!1}),t.next=5,e.selectChat(e.state.chats.indexOf(s));case 5:e.submitMessage(n);case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.messageRead=function(){var t=e.state.selectedChat,a=e.buildDocKey(e.state.chats[t].users.filter((function(t){return t!==e.state.email}))[0]);e.clickedMessageWhereNotSender(t)?Ce.firestore().collection("chats").doc(a).update({receiverHasRead:!0}):console.log("Clicked message where the user was the sender")},e.clickedMessageWhereNotSender=function(t){return e.state.chats[t].messages[e.state.chats[t].messages.length-1].sender!==e.state.email},e.componentWillMount=function(){Ce.auth().onAuthStateChanged(function(){var t=Object(m.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=4;break}e.props.history.push("/login"),t.next=6;break;case 4:return t.next=6,Ce.firestore().collection("chats").where("users","array-contains",a.email).onSnapshot(function(){var t=Object(m.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.docs.map((function(e){return e.data()})),t.next=3,e.setState({email:a.email,chats:r,friends:[]});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},e.state={selectedChat:null,newChatFormVisible:!1,email:null,friends:[],chats:[],showHideChatList:!0},e.hideComponent=e.hideComponent.bind(Object(R.a)(e)),e}return Object(h.a)(a,[{key:"hideComponent",value:function(e){switch(e){case"showHideChatList":this.setState({showHideChatList:!this.state.showHideChatList})}}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state.showHideChatList;return this.state.email?r.a.createElement("div",{className:"root"},r.a.createElement(be.a,{position:"fixed",color:"primary",className:t.appBar},r.a.createElement(we.a,null,r.a.createElement(re.a,{title:"Show Friend List"},r.a.createElement(ve.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(xe.a,{onClick:function(){return e.hideComponent("showHideChatList")}}))),r.a.createElement(S.a,{variant:"h6",className:t.title},r.a.createElement(re.a,{title:"Add Friend"},r.a.createElement(de.a,{size:"medium",color:"secondary","aria-label":"add",onClick:this.newChatBtnClicked},r.a.createElement(fe.a,null)))),r.a.createElement(O.a,{color:"inherit",onClick:this.signOut},"LogOut"))),r.a.createElement("div",{className:"viewListUser"},a&&r.a.createElement(ee,{history:this.props.history,userEmail:this.state.email,selectChatFn:this.selectChat,chats:this.state.chats,selectedChatIndex:this.state.selectedChat,newChatBtnFn:this.newChatBtnClicked})),r.a.createElement("div",{className:"viewBoard"},this.state.showHideChatList||this.state.newChatFormVisible?null:r.a.createElement(ie,{user:this.state.email,chat:this.state.chats[this.state.selectedChat]}),null===this.state.selectedChat||this.state.newChatFormVisible?null:r.a.createElement(pe,{userClickedInputFn:this.messageRead,submitMessageFn:this.submitMessage}),this.state.newChatFormVisible&&!this.state.showHideChatList?r.a.createElement(K,{goToChatFn:this.goToChat,newChatSubmitFn:this.newChatSubmit}):null)):r.a.createElement("div",{className:"viewLoading"},r.a.createElement(ne.a,{type:"bars",color:"#0390fc",height:"15%",width:"15%"}))}}]),a}(r.a.Component),ke=Object(W.a)(he)(ye),Se=a(47);a(178),Se.initializeApp({apiKey:"AIzaSyDS-knD91grk11ncjxKIDIJ8kg5f3WMQKo",authDomain:"chatapp-41400.firebaseapp.com",databaseURL:"https://chatapp-41400.firebaseio.com",projectId:"chatapp-41400",storageBucket:"chatapp-41400.appspot.com",messagingSenderId:"83377735851",appId:"1:83377735851:web:d4c4535f522b1b1be78fee",measurementId:"G-HQYVDFKZ9G"});var Oe=r.a.createElement(o.a,null,r.a.createElement("div",{id:"routing-container"},r.a.createElement(c.a,{path:"/chatmobile",component:I}),r.a.createElement(c.a,{path:"/login",component:I}),r.a.createElement(c.a,{path:"/signup",component:H}),r.a.createElement(c.a,{path:"/dashboard",component:ke})));i.a.render(Oe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[130,1,2]]]);
//# sourceMappingURL=main.8454d89a.chunk.js.map