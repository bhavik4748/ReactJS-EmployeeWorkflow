import { useState, useEffect, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the grid
import './EmployeesList.css';
import { APIObj } from '../services/service';

function EmployeesList() {
  const [rowData, setRowData] = useState([]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: 'employeeId', headerName: 'Employee Id', editable: false },
    { field: 'name', headerName: 'Employee Name' },
  ]);

  const defaultColDef = useMemo(() => ({
    filter: true,
    editable: true
  }))
  useEffect(() => {
    // Declare the data fetching function
    const fetchData = async () => {
      const result = await APIObj.getAllEmployees();
      setRowData(result);
    };
    // Call the function
    fetchData();
  }, [])

  const updateName = async (event) => {
    const result = await APIObj.updateEmployee(event.data);
    setRowData(result);
  }

  const addEmployee = async () => {
    const result = await APIObj.addEmployee();
    setRowData(result);
  }

  return (
    // wrapping container with theme & size
    <div className='center-flex'>
       <h1 className='center'>Employee List </h1>
        <div className='rightAddEmployee'>
          <button onClick={addEmployee}>+ Add Employee</button>
        </div>
      <div
        className="ag-theme-quartz " // applying the grid theme
        style={{ height: 500, width: 500 }} // the grid will fill the size of the parent container
      >
       
        <AgGridReact
          rowData={rowData}
          defaultColDef={defaultColDef}
          columnDefs={colDefs}
          onCellValueChanged={updateName}
        />
      </div>
    </div>
  );
}

export default EmployeesList;
