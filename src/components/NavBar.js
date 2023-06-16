import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavBar = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // State to track admin login status


const handleAdminLogin = (email, password) => {
  axios
    .post("/api/login", { email, password })
    .then((response) => {
      const loginSuccessful = response.data.success; // Assuming the API returns a success field indicating login status

      if (loginSuccessful) {
        setIsAdminLoggedIn(true); // Set isAdminLoggedIn to true if login is successful
      } else {
        setIsAdminLoggedIn(false); // Set isAdminLoggedIn to false if login fails
      }
    })
    .catch((error) => {
      console.log("Error occurred during login:", error);
      setIsAdminLoggedIn(false); // Set isAdminLoggedIn to false if an error occurs during login
    });
};


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
              <NavDropdown.Item href="school">School</NavDropdown.Item>
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
            {isAdminLoggedIn && <Nav.Link href="/Admin">Admin</Nav.Link>}
            {!isAdminLoggedIn && <Nav.Link href="/login">Login</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
