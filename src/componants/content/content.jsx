import React, { Component } from 'react'
import './content.css'
import Image from '../image/image';
class Content extends Component {
    constructor(){
    super();

    this.state = {
    pics : []
    }}

    componentDidMount(){
    fetch("https://picsum.photos/v2/list")
    .then(res => res.json())
    .then(pics =>this.setState({pics: pics}));}


    render() {
        return (
            <div className='container'>
                {this.state.pics.map
                (({id , download_url})=>(<Image className='img' key={id} url={download_url}/>))}
                 </div>
        )
    }
}

export default Content;