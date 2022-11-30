import React from 'react'

const UserList = (props) => {
  const clickHander = () => {
    props.onRemoveUser(props.user.id)
    //console.log('click id', props.user.id)
  }
  return (
    <div onClick={clickHander}>
        <div>name: {props.user.name}</div>
        <div>phone: {props.user.phone} - <span>info: {props.user.info}</span></div>
        
    </div>
  )
}

export default UserList