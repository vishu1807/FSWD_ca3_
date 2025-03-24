
// src/components/TaskList.jsx
import { useState } from "react";
import TaskItem from "./TaskItem";
import { Link } from "react-router-dom";

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete project report", description: "Finish and submit by Friday" },
    { id: 2, title: "Buy groceries", description: "Milk, eggs, bread, and vegetables" },
    { id: 3, title: "Workout", description: "Go for a 30-minute run" },
  ]);

  const addTask = (task) => {
    setTasks([...tasks, { id: tasks.length + 1, ...task }]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task List</h2>
      <Link to="/add">
        <button>Add New Task</button>
      </Link>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;

