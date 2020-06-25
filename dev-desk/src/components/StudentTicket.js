import React, { useState, useEffect } from 'react'
import {Card, CardSubtitle, Button,Row,Col} from 'reactstrap'
import { useParams, useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'



const StudentTicket = (props) => {

    const [tickets, setTickets] = useState([])
    const { id } = useParams()
    const { push } = useHistory()

    const fetchTicket = () => {
        axiosWithAuth()
            .get(`https://devdesk-queue-2.herokuapp.com/api/tickets`)
            .then((res) => setTickets(res.data))
            .catch((err) => console.log('err: inside StudentTicket.js', err.response, err.message))
    }

    useEffect(() => {
        console.log(props)
        fetchTicket()
        console.log(props.ticket.status)
    }, [])

    // if (!tickets) {
    //     return <div>Loading ticket information...</div>
    // }

    return(
        <div>
            {
                props.ticket.status == 'open' ?
                (<Card style={{margin:'2%'}}>
                    <h4>
                        {props.ticket.subject}
                    </h4>
                    <CardSubtitle>
                        status:{props.ticket.status}
                    </CardSubtitle>
                    <h6>
                        {props.ticket.messages[0].body}
                    </h6>
                    <Button onClick={() => push(`/editticket/${props.ticket.id}`, tickets)} color='primary'><Link to='/editticket/:id'>Update Ticket</Link></Button>
                </Card>) : ''
            }
        </div>
    )
}

export default StudentTicket