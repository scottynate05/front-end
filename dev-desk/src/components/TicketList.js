import React from 'react'
import {Card,Button,Col} from 'reactstrap'

const TicketList = (props) => {
    return(
        <>
        {
            props.ticket.status === 'open' ?
            (
                <Col sm='5'>
                <Card style={{marginTop:'2%'}}>
                <h4>{props.ticket.subject}</h4>
                <h6>{props.ticket.messages[0].body}</h6>  
                <Button color='primary'>Help Student</Button>          
                </Card>
                </Col>
            ) : ''
        }
        </>
    )
}

export default TicketList