import { Link } from "react-router-dom";
import { useDeleteTasksMutation } from "../redux/taskApi/taskApi";
import UpdateTaskForm from "./UpdateTaskForm/UpdateTaskForm";

const TaskCard = ({ task }) => {
    const [deleteTasks, { isLoading }] = useDeleteTasksMutation()
    const { taskName, dueDate, description, _id } = task
    // TAsk delete handler
    const handleDeleteTask = async (_id) => {
        const deleteConfirm = confirm('Are you want to delete this task')
        if (deleteConfirm) {
            await deleteTasks(_id)
            console.log(_id)
            alert('Task deleted successfully')
        }

    }


    return (
        <div className="border p-4 rounded shadow-md mb-4">
            <h2 className="text-xl font-semibold mb-2">{taskName}</h2>
            <p className="text-gray-700 mb-2">{description}</p>
            <p className="text-gray-500 mb-4">{dueDate}</p>
            <div className="flex space-x-2">
                <Link to={`updateTask/${_id}`}><button

                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                    Update
                </button></Link>
                {
                    isLoading ? <button

                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                        Deleting..
                    </button> : <button
                        onClick={() => handleDeleteTask(_id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                        Delete
                    </button>
                }

            </div>
        </div>
    );
};

export default TaskCard;
