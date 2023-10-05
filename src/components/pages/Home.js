import React, { useRef } from "react";
import Table from "../home/Table";
import Input from "../Input";
import { useState, useEffect } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const inputNameRef = useRef(null);
  const inputAgeRef = useRef(null);

  const [isUpdate, setIsUpdate] = useState(0);
  const [age, setAge] = useState("");
  const [id, setId] = useState(1);
  const [users, setUsers] = useState({
    data: [],
  });
  // const users = { data: [{ id: 0, name: "test", age: "test age" }] };

  const updateUser = () => {
    const userToUpdate = isUpdate;
    const editingUser = users.data.find((user) => user.id === userToUpdate);
    editingUser.name = name;
    editingUser.age = age;
    setIsUpdate(false);
    clearInputs();
  };

  const checkEmptyInput = () => {
    if (inputNameRef.current.value.length === 0) {
      inputNameRef.current.focus();
      return true;
    } else if (inputAgeRef.current.value.length === 0) {
      inputAgeRef.current.focus();
      return true;
    }

    return false;
  };

  const showDataInTable = (e) => {
    e.preventDefault();

    if (checkEmptyInput()) {
      return;
    }
    setId(id + 1);
    setUsers({ data: [...users.data, { id, name, age }] });
    clearInputs();
  };

  const clearInputs = () => {
    setAge("");
    setName("");
  };

  const updateUserInTable = (e) => {
    e.preventDefault();
    updateUser();
  };

  const removeUser = (e) => {
    const userId = parseInt(e.target.id);
    const updatedUsers = users.data.filter((user) => user.id !== userId);
    setUsers({ data: updatedUsers });
  };

  const populateInputForEdit = (e) => {
    const userId = parseInt(e.target.id);

    const updateUser = users.data.find((user) => user.id === userId);
    setName((prev) => updateUser.name);

    setAge((prev) => updateUser.age);
    setIsUpdate(userId);
  };

  return (
    <div className="Home">
      <div className="card d-flex text-center">
        <div className="card-header">Aamir Test Form</div>
        <div className="card-body">
          <h5 className="card-title"></h5>
          <div className="card-text"></div>
        </div>
      </div>

      <form
        onSubmit={(e) => (isUpdate ? updateUserInTable(e) : showDataInTable(e))}
      >
        <div className="d-flex flex-column align-items-center mt-3">
          <div className="mb-3 d-flex">
            <label className="form-label mt-1 me-2">Name:</label>
            <Input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              inputRef={inputNameRef}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3 d-flex">
            <label className="form-label ms-0 mt-1 me-2">Age:</label>
            <Input
              className="form-control ms-3"
              type="number"
              placeholder="Enter Your Age"
              value={age}
              inputRef={inputAgeRef}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="btn btn-primary">
            {isUpdate ? "Save" : "Add"}
          </button>
        </div>
      </form>

      <div className="display-data">
        {users.data.length != 0 && (
          <Table
            users={users}
            removeUser={removeUser}
            editUser={populateInputForEdit}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
