import {useState, useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister)
  const { loadding, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[0] : '/'

  useEffect(()=> {
    if(userInfo){
      navigate(redirect)
    }
  }, [userInfo, redirect] )

  const submitHandler = (e) => {
    e.preventDefault()
    // DISPATCH REGISTER
    if(password !== confirmPassword) {
      setMessage('Passwords do not match')
    }else{
      dispatch(register(name, email, password))
      navigate('/')
    }
  }


  return (
    <FormContainer>
      <h1>Sing Up</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loadding && <Loader />}
      <Form
        onSubmit={submitHandler}
      >
        <Form.Group controlId='name'>
          <Form.Label className='py-3'>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
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
        </Form.Group>
        <Form.Group controlId='confirmPassword'>
          <Form.Label className='py-3'>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

          <Button
            className='my-3'
            type='submit'
            variant='primary'
          >
           Register 
          </Button>

          
      </Form>

      <Row className='py-3'>
        <Col>
          Have an Account?{' '} 
        <Link to={redirect ? `/login?redirect=${redirect}`: '/login'}>
          Login
        </Link>
          </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen