import { useState } from "react";
const UseStateHook = () => {
  const [count, setCount] = useState(0);

  return (
    <>
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
    </>
  );
};

export default UseStateHook;
