import React, { useState } from 'react'
import data from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import './App.scss';

function Reviews() {
	const [index, setIndex] = useState(0);
	const {image, name, job, text} = data[index];
	const next = () => {
		if(index === data.length-1){
			setIndex(0)
		}
		 else {
		 	setIndex(index+1)
		 }
	}
	const prev = () => {
		if(index == 0){
			setIndex(data.length -1)
		}
		 else {
		 	setIndex(index-1)
		 }
	}
	return (
		<div className="review-card">
		<FaQuoteRight className='quote'/>
		  <img className="image" src={image} alt="user picture"/>
		  <br/><br/>
		  <h4 className="name">{name}</h4>
		  <small className="job">{job}</small>
		  <br/>
		  <br/>
		  
		  <small className="text">{text}</small>	
		  <div className="button-holder">
		  <br/>
		<buton className="prev" onClick={prev}><FaChevronLeft/></buton>
		<buton className="next" onClick={next}><FaChevronRight/></buton>
		</div>
		</div>
	)
}
export default Reviews;