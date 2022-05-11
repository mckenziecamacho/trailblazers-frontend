import React from 'react'
import { Link } from 'react-router-dom';


function TrailCard ({trails}){
    console.log(trails)
    return(
        <div className="trails-images">
           <Link to={"/trail-details/" + trails._id }><img src={trails.image} alt="NetlifySucks" height={300}/>{}</Link>
            {trails.name}
        </div>
    )
}



// function TrailCard2(props) {
     
//     return(

//         <div className="TrailCardBox">
//             <Link to={"/TrailCard"}></Link>
//            {props.trail.map(trail => {
//                return(
//                    <div className = "TrailCard">
//                        <div className="name">{trail.name}</div>
//                        <div className="location">{trail.location}</div>
//                        <div className="difficulty">{trail.difficulty}</div>
//                        <div className="miles">{trail.miles}</div>
//                        <div className="terrain">{trail.terrain}</div>
//                        <div className="duration">{trail.duration}</div>
//                        <div className="overview">{trail.overview}</div>
//                        <div className="website">{trail.website}</div>
//                    </div>    
//                )
           
//            })}
           
//        </div>

export default TrailCard;
