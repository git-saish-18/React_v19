import { useEffect, useState } from "react";
import { deleteUser, updateUser } from "../../redux/slice/UserSlice";
import { CiEdit } from "react-icons/ci";
import { FaRegSave } from "react-icons/fa";
import { useDispatch } from "react-redux";

const User = ({ index, userDetails, getUserList }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const [editValue, setEditValue] = useState(userDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditValue((pre) => ({ ...pre, [name]: value }));
  };

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
    <div className="container card mt-5" key={index}>
      <div className="card-body">
        {!isEdit ? (
          <h5 className="card-title">{userDetails.userName}</h5>
        ) : (
          <>
            <input
              type="text"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="task"
              className="form-control"
              id="formGroupExampleInput"
              name="userName"
              value={editValue.userName}
              onChange={handleChange}
            />
            <br />
          </>
        )}
        {!isEdit ? (
          <h5 className="card-title">{userDetails.email}</h5>
        ) : (
          <input
            type="email"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="task"
            name="email"
            className="form-control"
            id="formGroupExampleInput"
            value={editValue.email}
            onChange={handleChange}
          />
        )}

        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Delete"
          onClick={() => {
            dispatch(deleteUser(index));
            getUserList();
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
              setIsEdit(false);
              dispatch(updateUser({ index, editValue }));
              getUserList();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default User;
