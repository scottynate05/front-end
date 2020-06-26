import React from 'react'
import {Card,CardText,Button,Col} from 'reactstrap'

const TicketList = (props) => {
    return(
        <>
        <Col sm='5'>
        <Card style={{marginTop:'2%'}}>
        <h4>{props.ticket.subject}</h4>
        <h6>{props.ticket.messages[0].body}</h6> 
        <Col sm='3'>
        <Button color='primary'>Assign </Button>   
        </Col>
        </Card>
        </Col>
        </>
    )
}

export default TicketList