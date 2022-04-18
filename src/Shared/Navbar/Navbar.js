import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import auth from '../../firebase.init'
import './Navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';


const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);
    const [user, loading] = useAuthState(auth);


    const logOut =  () =>{
        signOut(auth);
        
    }
    
    
    return (
       <div className=''>
           <div className='header-bg'>
           <nav className='nav-bar'>
             <h1 className='logo-section'>Classic Frames</h1>
             <ul className={toggleIcon ? 'nav-link-mobile ' : 'nav-link'} onClick={()=>setToggleIcon(!toggleIcon)}>
                    <Link className='links' to='/'>Home</Link>
                    <Link className='links' to='#services'>Services</Link>
                    <Link className='links' to='/about-me'>About Me</Link>
                    <Link className='links' to='/blog'>Blog</Link>
                    <Link className='links' to='/checkout'>CheckOut</Link>
                    {
                        user 
                        ? 
                        <>
                        <Link onClick={logOut} className='links' to='/login'>Log Out</Link>
                        </>
                        :
                        <Link className='links' to='/login'>Login</Link>
                    }
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