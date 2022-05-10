import React, {useState} from "react";
import TrailCard from "./TrailCard";

function SearchBox(props) {
const [searchTerm, setSearchTerm] = useState('');
    return(
        <div className="search">
            <div className="input-box">
                <input type="text" placeholder="Search here..." onChange={event => {setSearchTerm(event.target.value)}}/>
            </div>
            {props.data.filter((val) => {
                if (searchTerm == ''){
                    return val
                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((val, key) =>{
                console.log(val)
                return(
                    <TrailCard film={val}/>
                )
            })}
        </div>
    )
}
export default SearchBox;