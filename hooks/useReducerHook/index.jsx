import { useReducer } from "react";

const UseReducerHook = () => {
  const intialState = {
    name: "---",
  };

  const Mine = (state, action) => {
    switch (action.type) {
      case 1:
        return { name: "Saish" };
      case 2:
        return { name: "Onkar" };
      case 3:
        return { name: "Prem" };
      default:
        return {name:"Default"};
    }
  };

  //   const [state,dispatch]=useReducer(reducer,intialState)
  const [state, self] = useReducer(Mine, intialState);

  return (
    <>
      <h4>useReducer Demo {state.name}</h4>
      <button
        onClick={() => {
          self({ type: 1 });
        }}
      >
        Saish
      </button>
      <button
        onClick={() => {
          self({ type: 2 });
        }}
      >
        Onkar
      </button>
      <button
        onClick={() => {
          self({ type: 3 });
        }}
      >
        Prem
      </button>
      <button
        onClick={() => {
          self({ type: 5 });
        }}
      >
        Default
      </button>
    </>
  );
};

export default UseReducerHook;
