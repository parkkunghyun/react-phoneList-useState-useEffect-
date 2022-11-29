import React from 'react'
import UserList from './UserList'
import Filter from './Filter'
import { useState } from 'react'
const ListBox = ({users}) => {
    const [selectVal, setSelectVal] = useState('all')
    const selectChangeHandler = (p) => {
        // 자식이 선택한 value를 받아서 저장
        console.log(p+"dd")
        setSelectVal(p)
    }
    const filterUsers = users.filter((user)=> {
        if (selectVal === 'all') {
            return user
        }
        return user.info === selectVal
    })
  return (
    <>
        <Filter onSelect={selectChangeHandler}/>
    <div>
      {
        filterUsers.map((user)=> (
          <UserList user={user} key={user.id}/>
        ))
      }

      </div>
    </>
  )
}

export default ListBox