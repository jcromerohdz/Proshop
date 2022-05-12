import React from 'react'
import { Container, Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap'
import LinkContainer from 'react-router-bootstrap/LinkContainer'

const Header = () => {
	return (
		<header>
			<Navbar bg="dark" variant='dark' expand="lg">
			<Container >
        <LinkContainer to='/'>
				  <Navbar.Brand>Proshop</Navbar.Brand>
        </LinkContainer>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="ms-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
            <LinkContainer to='/cart'>
						  <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
						  <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
            </LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
			</Navbar>
		</header>
	)
}

export default Header