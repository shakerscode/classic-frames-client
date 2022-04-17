import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

import './Navbar.css'

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);
     

    return (
       <div className=''>
           <div className='header-bg'>
           <nav className='nav-bar'>
             <h1 className='logo-section'>Classic Frames</h1>
             <ul className={toggleIcon ? 'nav-link-mobile ' : 'nav-link'} onClick={()=>setToggleIcon(!toggleIcon)}>
                    <Link className='links' to='/'>Home</Link>
                    <Link className='links' to='/services'>Services</Link>
                    <Link className='links' to='/'>About Me</Link>
                    <Link className='links' to='/'>Contact Me</Link>
                    <Link className='links' to='/login'>Login</Link>
             </ul>

            <div className='btn menu-icon' onClick={()=>setToggleIcon(!toggleIcon)}>
            {
                 toggleIcon ? 
                 <XIcon className=''></XIcon>

                 : 
                 <MenuIcon className=''></MenuIcon>
             }
            </div>

         </nav>
           </div>
       </div>
    );
};

export default Navbar;