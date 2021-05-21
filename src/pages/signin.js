import React, { useState } from 'react';

import {  Link,Redirect,NavLink  } from 'react-router-dom'
import {  signin ,isAuthenticated, authenticate } from "../auth";



import './signin.css';
import Navbar from "../Navbar"
const SignIn = () => {

    const [values,setValues] =useState({
        
        email:"",
        password:"",
        error:"",
        didRedirect:false,
        loading:false

    })

const {password,email,error,didRedirect,loading}=values;
const {user}  = isAuthenticated()

const handleChange =name=>event=>{
    setValues({...values,error:false,[name]:event.target.value})
}

const onSubmit =event=>{
    event.preventDefault()
    setValues({...values,error:false,loading:true})
    signin({email,password})
    .then(data=>{
        if(data.error){
            setValues({...values ,error:data.error,loading:false})
        }
        else{

            authenticate(data,()=>{
                setValues({...values,didRedirect:true})
            })
           

        }
    })
    .catch(console.log("error in sign in "))
}
const redirect =()=>{
    if(didRedirect){
        if(user && user.role===1){
            return <Redirect to="/"/>
        }
        return <Redirect to="/"/>

    }
    if( isAuthenticated())
    {
        return   <Redirect to="/"/>

    }
}




const loadingMessage = () => {
    return (
        loading && (
            <div className="loading-message">
            <h2>Loading......</h2>
            </div>
        )
      );
    };
  
    const errorMessage = () => {
      return (
        <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <div
              className="alert alert-danger"
              style={{ display: error ? "" : "none" }}
            >
              {error}
            </div>
          </div>
        </div>
      );
    };

    const SignInForm = () => {
        return (
            
     <div class="sin">           
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-key">
                    <i class="fa fa-key" aria-hidden="true"></i>
                </div>
                <div class="col-lg-12 login-title">
                  Login
                </div>
                <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                        <form>
                            <div class="form-group">
                                <label class="form-control-label">Email</label>
                                <input value={email}className='form-control' 
                            onChange={handleChange("email")} type="text" required></input>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">PASSWORD</label>
                                <input
                            onChange={handleChange("password")}  value={password}
                             className='form-control' type="password" required></input>
                            </div>

                            <div class="col-lg-12 loginbttm">
                                <div class="col-lg-6 login-btm login-text">
                                   
                                </div>
                                <div class="col-lg-6 login-btm login-button">
                                    <button type="submit" class="btn btn-outline-primary" onClick={onSubmit} >LOGIN</button>
                               
                                    <button type="submit" class="btn btn-outline-primary"  ><NavLink to="/signup"> Signup </NavLink></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-3 col-md-2"></div>
            </div>
        </div>
    </div>
    </div>
    
        )
    }
    return (
        <div class="sin">
          <Navbar/>
        
        {SignInForm()}
        {loadingMessage()}
         {errorMessage()}
        {redirect()}
       
        
        </div>

    )
}

export default SignIn;