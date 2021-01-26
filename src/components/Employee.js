import React from 'react';

function Employee({ employee }) {
  return (
    <div>
      <ul>
        <li>{employee.fields.Title}</li>
        <li>{employee.fields.Email}</li>
        <li>{employee.fields.Name}</li>
        <li>{employee.fields.Phone}</li>
        <li>{employee.fields.Started}</li>
      </ul>
    </div>
  );
}

export default Employee;

// Email: "jenny@gmail.com"
// Name: "Jenny Johnson"
// Phone: "(986) 321-7852"
// Started Date: "2021-01-18"
// Title: "Full Stack Developer"
