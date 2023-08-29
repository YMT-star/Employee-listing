import React from "react";
import "../Pages/List.css";
const List = () => {
  return (
    <div className="list">
      <a href="add" className="add">
        Add Employee
      </a>
      <table>
        <thead>
          <tr>
        
            <th>id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2</td>
            <td>ye min tun</td>
            <td>Yangon</td>
            <td>2345</td>
            <td>mti</td>
            <td>Junior</td>
            <td>150$</td>
            <td className="action">
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>ye min tun</td>
            <td>Yangon</td>
            <td>2345</td>
            <td>mti</td>
            <td>Junior</td>
            <td>150$</td>
            <td className="action">
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default List;
