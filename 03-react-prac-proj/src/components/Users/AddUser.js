import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css"

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      console.log("missing input");
      return;
    }
    if (+enteredAge < 1 || +enteredAge > 100) {
      console.log("entered age is less than 1 or more than 100");
      return;
    }

    const user = {
      key: Math.random().toString(),
      username: enteredUsername,
      age: +enteredAge
    };
    props.onAddNewUser(user);

    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    const username = event.target.value;
    setEnteredUsername(username);
  };

  const ageChangeHandler = (event) => {
    const userAge = event.target.value;
    setEnteredAge(userAge);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
        </div>
        <div>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" min="1" max="100" value={enteredAge} onChange={ageChangeHandler}/>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
