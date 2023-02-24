import React from 'react'
import FrontPage from './components/FrontPage'
import Products from './components/Products'

export default function Home(props) {
  return (
    <>

    <FrontPage/>
    <Products Search={props.search}/>
    </>
  )
}
