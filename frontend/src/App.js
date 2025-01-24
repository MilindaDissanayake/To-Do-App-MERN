import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import the CSS file for custom styling

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5000/api/tasks');
    setTasks(response.data);
  };

  const addTask = async () => {
    if (title.trim()) {
      const response = await axios.post('http://localhost:5000/api/tasks', { title });
      setTasks([...tasks, response.data]);
      setTitle('');
    }
  };

  const updateTask = async (id, updatedTask) => {
    const response = await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask);
    setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
    setEditingTaskId(null);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const startEditing = (task) => {
    setEditingTaskId(task._id);
    setEditingTitle(task.title);
  };

  const saveEditing = (id) => {
    if (editingTitle.trim()) {
      updateTask(id, { title: editingTitle });
    }
  };

  return (
    <div className="app-container d-flex flex-column min-vh-100">
      {/* Header */}
      <header className="header bg-primary text-white text-center py-3">
        <h1>To-Do List Application</h1>
        <p>Organize your tasks efficiently!</p>
      </header>

      {/* Main Content */}
      <main className="container my-4 flex-grow-1">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task"
          />
          <button className="btn btn-success" onClick={addTask}>
            Add Task
          </button>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h2>Active Tasks</h2>
            <ul className="list-group">
              {tasks
                .filter((task) => !task.completed)
                .map((task) => (
                  <li key={task._id} className="list-group-item d-flex align-items-center">
                    <div className="custom-checkbox-container me-2">
                      <input
                        type="checkbox"
                        id={`task-${task._id}`}
                        className="custom-checkbox"
                        onChange={() =>
                          updateTask(task._id, { ...task, completed: !task.completed })
                        }
                      />
                      <label htmlFor={`task-${task._id}`}></label>
                    </div>
                    {editingTaskId === task._id ? (
                      <input
                        type="text"
                        className="form-control me-2"
                        value={editingTitle}
                        onChange={(e) => setEditingTitle(e.target.value)}
                      />
                    ) : (
                      <span className="flex-grow-1">{task.title}</span>
                    )}
                    {editingTaskId === task._id ? (
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => saveEditing(task._id)}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => startEditing(task)}
                      >
                        Edit
                      </button>
                    )}
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteTask(task._id)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          <div className="col-md-6">
            <h2>Completed Tasks</h2>
            <ul className="list-group">
              {tasks
                .filter((task) => task.completed)
                .map((task) => (
                  <li key={task._id} className="list-group-item d-flex align-items-center">
                    <div className="custom-checkbox-container me-2">
                      <input
                        type="checkbox"
                        id={`task-${task._id}`}
                        className="custom-checkbox"
                        checked
                        onChange={() =>
                          updateTask(task._id, { ...task, completed: !task.completed })
                        }
                      />
                      <label htmlFor={`task-${task._id}`}></label>
                    </div>
                    {editingTaskId === task._id ? (
                      <input
                        type="text"
                        className="form-control me-2"
                        value={editingTitle}
                        onChange={(e) => setEditingTitle(e.target.value)}
                      />
                    ) : (
                      <span className="flex-grow-1 text-decoration-line-through">
                        {task.title}
                      </span>
                    )}
                    {editingTaskId === task._id ? (
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => saveEditing(task._id)}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => startEditing(task)}
                      >
                        Edit
                      </button>
                    )}
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteTask(task._id)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer bg-dark text-white text-center py-3">
        <p>&copy; {new Date().getFullYear()} To-Do App | Built with MERN Stack</p>
      </footer>
    </div>
  );
};

export default App;
