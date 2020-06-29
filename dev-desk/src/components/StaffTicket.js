import React, { useEffect, useState} from 'react'
import {Card, CardSubtitle, Button,Col} from 'reactstrap'
import { useParams, useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth'
import history from '../utils/history'

const initialState = {
    id: '',
    subject:'',
    status:'',
    messages:[]
}

const StaffTicket = (props) => {
    const [ticket, setTicket] = useState(initialState);
    const { id } = useParams();
    const { push } = useHistory();
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
        // console.log(props.ticket.status)
    }, [])

    const handleDelete = e => {
        e.preventDefault()
        axiosWithAuth()
            .delete(`/tickets/${props.ticket.id}`)
            .then(res => {
                console.log('res: EditTicket.js ', res)
                history.push('/staffdashboard')
                window.location.reload(0)
            })
            .catch(err => 
                console.error('err: ', err.message, err.response)
            )
    }
    
    const unassignTicket = ev => {
        ev.preventDefault()
        axiosWithAuth()
            .patch(`https://devdesk-queue-2.herokuapp.com/api/tickets/${props.ticket.id}/unassign`, setTicket)
            .then(res=>{
                console.log('res', res)
                history.push('/staffdashboard')
                window.location.reload(0)
            })
            .catch(err => {
                console.log('err: ', err.message, err.response)
            })
    }


console.log(props)
return(
    <>
    <Card style={{margin:'2%'}}>
                    <h4>
                    {props.ticket.subject}
                    </h4>
                    <CardSubtitle>
                        status: {props.ticket.status}
                    </CardSubtitle>
                    <h4>
                    {props.ticket.messages[0].body}
                    </h4>
                    <Col sm='3'>
                    <Button onClick={handleDelete} color='primary'>Mark Ticket Complete</Button>
                    <Button onClick={unassignTicket} color='primary'>Unassign Ticket</Button>
                    </Col>
                </Card>
    </>
)
}
export default StaffTicket