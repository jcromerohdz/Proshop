import {useState, useEffect, useInsertionEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { loadding, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[0] : '/'

  useEffect(()=> {
    if(userInfo){
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect] )

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }


  return (
    <FormContainer>
      <h1>Sing In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loadding && <Loader />}
      <Form
        onSubmit={submitHandler}
      >
        <Form.Group controlId='email'>
          <Form.Label className='py-3'>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label className='py-3'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>

          <Button
            className='my-3'
            type='submit'
            variant='primary'
          >
            Sign In
          </Button>

          <Row className='py-3'>
            <Col>
              New Customer?{' '} 
              <Link to={redirect ? `/register?redirect=${redirect}`: '/register'}>
                Register
              </Link>
            </Col>
          </Row>
        </Form.Group>
          
      </Form>
    </FormContainer>
  )
}

export default LoginScreen