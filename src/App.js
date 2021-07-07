import React, { useState } from 'react';
import './App.css';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const userListHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { userName: uName, age: uAge, id: Math.random().toString() }]
    })
  }


  return (
    <div>
      <AddUser onAddUser = {userListHandler}/>
      <UsersList users={usersList}></UsersList>
    </div>
  );

}

export default App;
