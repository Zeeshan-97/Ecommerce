import {   Col, Row } from "react-bootstrap";

import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductItem from "../components/ProductItem";
import { Helmet } from "react-helmet-async";
import { useGetProductsQuery } from "../hooks/productHooks";
import { getError } from "../utils";
import type { ApiError } from "../types/ApiError";


 

const Home = () => {
  
const { data: products, isLoading: loading, error } = useGetProductsQuery();
  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox >
  ) : (
    <Row>
      <Helmet>
        <title>Amazee</title>
      </Helmet>
      {products.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3} className="mb-4">
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  );

};

export default Home;
