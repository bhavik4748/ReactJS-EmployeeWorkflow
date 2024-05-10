
class API {
    url = 'https://localhost:7110/api/';

    constructor() {
        this.url = 'https://localhost:7110/api/';
    }

    async getAllEmployees() {
        try {
            const data = await fetch(`${this.url}Employee`); // Replace with your API endpoint
            const result = await data.json();
            return result;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    async updateEmployee(data) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        try {
            const res = await fetch(`${this.url}Employee`, requestOptions); // Replace with your API endpoint
            const result = await res.json();
            return result;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    async addEmployee() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "id": 0, "name": "Enter Employee Name", "createdDate": "2024-04-16T16:58:11.5640711", "modifiedDate": "2024-04-17T00:36:57.8739224" })
        };
        try {
            const res = await fetch(`${this.url}Employee`, requestOptions); // Replace with your API endpoint
            const result = await res.json();
            return result;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    async getAllWorkFlows() {
        try {
            const data = await fetch(`${this.url}WorkFlows`); // Replace with your API endpoint
            const result = await data.json();
            return result;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    async updateWorkFlowById(workFlowId, workflow) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(workflow)
        };
        try {
            const res = await fetch(`${this.url}WorkFlows/${workFlowId}`, requestOptions); // Replace with your API endpoint


        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    async addWorkFlowById(workflow) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(workflow)
        };
        try {
            const res = await fetch(`${this.url}WorkFlows`, requestOptions); // Replace with your API endpoint
            const result = await res.json();
            return result;

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    async getEmployeeWorkflow() {
        try {
            const data = await fetch(`${this.url}EmployeeWorkflowStates`); // Replace with your API endpoint
            const result = await data.json();
            return result;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    async getAllWorkflowActions() {
        try {
            const data = await fetch(`${this.url}WorkflowActions`); // Replace with your API endpoint
            const result = await data.json();
            return result;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    async getAllEmployeeWorkflowWithActions() {
        try {
            var workflowActions = await this.getAllWorkflowActions();
            var employeeWorkflowStates = await this.getEmployeeWorkflow();

            for (const emp of employeeWorkflowStates) {
                let workflowAction;
                for (const wf of workflowActions) {
                    if (wf.stateFromWorkflowStateId == emp.workflowStateId) {
                        workflowAction = wf;
                    }
                }
                emp.Action = workflowAction.action;
                emp.ActionId = workflowAction.workflowActionId;
            }

            return employeeWorkflowStates;

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    async updateEmployeeWorkflowAction(employeeId, workflowStateId) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "employeeWorkflowActionId": 0,
                "employeeId": employeeId,
                "workflowActionId": workflowStateId,
                "employee": null,
                "WorkflowAction": null
            })
        };
        try {
            const res = await fetch(`${this.url}EmployeeWorkflowActions`, requestOptions); // Replace with your API endpoint
            const result = await res.json();
            return result;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

}

export const APIObj = new API();