import EmployeesList from './components/EmployeesList';
import WorkFlowList from './components/WorkFlowList';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import EmployeeWorkFlow from './components/EmployeeWorkFlow/EmployeeWorkFlow';

function App() {
  return (
    // wrapping container with theme & size
    <div>
      <EmployeesList />
      <EmployeeWorkFlow />

      {/* <WorkFlowList /> */}
    </div>
  );
}

export default App;
