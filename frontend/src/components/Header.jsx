import React from 'react'
import { Container, Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap'

const Header = () => {
	return (
		<header>
			<Navbar bg="dark" variant='dark' expand="lg">
			<Container >
				<Navbar.Brand href="/">Proshop</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="ms-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
						<Nav.Link href="/login"><i className='fas fa-user'></i>Sign In</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
			</Navbar>
		</header>
	)
}

export default Header