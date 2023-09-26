import AddTask from "../../components/AddTask"
import Error from "../../components/Error/Error"
import Loading from "../../components/Loading/Loading"
import TaskCard from "../../components/TaskCard"
import { useGetTasksQuery } from "../../redux/taskApi/taskApi"


const Home = () => {
    const { data: tasks, isLoading, error } = useGetTasksQuery()
    console.log(tasks)
    if (isLoading) {
        return <Loading />
    }
    if (error) {
        return <Error error={error} />
    }
    return (
        <>
            <div className="py-10 container mx-auto">
                <h1 className="text-5xl font-bold text-center ">Mange your Task</h1>
                <div className="flex items-end justify-end">
                    <button onClick={() => document.getElementById('my_modal_6').showModal()} className="bg-blue-500 text-white px-5 py-3 rounded hover:bg-blue-700 ">Add a Task</button>
                    <AddTask />
                </div>
            </div>
            {/* tasks card */}
            <div className="grid grid-cols-3 gap-5 container mx-auto">

                {
                    tasks?.map(task => <TaskCard key={task._id} task={task} />)
                }
            </div>
        </>
    )
}

export default Home