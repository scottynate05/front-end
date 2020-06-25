import React from 'react'
import {Card,CardText} from 'reactstrap'

const TicketList = (props) => {
    return(
        <>
        <Card>
        <h4>{props.ticket.subject}</h4>
        <h6>{props.ticket.messages[0].body}</h6>            
        </Card>

        </>
    )
}

export default TicketList