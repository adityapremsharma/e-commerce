import React, {useState} from 'react';
import Navbar from "../Navbar"
// import {Link} from "react-router-dom"

const Login = () => {
    return (
        <section className="auth">
        <div className="auth__bg-img">
            <div className="auth__nav">
                <h3 className="logo">CultMusic</h3>
                <button className="btn-secondary">Sign Up</button>
            </div>
            <div class="row auth__form-row">
                <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">

                        <form className="auth__form" action="" onSubmit="">
                            <input type="email" className="form-input" name="" alt="" placeholder="Enter your e-mail" />
                            <input type="password" className="form-input" name="" alt="" placeholder="Enter your password" />
                            <input type="password" className="form-input" name="" alt="" placeholder="Re-enter your password" />
                            <div className="auth__submit">
                            <label className="">
                            Keep me logged in
                            <label class="switch mar-l-sm">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                                </label>
                                </label>
                            <input type="submit" className="btn-secondary" name="" alt="" value="Log In" />
                            
                            </div>
                            <a href="#" className="auth__forgot-password">Forget your password? CLICK HERE</a>
                            
                        </form>
                  
                </div>
                <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div className="auth__alt-login">
                        <a href="#"><div className="alt-login-btn">
                            <img alt="google-logo" src="https://cdn.icon-icons.com/icons2/2119/PNG/512/google_icon_131222.png" />
                            Sign in with Google
                        </div>
                        </a>
                        <a href="#">
                        <div className="alt-login-btn">
                            <img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" />
                            Sign in with Facebook
                        </div>
                        </a>
                    </div>
                </div>
            </div>
            <footer>Copyright {new Date().getFullYear()} @CultMusic</footer>
            </div>
        </section>
    )
}

export default Login