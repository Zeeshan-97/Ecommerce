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
import Home from "./pages/Home";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="d-flex flex-column vh-100">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
            <Navbar.Brand as={NavLink} to="/">Amazee</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
              <Nav.Link as={NavLink} to="/cart">Cart</Nav.Link>
            </Nav>
          </Container>
          </Navbar>
        </header>
        <main className="main">
          <Container fluid className="mt-3">
            <Outlet />
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
