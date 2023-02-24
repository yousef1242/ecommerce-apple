import React from 'react'
import { Container, Row } from 'react-bootstrap'
import img1 from "../imgs/iphone.png"

export default function FrontPage() {
  return (
    <>
       <div className='frontPage d-flex align-items-center position-relative' style={{height:"100vh",backgroundColor:"rgb(231 236 238)",}}>
          <Container>
             <Row className='align-items-center'>
                <div className='col-12 col-md-6'>
                   <h1>
                     <span className='d-block spanText'>Powered</span>
                     <span className='d-block'>By Intellect</span>
                     Driven By Values
                   </h1>
                   <a href="#products"><button>Shop Now</button></a>
                </div>
                <div className='d-none d-md-flex col-md-6 justify-content-center'>
                   <img alt="" className='img-fluid' style={{height:"500px"}} src={img1}/>
                </div>
             </Row>
          </Container>
       </div>
    </>
  )
}
