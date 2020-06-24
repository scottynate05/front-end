import React from 'react'
import {Card, CardTitle} from 'reactstrap'
const StudentTicket = (props) => {
    return(
        <> 
        <Card>
            <CardTitle>
                {props.subject}
            </CardTitle>
        </Card>
        </>
    )
}

export default StudentTicket