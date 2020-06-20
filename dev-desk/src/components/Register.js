import React, {useState} from 'react'

import {Form, Label, Col, Row} from 'reactstrap'
import * as yup from 'yup'


const Register = () => {

    const validate = (event) => {
        yup.reach(formschema,event.target.name)
        .validate(event.target.type === 'checkbox'? event.target.checked: event.target.value)
        .then( valid => {
            setErrors({
                ...errors,
                [event.target.name]:''
            })
        })
        .catch( err => {
            console.log('error:', err.errors)
            setErrors({ ...errors,
            [event.target.name]:err.errors[0]})
        })
    }

    const formschema = yup.object().shape({
        username:yup.string().required('Username is required'),
        password:yup.string().required('Password is required').matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
        repassword:yup.string().required('Must reenter password').oneOf([yup.ref('password'), null], 'Passwords must match'),
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

    const [errors,setErrors] = useState (
        username='',
        password='',
        repassword='',
        helperCheck='',    
        studentCheck=''        
    )

    const eventChange = (event) => {
        event.persist()
        validate(event)
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
                            <input name ='helperCheck' type='checkbox' value={formData.helperCheck} onChange={eventChange}>
                            </input>                    
                        </Label>                    
                    </Col>
                    <Col>
                    <Label>
                        Are you a Student?
                        <input name ='studentCheck' type='checkbox' value={formData.studentCheck} onChange={eventChange} >
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