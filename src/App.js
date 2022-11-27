import React, {useState,useRef} from 'react'
import AddUser from './component/AddUser';
import UserList from './component/UserList';

function App() {
  const count = useRef(4)
  const [inputs, setInputs] = useState({
    name: '',
    phone: ''
  })

  const [users, setUsers] = useState([
    {
      id: 1,
      name: '장구',
      phone: '010-1234-1234',
      info: 'mobile'
    },
    {
      id: 2,
      name: '봉',
      phone: '010-1234-1234',
      info: 'mobile'
    },{
      id: 3,
      name: '박',
      phone: '010-1234-1234',
      info: 'mobile'
    }
  ])

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
      info: "mobile"
    }
    
    //setUsers([...users, person])
  
    setUsers((prevState)=> {
      return [person ,...prevState]
    })

    count.current = count.current+1
    setInputs({name:'', phone:''})

  }

  return (
    <div className="App">
      <AddUser onChange={onChangeh} name={inputs.name} phone={inputs.phone} addUser={addUser} />
      {
        users.map((user)=> (
          <UserList user={user} key={user.id}/>
        ))
      }
    </div>
  );
}

export default App;
