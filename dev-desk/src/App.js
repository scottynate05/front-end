import React from 'react';

import {Jumbotron, Button, Navbar, Col, Row, Container} from 'reactstrap'
import {Link, Route, Switch} from 'react-router-dom'

import './App.css';
import Register from './components/Register'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import StudentDashboard from './components/StudentDashboard'
import StaffDashboard from './components/StaffDashboard'
import StudentTicket from './components/StudentTicket'
import StaffTicket from './components/StaffTicket'
import TicketList from './components/TicketList';
import AddTicket from './components/AddTicket';
import EditTicket from './components/EditTicket';

// localStorage.clear(); >>> to clear token

function App() {
  return (
    <>
      <Navbar>
          <Jumbotron fluid>
            <Container fluid>
              <Row style={{display:'flex'}}>
                <h1 className="display-3">Lambda Help Desk</h1>
                  <div style={{flexDirection:'flex-end'}}>
                  <Link to={"/studentdashboard"}>
                    <Button>
                      Home
                    </Button>
                  </Link>
                </div>
            </Row>
          </Container>
        </Jumbotron>  
      </Navbar>
      
      {/* <Route exact path='/'>
        <Row>
          <Col>
            <p>Already Registered?</p>
            <Link to={'/login'}>
                <Button>
                  Log-in
                </Button>
            </Link>
          </Col>
        </Row> */}
        
        <Route exact path='/'>
          <Row>
            <Col>
              <p>Already Registered?</p>
              <Link to={'/login'}>
                  <Button>
                    Log-in
                  </Button>
              </Link>
            </Col>
            <Col>
              <p>New to Help Desk?</p>
              <Link to={'/register'}>
                  <Button>
                    Register
                  </Button>
              </Link>            
            </Col>
          
          </Row>

        </Route>
        <Switch>
          <PrivateRoute path='/studentdashboard' component={StudentDashboard} />
          <PrivateRoute path='/staffdashboard' component={StaffDashboard} />
          <PrivateRoute path='/studentticket' component={StudentTicket} />
          <PrivateRoute path='/staffticket' component={StaffTicket} />
          <PrivateRoute path='/ticketlist' component={TicketList} />
          <PrivateRoute path='/addticket' component={AddTicket} />
          <PrivateRoute path='/editticket' component={EditTicket} />
          <Route path='/login'>
            <Login/>
          </Route>

          <Route path='/register'>
            <Register/>
          </Route>  
        </Switch>          
    </>
  )
}

export default App;
