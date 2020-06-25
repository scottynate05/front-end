import React, { useState, useEffect } from 'react'
import {Card, CardSubtitle, Button} from 'reactstrap'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

// const [tickets, setTickets] = useState([])
// const { id } = useParams()
// const { push } = useHistory()

// const fetchTicket = (id) => {
//     axios
//         .get(`https://devdesk-queue-2.herokuapp.com/api/tickets/${id}`)
//         .then((res) => setTickets(res.data))
//         .catch((err) => console.log('err: ', err.response, err.message))
// }

// useEffect(() => {
//     fetchTicket(id)
// }, [id])

// if (!tickets) {
//     return <div>Loading ticket information...</div>
// }

// const handleDelete = e => {
//     e.preventDefault()
//     axios
//         .delete(`https://devdesk-queue-2.herokuapp.com/api/tickets/${id}`)
//         .then(res => {
//             setTickets(res.data)
//             push('/studentdashboard')
//         })
//         .catch(err => 
//             console.error('err: ', err.message, err.response)
//         )
// }

const StudentTicket = (props) => {
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
            {/* <Button onClick={() => push(`/editticket/${id}`)}>Edit Ticket</Button> */}
            {/* <Button onClick={handleDelete} color='primary'>Delete Ticket</Button> */}
        </Card>
        
    )
}

export default StudentTicket