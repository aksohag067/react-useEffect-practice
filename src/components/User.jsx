import React from 'react'

export default function User({user}) {
  const {name, email} = user;
  
  return (
    <div className='user'>
      <h4>Name: {name} </h4>
      <p>Email: {email} </p>
    </div>
  )
}
