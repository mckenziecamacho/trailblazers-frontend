import React from 'react'
import { Link } from 'react-router-dom';


function TrailCard ({trail}){
    return(
        <div className='trail-images'>
            <Link to={"/trail-details/" + trail._id}>
            Name: {trail.name}
            
            </Link>
        </div>
    )
}

function TrailCard2(props) {
     
    return(

        <div className="TrailCardBox">
            <Link to={"/TrailCard"}></Link>
           {props.trail.map(trail => {
               return(
                   <div className = "TrailCard">
                       <div className="name">{trail.name}</div>
                       <div className="location">{trail.location}</div>
                       <div className="difficulty">{trail.difficulty}</div>
                       <div className="miles">{trail.miles}</div>
                       <div className="terrain">{trail.terrain}</div>
                       <div className="duration">{trail.duration}</div>
                       <div className="overview">{trail.overview}</div>
                       <div className="website">{trail.website}</div>
                   </div>    
               )
           
           })}
           
       </div>

    )

}




export default TrailCard;
