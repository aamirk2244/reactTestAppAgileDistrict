import { useState } from "react";

function Table(props) {
  const data = props.users.data;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>
              <input
                value={user.name}
                id={user.id}
                onChange={(e) => props.updateUserName(e)}
                className="form-control"
              />
            </td>
            <td>
              <input
                value={user.age}
                id={user.id}
                onChange={(e) => props.updateUserAge(e)}
                className="form-control"
              />
            </td>
            <td>
              <button className="btn btn-primary">Edit</button>
              <button
                id={user.id}
                className="btn btn-danger"
                onClick={(e) => props.removeUser(e)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
