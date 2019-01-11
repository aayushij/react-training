import React from 'react';

const EmployeeDetail = (props) => {
  return (
    <div>
      <br/>
      <p onClick={props.handleBack}>Back</p>
      <h2>Employee details</h2>
      <p>Name: {props.employee.name}</p>
      <p>Designation: {props.employee.designation}</p>
      <p>Age: {props.employee.age}</p>
    </div>
  );
}

export default EmployeeDetail;