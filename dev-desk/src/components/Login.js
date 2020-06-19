import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import {Form, Label, Button} from 'reactstrap'

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
            <Form>
                <Label onSubmit={(user => login(user))}>
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
                <Button>Login</Button>
            </Form>
        </>
    )
}

export default Login