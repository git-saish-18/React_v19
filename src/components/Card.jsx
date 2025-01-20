import { useDispatch } from "react-redux";
import { deleteTodo, updateTask } from "../../redux/slice/TodoSlice";
import { CiEdit } from "react-icons/ci";
import { FaRegSave } from "react-icons/fa";

import "../App.css";
import { useEffect, useState } from "react";
const Card = ({ index, title, getTodoList }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(title);
  const dispatch = useDispatch();

  useEffect(() => {
    // Initialize tooltips when the component mounts
    const tooltipTriggerList = Array.from(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []); // Empty dependency array ensures this effect runs only once after mount

  return (
    <>
      <div className="container card mt-5" key={index}>
        <div className="card-body">
          {!isEdit ? (
            <h5 className="card-title">{title}</h5>
          ) : (
            <input
              type="Edit the Task"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="task"
              name=""
              id=""
              value={editValue}
              onChange={(e) => {
                setEditValue(e.target.value);
              }}
            />
          )}

          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Delete"
            onClick={() => {
              console.log(index);
              dispatch(deleteTodo(index));
              getTodoList();
            }}
          ></button>
          {!isEdit ? (
            <CiEdit
              className="editbtn"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="Edit"
              onClick={() => {
                setIsEdit(true);
              }}
            />
          ) : (
            <FaRegSave
              className="editbtn"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="Save"
              onClick={() => {
                dispatch(updateTask({ index, editValue }));
                setIsEdit(false);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
