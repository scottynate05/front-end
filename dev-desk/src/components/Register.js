import React, {useState} from 'react'
import {Form, Label} from 'reactstrap'

const Register = () => {

    const [formData, setFormData] = useState({
        username='',
        password='',
        repassword='',
        helperCheck=false,    
        studentCheck=false
    })

    const eventChange = (event) => {
        event.persist()
        setFormData({ ...formData,
            [event.target.name]: event.target.type === 'checkbox'? event.target.checked: event.target.value
        })

    }

    return(
        <>
            <Form>
                <Label>
                    Username
                    <input name ='username' type='text' value={formData.username} >
                    </input>                    
                </Label>                
                <Label>
                    Password
                    <input name ='password' type='text' value={formData.password}>
                    </input>                    
                </Label>
                <Label>
                    Re-enter Password
                    <input name ='repassword' type='text' value={formData.repassword}>
                    </input>                    
                </Label>
                <Label>
                    Are you a Helper?
                    <input name ='helperCheck' type='checkbox' value={formData.helperCheck} onChange={eventChange}>
                    </input>                    
                </Label>
                <Label>
                    Are you a Student?
                    <input name ='studentCheck' type='checkbox' value={formData.studentCheck} onChange={eventChange} >
                    </input>                    
                </Label>
                <Button>Register</Button>
            </Form>
        </>
    )
}

export default Register