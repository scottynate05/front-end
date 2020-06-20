import React from 'react'
import {Button} from 'reactstrap'
import {Link,Route} from 'react-router-dom'
import AddTicket from './AddTicket'
import EditTicket from './EditTicket'
import StudentTicket from './StudentTicket'

const StudentDashboard = () => {
    return(
        <>
        <Link to='/addticket'>
            <Button>Add a Ticket</Button>
        </Link>
        <Link to='/editTicket'>
            <Button>Edit Existing Ticket</Button>
        </Link>
        <Link to='/studentticket'>
            <Button>Student Ticket</Button>
        </Link>     

        <Route path='/addticket'>
           <AddTicket/>
        </Route> 
        <Route path='/editTicket'>
           <EditTicket/>
        </Route>
        <Route path='/studentticket'>
           <StudentTicket/>
        </Route>
        </>
    )

}

export default StudentDashboard