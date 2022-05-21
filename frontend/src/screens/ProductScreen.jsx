import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios';

const ProductScreen = () => {
  const {id} = useParams()

  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get(`/api/products/${id}`)
      setProduct(data)
    }

    fetchProduct()

  }, [])

  console.log(product.rating)


  return (
    <>
      <Link
        className='btn btn-light my-3'
        to='/'
      >
        Go Back
      </Link>
      <Row>
        <Col
          md={6}
        >
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col
          md={3}
        >
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>

              <Rating 
                value={product.rating ? product.rating : 0}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price: 
                  </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Status: 
                  </Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-grid">
                  <Button className='btn' type='button' disable={product.countInStock === 0 ? "false" : undefined}>
                    Add To Cart
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>

        </Col>
      </Row>
    </>
  )
}

export default ProductScreen