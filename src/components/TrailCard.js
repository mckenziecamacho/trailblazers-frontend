import React from 'react'
import { Link } from 'react-router-dom';


function TrailCard ({trail}){
    return(
        <div className='trail-images'>
            <Link to={"/trail-details/" +trail.id}>{trail.image}</Link>
        </div>
    )
}
export default TrailCard;