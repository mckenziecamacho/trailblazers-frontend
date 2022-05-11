import React from "react";
import TrailCard from "./TrailCard";



const Homepage = (props) => {
  console.log(props.data)
    return(
        
        <div>
            {
                props.data.map(trail => {
                    return(
                        <TrailCard trail={trail}/>
                    )})

            }
        </div>
    )
  
}
export default Homepage;