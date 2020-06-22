import React, { useState, useEffect } from 'react'
import {Button} from 'reactstrap'
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
           <StudentTicket tickets={tickets} setTickets={setTickets} />
        </Route>
        </>
    )

}

export default StudentDashboard