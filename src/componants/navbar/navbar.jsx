import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';



const Navbar = ({ currentUser }) => (
    <div className='nav-container'>
      <h1 className='title'>MiniVsco</h1>

            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                Sign out</div> ) 
                : (<Link className='option' to='/signin'>Sign in</Link>)
                }

    </div>


)
export default Navbar;
