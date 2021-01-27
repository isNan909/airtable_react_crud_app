import React from 'react';
import base from '../api/base';

function Deletebtn({ employeeID }) {
  const deleteEmployee = () => {
    base('employees').destroy(employeeID, function (err, deleteEmployee) {
      if (err) {
        console.error(err);
        return;
      }
      prompt('Deleted record', deleteEmployee.id);
    });
  };
  return (
    <div className="position-absolute">
      <button
        onClick={deleteEmployee}
        type="button"
        className="btn btn-warning"
      >
        <i className="bi bi-archive-fill"></i>
      </button>
    </div>
  );
}

export default Deletebtn;
