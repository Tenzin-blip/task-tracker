import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';
import Tasklist from './components/Tasklist';
import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");

  useEffect(() => {
    setWelcomeMessage("Welcome to the Task Tracker Tenzin!");
    const timer = setTimeout(() => setWelcomeMessage(""), 3000);
    return () => clearTimeout(timer);
  }, []);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, {
        id: Date.now(),
        text: newTask,
        completed: false,
      },
      ]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="max-w-lg mt-10 ml-40">
          {welcomeMessage && (
            <div className='bg-blue-100 border-1-4 border-blue-500 text-blue-700 p-4 mb-4'>
              <p>{welcomeMessage}</p>
            </div>
          )}
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Task Manager App
          </h2>
          <div className='mb-6 flex pt-5'>
            <input
              type= "text"
              value= {newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-grow p-2 border rounded-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new task..."
            />
            <div className="flex items-center gap-3 text-sm pl-2">
              <Button type="add" onClick={addTask} />
            </div>
          </div>
          <Tasklist tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} />
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default App;
