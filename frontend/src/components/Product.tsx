import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsQuerySlug } from '../hooks/productHooks';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { getError } from '../utils';
import type { ApiError } from '../types/ApiError';
import { Helmet } from 'react-helmet-async';
import { Badge, Card, Col, ListGroup, Row } from 'react-bootstrap';
import Rating from './Rating';

export default function Product() {
  const params = useParams();
  const { slug } = params;
  const {
    data : product,
    isLoading,
    error
  } = useGetProductsQuerySlug(slug!);
  return (
    isLoading ? (
      <LoadingBox/>
    ): error ? (
      <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
    ) : !product ? (
      <MessageBox variant="danger">Product Not Found</MessageBox>
    ) : 
    (<div>
      
      <Row>
        <Col md={6}>
        <img src={product.image} className="img-large" alt={product.name} />
        </Col>
        <Col md={3}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Helmet>
              <title>{product.name}</title>
            </Helmet>
            <h1>{product.name}</h1>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating rating={product.rating} numberReviews={product.numReviews}></Rating>
          </ListGroup.Item>
          <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
          <ListGroup.Item>Description: {product.description}</ListGroup.Item>
        </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>{product.countInStock > 0 ? (
                      <Badge className="bg-success">In Stock</Badge>
                    ) : (
                      <Badge className="bg-danger">Unavailable</Badge>
                    )}</Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <button className="btn btn-primary w-100">Add to Cart</button>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </div>)
  )
}




