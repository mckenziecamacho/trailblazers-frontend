import React, {useState} from "react";

function SearchBox() {
const [searchTerm, setSearchTerm] = useState('');
    return(
        <div className="search">
            <div className="input-box">
                <input type="text" placeholder="Search here..." onChange={event => {setSearchTerm(event.target.value)}}/>
            </div>
        </div>
    )
}
export default SearchBox;