import React, { useState } from 'react';

import {  Link,Redirect } from 'react-router-dom'
import {  signup ,isAuthenticated, authenticate } from "../auth";
import './signup.css';
import Navbar from "../Navbar"
const SignUp = () => {

    const [values,setValues] =useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success:false
    })

const {name,password,email,error,success}=values;

const handleChange =name=>event=>{
    setValues({...values,error:false,[name]:event.target.value})
}

const onSubmit =event=>{
    event.preventDefault()
    setValues({...values,error:false})
    signup({name,email,password})
    .then(data=>{
        if(data.error){
            setValues({...values ,error:data.error,success:false})
        }
        else{
            setValues({...values,error:"",name:"",passowrd:"",success:true})

        }
    })
    .catch(console.log("error in sign up"))
}

const successMessage = () => {
    return (
        <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <div
              className="alert alert-success"
              style={{ display: success ? "" : "none" }}
            >
              New account was created successfully. Please{" "}
              <Link to="/">Login Here</Link>
            </div>
          </div>
        </div>
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

    const SignUpForm = () => {
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
                  Signup
                </div>
                <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                        <form>
                            <div class="form-group">
                                <label class="form-control-label">Name</label>
                                <input 
                            className='form-control' onChange={handleChange("name")} 
                            type="text" value={name}></input>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">Email</label>
                                <input 
                            className='form-control' onChange={handleChange("email")} 
                            type="text" value={email}></input>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">PASSWORD</label>
                                <input 
                            className='form-control'onChange={handleChange("password")} 
                            type="password" value={password}></input>
                            </div>

                            <div class="col-lg-12 loginbttm">
                                <div class="col-lg-6 login-btm login-text">
                                   
                                </div>
                                <div class="col-lg-6 login-btm login-button">
                                    <button type="submit" class="btn btn-outline-primary" onClick={onSubmit} >Signup</button>
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
        <div class="black">
          <Navbar/>
          {successMessage()}
        {errorMessage()} 
        {SignUpForm()}
        
        
       
        
        </div>

    )
}

export default SignUp;