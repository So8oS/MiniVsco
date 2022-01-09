import React, { Component } from 'react'
import "./signinform.css"
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../Custom-button/CustomButton';
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
            <div className='sign-in'>
                

                <form onSubmit={this.handleSubmit}> 
                <h1>email</h1>
                    <input
                        name="email"
                        type='email'
                        value={email}
                        onChange={this.handleChange}
                        label='email'
                        required
                    />


<h1>password</h1>

                    <input
                        name="password"
                        type='password'
                        value={password}
                        onChange={this.handleChange}
                        label='password'
                        required
                    />


                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle}> Sign in with google</CustomButton>
                </form>
            </div>
        )
    }
}

export default Signinform;