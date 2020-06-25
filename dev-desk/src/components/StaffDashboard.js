import React,{ useState, useEffect} from 'react'
import {Link,Route} from 'react-router-dom'
import {Button, Container,Row,Col, Card, CardTitle} from 'reactstrap'
import StaffTicket from './StaffTicket'
import TicketList from './TicketList'
import axiosWithAuth from '../utils/axiosWithAuth'



const StaffDashboard = () => {

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
            .get('/tickets')
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

        <div style={{padding:'5%'}}>
            <h3>Open Tickets:</h3>
            {openTickets.map(tick => (
            <TicketList key={tick.id} ticket={tick}/>))}
        </div>

        <Card body className='text-center'>
            <CardTitle>Looking to view your assigned tickets?</CardTitle>
            <Link to ='/staffticket'>
                <Button color='primary'>Open Staff Tickets</Button>
            </Link>           
        </Card>                 

        <Route path ='/staffticket'>
            <StaffTicket/>
        </Route>
            
        </>
    )
}

export default StaffDashboard