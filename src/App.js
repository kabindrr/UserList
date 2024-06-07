import logo from "./logo.svg";
import "./App.css";
import { Form } from "./module/Form";
import { useState } from "react";
import { UserList } from "./module/UserList";

function App() {
  const [list, setList] = useState([]);

  const addUser = (name) => {
    setList([...list, name]);
  };

  return (
    <>
      <div
        className="wrapper"
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="userlist">
          <Form addUser={addUser} />
          <UserList list={list} />
        </div>
      </div>
    </>
  );
}

export default App;
