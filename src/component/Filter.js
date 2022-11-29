import React from 'react'

const Filter = ({onSelect}) => {
    const changeHandler = (e) => {
        console.log(e.target.value)
        onSelect(e.target.value)
    }
  return (
    <div>
        <select onChange={changeHandler}>
            <option value="all">전체</option>
            <option value="phone">phone</option>
            <option value="mobile">mobile</option>
        </select>
    </div>
  )
}

export default Filter