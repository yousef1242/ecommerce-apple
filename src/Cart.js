import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import {Link} from "react-router-dom"
import { removeFromCart } from './rtk/CartSlice'

export default function Cart() {
  const cart = useSelector(state => state.cart)
  const [avilable, setAvilable] = useState()
  const [empty, setempty] = useState()
  const [product, setProducts] = useState()
  
  const dispatch = useDispatch()
  const total =cart.reduce((acc,product) => {
    acc += product.price * product.quantaty;
    return acc
  },0)
  useEffect(() => {
    if(cart.length > 0){
      setAvilable(true)
      setempty(false)
      setProducts(true)
    }else{
      setAvilable(false)
      setempty(true)
      setProducts(false)
    }
    console.log(cart)
  },[cart,setAvilable,setProducts,setempty])
  return (
    <>
       <div className='cartPage' style={{padding:"150px 0px 100px 0px",backgroundColor: "rgb(231, 236, 238)",minHeight:"100vh"}}>
          <Container>
             {
              empty && 
              <>
              <h1 className='mb-3'>Your bag is empty.</h1>
              <h4 className='mb-3'>Free delivery and free returns.</h4>
              <Link to="/"><button className='emptybutton'>Continue Shopping</button></Link>
              </>
             }
             {
              avilable && 
              <div className="mb-5">
              <h1>Review your bag.</h1>
              <h4>Free delivery and free returns.</h4>
              </div>
             }
             <Row className="align-items-center">
                {
                  product && 
                  cart.map((p) => (
                    <>
                    <div className="col-12 mb-5" key={p.id}>
                    <Row className="align-items-center">
                       <div className="col-12 col-md-4 text-center">
                          <img alt="" src={p.image} className="img-fluid" style={{height:"180px"}}/>
                       </div>
                       <div className="col-12 col-md-8">
                          <Row>
                            <div className="col-12 col-md-4 text-center mb-4 mb-md-0 cartText" ><h4>{p.name}</h4></div>
                            <div className="col-12 col-md-4 text-center mb-4 mb-md-0 cartText" ><h4>{p.quantaty}</h4></div>
                            <div className="col-12 col-md-4 text-center mb-4 mb-md-0 cartText" ><h4>${p.price}</h4></div>
                            <div className="col-12 col-md-10 mt-md-4 text-center text-md-end"><button className="remove" onClick={() => dispatch(removeFromCart(p))}>remove</button></div>
                          </Row>
                       </div>
                    </Row>
                 </div>
                 <hr/>
                    </>
                  ))
                }
             </Row>
             {
              product &&
              <Container className='mt-4'>
                 <Row>
                    <div className='col-6 text-center mb-4 fs-5' style={{fontWeight:"600"}}>Subtotal</div>
                    <div className='col-6 text-center mb-4 fs-5' style={{fontWeight:"600"}}>${total}</div>
                    <div className='col-6 text-center fs-5' style={{fontWeight:"600"}}>Shipping</div>
                    <div className='col-6 text-center mb-4 fs-5' style={{fontWeight:"600"}}>Free</div>
                    <hr style={{width:"58%",margin:"0px auto"}}/>
                    <div className='col-6 boldFont mt-4 text-center'>Total</div>
                    <div className='col-6 boldFont mt-4 text-center'>${total}</div>
                 </Row>
              </Container>
             }
          </Container>
       </div>
    </>
  )
}
