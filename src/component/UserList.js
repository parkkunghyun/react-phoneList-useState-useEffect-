import React from 'react'

const UserList = (props) => {
  return (
    <div>
        <div>name: {props.user.name}</div>
        <div>phone: {props.user.phone} - <span>info: {props.user.info}</span></div>
        
    </div>
  )
}

export default UserList