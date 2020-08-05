import React from 'react';
import { Link } from 'react-router-dom';

 const Header = () => {
    return (
        <header>
            <nav className='nav'>
                <li>
                    <Link className='link' to='/announcements'>Show All Ann</Link>
                </li>
                <li>
                    <Link className='link' to='/new'>Add Announce</Link>
                </li>
            </nav>            
        </header>
    )
}
export default Header;