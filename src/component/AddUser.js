import React from 'react'

const AddUser = ({name,phone, onChange, addUser}) => {
  return (
    <div>
        <input type="text" name="name" value={name} onChange={onChange} placeholder='name'/>
        <input type="text" name="phone" value={phone} onChange={onChange} placeholder='phone'/>
        <button onClick={addUser}>추가</button>
    </div>
  )
}

export default AddUser