import React from 'react'
import {Card, CardTitle, CardSubtitle, CardText} from 'reactstrap'



const StudentTicket = (props) => {
    return(
 
        <Card>
            <CardTitle>
                {props.ticket.subject}
            </CardTitle>
            <CardSubtitle>
                status:{props.ticket.status}
            </CardSubtitle>
            <CardText>
                {props.ticket.messages[0].body}
            </CardText>
        </Card>
    )
}

export default StudentTicket