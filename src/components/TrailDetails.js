import React, { Component, useEffect } from 'react';
import {useParams} from "react-router-dom";
import { useState } from 'react';

const url = 'https://take-a-hike-ct.herokuapp.com/api/trail';

function TrailDetails() {
    const [trail, setTrail] = useState();
    //useState allows you to have state variables in functional components
    const trailId = useParams().id
    //returns on object of key/value pairs of url parameters
    useEffect(() => {
    //tells react that your component needs to do something after render
        fetch(url + trailId)
            .then((res) => res.json())
            .then((res) =>{
                setTrail(res)
                console.log(res)
            })
            .catch((error =>{
                console.log(error)
            })
        )
    }, [])

    
    return(
        <div className='trail-detais'>
            <div className='name'>  <b>Name: </b> </div>
            <div className='location'> <b>Location: </b> </div>
            <div className='image'> <b>Image: </b> </div>
            <div className='difficulty'> <b>Difficulty: </b> </div>
            <div className='miles'> <b>Miles: </b> </div>
            <div className='terrain'> <b>Terrain: </b> </div>
            <div className='duration'> <b>Duration: </b> </div>
            <div className='overview'> <b>Overview:</b> </div>
            <div className='website'> <b>Website: </b> </div>
            <div className='review'> <b>Review: </b> </div>
        </div>
    )


    // "name": "Mt. Frissell Trail",
    // "location": "Salisbury,CT",
    // "image": "../assets/mount-frissell.jpeg",
    // "difficulty": "Difficult",
    // "miles": 2.7,
    // "terrain":"rugged path",
    // "duration": "2h:24min",
    // "overview": "This trail travels to the highest point in Connecticut via an ascent of Mount Frissell. The high point in Connecticut is not actually the peak of Mount Frissell, but further down the trail. A guest book can be found at the peak and the Connecticut High Point.",
    // "website":"https://www.alltrails.com/trail/us/massachusetts/mount-frissell-and-brace-mountain-loop-trail",
    // "review":"Mount Frissell"

}
export default TrailDetails;