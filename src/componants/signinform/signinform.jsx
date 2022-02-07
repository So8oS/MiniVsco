import React, { Component } from 'react'
import "./signinform.css"
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../Custom-button/CustomButton';
import {Container,Row,Col, Button} from 'react-bootstrap';
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

            <Container className='signin-container' >
                    <Row>
                        <Col><img className='form-img' src="https://images.unsplash.com/photo-1541614256854-6fbf99e006b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80" alt="" /></Col>

                        <Col>
                            <h2>Login to your Account</h2>
                            <p>Go post soem dope ass pics my man </p>
                            <CustomButton className="button" onClick={signInWithGoogle}> Continue with Google</CustomButton>
                            

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

                                <CustomButton type='submit'> Sign in </CustomButton>
                                
                                
                                
                            </form>
                        </Col>
                    </Row>
            </Container>
        )
    }
}



export default Signinform;