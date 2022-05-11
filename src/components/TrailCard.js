import React from 'react'
import { Link } from 'react-router-dom';

function TrailCard ({trails}){
    console.log(trails)
    return(
        <div className='trails-images'>
            <Link to={"/trail-details/" + trails._id}>
            <img src={trails.image} height={300}/>
            {trails.name}
            {trails.image}
            </Link>
        </div>
        
    )
}
export default TrailCard;