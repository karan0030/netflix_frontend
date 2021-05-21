import React, { useState, useEffect } from 'react';
import {addToList,getAllLikes} from "./auth/likes";
import {isAuthenticated} from"./auth"

import axios from './axios';

import './Row.css';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const Row = ({ title, fetchUrl, isLarge }) => {
	const [movies, setMovies] = useState([]);
	const [active,setActive] =useState(false);
	const [userid, setUserId] = useState();
	const [usertoken, setUserToken] = useState();
	const [userlike,setUserLike]=useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		};
		fetchData();
		setActive(isAuthenticated());
		const {user,token}= isAuthenticated();
		setUserId(user);
		setUserToken(token);
		
		
	}, [fetchUrl]);

	const add=(key)=>{
	   
		
		
		console.log(userid);
		console.log(usertoken);
		
		
		getAllLikes(userid._id,usertoken).then(data=>{
			  if(data.error){
				console.log(data.error)
			  }
			  else{
				setUserLike(data)  
				console.log("prev")
				console.log(userlike)
				
			  }
			})
		  var li =userlike;
		  console.log(li)
		if(!li.includes(key)){
			console.log("adding")
			addToList(userid._id,usertoken,key);

		}
		else{
			console.log("no");
		} 

		
	}


	return (
		<div className='row'>
			<h2>{title}</h2>
             
			<div className='row__posters'>
				{movies.map((movie) => (
					
				    <div className="board">
					 
					<img
						key={movie.id+1}
						className={`row__poster ${isLarge ? 'large' : ''}`}
						src={`${BASE_URL}${
							isLarge ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
					

					 <div  class="middle" >
                        <button key={movie.id}disabled={!active?"true":""} onClick={()=>{add(movie.backdrop_path)}} class="text">Add</button>
                    </div>  
					 </div>
                     
					
				))}
			
			</div>
			

			{/* container>poster */}
		</div>
	);
};

export default Row;