import React from 'react'
import { useState } from 'react';
import UserForm from '../../components/UserForm/UserForm';
import UserList from '../../components/UserList/UserList';

export default function TestingPage() {

    const[users, setUsers] = useState([]);

    const onUserAdd = (user) => {
        setUsers([...users, user])
    }

  return (
    <div className="flex flex-col items-center pt-5">
        <h1 className="font-bold">Testing Demo</h1>
       <UserForm onUserAdd={onUserAdd} /> 
       <hr></hr>
       <UserList users={users} />
    </div>
  )
}
