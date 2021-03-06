import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addNewUserHandler = (user) => {
    setUsersList((prevUsersList)=> {
      return [...prevUsersList, user];
    });
  };

  return (
    <div>
      <AddUser onAddNewUser={addNewUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
