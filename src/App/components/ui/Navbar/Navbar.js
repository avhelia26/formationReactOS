import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './Navbar.module.scss'
import {Navbar as NavBar, Container, Nav} from 'react-bootstrap'



const Navbar = (props) => {   
   
  return (
    <div className={style.Navbar} sata-testid="Navbar">
        <NavBar bg="dark" variant="dark">
          <Container>
            <NavBar.Brand href="#home">Navbar</NavBar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </NavBar>
    </div>
  )
}


export default Navbar
