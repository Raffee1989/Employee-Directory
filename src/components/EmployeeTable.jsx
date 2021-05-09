import React from "react";
import "../styles/EmployeeTable.css";

const EmployeeTable = (props) => {
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
        <tr>
          <th scope="row">image</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>

        </tr>
        <tr>
          <th scope="row">image</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Mark</td>

        </tr>
        <tr>
          <th scope="row">image</th>
          <td >Larry the Bird</td>
          <td>@twitter</td>
          <td>@Dingo</td>
          <td>Mark</td>

        </tr>
      </tbody>
    </table>
  );
};

export default EmployeeTable;
