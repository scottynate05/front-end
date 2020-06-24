import React from 'react'
import {Link,Route} from 'react-router-dom'
import {Button, Container,Row,Col, Card, CardTitle,CardSubtitle} from 'reactstrap'
import StaffTicket from './StaffTicket'
import TicketList from './TicketList'

const StaffDashboard = () => {
    return (
        <>
        <Container className='text-center'>
            <h2>Staff Dashboard</h2>
            <h6 >Welcome! here you will your tools for viewing, and resolving tickets.</h6>
        </Container>

        <Row style={{paddingLeft:'5%',paddingRight:'5%'}}>
        <Col sm='6'>
        <Card body className='text-center'>
            <CardTitle>Loooking to view the tickets assigned to you?</CardTitle>
            <Link to ='/staffticket'>
                <Button>Open Staff Tickets</Button>
            </Link>           
        </Card>        
        </Col>
        <Col sm='6'>
        <Card body className='text-center'>
            <CardTitle>Want to every ticket posted?</CardTitle>
            <Link to ='/ticketlist'>
                <Button>Open Ticket List</Button>
            </Link>           
        </Card>            
        </Col>
        </Row>

        <Route to ='/staffticket'>
            <StaffTicket/>
        </Route>
        
        <Route to ='/ticketlist'>
            <TicketList/>
        </Route>
            
        </>
    )
}

export default StaffDashboard