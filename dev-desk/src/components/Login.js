import React, {useState} from 'react'
import axios from 'axios'
import {Form, Label, Button} from 'reactstrap'
import history from '../utils/history'
// import { Link } from 'react-router-dom'

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
        axios
            .post('https://devdesk-queue-2.herokuapp.com/api/user/login', user)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                history.push('/studentdashboard')
                window.location.reload(0)
                console.log(res)
            })
            .catch(err => console.log('err: ', err.message, err.response))
    }

    return(
        <>
            <Form onSubmit={(user => login(user))}>
                <Label>
                    Username
                    <input
                        type='username'
                        name='username'
                        value={user.username}
                        onChange={handleChanges}
                    />
                </Label>                
                <Label>
                    Password
                    <input
                        type='password'
                        name='password'
                        value={user.password}
                        onChange={handleChanges}
                    />                   
                </Label>
                <button type='submit'>Login</button>
            </Form>
        </>
    )
}

export default Login