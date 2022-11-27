import React from 'react'

const UserList = (props) => {
  return (
    <div>
        <div>name: {props.user.name}</div>
        <div>phone: {props.user.phone} - <span>info: mobile</span></div>
        
    </div>
  )
}

export default UserList