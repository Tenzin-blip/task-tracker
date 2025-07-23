import { Routes, Route } from 'react-router-dom';
import Login from '../../task-tracker-frontend/src/pages/Login';
import NotFound from '../../task-tracker-frontend/src/pages/NotFound';
import TaskManager from './pages/TaskManager'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/taskmanager" element={<TaskManager/>}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

export default App;
