import { useContext } from "react";
import { ContextApi } from "./CreateContextApi";

const UseContextApiHook = () => {
  const { userDetails, count } = useContext(ContextApi);

  return (
    <>
      <h4> Context Api UseContextApiHook {count}</h4>
      <ul>
        <li>{userDetails.name}</li>
        <li>{userDetails.mobileNumber}</li>
        <li>{userDetails.address}</li>
      </ul>
    </>
  );
};

export default UseContextApiHook;
