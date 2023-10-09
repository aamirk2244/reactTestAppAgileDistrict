import React, { useRef } from "react";
import "./Home.css";
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
  // const users = { data: [{ id: 0, name: "test", age: "test age", isSelected: false }] };

  useEffect(() => {
    console.log("Home component did mount ................");
    return () => console.log("Home coomponent did destroued --------------");
  }, []);

  const updateUser = () => {
    const userToUpdate = isUpdate;
    const editingUser = users.data.find((user) => user.id === userToUpdate);
    editingUser.name = name;
    editingUser.age = age;
    setUsers({ ...users });
    setIsUpdate(false);
    clearInputs();
  };

  const removeSelectionFromUsers = (userList) => {
    userList.forEach((user) => {
      user.isSelected = false;
    });
  };

  const removeSelectionFromAllUsers = () => {
    users.data.forEach((user) => {
      user.isSelected = false;
    });
  };

  const addSelectionToUser = (user) => {
    user.isSelected = true;
    // setUsers({ ...users });
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
    setUsers({ data: [...users.data, { id, name, age, isSelected: false }] });
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
    <div className="my-home d-flex flex-column">
      <div className="myhome-card-section">
        <section className="bgimage">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h5>Hello, Aamir! Welcome to React Practice</h5>
                <div>
                  <form
                    onSubmit={(e) =>
                      isUpdate ? updateUserInTable(e) : showDataInTable(e)
                    }
                  >
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title text-center">
                          User Age Example
                        </h4>
                        <div className="d-flex flex-column">
                          <label className="form-label">Name:</label>
                          <Input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            value={name}
                            inputRef={inputNameRef}
                            onChange={(e) => setName(e.target.value)}
                          />
                          <label className="form-label mt-2">Age:</label>
                          <div className="me-3 age-input">
                            <Input
                              className="form-control ms-3"
                              type="number"
                              placeholder="Enter Your Age"
                              value={age}
                              inputRef={inputAgeRef}
                              onChange={(e) => setAge(e.target.value)}
                            />
                          </div>
                        </div>
                        <button className="btn btn-primary form-control mt-5">
                          {isUpdate ? "Save" : "Add"}
                        </button>
                      </div>
                      <div className="card-footer text-muted"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <div className="home-table">
          {users.data.length != 0 && (
            <Table
              users={users}
              removeUser={removeUser}
              editUser={populateInputForEdit}
              removeSelectionFromUsers={removeSelectionFromUsers}
              addSelectionToUser={addSelectionToUser}
              removeSelectionFromAllUsers={removeSelectionFromAllUsers}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
