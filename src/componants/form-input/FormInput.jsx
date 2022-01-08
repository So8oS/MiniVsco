import React from 'react';


const FormInput = ({ handleChange,  ...otherProps }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
      
    </div>
);

export default FormInput;