import { useState } from 'react';
import { usePostTasksMutation } from '../redux/taskApi/taskApi';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [postTasks, { isLoading, reset }] = usePostTasksMutation()
    const navigate = useNavigate()
    // Initialize state for the form fields
    const [formData, setFormData] = useState({
        taskName: '',
        description: '',
        dueDate: '',
    });

    // Function to handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        await postTasks(formData)
        console.log(formData);
        alert('Task post successfully')
        setFormData({
            taskName: '',
            description: '',
            dueDate: '',
        })
        navigate("/")

    };

    return (
        <div className="bg-gray-100 h-fit flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg w-[100%]">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                    Update Your Task
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="field1" className="block text-gray-600 font-medium mb-1">
                            Task Name:
                        </label>
                        <input
                            required
                            type="text"
                            id="taskName"
                            name="taskName"
                            value={formData.taskName}
                            onChange={handleInputChange}
                            className="border rounded w-full px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="field2" className="block text-gray-600 font-medium mb-1">
                            Description:
                        </label>
                        <input
                            required
                            type="text"
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="border rounded w-full px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="field3" className="block text-gray-600 font-medium mb-1">
                            Date:
                        </label>
                        <input
                            required
                            type="text"
                            id="dueDate"
                            name="dueDate"
                            value={formData.dueDate}
                            onChange={handleInputChange}
                            className="border rounded w-full px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full w-36 focus:outline-none"
                        >
                            {
                                isLoading ? "Adding Task ..." : "Add Task"
                            }
                        </button>
                    </div>
                </form>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
