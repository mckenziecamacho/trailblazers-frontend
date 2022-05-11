import React from 'react'
import { Link } from 'react-router-dom';

function TrailCard ({trails}){
    console.log(trails)
    return(
        <div className='trail-images'>
            <Link to={"/trail-details/" + trails._id}>
            {/* {trail.name} */}
            <img src={trails.image} height={300}/>
            </Link>
        </div>
        
    )
}
export default TrailCard;