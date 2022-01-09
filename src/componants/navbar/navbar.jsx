import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';



const Navbar = ({ currentuser }) => (
    <div className='nav-container'>
      <h1 className='title'>MiniVsco</h1>

            {currentuser ? (
                <div className='option' onClick={() => auth.signOut()}>
                SIGN OUT</div> ) 
                : (<Link className='option' to='/signin'>SIGN IN</Link>)
                }

    </div>


)
export default Navbar;
