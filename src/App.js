// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
// import SampleOutput from "./components/SampleOutput";
import Table from "./components/home/Table";
import Input from "./components/Input";
// import Button1 from "./components/home/Button1";
// import Button2 from "./components/home/Button2";
// import Button3 from "./components/home/Button3";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState(0);
  const [users, setUsers] = useState({
    data: [],
  });
  // const users = { data: [{ id: 0, name: "test", age: "test age" }] };

  const showDataInTable = (e) => {
    e.preventDefault();
    setId(id + 1);
    setUsers({ data: [...users.data, { id, name, age }] });
    setAge("");
    setName("");
  };

  const removeUser = (e) => {
    const userId = e.target.id;
    const updatedUsers = users.data.filter((user) => user.id != userId);
    setUsers({ data: updatedUsers });
  };

  const updateUserAge = (e) => {
    const userToEdit = users.data.findIndex(
      (user) => user.id === parseInt(e.target.id)
    );
    users.data[userToEdit].age = e.target.value;

    setUsers({ data: [...users.data] });
  };

  const updateUserName = (e) => {
    const userToEdit = users.data.findIndex(
      (user) => user.id === parseInt(e.target.id)
    );
    users.data[userToEdit].name = e.target.value;

    setUsers({ data: [...users.data] });
  };

  return (
    <div className="App">
      <div className="card d-flex text-center">
        <div className="card-header">Aamir Test Form</div>
        <div className="card-body">
          <h5 className="card-title"></h5>
          <div className="card-text">
            <form onSubmit={(e) => showDataInTable(e)}>
              <div className="form-group">
                <label>Name</label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Age</label>
                <Input
                  className="form-control"
                  type="number"
                  placeholder="Enter Your Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="display-data">
        <Table
          users={users}
          removeUser={removeUser}
          updateUserAge={updateUserAge}
          updateUserName={updateUserName}
        />
      </div>
    </div>
  );
}

export default App;
