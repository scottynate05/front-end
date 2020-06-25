import React, { useState, useEffect } from 'react'
import {Card, CardSubtitle, Button} from 'reactstrap'
import { useParams, useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'



const StudentTicket = (props) => {

    const [tickets, setTickets] = useState([])
    const { id } = useParams()
    const { push } = useHistory()

    const fetchTicket = (id) => {
        axiosWithAuth()
            .get(`https://devdesk-queue-2.herokuapp.com/api/tickets/${id}`)
            .then((res) => setTickets(res.data))
            .catch((err) => console.log('err: ', err.response, err.message))
    }

    useEffect(() => {
        fetchTicket(id)
    }, [id])

    // if (!tickets) {
    //     return <div>Loading ticket information...</div>
    // }

    const handleDelete = e => {
        e.preventDefault()
        axiosWithAuth()
            .delete(`/tickets${id}`)
            .then(res => {
                setTickets(res.data)
                push('/studentdashboard')
            })
            .catch(err => 
                console.error('err: ', err.message, err.response)
            )
    }


    return(
 
        <Card style={{margin:'2%'}}>
            <h4>
                {props.ticket.subject}
            </h4>
            <CardSubtitle>
                status:{props.ticket.status}
            </CardSubtitle>
            <h6>
                {props.ticket.messages[0].body}
            </h6>
            <Button onClick={() => push(`/editticket/${id}`)} color='primary'><Link to='/editticket'>Update Ticket</Link></Button>
            <Button onClick={handleDelete} color='primary'>Delete Ticket</Button>
            <Button color='primary'>Mark as Complete</Button>
        </Card>
    )
}

export default StudentTicket