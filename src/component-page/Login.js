import React, { useState } from 'react'
import '../component-page/Login.css'

import { createUserWithEmailAndPassword} from 'firebase/auth';
// import { auth } from '../firebase';
import {signInWuthGoogle, auth} from '../firebase1' 

const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const register=async(e)=>{
        e.preventDefault();
        try{

            console.log(auth, email, password);
            const user=createUserWithEmailAndPassword(auth,email,password)
            console.log(user)
        }catch(error){
            alert(error.message)
        }
    }
    return (
        <>
            <div>
                <header className="header">
                    {/* <img className="imgzipy" src={imgavi} alt="zipyicon" /> */}
                    <div className="new">
                        <p> New here?</p>
                    </div>
                    <div className="buttonsign">
                        <button>
                        <b>Sign up</b>
                        </button>
                    </div>
                </header>
            </div>
            <from className="form">
                <div className="welcome">
                    <h3>Welcome back ! We missed you.</h3>
                </div>
                <button
                    className="button"
                    type="submit"
                    placeholder="Sign in with Google"
                    onClick={signInWuthGoogle}
                >
                    {/* <img className="images" src={img} alt="img" />{" "} */}
                    <b> Sign in with Google</b>
                </button>
                <div className="or">
                    <hr className="hrtag" />
                    <div
                        className="google"
                        type="submit"
                        placeholder="or sign in with email"
                    >
                        {" "}
                        <b>or, sign in with email</b>{" "}
                    </div>
                    <hr className="hrtag" />
                </div>
                <div>
                    <input
                        className="email"
                        type="text"
                        id="email"
                        placeholder="  Email id"
                        autoComplete="off"
                        required
                        value={email} onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <div>
                        <input
                            className={"email"}
                            type="text"
                            name="password"
                            placeholder=" Password"
                            id="password"
                            autoComplete="off"
                            value={password} onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </div>
                    <button
                        className="button"
                        type="submit"
                        placeholder="Sign in with Email"
                        onClick={register}
                    >
                        <b>Sign in with Email</b>
                    </button>
                </div>
                <div className="googleotp">
                    {" "}
                    Forgot Password ?<span> Sign in with OTP</span>
                </div>
            </from>
           
        </>
    )
}

export default Login