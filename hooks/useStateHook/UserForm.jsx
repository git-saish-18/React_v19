import { useState } from "react";

const UserForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobileNumber: "",
  });

  const submit = () => {
    console.log({ user });
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser(
      (pre = {
        ...pre,
        [name]: value,
      })
    );
  };

  return (
    <>
      <div>
        <div>
          <label htmlFor="name">
            {" "}
            Name
            <input
              type="text"
              name="name"
              id="name"
              style={{ marginLeft: "3rem" }}
              value={user.name}
              onChange={handlechange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            {" "}
            Email
            <input
              type="email"
              name="email"
              id="email"
              style={{ marginLeft: "3rem" }}
              value={user.email}
              onChange={handlechange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="mobileNumber">
            {" "}
            Mobile Number
            <input
              type="text"
              name="mobileNumber"
              id="mobileNumber"
              style={{ marginLeft: "3rem" }}
              value={user.mobileNumber}
              onChange={handlechange}
            />
          </label>
        </div>
        <div>
          <button style={{ margin: "3rem" }} onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default UserForm;
