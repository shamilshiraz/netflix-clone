import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../axios'
import {apiKey,imageURL} from '../../constants/constants'

function Banner() {
    
    const [movie,setMovie]=useState()


    useEffect(()=>{
   axios.get(`/trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
    console.log(response.data.results[0]);
    setMovie(response.data.results[0])
   })
    },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${movie? imageURL+movie.backdrop_path : "" })`}}>
       <div className="content" >
        <h1 className='title'>{movie? movie.title:""}</h1>
        <div className="bannerbtns">
            <button className='button'><i class="fa-solid fa-play"></i>  Play</button>
            <button className='button'>Mylist</button>
        </div>
        <h1 className='description'>{movie? movie.overview :''}</h1>
       </div>
       <div className="fadebottom">

       </div>
    </div>
  )
}

export default Banner