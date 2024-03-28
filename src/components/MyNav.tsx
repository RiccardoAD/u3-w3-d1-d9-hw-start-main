import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Link className="nav-link fw-bold fs-3 text-white" to="/">
          SPACE+
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <i className="bi bi-rocket text-white fs-3"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNav;
