import React from 'react'
import {Form,Row, Col, Label} from 'reactstrap'

const AddTicket = () => {
    return (
        <div style={{paddingLeft:'5%'}}>
        <h3>Add Ticket</h3>
        <Form >
            <Col>
                <Row>
                <Label>
                    Subject:
                </Label>                     
                </Row>
                <Row>
                <input name='subject'>
                </input>                     
                </Row>
               <Row>
                <Label>
                    Message:
                </Label>     
                 </Row>             
                <Row>
                <textarea name='message' type='text'>
                </textarea>      
                </Row>
         
                          
            </Col>
        </Form>
        </div>
    )
}

export default AddTicket