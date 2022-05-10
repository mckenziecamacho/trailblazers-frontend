import React from 'react'
import { Link } from 'react-router-dom';
import Trail from '../../trailblazers-backend/models/Trail';

function TrailCard ({trail}){
    return(
        <div className='trail-images'>
            <Link to={"/trail-details/" +trail.id}/>
        </div>
    )
}
export default TrailCard;