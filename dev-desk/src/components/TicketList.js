import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import {Card,CardText,Button,Col} from 'reactstrap'
import axiosWithAuth from '../utils/axiosWithAuth'
import history from '../utils/history'

const initialState = {
    id: '',
    subject:'',
    status:'',
    messages:[]
}

const TicketList = (props) => {
    const [ticket, setTicket] = useState(initialState);
    const { id } = useParams();
    // const { push } = useHistory();

    const handleAssign = e => {
        e.preventDefault()
        axiosWithAuth()
            .patch(`/tickets/${props.ticket.id}/assign`, ticket)
            .then(res => {
                console.log('res: TicketList.js: handleAssign: ', res)
                history.push('/staffticket')
                window.location.reload(0)
            })
            .catch(err => console.log('err: TicketList.js: handleAssign: ', err.message, err.response))
    }

    return(
        <>
        {
            props.ticket.status === 'open' ?
            (
                <Col sm='5'>
                <Card style={{marginTop:'2%'}}>
                <h4>{props.ticket.subject}</h4>
                <h6>{props.ticket.messages[0].body}</h6>  
                <Button onClick={handleAssign} color='primary'>Help Student</Button>          
                </Card>
                </Col>
            ) : ''
        }
        </>
    )
}

export default TicketList