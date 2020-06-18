import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
<>
    <Header>
        <Jumbotron>Lambda Help Desk</Jumbotron>
    </Header>
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

    <Route>
      <Register/>
    </Route>
</>
  )
}

export default App;
