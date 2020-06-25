import React from 'react'
import {Card,CardText,Button} from 'reactstrap'

const TicketList = (props) => {
    return(
        <>
        <Card>
        <h4>{props.ticket.subject}</h4>
        <h6>{props.ticket.messages[0].body}</h6>  
        <Button color='primary'>Assign </Button>          
        </Card>

        </>
    )
}

export default TicketList