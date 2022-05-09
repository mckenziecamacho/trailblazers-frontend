import React from 'react';
import { Link } from 'react-router-dom';


const Header = () =>{
    return(
        <div className='header'>
            
            <header>
                <div>
                    <h1>Take a Hike Connecticut</h1>
                </div>

            <nav className='navbar'>

                <div className='home'>
                    <Link to="/"><h4>Home</h4></Link>
                </div>

                <div className='search-box'>
                    <Link to='/search'><h1>Search</h1></Link>
                </div>
                
                <div className='about'> 
                    <Link to='/About'><h1>About</h1></Link>
                </div>
            </nav>
            
            </header>
        </div>

    )
}
export default Header;