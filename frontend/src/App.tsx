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
import { use, useContext, useEffect } from "react";
import { Store } from "./Store";
// import { Store } from "./Store";

function App() {
  const {state : {mode}, dispatch} = useContext(Store);
  useEffect(() => {
    document.body.setAttribute("data-bs-theme", mode);
  }),[mode]
  const switchModeHandler = () => {
    dispatch({type: "Switch_Mode"})
  }
  return (
    <>
      <div className="d-flex flex-column vh-100">
        <header>
          <Navbar expand="lg">
            <Container>
            <Navbar.Brand as={NavLink} to="/">Amazee</Navbar.Brand>
            <Nav className="me-auto">
              <Button variant={mode} onClick={switchModeHandler}>
                <i className={mode === "light" ? "fa fa-sun" : "fa fa-moon"}></i>
              </Button>
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
