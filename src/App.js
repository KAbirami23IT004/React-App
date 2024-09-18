import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Use Routes instead of Switch
import { Container, Navbar, Nav } from 'react-bootstrap';
import AboutUs from './components/About';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">My App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use element with JSX */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

import One from './One'
import logo from './logo.svg'
import logo2 from './p3.png'
import logo3 from './p4.png'
export default function App() {
  return (
  <>
  <h1>Hi</h1>
  <p>hello</p>
  <img src={logo} alt="logo" width="20%" height="30%"></img>
  <hr></hr>
  <One Name="cloud Sprint" image={logo2}/> 
  <One Name="react.js"image={logo3}/> 
  </>
  );
}
//multiple usage is the one 
//export default App;*/
