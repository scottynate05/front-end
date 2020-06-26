import React from 'react'
import {Card,CardText,Button} from 'reactstrap'

const TicketList = (props) => {
    return(
        <>
        {
            props.ticket.status === 'open' ?
            (
                <Card>
                <h4>{props.ticket.subject}</h4>
                <h6>{props.ticket.messages[0].body}</h6>  
                <Button color='primary'>Help Student</Button>          
                </Card>
            ) : ''
        }
        </>
    )
}

export default TicketList