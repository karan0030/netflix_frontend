import React, { useState ,useEffect} from 'react';

import {  Link,Redirect,NavLink  } from 'react-router-dom'
import {  signin ,isAuthenticated, authenticate } from "../auth";
import {getAllLikes} from "../auth/likes"
import Navbar from '../Navbar';
import "./wishlist.css"
const BASE_URL = 'https://image.tmdb.org/t/p/original';
const Wishlist =()=>{
    const [like,setLike]=useState([]);
    const [error,setError]=useState("");
    const {user,token} =isAuthenticated();
    const LoadAllLikes=(user,token)=>{
        getAllLikes(user._id,token).then(data=>{
          if(data.error){
            setError(data.error)
          }
          else{
            setLike(data)
          }
        })
      }
      
      useEffect(() => {
         LoadAllLikes(user,token);
      }, [])

    const Header= () => {
        return (
            
            <div className="contain">
            <h1 className="text-center-"><strong>MY LIST</strong></h1>
            </div>
            
          );
        };
    const Hero =()=>{
      var set1 = new Set();
        return(

            <div className="d-flex flex-wrap mcard">
             
                 {like.map((like,index)=>{
                    if(!set1.has(like)){
                      set1.add(like);
                        return (
                         
                            
                            <div key={index} className="col-3 bm-4 mt-4">
                            <img className="card-img-top"
                            src={`${BASE_URL}${like}`}
                            style={{border:"2px", borderColor:"red"}}/>
                        </div>
                        )
                          }
                       
                        
                    })
                    }
               

                
            </div>
        )
    } 



    return (
        <div>
            <Navbar/>
            {Header()}
            {Hero()}
            
        </div>
    )
}


export default Wishlist;