import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearSessionErrors, loginUser } from '../../features/sessionSlice';
import Container from 'react-bootstrap/esm/Container';

function LoginPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loggedIn = useSelector(state => state.user.loggedIn)
    const errors = useSelector(state => state.user.errors)
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })
    console.log(loggedIn)
    function handleLoginSubmit(e) {
      e.preventDefault()
      dispatch(loginUser(loginData, dispatch))
    }

    useEffect(() => {
      if (loggedIn) {
        navigate('/')
        dispatch(clearSessionErrors())
      }
    },[loggedIn])

  return (
    <Container>

  <Form onSubmit={handleLoginSubmit} >
    <h1>Welcome back! Please Login</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
      <Form.Control 
      type="email" 
      placeholder="Enter username"
      value={loginData.username}
      onChange={e => setLoginData({...loginData, username: e.target.value})}
      />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
      <Form.Control 
      type="password" 
      placeholder="Password" 
      value={loginData.password}
      onChange={e => setLoginData({...loginData, password: e.target.value})}
      />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  {errors ? 
  errors.map((error, index) => 
  (<p key={index} style={{color: "red"}}>{error}</p>))
  : ""}
</Form>
    </Container>
  );
}

export default LoginPage;