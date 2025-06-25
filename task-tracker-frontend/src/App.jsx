import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");

  useEffect(() => {
    setWelcomeMessage("Welcome to the Task Manager App");
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
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="max-w-lg mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Task Manager App
          </h2>
          <div className="space-x-4 mt-4">
            <Button type="add" onClick={() => alert("Task Added")} />
            <Button type="delete" onClick={() => alert("Task Deleted")} />
          </div>
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default App;
