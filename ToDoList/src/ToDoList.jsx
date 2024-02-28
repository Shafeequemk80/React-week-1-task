import { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState(["namaz", "break Fast", "coding"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    setTasks((t) => t.filter((task, i) => i !== index));
  }
  function moveTaskUp(index) {
    const updateTask = [...tasks];
    if (index > 0) {
      [updateTask[index], updateTask[index - 1]] = [
        updateTask[index - 1],
        updateTask[index],
      ];
      setTasks(updateTask);
    }
  }
  function moveTaskDown(index) {
    const updateTask= [...tasks]
    if(index<tasks.length-1){
        [updateTask[index], updateTask[index +1]] = [
            updateTask[index + 1],
            updateTask[index],
          ];  
          setTasks(updateTask)
    }
  }

  return (
    <div className="to-do-list">
      <h1> To-Do-List</h1>
      <input
        type="text"
        placeholder="Enter A Task...."
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="add-button" onClick={addTask}>
        Add
      </button>

      <ol>
        {tasks.map((task, i) => (
          <li key={i}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(i)}>
              delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(i)}>
              Up
            </button>
            <button className="move-button" onClick={() => moveTaskDown(i)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
