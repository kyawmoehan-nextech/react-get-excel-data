import React from "react";

const Table = ({ data }) => {
  return (
    <>
      {data ? (
        <table className="table my-4">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">PhoneNumber</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.no}>
                <th scope="row">{user.no}</th>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </>
  );
};

export default Table;
