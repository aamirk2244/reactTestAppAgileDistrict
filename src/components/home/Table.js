const Table = (props) => {
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
  );
};

export default Table;
