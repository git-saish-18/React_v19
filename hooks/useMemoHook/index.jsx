import { useState } from "react";
import ChildComp from "./ChildComp";
import ChildCompObj from "./ChildCompObj";
import { useMemo } from "react";
// import ExpensiveCal from "./ExpensiveCal";

const UseMemoHook = () => {
  const userData = useMemo(() => {
    return {
      name: "onkar",
      age: 10,
    };
  }, []);

  const [count, setCount] = useState(0);
  return (
    <>
      <h4>This is useMemo hook demo</h4>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          INC
        </button>
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            count <= 0 ? setCount(0) : setCount(count - 1);
          }}
        >
          DNC
        </button>
      </div>
      <ChildComp data={"saish"} />
      <ChildCompObj data={userData} />
    </>
  );
};

export default UseMemoHook;


// even if we use memo function to avoid re-rendering of child component if we pass props as object then memo function is not work
// To handle this we need to use useMemo for an object which avoid re-rendering of child component