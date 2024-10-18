import React, { useEffect } from 'react'
import { useState } from 'react'
import User from './User'

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data)
        )
    }, [])

  return (
    <div className='user'>
        <h3>Users: {users.length}</h3>

        {
          users.map(user => <User user={user} />)
        }
    </div>
  )
}
