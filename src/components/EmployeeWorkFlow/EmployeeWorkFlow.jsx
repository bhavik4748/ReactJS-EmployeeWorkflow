import { useState, useEffect, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the grid
import './EmployeeWorkFlow.css';
import { APIObj } from '../../services/service';


function EmployeeWorkFlow() {
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        // Declare the data fetching function
        const fetchData = async () => {
            const result = await APIObj.getAllEmployeeWorkflowWithActions();
            setRowData(result);
        };
        // Call the function
        fetchData();
    }, []);

    const Verify = async (workflowData) => {
        console.log({workflowData});
        await APIObj.updateEmployeeWorkflowAction(workflowData.employeeId, workflowData.ActionId);       
         const result = await APIObj.getAllEmployeeWorkflowWithActions();
        setRowData(result);
    }

    const [colDefs, setColDefs] = useState([
        {
            field: 'Action',
            headerName: 'Action',
            cellRendererSelector: (params) => {
                const actionComponent = {
                    component: ActionRenderer,
                    params: { onClick: (workflowData) => Verify(workflowData) }
                }
                return actionComponent;
            },
        },
       
        { field: 'employeeWorkflowStateId', headerName: 'Workflow Id', width: 120 },
        { field: 'workflowStateId', headerName: 'State', width: 70 },
        {
            field: 'workflowState.stateName',
            headerName: 'State Name',
        },
        { field: 'employeeId', headerName: 'Employee Id', width: 120 },
        { field: 'employee.name', headerName: 'Employee Name' },
       
    ]);

    return (
        <div  className='center-flex top-padding-50'>
             <h1 className='center'>Employee WorkFlow </h1>
             <div
                className="ag-theme-quartz " // applying the grid theme
                style={{ height: 500, width: 1400 }} // the grid will fill the size of the parent container
            >

                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                />
            </div>
        </div>
    )

}

const ActionRenderer = ({ data, onClick }) => {    
    return (
        <button onClick={() => onClick(data)} >{data.Action}</button>
    )
}


export default EmployeeWorkFlow;