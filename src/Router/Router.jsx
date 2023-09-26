import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import UpdateTaskForm from "../components/UpdateTaskForm/UpdateTaskForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/updateTask/:_id",
    element: <UpdateTaskForm/>,
  },
]);
