import React, { Component } from 'react'
import "./signinform.css"
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../Custom-button/CustomButton';
import {Container, Button} from 'react-bootstrap';
class Signinform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }


    render() {
        const { email, password } = this.state;
        return (

            <Container fluid="md">
            <div className='signin-container '>
                

                <form onSubmit={this.handleSubmit}> 
                    <h3 >Email</h3>
                    <input
                        name="email"
                        type='email'
                        value={email}
                        onChange={this.handleChange}
                        label='email'
                        required
                    />



                    <h3 >Password</h3>
                    <input
                        name="password"
                        type='password'
                        value={password}
                        onChange={this.handleChange}
                        label='password'
                        required
                    />

                            <br />
                            <br />
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle}> Sign in with google</CustomButton>
                    <div className='button'>    <button>sdsdsd</button>       </div>
                    
                </form>
            </div>
            </Container>
        )
    }
}



export default Signinform;