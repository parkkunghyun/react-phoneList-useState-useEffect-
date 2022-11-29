import React,{useState, useRef} from 'react'

const AddUser = (props) => {

  const count = useRef(4)
  const [inputs, setInputs] = useState({
    name: '',
    phone: ''
  })

  let userInfo = ''
  
  if((/\d{3}-\d{3,4}-\d{4}/g).test(inputs.phone)){
    userInfo = 'mobile'
    console.log('mobile')
  }else {
    userInfo = 'phone'
    console.log('phone')
  }

  const onChangeh = (e) => {
    const {name,value} = e.target

    setInputs({
      ...inputs,
      [name]: value
    })

  }
  

  const addUser = () => {
    if (inputs.name === '') {
      return alert('name이 입력되지 않았습니다')
    }
    if (inputs.phone === '') {
      return alert('phone이 입력되지 않았습니다')
    }

    const person = {
      id: count.current,
      name: inputs.name,
      phone: inputs.phone,
      info: userInfo
    }
    

    count.current = count.current+1
    setInputs({name:'', phone:''})
    props.onAddUser(person)
  }

  return (
    <div>
        <input type="text" name="name" value={inputs.name} onChange={onChangeh} placeholder='name'/>
        <input type="text" name="phone" value={inputs.phone} onChange={onChangeh} placeholder='phone'/>
        <button onClick={addUser}>추가</button>
    </div>
  )
}

export default AddUser