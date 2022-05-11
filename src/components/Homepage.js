import React from "react";
import TrailCard from "./TrailCard";



const Homepage = (props) => {
  console.log(props.data)
    return(
        
        <div>
            {
                props.data.map(trails => {
                    return(
                        <TrailCard trails={trails}/>
                    )})

            }
        </div>
    )
  
}
export default Homepage;