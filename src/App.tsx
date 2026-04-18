import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { productSampleData } from "./data";

function App() {
  return (
    <>
      <div className="d-flex flex-column vh-100">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Amazee</Navbar.Brand>
            </Container>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/contact">Cart</Nav.Link>
            </Nav>
          </Navbar>
        </header>
        <main className="main">
          <Container fluid className="mt-3">
            <Row>
              {productSampleData.map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={3} className="mb-4">
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
                </Col>
              ))}
            </Row>
          </Container>
        </main>
        <footer>
          <div>
            <p className="text-center">© 2024 Amazee. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
