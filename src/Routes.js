import React from 'react';
import  { BrowserRouter,Route,Switch } from 'react-router-dom';

import Home from "./Home"
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Wishlist from"./pages/wishlist";

import PrivateRoute from "./auth/PrivateRoutes"








const Routes=()=>{
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Home}/>
    {/* <Route path="/signup" exact component={SignUp}/> */}
    <Route path="/signin" exact component={SignIn}/>
    <Route path="/signup" exact component={SignUp}/>
 
    
    <PrivateRoute path="/user/wishlist" exact component={Wishlist}/>  
    </Switch> 
    
    </BrowserRouter>
  )
}

export default Routes;

