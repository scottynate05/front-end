import React,{useState} from 'react'
import {Form,Row, Col, Label, Button} from 'reactstrap'
import axios from 'axios'

const AddTicket = () => {

const [newTicket,setNewTicket] = useState({
    subject:'',
    message:'',
})

const eventHandler = (event) => {
    event.persist()
    setNewTicket({
        ...newTicket, 
        [event.target.name]:event.target.type === "checkbox"? event.target.checked: event.target.value
    })
}
console.log(newTicket)

const submitButton = (e) => {
    e.preventDefault();
    axios.post('https://reqres.in/api/users', newTicket)
        .then(res=>{
            console.log('res', res)
        })
        .catch(err => {
            console.log('err: ', err.message, err.response)
        })   
}

    return (
        <div style={{paddingLeft:'5%'}}>
            <h3>Add Ticket</h3>
            <Form onSubmit={(event) =>{event.preventDefault()}}>
                <Col>
                    <Row>
                        <Label>
                            Subject:
                        </Label>                     
                    </Row>
                    <Row>
                        <input name='subject' type='text' value={newTicket.subject} onChange={eventHandler}>
                        </input>                     
                    </Row>
                    <Row>
                        <Label>
                            Message:
                        </Label>     
                    </Row>             
                    <Row>
                        <textarea name='message' type='text' value={newTicket.message} onChange={eventHandler}>
                        </textarea>      
                    </Row>   
                    <Button color='primary' >Add</Button>   
                </Col>
            </Form>
        </div>
    )
}

export default AddTicket