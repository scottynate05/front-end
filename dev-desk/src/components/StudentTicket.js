import React from 'react'
import {Card, CardSubtitle} from 'reactstrap'



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
        </Card>
        
    )
}

export default StudentTicket