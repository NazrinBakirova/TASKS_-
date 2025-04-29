import React, { useState } from 'react';

const EmployeeForm = ({ addEmployee }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [hireDate, setHireDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (!name || !position || !department || !email || !salary || !hireDate) {
      setErrorMessage('All fields are required!');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setErrorMessage('Email must be valid!');
      return;
    }

    if (isNaN(salary)) {
      setErrorMessage('Salary must be a number!');
      return;
    }

    // Add new employee
    addEmployee({ name, position, department, email, salary, hireDate });

    // Success message
    setSuccessMessage('Employee added successfully!');
    setErrorMessage('');

    // Clear the form
    setName('');
    setPosition('');
    setDepartment('');
    setEmail('');
    setSalary('');
    setHireDate('');
  };

  return (
    <div>
      <h2>Employee Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Position:</label>
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
        </div>
        <div>
          <label>Department:</label>
          <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Salary:</label>
          <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </div>
        <div>
          <label>Hire Date:</label>
          <input type="date" value={hireDate} onChange={(e) => setHireDate(e.target.value)} />
        </div>
        <div>
          <button type="submit">Add Employee</button>
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      </form>
    </div>
  );
};

export default EmployeeForm;
