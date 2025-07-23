import Header from '../components/Header';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Tasklist from '../components/Tasklist';
import { useState, useEffect } from 'react';
import { fetchTasks, addTask as addTaskAPI } from '../api/task';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async() => {
      try{
        const data = await fetchTasks();
        setTasks(data);
        setWelcomeMessage("Welcome to the Task Tracker Tenzin!");
        const timer = setTimeout(() => setWelcomeMessage(""), 3000);
        return () => clearTimeout(timer);
      }catch(err){
        setError(err.message);
      }finally{
        setLoading(false);
      }
    }
    initializeApp();
  }, []);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = async () => {
    if (newTask.trim() === "") return;
  
    try {
      const added = await addTaskAPI(newTask);
      setTasks([...tasks, added]); 
      setNewTask("");
    } catch (err) {
      setError("Failed to add task");
    }
  };
  

  const deleteTask = (id) => {
    const task = tasks.find(task => task._id === id);
    if(task && task.completed){
      setTasks(tasks.filter((task) => task._id !== id));
    }else{
      alert("The task has to be completed before deleting.");
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) =>
      task._id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  if(loading) return <div className='text-center text-2xl text-gray-500 p-4'>Loading...</div>;
  if(error) return <div className='text-center text-2xl text-red-500 p-4'>Error: {error}</div>;

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

export default TaskManager; 