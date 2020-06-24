import React, {useState} from 'react'
import axios from 'axios'
import history from '../utils/history'
import {Form, Label, Button, Col, Row} from 'reactstrap'

const Login = props => {
    const [user, setUser] = useState({
        username: '',
        password: '',
        helperCheck: ''
    })

    const handleChanges = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.type === 'checkbox'? e.target.checked: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();
        axios
            .post('https://devdesk-queue-2.herokuapp.com/api/user/login', user)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                if (user.helperCheck === true) {
                    history.push('/staffdashboard')
                    window.location.reload(0)
                } else {
                    history.push('/studentdashboard')
                    window.location.reload(0)
                }
                console.log('res: ', res)
            })
            .catch(err => console.log('err: ', err.message, err.response))
    }

    return(
        <>
            <Form onSubmit={(user => login(user))} style={{padding:'5%'}}>
                <Col>
                <Row>
                    <Label >
                       <Row> Username</Row>
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
                        <Row>Password</Row>
                        <input
                            type='password'
                            name='password'
                            value={user.password}
                            onChange={handleChanges}
                        />                   
                    </Label>
                </Row>
                <Row>
                    <Label>
                        Are you a Helper?
                        <input name ='helperCheck' type='checkbox' data-cy='helpercheck' value={user.helperCheck} onChange={handleChanges}>
                        </input>                    
                    </Label>                    
                </Row>
                <Row>
                    <Button color='primary'>Login</Button>
                </Row>
                </Col>
            </Form>
        </>
    )
}

export default Login