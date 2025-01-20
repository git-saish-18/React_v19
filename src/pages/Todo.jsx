import { useSelector, useDispatch } from "react-redux";
import { selectTodo } from "../../redux/selector/TodoSelector";
import { useEffect, useState } from "react";
import { getTodo, setTodo } from "../../redux/slice/TodoSlice";
import Card from "../components/Card";
import { toast } from "react-toastify";

const Todo = () => {
  const todo = useSelector(selectTodo);
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const getTodoList = () => {
    dispatch(getTodo());
  };

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  return (
    <>
      <h1 className="text-center">Todo List</h1>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Task
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example Task"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            required={true}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Add Task"
          onClick={() => {
            !task
              ? toast.info("Fill required details")
              : dispatch(setTodo(task));
            getTodoList();
          }}
        >
          Add Task
        </button>
      </div>
      {todo?.map((ele, index) => {
        return (
          <>
            <Card index={index} title={ele} getTodoList={getTodoList} />
          </>
        );
      })}
    </>
  );
};

export default Todo;
