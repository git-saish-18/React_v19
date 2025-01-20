import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getUser, setUser } from "../../redux/slice/UserSlice";
import { selectUser } from "../../redux/selector/UserSelector";
import User from "../components/User";

const UserForm = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectUser);

  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const getUserList = () => {
    dispatch(getUser());
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <>
      <h1 className="text-center">User List</h1>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example Name"
            name="userName"
            value={userDetails.userName}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example Email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            required={true}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Add User"
          onClick={() => {
            !userDetails.email || !userDetails.userName
              ? toast.info("Fill required details")
              : dispatch(setUser(userDetails));
            getUserList();
          }}
        >
          Add User
        </button>
      </div>
      {users?.map((sigleUser, index) => {
        return (
          <User
            key={index}
            index={index}
            userDetails={sigleUser}
            getUserList={getUserList}
          />
        );
      })}
    </>
  );
};

export default UserForm;
