import React from 'react'
import {Link,Route} from 'react-router-dom'
import {Button} from 'reactstrap'
import StaffTicket from './StaffTicket'
import TicketList from './TicketList'

const StaffDashboard = () => {
    return (
        <>
        <h2>Welcome to your Staff Dashboard</h2>
        <Link to ='/staffticket'>
            <Button>Open Staff Tickets</Button>
        </Link>

        <Link to ='/ticketlist'>
            <Button>Open Staff Tickets</Button>
        </Link>

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