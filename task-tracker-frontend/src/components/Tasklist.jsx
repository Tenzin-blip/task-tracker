import Button from "./Button";
const Tasklist = ({ tasks, onDelete, onToggle }) => {
    return (
        <div className="space-y-2">
            {tasks.length === 0 ? (
                <p className='text-gray-500'>No tasks to show. Add one above!</p>
            ) : (
                <ul className="divide-y divide-gray-200">
                    {tasks.map((task) => (
                        <li key={task.id} className="py-3 flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => onToggle(task.id)}
                                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                                />
                                <span
                                    className={`ml-3 ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
                                >
                                    {task.text}
                                </span>
                            </div>
                            <Button
                                type='delete'
                                onClick={() => onDelete(task.id)}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default Tasklist;