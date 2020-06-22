import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import {Form, Label, Button, Card, Col, Row} from 'reactstrap'

const Login = props => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChanges = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/user/login', user)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                props.history.push('/user')
            })
            .catch(err => console.log('err: ', err.message, err.response))
    }

    return(
        <>
            <Form style={{padding:'5%'}}>
                <Col>
                <Row>
                    <Label onSubmit={(user => login(user))}>
                        Username
                        <input
                            type='username'
                            name='username'
                            value={user.username}
                            onChange={handleChanges}
                        />
                    </Label>  
                </Row>
                <Row>
                    <Label>
                        Password
                        <input
                            type='password'
                            name='password'
                            value={user.password}
                            onChange={handleChanges}
                        />                   
                    </Label>
                </Row>
                    <Row>
                        <Button>Login</Button>
                    </Row>
                </Col>
            </Form>
        </>
    )
}

export default Login