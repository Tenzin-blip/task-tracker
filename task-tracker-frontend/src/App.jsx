import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
              <div>
                <div className="max-w-lg md:max-w-none">
                  <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                    Task Manager App
                  </h2>

                  <p className="mt-4 text-gray-700">
                    The Task Manager App is a lightweight, user-friendly productivity tool designed to help individuals and teams efficiently organize, track, and manage their daily tasks and projects. With a clean interface and intuitive features, users can create to-do lists, set deadlines, assign priorities, categorize tasks, and monitor progress in real-time. The app supports reminders, drag-and-drop task organization, and collaborative features such as task sharing and comment threads, making it ideal for both personal productivity and team collaboration. Whether you're managing a simple checklist or coordinating complex projects, this app streamlines your workflow and keeps you focused on what matters most.
                  </p>
                  <div className="space-x-4 mt-4">
                    <Button type="add" onClick={() => alert("Task Added")} />
                    <Button type="delete" onClick={() => alert("Task Deleted")} />
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
