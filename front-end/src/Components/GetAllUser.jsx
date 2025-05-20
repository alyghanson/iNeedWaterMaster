//from tutorial

import axios from "axios";
import { useEffect, useState } from "react";

const GetAllUser = () => {
  const [users, setAllUser] = useState();
  useEffect(() => {
    axios.get("http://localhost:3001/api/all")
    //print user object to console
    .then((response) => {console.log(response)
      // set for display
      setAllUser(response.data);
    })
    
  }, []);
    return (
      <>
        <h1>All Users</h1>
        <ul>
        {users && users.map(user => 
          <li key={user.id}>
            <h3>ID: {user.id} </h3>
            name: {user.name} <br></br>
            age: {user.age} <br></br>
            email: {user.email} <br></br>
          </li>
        )}
        </ul>
        
      </>
      );
  };
  
  export default GetAllUser;