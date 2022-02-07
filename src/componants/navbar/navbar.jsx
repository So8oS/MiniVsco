import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import {Container,Navbar} from 'react-bootstrap';


const NavBar = ({ currentUser }) => (


    
    <Container fluid className="p-0"> 
        <div className='nav-container'>
            <div className='title-container'>
                    <Navbar.Brand className='title' href="#home">FakeVsco</Navbar.Brand>
            </div>
                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                    Sign out</div> ) 
                    : (<Link className='option' to='/signin'>Sign in</Link>)
                }
        </div>
    </Container>
)
export default NavBar;
