import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';

const App = () => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '45%' }}>
        <EmployeeForm addEmployee={addEmployee} />
      </div>
      <div style={{ width: '45%' }}>
        <EmployeeTable employees={employees} />
      </div>
    </div>
  );
};

export default App;
