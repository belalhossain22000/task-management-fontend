import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetTasksByIdQuery, useUpdateTasksMutation } from '../../redux/taskApi/taskApi';
import Loading from '../Loading/Loading';

const UpdateTaskForm = () => {
    const { _id } = useParams()
    const { data: task, isLoading, refetch } = useGetTasksByIdQuery(_id)
    const [updateTasks, { isLoading: loading }] = useUpdateTasksMutation()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        taskName: task?.taskName || '',
        description: task?.description || '',
        dueDate: task?.dueDate || '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateTasks({ data: formData, id: _id });

        console.log(formData, _id);
        alert('Task updated successfully')
        navigate("/")
    };

    // Update the formData state when the task data changes
    useEffect(() => {
        setFormData({
            taskName: task?.taskName || '',
            description: task?.description || '',
            dueDate: task?.dueDate || '',
        });
    }, [task]);

    // decide what to render
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2 mx-auto">
            <h2 className="text-2xl mb-4 font-semibold text-center">Update Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskName">
                        Task Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="taskName"
                        name="taskName"
                        value={formData.taskName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dueDate">
                        Due Date
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="dueDate"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    {
                        loading ? "Updating" : "   Update Task"
                    }

                </button>
            </form>
            <Link to="/"   className="py-10  ml-5">
                <button className=' flex items-center justify-center'>
                   Do not want to Update  <span className='ml-3 hover:underline text-blue-600 '>  Home</span>
                </button>
            </Link>
        </div>
    );
};

export default UpdateTaskForm;
