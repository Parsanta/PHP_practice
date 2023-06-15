import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavBar = () => {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="/">
          <img src={""} alt="lms" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex-nowrap">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/faculty">Faculty</Nav.Link>
            <NavDropdown title="School" id="basic-nav-dropdown">
                <NavDropdown.Item href="school">
                  School
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">enroll</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Department" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  departments
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">courses</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">classes</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="hostel" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">buildings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Rooms</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
