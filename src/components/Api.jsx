import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const Api = () => {
  //for input
  let email = useRef();
  let password = useRef();

  const [users, setusers] = useState([]);

  //get users
  async function getUser() {
    let res = await axios.get("http://localhost:3001/users");

    setusers(res.data);
  }

  async function addUser() {
    let user = {
      email: email.current.value,
      password: password.current.value,
    };
    console.log(user);

    let res = await axios.post("http://localhost:3001/users", user);
    console.log(res);

    setusers([...users, res.data]);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <input type="text" ref={email} />
      <input type="text" ref={password} />
      <button onClick={addUser}>Submit</button>

      {users.map((val, index) => {
        return (
          <>
            <h1>{val.id}</h1>
            <h2>{val.email}</h2>
            <h3>{val.password}</h3>
          </>
        );
      })}
    </div>
  );
};

export default Api;
