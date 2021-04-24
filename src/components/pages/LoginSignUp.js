import React, {useState, useEffect} from 'react'
//component

//classes
import classes from "./LoginSignUp.css"

const LoginSignUp = (props) => {

    const {
        loginHandler,
        signUpHandler,
        emailError,
        passwordError,
        clearError
    } = props

    const [emError, setEmError] = useState()
    const [pwError, setPwError] = useState()

    useEffect(()=>{
        setEmError(emailError)
        setPwError(passwordError)
    }, [passwordError, emailError])

    const [IsLogin, setIsLogin] = useState(true)
    const [login, setLogin] = useState({
        email: "",
        password: "",
    })
    const [signup, setSignup] = useState({
        name: "",
        username: "",
        email: "",
        contact: "",
        setPassword: "",
        confirmPassword: "",
    })

    const onChangeLoginFormHandler = (e) => {
        setLogin(prev=>({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    
    const onChangeSignupFormHandler = (e) => {
        setSignup(prev=>({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const formTogglerHandler = () => {
        setIsLogin(!IsLogin)
        clearError()
    }

    const loginSubmitHandler = (e) => {
        e.preventDefault()
        // console.log(login)
        loginHandler(login)
        clearError()
    }
    
    const signupSubmitHandler = (e) => {
        e.preventDefault()
        // console.log(signup)
        signUpHandler(signup)
        clearError()
        
    }

    return (
        <div className={classes.LoginSignUp}>
            <div className={classes.Header}>
                Chatting_app
            </div>
                <div className={classes.FormSection}>
                {IsLogin === true ? 
                //this section is for login 
                (<div className={classes.LoginContainer}>
                    <div className={classes.Head}>
                        <p className={classes.Text}>Login</p>
                    </div>
                    <form>
                        <div className={classes.field}>
                            <label>Email</label>
                            <input onChange={onChangeLoginFormHandler} value={login.email} type="email" name="email" placeholder="Email"/>
                            <p className={classes.errorMessage}>{emError}</p>
                        </div>
                        <div className={classes.field}>
                            <label>Password</label>
                            <input onChange={onChangeLoginFormHandler} value={login.password} type="password" name="password" placeholder="Password"/>
                            <p className={classes.errorMessage}>{pwError}</p>
                        </div>
                        <div className={classes.checkLink}>
                            Forget Password
                        </div>

                        <button className={classes.Button} onClick={loginSubmitHandler}>Login</button>
                    </form>
                    <p className={classes.toggle} onClick={formTogglerHandler}>Dont have account? Register Now</p>
                </div>) : 
                    //this section if for signup
                    (<div className={classes.LoginContainer}>
                        <div className={classes.Head}>
                            <p className={classes.Text}>SignUp</p>
                        </div>
                        <form>
                            <div className={classes.field}>
                                <label>Name</label>
                                <input onChange={onChangeSignupFormHandler} value={signup.name} type="name" name="name" placeholder="Name"/>
                            </div>
                            <div className={classes.field}>
                                <label>Username</label>
                                <input onChange={onChangeSignupFormHandler} value={signup.username} type="username" name="username" placeholder="Username"/>
                            </div>
                            <div className={classes.field}>
                                <label>Email</label>
                                <input onChange={onChangeSignupFormHandler} value={signup.email} type="email" name="email" placeholder="Email"/>
                                <p className={classes.errorMessage}>{emError}</p>
                            </div>
                            <div className={classes.field}>
                                <label>Contact</label>
                                <input onChange={onChangeSignupFormHandler} value={signup.contact} type="contact" name="contact" placeholder="Phone"/>
                            </div>
                            <div className={classes.field}>
                                <label>Set Password</label>
                                <input onChange={onChangeSignupFormHandler} value={signup.setPassword} type="password" name="setPassword" placeholder="Password"/>
                                <p className={classes.errorMessage}>{pwError}</p>
                            </div>
                            <div className={classes.field}>
                                <label>Confirm Password</label>
                                <input onChange={onChangeSignupFormHandler} value={signup.confirmPassword} type="password" name="confirmPassword" placeholder="Password"/>
                            </div>
                            <button onClick={signupSubmitHandler} className={classes.Button}>Sign Up</button>
                        </form>
                        <p className={classes.toggle} onClick={formTogglerHandler}>Already have an account!</p>
                    </div>)
                }
                </div>
        </div>
    )
}

export default LoginSignUp
