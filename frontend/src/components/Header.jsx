import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap'
import LinkContainer from 'react-router-bootstrap/LinkContainer'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    console.log('LOGOUT')
    dispatch(logout())
  }

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
            {userInfo ? (
              <NavDropdown
                title={userInfo.name}
                id='username'
              >
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>


            ) :
              <LinkContainer to='/login'>
                <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
              </LinkContainer>
            }

					</Nav>
				</Navbar.Collapse>
			</Container>
			</Navbar>
		</header>
	)
}

export default Header