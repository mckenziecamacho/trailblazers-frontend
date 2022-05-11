import React, { useEffect } from 'react';
import {useParams} from "react-router-dom";
import { useState } from 'react';

const url = 'https://take-a-hike-ct.herokuapp.com/api/trail';

function TrailDetails(props) {
    const [trail, setTrail] = useState([]);
    //useState allows you to have state variables in functional components
    const trailId = useParams()._id
    const trails = props.data.filter(trails => trails._id === trailId)[0]
    //returns on object of key/value pairs of url parameters
    useEffect(() => {
    //tells react that your component needs to do something after render
        fetch(url + trailId)
            .then((res) => res.json())
            .then((res) => {
                setTrail(res)
                console.log(res)
            })
            .catch((error => {
            console.log(error)
            })
        )
    },[])

    
    return(
        <div className='trail-details'>
            <div className='name'>  <b>Name: </b>{trail? trail.name : ""}</div>
            <div className='location'> <b>Location: </b>{trail? trail.location : ""} </div>
            <div className='image'> <b>Image: </b>{trail? trail.image : ""} </div>
            <div className='difficulty'> <b>Difficulty: </b>{trail? trail.difficulty : ""} </div>
            <div className='miles'> <b>Miles: </b> {trail? trail.miles : ""}</div>
            <div className='terrain'> <b>Terrain: </b> {trail? trail.terrain : ""}</div>
            <div className='duration'> <b>Duration: </b> {trail? trail.duration : ""}</div>
            <div className='overview'> <b>Overview:</b> {trail? trail.overview : ""}</div>
            <div className='website'> <b>Website: </b> {trail? trail.website : ""}</div>
            <div className='review'> <b>Review: </b> {trail? trail.review : ""}</div>
        </div>
    )
}
export default TrailDetails;