import React,{useState, useRef} from 'react'
import Modal from './layout/Modal'

const reducer = (state,action) => {
  // reducer로 input관리 해보기s
  
}

const AddUser = (props) => {

  const count = useRef(4)
  const [inputs, setInputs] = useState({
    name: '',
    phone: ''
  })
  const [error, setError] = useState(false)
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
    if (inputs.name === '' ||inputs.phone === '') {
      return setError({
        title: 'Error',
        content: '이름과전화번호를 입력하세요'
      })
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
  const onCloseHandler=()=> {
    setError('')
  }

  return (
   <>
      {
        error && <Modal title={error.title} content={error.content} onClose={onCloseHandler}/>
      }
      
      <div>
        <input type="text" name="name" value={inputs.name} onChange={onChangeh} placeholder='name'/>
        <input type="text" name="phone" value={inputs.phone} onChange={onChangeh} placeholder='phone'/>
        <button onClick={addUser}>추가</button>
    </div>
   </>
  )
}

export default AddUser