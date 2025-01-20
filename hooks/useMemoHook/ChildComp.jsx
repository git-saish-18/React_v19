import { memo } from "react";

const ChildComp = ({ data }) => {
  return (
    <>
      <h1>I am child component {data}</h1>
    </>
  );
};

export default memo(ChildComp); // To avoid re-rendering of child component in parent unless any value changes in change component
