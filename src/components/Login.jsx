import React, {useState} from 'react';
import Navigation from "./Navigation"
import '../css/login.scss'
import {Link} from "react-router-dom"

const Login = () => {

    const [login, setLogin] = useState(true)

    const toggleLogin = () => {
        setLogin(!login)
    }
    return (
        <div className="login">
        <div className="bg">
        <header >
            <Navigation onClick={toggleLogin} button={login ? "Sign Up" : "Sign In"}/>
            </header>
            <div className="login-container">
            
                <form className="login-form" onSubmit="/">
                    <input type="email" placeholder={login  ? "Please enter your Username..." : "Username"}/>
                    <input type="password" placeholder={login ? "Password" : "Password (10 - 20 characters long)"}/>
                    {!login && <input type="password" placeholder="Confirm Password"/>}
                    <label className="switch-label">Keep me logged in
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label></label>
                    <input className="solid-button" type="submit" value={login ? "Sign In" : "Sign Up"} />
                </form>
                <div className="alt-login-container">
                    <div className="social-btn">
                        <div className="social-icon-wrapper">
                            <img className="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                        </div>
                        <p className="btn-text"><b>Sign in with Google</b></p>
                    </div>
                    <div className="social-btn">
                        <div className="social-icon-wrapper">
                            <img className="social-icon" src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"/>
                        </div>
                        <p className="btn-text"><b>Sign in with Facebook</b></p>
                    </div>
                    <div className="social-btn">
                        <div className="social-icon-wrapper">
                            <img className="social-icon" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
                        </div>
                        <p className="btn-text"><b>Sign in with GitHub</b></p>
                    </div>
                </div>
            </div>
            <footer>Copyright {new Date().getFullYear()} @CultMusic</footer>
        </div>
        </div>
    )
}

export default Login