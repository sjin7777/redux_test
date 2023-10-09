import './App.css';
import AddNumberRoot from "./with-react-redux/components/AddNumberRoot";
import ParentGoChildRoot from "./with-react-redux/components/ParentGoChildRoot";

function App() {
  return (
    <div>
      <h1>Root</h1>
      <AddNumberRoot />
      <ParentGoChildRoot/>
    </div>
  )
}

export default App;
