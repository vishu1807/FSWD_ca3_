import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add" element={<TaskForm />} />
      </Routes>
    </div>
  );
}

export default App;
