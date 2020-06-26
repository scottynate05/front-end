import React,{ useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button, Container,Row,Col, Card, CardTitle} from 'reactstrap'
import StaffTicket from './StaffTicket'
import TicketList from './TicketList'
import axiosWithAuth from '../utils/axiosWithAuth'
import PrivateRoute from './PrivateRoute'



const StaffDashboard = () => {
    const [staffTicket,setStaffTicket] = useState([])
    const [tickets, setTickets] = useState([])
    const [openTickets, setOpenTickets] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('https://devdesk-queue-2.herokuapp.com/api/tickets/queue')
            .then(res => {
                setOpenTickets(res.data)
                console.log('res: ', res.data)
            })
            .catch(err => console.log('err: ', err.message, err.response))
    }, [])

    useEffect(() => {
        axiosWithAuth()
            .get('/tickets?role=helper')
            .then(res => {
                setTickets(res.data)
                console.log('res: ', res.data)
            })
            .catch(err => console.log('err: ', err.message, err.response))
    }, [])

    useEffect(() => {
        axiosWithAuth()
            .get('/tickets')
            .then(res => {
                setStaffTicket(res.data)
                console.log('res: ', res.data)
            })
            .catch(err => console.log('err: ', err.message, err.response))
    }, [])


    return (
        <>
        <Container className='text-center'>
            <h2>Staff Dashboard</h2>
            <h6 >Welcome! Here you will your tools for viewing, and resolving tickets.</h6>
        </Container>

        <h3>Open Tickets:</h3>
        <Row style={{paddingLeft:'5%'}}>
            {openTickets.map(tick => (
            <TicketList key={tick.id} ticket={tick}/>))}
        </Row>

        {staffTicket.map(tick => (
            <StaffTicket key={tick.id} ticket={tick}/>
            ))}

        <Card body className='text-center'>
            <CardTitle>Looking to view your assigned tickets?</CardTitle>
            <Link to ='/staffticket'>
                <Button color='primary'>Open Staff Tickets</Button>
            </Link>           
        </Card>                 

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