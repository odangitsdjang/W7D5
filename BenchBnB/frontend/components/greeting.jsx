import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = (props) => {
  let container = "";
  if (props.currentUser)  {
    container = (
    <div>
      Welcome, {props.currentUser.username}
      <button onClick={(e)=> {
          e.preventDefault();
          props.logout();
        }}>Log Out</button>
    </div>
  );
  }
  else {
    container = (
    <div>
      <Link to="/signup">Sign up</Link>
      <Link to="/login">Log in</Link>
    </div>
  );

  }
  return container;
};

export default Greeting;
