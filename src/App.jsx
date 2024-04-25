import EmployeesList from './components/EmployeesList';
import WorkFlowList from './components/WorkFlowList';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    // wrapping container with theme & size
    <div>
      <EmployeesList />
      <WorkFlowList />
    </div>
  );
}

export default App;
