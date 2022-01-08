import React, { Component } from 'react'
import "./signinform.css"
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../Custom-button/CustomButton';
import FormInput from '../form-input/FormInput';


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
                <h2>i have an account</h2>
                <span>sign in with email and pass</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />



                    <FormInput
                        name="password"
                        type='password'
                        value={password}
                        handleChange={this.handleChange}
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