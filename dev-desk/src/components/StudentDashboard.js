import React, { useState, useEffect } from 'react'
import {Button, Card, CardTitle, Col, Row, Container } from 'reactstrap'
import {Link,Route,useParams,useHistory} from 'react-router-dom'

import AddTicket from './AddTicket'
import EditTicket from './EditTicket'
import StudentTicket from './StudentTicket'
import axiosWithAuth from '../utils/axiosWithAuth'
import PrivateRoute from './PrivateRoute'

const StudentDashboard = () => {
    const [tickets, setTickets] = useState([])
    // const { id } = useParams()
    // const { push } = useHistory()

    // const fetchTicket = (id) => {
    //     axiosWithAuth()
    //         .get(`/tickets/${id}`)
    //         .then((res) => setTickets(res.data))
    //         .catch((err) => console.log('err: ', err.response, err.message))
    // }

    // useEffect(() => {
    //     fetchTicket(id)
    // }, [id])

    // if (!tickets) {
    //     return <div>Loading ticket information...</div>
    // }

    useEffect(() => {
        axiosWithAuth()
            .get('/tickets?role=student')
            .then(res => {
                setTickets(res.data)
                console.log('res: ', res.data)
            })
            .catch(err => console.log('err: inside StudentDashboard.js', err.message, err.response))
    }, [])

    return(
        <>

        <Container>
            <h2 className='text-center'>Student Dashboard</h2>
            <h6>Welcome! here you will your tools for viewing, adding, and editing your tickets, they will be viewed and responded to by our certified Student Helpers.</h6>
        </Container>
        
        <div style={{padding:'5%'}}>
        <h3 >Posted Tickets:</h3>
        
            {tickets.map(tick => (
            <StudentTicket key={tick.id} ticket={tick}/>
            ))}


        <Row style={{paddingRight:'5%'}}>
        <Col sm='6' md={{offset:'3'}}>
        <Card body className='text-center'>
            <CardTitle>Need to post a ticket to reach out to a helper?</CardTitle>
            <Link to='/addticket'>
                <Button color='primary'>Add a Ticket</Button>
            </Link>            
        </Card>        
        </Col>
        <Col sm='6'>
        {/* <Card body className='text-center'>
            <CardTitle>Want to update a ticket that you've posted?</CardTitle>
            <Link to='/editTicket'>
                <Button color='primary'>Edit Ticket</Button>
            </Link>            
        </Card>             */}
        </Col>
        </Row>
        </div>

        <PrivateRoute path='/addticket'>
           <AddTicket/>
        </PrivateRoute> 

        <PrivateRoute path='/editticket/:id'>
           <EditTicket/>

        </PrivateRoute>
        <PrivateRoute path='/studentticket'>
           <StudentTicket tickets={tickets} setTickets={setTickets} />
        </PrivateRoute>
        </>
    )

}

export default StudentDashboard