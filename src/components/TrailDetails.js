import React, { useEffect } from 'react';
import {useParams} from "react-router-dom";
import { useState } from 'react';

// const url = 'https://take-a-hike-ct.herokuapp.com/api/trail';

// function TrailDetails(props) {
//     const [trail, setTrail] = useState([]);
//     //useState allows you to have state variables in functional components
//     const trailId = useParams()._id
//     const trails = props.data.filter(trails => trails._id === trailId)[0]
//     //returns on object of key/value pairs of url parameters
//     useEffect(() => {
//     //tells react that your component needs to do something after render
//         fetch(url + trailId)
//             .then((res) => res.json())
//             .then((res) => {
//                 setTrail(res)
//                 console.log(res)
//             })
//             .catch((error => {
//             console.log(error)
//             })
//         )
//     },[])


  const TrailDetails=(props) => {
      const[trail,setTrails] =useState("");
      const trailId = useParams()._id
      const trails = props.data.filter(trails => trails._id === trailId)[0]
      useEffect(() => {
        const url = 'https://take-a-hike-ct.herokuapp.com/api/trail';

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setTrails(result.data)
                console.log(result);
                } catch (error) {
                console.log("error", error);
                }
        };

        fetchData();
      },[]);



    
    return(
        <div className='trail-details'>
            <div className='name'>  <b>Name: </b>{trails? trails.name : ""}</div>
            <div className='location'> <b>Location: </b>{trails? trails.location : ""} </div>
            <div className='image'> <b>Image: </b>{trails? trails.image : ""} </div>
            <div className='difficulty'> <b>Difficulty: </b>{trails? trails.difficulty : ""} </div>
            <div className='miles'> <b>Miles: </b> {trails? trails.miles : ""}</div>
            <div className='terrain'> <b>Terrain: </b> {trails? trails.terrain : ""}</div>
            <div className='duration'> <b>Duration: </b> {trails? trails.duration : ""}</div>
            <div className='overview'> <b>Overview:</b> {trails? trails.overview : ""}</div>
            <div className='website'> <b>Website: </b> {trails? trails.website : ""}</div>
            <div className='review'> <b>Review: </b> {trails? trails.review : ""}</div>
            <div className='review'> <b>Review: </b> {trails? trails._id: ""}</div>
        </div>
    )}














export default TrailDetails;