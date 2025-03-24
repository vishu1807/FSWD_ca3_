import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:6000/tasks").then((res) => setTasks(res.data));
  }, []);

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task.task} />
      ))}
    </ul>
  );
};

export default TaskList;
