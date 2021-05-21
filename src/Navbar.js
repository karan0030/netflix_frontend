import React, { useState, useEffect,Fragment } from 'react';

import {Link,withRoute,useHistory}from 'react-router-dom';
import './Navbar.css';
import {signout,isAuthenticated} from './auth'
import out_logo from "./assest/logout-512.png"


const Navbar = () => {
	let history = useHistory();

	return (
		<nav className={ 'nav__black'}>
			<ul className='nav__list'>
				<li> 
					<Link to="/">
						<img
						src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
						alt='Netflix-Logo'
						className='nav__logo'
					    />
					</Link>	
				</li>
				{!isAuthenticated() && (
                  <Fragment>
					  <li>
						  <Link to="/signin">
							  <img
						        src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
						        alt='Netlix-User'
						        className='nav__user'
					          />
                            
                           </Link>
                        </li>
                       
                   </Fragment>
                )}
           
                {isAuthenticated()&&(
                  <li>
                   <span 
                     onClick={()=>{ 
						signout(()=> { 
							history.push('/')
						   })
					   }}
					>
                    
							  <img
						        src={out_logo}
						        alt='Netlix-User'
						        className='nav__user'
					          />
				  </span>
                  </li>
                 )}
				
				
			</ul> 
		</nav>
	);
};

export default Navbar;
