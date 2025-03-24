import React, { useState } from "react";
import axios from "axios";

const TaskForm = () => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:6000/tasks", { task });
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Enter task" 
        required 
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
