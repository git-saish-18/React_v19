// import UseContextApiHook from '../hooks/useContextApiHook'
// import UseCallbackHook from "../hooks/useCallbackHook";
// import UseMemoHook from "../hooks/useMemoHook";
// import UseReducerHook from '../hooks/useReducerHook'
import { useEffect } from "react";
import "./App.css";
import Todo from "./pages/Todo";
// import UseStateHook from '../hooks/useStateHook'
// import UserForm from '../hooks/useStateHook/UserForm'
// import UseEffectHook from '../hooks/useEffectHook'
// import UseRefHook from '../hooks/useRefHook'
import { ToastContainer } from "react-toastify";
import UserForm from "./pages/UserForm";
import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from "./pages/ErrorPage";
import Mine from "./pages/Mine";
import Home from "./pages/Home";
import About from "./pages/About";
import AppLayout from "./pages/AppLayout";

function App() {
  useEffect(() => {
    // Initialize tooltips when the component mounts
    const tooltipTriggerList = Array.from(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []); // Empty dependency array ensures this effect runs only once after mount

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },{
          path: "/about",
          element: <About />,
        },
        {
          path: "/user",
          element: <UserForm />,
        },
        {
          path: "/todo",
          element: <Todo />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <>
      {/* <UseStateHook /> */}
      {/* <UserForm/> */}
      {/* <UseEffectHook/> */}
      {/* <UseRefHook/> */}
      {/* <UseContextApiHook/> */}
      {/* <UseReducerHook/> */}
      {/* <UseMemoHook/> */}
      {/* <UseCallbackHook/> */}
      {/* <Todo /> */}

      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
