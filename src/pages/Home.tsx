import { Button, Card, Col, Nav, Row } from "react-bootstrap";
import { productSampleData } from "../data";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Row>
      {productSampleData.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3} className="mb-4">
          <Nav.Link as={NavLink} to={`/products/${product.slug}`}>
            <Card style={{ width: "100%" }}>
              <div className="image_container">
                <Card.Img
                  className="card-img-top"
                  variant="top"
                  src={product.image}
                />
              </div>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Nav.Link>
        </Col>
      ))}
    </Row>
  );
};

export default Home;
