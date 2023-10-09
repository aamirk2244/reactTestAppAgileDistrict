import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useRef, useState } from "react";

const Table = (props) => {
  const data = props.users.data;
  const [counter, setCounter] = useState(0);
  console.log("counter ... ", counter);
  const handleExceedChecksLimit = (id) => {
    props.removeSelectionFromUsers();

    data.find((user) => user.id === id).isSelected = true;
  };

  const findGreaterByAge = () => {
    const getUsers = data.filter((user) => user.isSelected === true);
    const firstUserAge = getUsers[0].age;
    const secondUserAge = getUsers[1].age;
    if (firstUserAge === secondUserAge) {
      return showAgeMessage("Both Users have Same Age");
    }

    const userList = getElderAndYoungerUser(getUsers[0], getUsers[1]);
    showAgeMessage(
      `User ${userList[0].name} with ID ${userList[0].id} is ${
        parseInt(userList[0].age) - parseInt(userList[1].age)
      } years older than User ${userList[1].name}`
    );
  };

  const getElderAndYoungerUser = (firstUser, secondUser) => {
    return parseInt(firstUser.age) > parseInt(secondUser.age)
      ? [firstUser, secondUser]
      : [secondUser, firstUser];
  };

  const handleSelection = (e) => {
    if (e.target.checked) {
      if (handledExceedChecksLimit(e)) {
        return;
      }
      props.addSelectionToUser(findUserById(e.target.value));
      setCounter(counter + 1);
    } else {
      props.removeSelectionFromUsers([findUserById(e.target.value)]);
      setCounter(counter - 1);
    }
  };

  const handledExceedChecksLimit = (e) => {
    if (counter === 2) {
      props.removeSelectionFromAllUsers();
      props.addSelectionToUser(findUserById(e.target.value));
      setCounter(1);
      return true;
    }
    return false;
  };

  const findUserById = (id) => {
    return data.find((user) => user.id == id);
  };

  const showAgeMessage = (msg) => {
    alert(msg);
  };
  return (
    <div className="table-wrap">
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th>
              <div>
                {counter === 2 ? (
                  <button
                    className="btn btn-secondary"
                    onClick={(e) => findGreaterByAge()}
                  >
                    Compare Ages
                  </button>
                ) : (
                  "Age Comparison"
                )}
              </div>
            </th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>
                <input
                  className="form-check-input mt-0"
                  type="checkbox"
                  checked={user.isSelected}
                  id={user.id}
                  value={user.id}
                  onChange={(e) => handleSelection(e)}
                  aria-label="Checkbox for following text input"
                />
              </td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>
                <button
                  id={user.id}
                  className="btn btn-primary m-1"
                  onClick={(e) => props.editUser(e)}
                >
                  Edit
                </button>
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
    </div>
  );
};

export default Table;
