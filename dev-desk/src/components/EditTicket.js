import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import history from '../utils/history'


const initialState = {
    id: '',
    subject:'',
    status:'',
    messages:[]
}

const EditTicket = props => {
    const [ticket, setTicket] = useState(initialState);
    const { id } = useParams();
    const { push } = useHistory();

    const fetchTicket = (id) => {
        axiosWithAuth()
            .get(`/tickets/${id}`)
            .then((res) => setTicket(res.data))
            .catch((err) => console.log('err: EditTicket.js fetchTicket', err.response, err.message))
    }

    console.log(ticket.messages[0])

    useEffect(() => {
        console.log(props)
        fetchTicket(id)
        console.log(ticket)
    }, [id])

    const handleChange = e => {
        e.persist();
        setTicket({
            ...ticket,
            [e.target.name]: e.target.value
        })
        console.log('nb: EditTicket.js: handleChange: ticket: ', ticket);
    }

    const handleDelete = e => {
        e.preventDefault()
        axiosWithAuth()
            .delete(`/tickets/${ticket.id}`)
            .then(res => {
                console.log('res: EditTicket.js ', res)
                push('/studentdashboard')
            })
            .catch(err => 
                console.error('err: ', err.message, err.response)
            )
    }

    const handleSubmit = ev => {
        ev.preventDefault();
        // make a PUT request to edit the item
    }

    const handleUpdates = eve => {
        eve.preventDefault()
        axiosWithAuth()
            .patch(`/tickets/${ticket.id}/update`, ticket)
            .then(res => {
                console.log('res: EditTicket.js: handleUpdates ', res)
                history.push('/studentdashboard')
                window.location.reload(0)
            })
            .catch(err => console.log("err: handleUpdates ", err))
    }

    return (
        <div>
            <h2>Update Ticket</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='subject'
                    onChange={handleChange}
                    placeholder='subject'
                    value={ticket.subject}
                />
                {
                    ticket.messages[0] === undefined ? (
                        <input
                            type='text'
                            name='messages'
                            onChange={handleChange}
                            placeholder='Message'
                            value={ticket.messages,[0].body}
                        />
                    ) : (
                        <input
                            type='text'
                            name='messages'
                            onChange={handleChange}
                            placeholder='Message'
                            value={ticket.messages[0].body}
                        />
                    )
                }
                <button onClick={handleUpdates}>Update Ticket</button>
                <button onClick={handleDelete} color='primary'>Mark Ticket Complete</button>
            </form>
        </div>
    )
}

export default EditTicket