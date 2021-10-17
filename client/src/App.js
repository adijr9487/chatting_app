import React, { useEffect, useState } from "react";
import {Link, BrowserRouter, Router} from "react-router-dom"
import firebase from "./Firebase"

//components
import Main from "./components/Main/Main"
import Conversation from './components/Conversations/Conversation';
import Chats from './components/Conversations/Chats/Chats'
import Setting from './components/Setttings/Setting'
import Aux from "./components/Utility/Auxiliary"

import LoginSignUp from "./components/pages/LoginSignUp";



//classes
import classes from "./App.css"

function App(props) {

  const [user, setUser] = useState(null)
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const clearError = () => {
    setEmailError("")
    setPasswordError("")
  }

  const loginHandler = (loginData) => {
    setIsLoading(true)
      firebase.auth().signInWithEmailAndPassword(loginData.email, loginData.password)
      .then((user)=>{
        setUser(user.user.uid)
        // console.log(user.user.uid)
        setIsLoading(false)
      })
      .catch(error=>{
        switch(error.code){
          case "auth/invalid-emial":
          case "auth/user-disabled":
          case "auth/user-not-found":
            //show error message to email
            setIsLoading(false)
            setEmailError(error.message )
            // console.log(error.message)
            break;
          case "auth/wrong-password":
            //show error message to password
            setIsLoading(false)
            setPasswordError(error.message)
            // console.log(error.message)
            break;
        }
      })
  }
  
  const signUpHandler = (signUpData) => {
    setIsLoading(true)
      firebase.auth().createUserWithEmailAndPassword(signUpData.email, signUpData.confirmPassword)
      .then((user)=>{
        firebase.database().ref(`Profiles/${user.user.uid}`).set({
          uid: user.user.uid,
          name: signUpData.name,
          email: signUpData.email,
          imageurl: signUpData.imageurl || "",
        })

        setUser(user.user.uid)
        // console.log(user.user.uid)
        setIsLoading(false)
      })
      .catch(error=>{
        switch(error.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            //show error message to email
            setIsLoading(false)
            setEmailError(error.message)
            // console.log(error.message)
            break;
          case "auth/weak-password":
            //show error message to password
            setIsLoading(false)
            setPasswordError(error.message)
            // console.log(error.message)
            break;
        }
      })
  }

  const logoutHandler = () => {
    firebase.auth().signOut()
  }

  const authListener = () => {
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        setUser(user.uid)
        // console.log(user.uid)
      }else{
        setUser(null)
      }
    })
  }

  useEffect(()=>{
      authListener();
  }, [])

  return (
    <Aux>
      {isLoading ? <div className={classes.loading}><div className={classes.loader}></div></div> : null}
      {user ? <Main uid={user} logoutHandler={logoutHandler}/> : <LoginSignUp clearError={clearError} emailError={emailError} passwordError={passwordError} loginHandler={loginHandler} signUpHandler={signUpHandler}/>}
    </Aux>
  );  
}

export default App;
