import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../../axios'
import {apiKey,imageURL} from '../../constants/constants'
import { Button, Modal } from 'react-bootstrap'


function Row(props) {

   const [row,setRow]=useState([])
   
   useEffect(()=>{
   axios.get(props.url).then((response)=>{
    console.log(response.data);
    setRow(response.data.results)

   }).catch(err=>{
    alert('network error')
   })
   },[])

   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  return (
    <div className='row'>
        <h2 >{props.title}</h2>
        <div className="posters">
            
            {row.map((obj)=>
            <>
            <img className={props.isSmall? 'smallPoster':'poster'}  src={`${imageURL+obj.backdrop_path}`} alt="" />
            </>
        )}


        </div>
    </div>
  )
}

export default Row