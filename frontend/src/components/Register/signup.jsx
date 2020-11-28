import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { app } from "../../firebase";
import { withRouter } from 'react-router';
import Apps from "../../Apps";

import firebase from "firebase"
import "firebase/auth";
import Navbar from "../Navbar/navbar";
import axios from 'axios';
import { useHistory } from "react-router-dom";
// import createBrowserHistory from 'history lib createBrowserHistor';

// import history from '../../history';
// import history from './history';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.authEmailPassword = this.authEmailPassword.bind(this);
        // this.userName= this.userNameInput(this);
        this.state = {
            redirect: false,
            // email: "",
            // id: 6
        }
        // const history = createBrowserHistory();

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    // tracks changes on input value to username, paramter passed in is event from username input
      handleChange = event => {
        //   anything added in the name input of form is added to state
        this.setState({ name: event.target.value });
        // this.setState({ email: event.target.value });
        // this.setState({id: firebase.auth().currentUser});
      }

    authEmailPassword(event) {
        // Stops broswer from relo
        const { history } = this.props;
        event.preventDefault();
        console.log("authed with email");
        // const history = useHistory();
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        const name= this.usernameInput.value;
        // this.props.onSelectLanguage(name);   
    
        console.log(email);
       
        // this will check if anyone has the email 
        app.auth().fetchSignInMethodsForEmail(email)
            .then((providers) => {
                // determines if person doesn't have an account
                if (providers.length === 0) {
                    // create user
                    app.auth().createUserWithEmailAndPassword(email, password);
                    // this.props.history.push('/');
                    history.push('/');
                    // return (<Redirect to="/" />);
             
            
                    // console.log('uid',data.user.uid)
                    // console.log('userid: '+ user.uid);
                    // let firebaseId= user.uid;
                    // firebase.auth().createUserWithEmailAndPassword(email, password)
                    // .then(function(user){
                    // });
                    // stackoverflow stuff and axios call , we will then have user id and name and email
                    // axios({
                    //     method:'post',
                    //     url:'/api/createUser',
                    //     // data to be passed to backend
                    //     data: {
                    //         // firbaseId: firbaseId
                    //     }
                    // }).then(function (response) {
                    //     //   console.log("response:" + response);
                    //     //   console.log("response.data:" + response.data);
                    //     })
                    //     .catch(function (error) {
                    //       console.log(error);
                    //     });  

                        // define varible for username, dont use state for username 
                        // remove state
                        // crate vairble form username and get it from from
                        // delte user object on 40 
                        // move finishaxios isnt needed
                        // apps line 34 add get axios request 

                    // var user = app.auth().currentUser;
                    app.auth().onAuthStateChanged(function(user) {
                        if (user) {
                            console.log("user: ",user)
                            var user = app.auth().currentUser;
                            console.log("user.uid:"+ user.uid);
                            const firebaseId = user.uid; 
                            console.log("id: " + firebaseId);
                            // const userInfo = {
                            //     name: name,
                            //     email: email,
                            //     firebaseId: firebaseId
                            // };
                            axios({
                                method:'post',
                                url:'/api/createUser',
                                // data to be passed to backend
                                data: {
                                    // userInfo: userInfo
                                    name, email, firebaseId
                                }
                            })
                            .catch(function (error) {
                                console.log(error);
                            });  
                            // sending username of currently signed in user from form to props
                            // name= this.usernameInput.value
                        }
                    });   

                    // return (<Redirect to="/" />);
                    // return (<Redirect to="/" />);
                }
                else if (providers.indexOf("password") === -1) {
                    // they used google 
                    this.loginForm.reset();
                    alert("Email already In use");
                } else {
                    alert("failed to create user, try again later");
                    console.log("failed to create user");
                }
            })
            .then((user) => {
                if (user && user.email) {
                    // console.log("here?")
                    // var user = firebase.auth().currentUser;
                    // console.log("user: "+ user);
                    this.loginForm.reset();
                    this.setState({ redirect: true });
                }
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            })
    }
    // handleLangChange = () => {
                
    // }
    // finsihAxios(){
        // var user = app.auth().currentUser;
        // app.auth().onAuthStateChanged(function(user) {
        //     if (user) {
        //         var user = app.auth().currentUser;
        //         console.log("user.uid:"+ user.uid);
        //         const firebaseId = user.uid; 
        //         console.log("id: " + firebaseId);
        //         axios({
        //             method:'post',
        //             url:'/api/createUser',
        //             // data to be passed to backend
        //             data: {
        //                 user: user,
        //                 firebaseId: firebaseId
        //             }
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //           });  
        //     }
        // });       
        // console.log("user: "+ user);
        // if (user != null) {
        //     console.log("user.uid:"+ user.uid);
        //     let firebaseId = user.uid; 
        // }
    // }

    // onClick={this.finsihAxios}

    render() {
        if (this.state.redirect) {
            return (<Redirect to='/' />);
        }
        return (
            <React.Fragment>
                <div className="loginPage">
                    <h1>SignUp</h1>
                    <form onSubmit={(event) => { this.authEmailPassword(event) }} ref={(form) => { this.loginForm = form }}>
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername">Username</label>
                            {/* <input type="text" name="userName" value={this.props.value} onChange={this.handleChange} />    */}
                            <input type="text" name="username" ref={(input) => { this.usernameInput = input }}/> 
                            {/* <input type="text" name="name" placeholder="Username" ref={(input) => { this.userNameInput = input }}  value={this.state.userName} onChange={this.handleUserName} userName={this.state.userName} onChange={this.handleChange} /> */}
                            {/* <input type="name" name="name" className="form-control" id="exampleInputUsername" placeholder="Username" ref={(input) => { this.userNameInput = input }} ></input> */}
                            {/* <input type="name" name="name" className="form-control" id="exampleInputUsername" placeholder="Username" ref={(input) => { this.sendData() = input }}></input> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref={(input) => { this.emailInput = input }} onChange={this.handleChange}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" name="pass" className="form-control" id="exampleInputPassword1" placeholder="Password" ref={(input) => { this.passwordInput = input }} ></input>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary" >Create User</button>

                        </div>
                    </form>
                </div>   
                <div>
                </div>
            </React.Fragment>
            );
    }
}
export default withRouter(SignUp);

