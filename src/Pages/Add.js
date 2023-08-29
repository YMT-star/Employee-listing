import React from "react";
import "./Add.css";

const Add = () => {
  return (
    <div className="create-section">
      <h3>Create Employee</h3>
      <form>
        <div className="add_form">
          <label id="name" htmlFor="name">
            Name
          </label>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div className="add_form">
          <label id="address" htmlFor="address">
            Address
          </label>
          <input type="text" name="address" placeholder="Address" />
        </div>
        <div className="add_form">
          <label htmlFor="phone">Phone</label>
          <input type="phone" name="phone" placeholder="Phone" />
        </div>
        <div className="add_form">
          <label htmlFor="company">Company</label>
          <input type="text" name="company" placeholder="Company" />
        </div>
        <div className="add_form">
          <label htmlFor="position">Position</label>
          <input type="text" name="position" placeholder="Position" />
        </div>
        <div className="add_form">
          <label htmlFor="salary">Salary</label>
          <input type="number" name="salary" placeholder="Salary" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Add;
