// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function BasicExample() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary" >
//       <Container>
//         <Navbar.Brand href="/">Python Tutorial</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <NavDropdown title="Tutorials" id="basic-nav-dropdown">
//               <NavDropdown.Item href="/python-basics">Python Basics</NavDropdown.Item>
//               <NavDropdown.Item href="/advanced-python">Advanced Python</NavDropdown.Item>
//               <NavDropdown.Item href="/python-projects">Python Projects</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="/blog">Blog</Nav.Link>
//             <Nav.Link href="/about">About</Nav.Link>
//             <Nav.Link href="/contact">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const dropdownStyle = {
  boxShadow: 'none',
};

const dropdownMenuStyle = {
  minWidth: '10rem',
};

const dropdownItemStyle = {
  padding: '0.5rem 1rem', // Adjust padding as needed
};

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Python Tutorial</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/python-home">Home</Nav.Link>
            <NavDropdown title="Tutorials" id="basic-nav-dropdown" style={dropdownStyle}>
              <NavDropdown.Item href="/python-get-started" style={dropdownItemStyle}>Python Basics</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown title="Data Types" style={{ ...dropdownStyle, ...dropdownMenuStyle }}>
                <NavDropdown.Item href="/python-data-types" style={dropdownItemStyle}>Overview</NavDropdown.Item>
                <NavDropdown.Item href="/python-numbers" style={dropdownItemStyle}>Numbers</NavDropdown.Item>
                <NavDropdown.Item href="/python-strings" style={dropdownItemStyle}>Strings</NavDropdown.Item>
                <NavDropdown.Item href="/python-booleans" style={dropdownItemStyle}>Booleans</NavDropdown.Item>
                <NavDropdown.Item href="/python-lists" style={dropdownItemStyle}>Lists</NavDropdown.Item>
                <NavDropdown.Item href="/python-tuples" style={dropdownItemStyle}>Tuples</NavDropdown.Item>
                <NavDropdown.Item href="/python-sets" style={dropdownItemStyle}>Sets</NavDropdown.Item>
                <NavDropdown.Item href="/python-dictionaries" style={dropdownItemStyle}>Dictionaries</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown title="Control Flow" style={{ ...dropdownStyle, ...dropdownMenuStyle }}>
                <NavDropdown.Item href="/python-if-else" style={dropdownItemStyle}>If...Else</NavDropdown.Item>
                <NavDropdown.Item href="/python-while-loops" style={dropdownItemStyle}>While Loops</NavDropdown.Item>
                <NavDropdown.Item href="/python-for-loops" style={dropdownItemStyle}>For Loops</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown title="Functions" style={{ ...dropdownStyle, ...dropdownMenuStyle }}>
                <NavDropdown.Item href="/python-functions" style={dropdownItemStyle}>Functions Overview</NavDropdown.Item>
                <NavDropdown.Item href="/python-lambda" style={dropdownItemStyle}>Lambda Functions</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown title="Object Oriented Programming" style={{ ...dropdownStyle, ...dropdownMenuStyle }}>
                <NavDropdown.Item href="/python-oops" style={dropdownItemStyle}>Object Oriented Programming</NavDropdown.Item>
                <NavDropdown.Item href="/python-classes" style={dropdownItemStyle}>Classes</NavDropdown.Item>
                <NavDropdown.Item href="/python-inheritance" style={dropdownItemStyle}>Inheritance</NavDropdown.Item>
                <NavDropdown.Item href="/python-polymorphism" style={dropdownItemStyle}>Polymorphism</NavDropdown.Item>
                <NavDropdown.Item href="/python-abstraction" style={dropdownItemStyle}>Abstraction</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/advanced-python" style={dropdownItemStyle}>Advanced Python</NavDropdown.Item>
              <NavDropdown.Item href="/python-projects" style={dropdownItemStyle}>Python Projects</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;


