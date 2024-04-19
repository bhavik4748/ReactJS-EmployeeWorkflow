
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

    async updateWorkFlowById(workFlowId, workflow){
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(workflow)
        };
        try{
            const res = await fetch(`${this.url}WorkFlows/${workFlowId}`, requestOptions); // Replace with your API endpoint
          

        }catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    async addWorkFlowById(workflow){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(workflow)
        };
        try{
            const res = await fetch(`${this.url}WorkFlows`, requestOptions); // Replace with your API endpoint
            const result = await res.json();
            return result;

        }catch (error) {
            console.error('Error fetching data:', error);
        }
    }


}

export const APIObj = new API();