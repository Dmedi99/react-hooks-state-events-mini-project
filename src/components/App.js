import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const onDeleteTask = (taskToBeDeleted) => {
    console.log(taskToBeDeleted)
    setTasks(tasks.filter((task) => taskToBeDeleted !== task.text));
  };

  const onCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const onTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={onCategorySelect} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={filteredTasks} onDeleteTask={onDeleteTask} />
    </div>
  );
}

export default App;

