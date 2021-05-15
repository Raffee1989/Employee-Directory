import React from "react";
import "../styles/EmployeeTable.css";

const EmployeeTable = ({ employees }) => {
  return (
    <table className="table container  table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">IMAGE</th>
          <th scope="col">FULL NAME</th>
          <th scope="col">PHONE</th>
          <th scope="col">EMAIL</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {employees[0] !== undefined && employees[0].name !== undefined ? (
          employees.map(({ login, name, picture, phone, email, dob }) => {
            return (
              <tr key={login.uuid}>
                <td data-th="Image" className="align-middle">
                  <img
                    src={picture.medium}
                    alt={"profile image for " + name.first + " " + name.last}
                    className="img-responsive"
                  />
                </td>
                <td data-th="Name" className="name-cell align-middle">
                  {name.first} {name.last}
                </td>
                <td data-th="Phone" className="align-middle">
                  {phone}
                </td>
                <td data-th="Email" className="align-middle">
                  <a href={"mailto:" + email} target="__blank">
                    {email}
                  </a>
                </td>
                <td data-th="DOB" className="align-middle">
                  {dob.date}
                </td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
