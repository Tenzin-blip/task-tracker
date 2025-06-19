import Header from './components/Header';
import Button from './components/Button';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-xl mb-4">Welcome to the Task Tracker</h2>
        <p className="text-gray-600">This is a simple task tracker application built with React and Tailwind CSS.</p>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Button type="add" onClick={() => alert("Task Added")} />
            <br />
            <Button type="delete" onClick={() => alert("Task Deleted")} />
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
