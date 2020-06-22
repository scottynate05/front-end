import React from 'react';

import {Jumbotron, Button, Navbar, Col, Row, Container} from 'reactstrap'
import {Link, Route} from 'react-router-dom'

import './App.css';
import Register from './components/Register'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
  <>

      
          <Jumbotron fluid>
            <Container fluid style={{display:'flex',justifyContent:'space-between',paddingLeft:'5%', paddingRight:'5%'}}>
                <h1 className="display-3" style={{display:'inline'}}>Lambda Help Desk</h1>
                    <Link to={"/"}>
                      <Button>
                        Home
                      </Button>
                    </Link>
            </Container>
          </Jumbotron>  

      
      
      <Route exact path='/'>
        <Row>
          <Col style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <p>Already Registered?</p>
            <Link to={'/login'}>
                <Button>
                  Log-in
                </Button>
            </Link>
          </Col>
          <Col style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
            <p>New to Help Desk?</p>
            <Link to={'/register'}>
                <Button>
                  Register
                </Button>
            </Link>            
          </Col>
        
        </Row>

      </Route>

      <Route path='/login'>
        <Login/>
      </Route>

      <Route path='/register'>
        <Register/>
      </Route>      
  </>
  )
}

export default App;
