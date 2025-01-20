import { useState } from "react";
import ChildComp from "./ChildComp";
import { useCallback } from "react";

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);
  const myFunc = useCallback(() => {
    alert("hello world");
  }, []);
  return (
    <>
      <h1>useCallback Hook Demo</h1>
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
      <ChildComp myFunc={myFunc} />
    </>
  );
};

export default UseCallbackHook;
