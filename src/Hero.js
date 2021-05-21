import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import {Link}from 'react-router-dom';

import './Hero.css';
import { Redirect } from 'react-router';

const Hero = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
		};
		fetchData();
	}, []);
	const redirect =()=>{
		return <Redirect to="/user/wishlist"/>
	}

	const truncate=(str, n)=> {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str;
	}

	return (
		<div>
			<header
				className='hero'
				style={{
					background: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}") `,
				}}
			>
				<div className='hero__contents'>
					<h1 className='hero__title'>
						{movie?.title || movie?.name || movie?.original_name}
					</h1>
					<div className='hero__buttons'>
						<button className='hero__button'>Play</button>
						<Link to="/user/wishlist">
                          
                        <button className="hero__button" >My List </button></Link>
						
					</div>
					<h3 className='hero__description'>
						{truncate(movie?.overview, 250)}{' '}
					</h3>
				</div>
				<div className='hero__fadeBottom'></div>
			</header>
		</div>
	);
};

export default Hero;
