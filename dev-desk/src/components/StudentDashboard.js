import React, { useState, useEffect } from 'react'
import {Button, Card, CardTitle, Col, Row, Container } from 'reactstrap'
import {Link,Route} from 'react-router-dom'
import AddTicket from './AddTicket'
import EditTicket from './EditTicket'
import StudentTicket from './StudentTicket'
import axiosWithAuth from '../utils/axiosWithAuth'

const StudentDashboard = () => {
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('/tickets')
            .then(res => {
                setTickets(res.data)
                console.log('res: ', res.data)
            })
            .catch(err => console.log('err: ', err.message, err.response))
    }, [])

    return(
        <>
<<<<<<< HEAD
        <Link to='/addticket'>
            <Button>Add a Ticket</Button>
        </Link>
        <Link to='/editTicket'>
            <Button>Edit Existing Ticket</Button>
        </Link>
        <Link to='/studentticket'>
            <Button>Student Tickets</Button>
        </Link>     
=======

        <Container>
            <h2 className='text-center'>Student Dashboard</h2>
            <h6>Welcome! here you will your tools for viewing, adding, and editing your tickets, they will be viewed and responded to by our certified Student Helpers.</h6>
        </Container>

        <h3 style={{padding:'5%'}}>Posted Tickets:</h3>
 
        <Row style={{paddingLeft:'5%',paddingRight:'5%'}}>
        <Col sm='6'>
        <Card body className='text-center'>
            <CardTitle>Need to post a ticket to reach out to a helper?</CardTitle>
            <Link to='/addticket'>
                <Button>Add a Ticket</Button>
            </Link>            
        </Card>        
        </Col>
        <Col sm='6'>
        <Card body className='text-center'>
            <CardTitle>Want to update a ticket that you've posted?</CardTitle>
            <Link to='/editTicket'>
                <Button>Edit Ticket</Button>
            </Link>            
        </Card>            
        </Col>
        </Row>
>>>>>>> 06fcaf879d06dc5a323af8c3b9d308abd1b2dcef

        <Route path='/addticket'>
           <AddTicket/>
        </Route> 
        <Route path='/editTicket'>
           <EditTicket/>
        </Route>
        <Route path='/studentticket'>
           <StudentTicket tickets={tickets} setTickets={setTickets} />
        </Route>
        </>
    )

}

export default StudentDashboard