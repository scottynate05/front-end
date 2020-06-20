import React, {useState} from 'react'
import {Form, Label} from 'reactstrap'

const Login = () => {
    return(
        <>
            <Form>
                <Label>
                    Username
                    <input name ='username' >
                    </input>                    
                </Label>                
                <Label>
                    Password
                    <input name ='password' >
                    </input>                    
                </Label>
            </Form>
        </>
    )
}

export default Login