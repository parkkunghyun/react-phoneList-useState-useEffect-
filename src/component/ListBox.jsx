import React from 'react'
import UserList from './UserList'
import Filter from './Filter'
import { useState, useMemo } from 'react'

const ListBox = ({users,onRemoveUser}) => {
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
    const filterMobileUsers = (users) => {
        console.log('엄청복잡한 함수여서 성능다운시키는녀석')
        // 이렇게 그냥 함수로만 사용한다면 렌데링 될때마다 계속 불필요하게 함수실행된다!
        // 
        return users.filter((user) => user.info === 'mobile').length
    }
    const count = useMemo(()=>
    filterMobileUsers(users)
    ,[users])
    // select를 바꾸어도  이함수는 렌더링 안됨!
    // users자체를 바꾸면그때는 렌더링!

  return (
    <>
        <h1>{count}</h1>
        <Filter onSelect={selectChangeHandler}/>
    <div>
      {
        filterUsers.map((user)=> (
          <UserList onRemoveUser={onRemoveUser} user={user} key={user.id}/>
        ))
      }

      </div>
    </>
  )
}

export default ListBox