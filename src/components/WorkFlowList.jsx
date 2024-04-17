import { useState, useEffect, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the grid
import './WorkFlowList.css';
import { APIObj } from '../services/service';


function WorkFlowList() {
    const [rowData, setRowData] = useState([]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: 'id', headerName: 'Workflow Id', width: 120 },
        { field: 'stateId', headerName: 'State' },
        { field: 'state.stateName', headerName: 'State Name' },
        { field: 'employeeId', headerName: 'Employee Id' },
        { field: 'employee.name', headerName: 'Employee Name' },
        {
            field: 'startDate', headerName: 'Start ', cellRenderer: (data) => {
                return data && data.value ? (new Date(data.value)).toUTCString() : '';
            }
        },
        {
            field: 'endDate', headerName: 'End ', cellRenderer: (data) => {
                return data && data.value ? (new Date(data.value)).toUTCString() : '';
            }
        }
    ]);

    useEffect(() => {
        // Declare the data fetching function
        const fetchData = async () => {
            const result = await APIObj.getAllWorkFlows();
            setRowData(result);
        };
        // Call the function
        fetchData();
    }, [])

    return (
        // wrapping container with theme & size
        <div className='center-flex'>
            <h1 className='center'>WorkFlow List </h1>
            <div
                className="ag-theme-quartz " // applying the grid theme
                style={{ height: 500, width: 1200 }} // the grid will fill the size of the parent container
            >

                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}

                />
            </div>
        </div>
    );
}

export default WorkFlowList;