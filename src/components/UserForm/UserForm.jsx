import React from 'react'
import { useState } from 'react';


export default function UserForm({ onUserAdd }) {
    const[email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        //console.log(name, email)
        onUserAdd({ name, email })
        setName('');
        setEmail('');
    }
    
  return (
    <form className="flex flex-col items-center p-5 gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
            <label htmlFor='name'>Name</label>
            <input
            id="name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}></input>
        </div>
        <div className="flex flex-col gap-2 pb-2">
            <label htmlFor='email'>Email</label>
            <input
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}></input>
        </div>
        <button className="rounded-full bg-violet-400 px-5 pt-2 pb-2 ">Add User</button>
    </form>
  )
}
