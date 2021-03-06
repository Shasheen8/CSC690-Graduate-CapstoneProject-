import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';
import Ibar from '../Ibar/Ibar.js';
import Input from '../Input/Input.js';
import Messages from '../Messages/Messages.js';


let socket;

const Chat= ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';

    //using hooks to set up a chat environment once user is logged into the set-up room 
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
 
        socket= io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, ( error ) =>{
            if (error){
                alert(error);
            }
        });


    }, [ENDPOINT, location.search]);

    //Hooks and function for sending messages by the users 
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });

        socket.on('roomData', ({ users })=>{ 
            setUsers(users);
        })

    
    return () => {
        socket.emit('disconnect');

        socket.off();
    }
},[messages])

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
        socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

   //Integrating the Input and messaging features. 

    return (
        <div className="outerContainer"> 
            <div className="container">
                <Ibar room = {room}/>
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                
            </div>
        </div>
        );
    }

export default Chat;
