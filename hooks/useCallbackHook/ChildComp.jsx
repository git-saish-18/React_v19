import { memo } from "react";

const ChildComp = ({myFunc}) => {
  return <>
  <h1 onClick={myFunc}>I am the Child Component</h1>
  </>;
};

export default memo(ChildComp);