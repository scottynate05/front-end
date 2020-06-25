import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialState = {
    id: '',
    subject:'',
    status:'',
    message:''
}
const EditTicket = props => {
    const [ticket, setTicket] = useState(initialState);
    const { id } = useParams();
    const { push } = useHistory();
    useEffect(() => {
        axiosWithAuth()
            .get(`/tickets/:id${ticket.id}`)
            .then(res => setTicket(res.data))
            .catch(err =>
                console.error(
                    'nb: UpdateTicket.js: useEffect: err: ',
                    err.message,
                    err.response
                )
            )
    }, [])
    const handleChange = e => {
        e.persist();
        setTicket({
            ...ticket,
            [e.target.name]: e.target.value
        })
        console.log('nb: EditTicket.js: handleChange: ticket: ', ticket);
    }
    const handleSubmit = ev => {
        ev.preventDefault();
        // make a PUT request to edit the item
        axiosWithAuth()
            .put(`/tickets/:id${ticket.id}/update`, ticket)
            .then(res => {
                const newticket = props.ticket.map(tic => {
                    if (tic.id === ticket.id) {
                        return ticket;
                    }
                    return tic;
                })
                setTicket(newticket)
                push(`/ticketlist/${ticket.id}`)
                window.location.reload(0)
                // <Redirect to='/' />
            })
            .catch(err =>
                console.log(
                    'nb: UpdateTicket.js: handleSubmit: err: ',
                    err.message,
                    err.response
                )
            )
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
                <input

                    type='text'
                    name='message'
                    onChange={handleChange}
                    placeholder='Message'
                    value={ticket.messages,[0].body}
                />
                <button>Update Ticket</button>
            </form>
        </div>
    )
}

export default EditTicket