import React, {useState} from 'react'
import AddUser from './component/AddUser';
//import UserList from './component/UserList';
import ListBox from './component/ListBox';
function App() {


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
      info: 'phone'
    }
  ])

  const addUserHandler = (person) => {
    console.log('ddd', person)
    setUsers((preveState)=> {
      return [person, ...preveState]
    })
    
  }
 
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <ListBox users={users}/>
    </div>
  );
}

export default App;
