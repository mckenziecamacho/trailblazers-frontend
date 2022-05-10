import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <div className='header'>
            
            <header>
        
            <nav className='navbar'>
                <div className='home'>
                <Link to="/home"><h4>Home</h4></Link>
                    </div>

                 <div className='about'> 
                    <Link to='/about'><h4>About</h4></Link>
                 </div>
             </nav>
             <div className='title'>
                <h1>Take a Hike Connecticut</h1>
            </div>
            </header>
        </div>

    )
}
export default Header;