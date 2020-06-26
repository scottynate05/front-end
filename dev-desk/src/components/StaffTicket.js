import React, { useState, useEffect } from 'react'
import {Card, CardSubtitle, Button,Row,Col} from 'reactstrap'
import { useParams, useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'



const StaffTicket = (props) => {

const [staffTicket,setStaffTicket] =useState([])

return(
    <>
    <Card style={{margin:'2%'}}>
                    <h4>
                        props
                    </h4>
                    <CardSubtitle>
                        status: props
                    </CardSubtitle>
                    <h6>
                        props
                    </h6>
                    <Col sm='3'>
                    <Button color='primary'>Update Ticket</Button>
                    </Col>
                </Card>
    </>
)
}
export default StaffTicket