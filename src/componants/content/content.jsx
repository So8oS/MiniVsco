import React, { Component } from 'react'
import './content.css'
import Image from '../image/image';
import { Container , Row, Col,} from 'react-bootstrap';

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
            <div className=''>
                <Container fluid="md">
                <Row>
                        {this.state.pics.map
                        (({id , download_url})=>(
                           
                            <Col sm={4}>  
                        <Image className='img' key={id} url={download_url}/>
                        </Col>
                       
                        ))}
                            </Row>
                </Container>
               
            
            </div>
        )
    }
}

export default Content;