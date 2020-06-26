import React, { useEffect, useState} from 'react'
import {Card, CardSubtitle, Button,Col} from 'reactstrap'
import axiosWithAuth from '../utils/axiosWithAuth'



const StaffTicket = (props) => {

const [staffTicket,setStaffTicket] =useState([])
    
const fetchTicket = () => {
        axiosWithAuth()
            .get(`https://devdesk-queue-2.herokuapp.com/api/tickets`)
            .then((res) => setStaffTicket(res.data))
            .catch((err) => console.log('err: inside StudentTicket.js', err.response, err.message))
    }
    useEffect(() => {
        console.log(props)
        fetchTicket()
        console.log(props.ticket.status)
    }, [])


console.log(props)
return(
    <>
    <Card style={{margin:'2%'}}>
                    <h4>
                    {props.ticket.subject}    
                    </h4>
                    <CardSubtitle>
                        status: 
                    </CardSubtitle>
                    <Col sm='3'>
                    <Button color='primary'>Update Ticket</Button>
                    </Col>
                </Card>
    </>
)
}
export default StaffTicket