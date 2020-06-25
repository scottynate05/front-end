import React,{ useState, useEffect} from 'react'
import {Link,Route} from 'react-router-dom'
import {Button, Container,Row,Col, Card, CardTitle} from 'reactstrap'
import StaffTicket from './StaffTicket'
import TicketList from './TicketList'
import axiosWithAuth from '../utils/axiosWithAuth'
import PrivateRoute from './PrivateRoute'



const StaffDashboard = () => {

    const [tickets, setTickets] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('/tickets?role=helper')
            .then(res => {
                setTickets(res.data)
                console.log('res: ', res.data)
            })
            .catch(err => console.log('err: ', err.message, err.response))
    }, [])

    return (
        <>
        <Container className='text-center'>
            <h2>Staff Dashboard</h2>
            <h6 >Welcome! here you will your tools for viewing, and resolving tickets.</h6>
        </Container>

        <Row style={{paddingLeft:'5%',paddingRight:'5%'}}>
        <Col sm='6'>
        <Card body className='text-center'>
            <CardTitle>Loooking to view your assigned tickets?</CardTitle>
            <Link to ='/staffticket'>
                <Button color='primary'>Open Staff Tickets</Button>
            </Link>           
        </Card>        
        </Col>
        <Col sm='6'>
        <Card body className='text-center'>
            <CardTitle>Want to see every ticket posted?</CardTitle>
            <Link to ='/ticketlist'>
                <Button color='primary'>Open Ticket List</Button>
            </Link>           
        </Card>            
        </Col>
        </Row>

        <PrivateRoute path ='/staffticket'>
            <StaffTicket/>
        </PrivateRoute>
        
        <PrivateRoute path ='/ticketlist'>
            <TicketList/>
        </PrivateRoute>
            
        </>
    )
}

export default StaffDashboard