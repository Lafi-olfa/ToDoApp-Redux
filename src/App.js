import "./App.css";
import AddTask from "./components/addTask/AddTask";
import TaskList from "./components/taskList/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h2> TO DO App</h2>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
