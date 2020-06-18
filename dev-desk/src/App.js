import React from 'react';
import {Jumbotron, Button} from 'reactstrap'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './App.css';
import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
  <>
    <Router>
      <div>
          <Jumbotron>Lambda Help Desk</Jumbotron>
      </div>
      <p>Already Registered?</p>
    
      <Link to={'/login'}>
          <Button>
            Log-in
          </Button>
      </Link>

      <p>New to Help Desk?</p>
      
      <Link to={'/register'}>
          <Button>
            Register
          </Button>
      </Link>

      <Route path='login'>
        <Login/>
      </Route>

      <Route path='register'>
        <Register/>
      </Route>
    </Router>      
  </>
  )
}

export default App;
