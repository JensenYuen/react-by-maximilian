import React from "react";

import classes from './UsersList.module.css'
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.key}>
            {user.username} ({user.age}yo)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
