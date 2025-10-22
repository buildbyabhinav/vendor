import React from 'react'
import products from '../product'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'

const HomeScreen = () => {
  return (
    <div>
        <Row>
      {products.map((product)=>(
        <Col key={product._id}>
        <Product product={product}/>
        </Col>
      ))}
      </Row>
    </div>
  )
}

export default HomeScreen
