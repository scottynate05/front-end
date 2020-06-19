import React, {useState} from 'react'

import {Form, Label, Col, Row} from 'reactstrap'
import * as yup from 'yup'


const Register = () => {

    const validate = (event) => {
        yup.reach(formschema,event.target.name)
    }

    const formschema = yup.object().shape({
        username:yup.string().required('Username is required'),
        password:yup.string().required('Password is required'),
        repassword:yup.string().required('Must reenter password'),
        helperCheck: yup.boolean(),
        studentCheck: yup.boolean()
    })

    const [formData, setFormData] = useState({
        username:'',
        password:'',
        repassword:'',
        helperCheck:false,    
        studentCheck:false
    })

    const eventChange = (event) => {
        event.persist()
        setFormData({ ...formData,
            [event.target.name]: event.target.type === 'checkbox'? event.target.checked: event.target.value
        })

    }

    const [buttonDisabled, setButtonDisabled] = useState(true)

    return(
        <>
            <Form>
                <Row>
                    <Col>
                        <Label>
                            Username
                            <input name ='username' type='text' value={formData.username} >
                            </input>                    
                        </Label>                    
                    </Col>
                    <Col>
                        <Label>
                            Password
                            <input name ='password' type='text' value={formData.password}>
                            </input>                    
                        </Label>                    
                    </Col>
                    <Col>
                        <Label>
                            Re-enter Password
                            <input name ='repassword' type='text' value={formData.repassword}>
                            </input>                    
                        </Label>                    
                    </Col>
                    <Col>
                        <Label>
                            Are you a Helper?
                            <input name ='helperCheck' type='radio' value={formData.helperCheck} onChange={eventChange}>
                            </input>                    
                        </Label>                    
                    </Col>
                    <Col>
                    <Label>
                        Are you a Student?
                        <input name ='studentCheck' type='radio' value={formData.studentCheck} onChange={eventChange} >
                        </input>                    
                    </Label>                    
                    </Col>
                    <Col>
                        <Button disabled ={buttonDisabled}>Register</Button>                    
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default Register