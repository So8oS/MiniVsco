import React from 'react'
import './image.css'

 const  Image =  ({key,url}) => {
    return (
        <div className='img-container'>
            <img className='img' src={url} alt={key} />
        </div>
    )
}
export default Image;