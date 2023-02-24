import React, { useState } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { data } from '../data'
import {useDispatch} from "react-redux"
import { addToCart } from '../rtk/CartSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Products(props) {
  const [product, setproduct] = useState("all")
  const [array, setArray] = useState(data)
  const cart = useSelector(state => state.cart)

  const handleProducts = (catName) => {
    setproduct(catName)
    const productsFilter = catName === "all" ? data : data.filter((product) => product.type === catName)
    setArray(productsFilter)
  }


  const dispatch = useDispatch()
  return (
    <>
      <div className='products py-5' id='products' style={{backgroundColor: "rgb(27 27 27)"}}>
        <Container>
          <div className='button w-100 text-center'>
            <button className={product === "all" ? "yes" : ""} onClick={() => handleProducts("all")}>All</button>
            <button className={product === "mac" ? "yes" : ""} onClick={() => handleProducts("mac")}>Mac</button>
            <button className={product === "iphone" ? "yes" : ""} onClick={() => handleProducts("iphone")}>Iphone</button>
            <button className={product === "watch" ? "yes" : ""} onClick={() => handleProducts("watch")}>Watch</button>
            <button className={product === "ipad" ? "yes" : ""} onClick={() => handleProducts("ipad")}>Ipad</button>
          </div>
          <Row>
            {array
                .filter((product) => product.name.toLowerCase().includes(props.Search.toLowerCase())).map((product) => (
              <div className='col-12 col-sm-6 col-md-4 cols' key={product.id}>
                <Card>
                  <div className='divImage'>
                  <Card.Img className='img-fluid' src={product.image} alt="" />
                  </div>
                  <Card.Body>
                    <Row className='align-items-center'>
                       <div className='col-8'>
                       <h4 style={{color:"#fff",marginBottom:"20px"}}>{product.name}</h4>
                       <h5 style={{color:"#fff"}}>${product.price}</h5>
                       </div>
                       <div className='col-4 text-end'>
                         <h1 onClick={() => dispatch(addToCart(product))}><button><i class="fa-solid fa-cart-arrow-down"></i></button></h1>
                       </div>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Row>
          <Link className='nav-link' to="/cart"><button className='fixedButton'><i class="fa-solid fa-bag-shopping fs-3"></i><h6>{cart.length}</h6></button></Link>
        </Container>
      </div>
    </>
  )
}
