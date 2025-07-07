import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll',handleScroll);
    return () => window.addEventListener('scroll',handleScroll);
  }, [] );
  const navbarStyle ={
    transition: 'background-color 0.4s ease',
    backgroundColor: scrolled ? '#212529' : 'transparent',
    boxShadow: scrolled ? '0 4px 10px rgba(0, 0, 0, 0.3)' : 'none',
  };

  const linkStyle = {
    color: 'white',
    marginRight: '15px',
  };

  const hoverStyle = {
    color: '#ffc107', 
  };

  return (
    <Navbar expand="lg" fixed="top" style={navbarStyle}>
      <Container>
        <Navbar.Brand href="#" style={linkStyle}><h4>Portfolio</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#home" style={linkStyle} onMouseOver={(e) => e.target.style.color = hoverStyle.color} 
            onMouseOut={(e) => e.target.style.color = linkStyle.color}>Home</Nav.Link>

            <Nav.Link href="#about" style={linkStyle} onMouseOver={(e) => e.target.style.color = hoverStyle.color} 
            onMouseOut={(e) => e.target.style.color = linkStyle.color}>About</Nav.Link>

            <Nav.Link href="#skills" style={linkStyle} onMouseOver={(e) => e.target.style.color = hoverStyle.color} 
            onMouseOut={(e) => e.target.style.color = linkStyle.color}>Skills</Nav.Link>

            <Nav.Link href="#projects"style={linkStyle} onMouseOver={(e) => e.target.style.color = hoverStyle.color}
              onMouseOut={(e) => e.target.style.color = linkStyle.color}>Projects</Nav.Link>
            <Nav.Link href="#contact" style={linkStyle} onMouseOver={(e) => e.target.style.color = hoverStyle.color}
              onMouseOut={(e) => e.target.style.color = linkStyle.color}> Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



//   }
//   return (
//     <Navbar bg="primary" expand="lg" fixed="top">
//       <Container>
//         <Navbar.Brand href="#home" className="text-white fw-bold">Portfolio</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar" />
//         <Navbar.Collapse id="navbar">
//           <Nav className="ms-auto">
//             <Nav.Link href="#home" className="text-white">Home</Nav.Link>
//             <Nav.Link href="#about" className="text-white">About</Nav.Link>
//             <Nav.Link href="#skills" className="text-white">Skills</Nav.Link>
//             <Nav.Link href="#projects" className="text-white">Projects</Nav.Link>
//             <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

export default NavigationBar;