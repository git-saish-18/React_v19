import { memo } from "react";

const ChildCompObj=({data})=>{
    return (<>
      <h1>I am child component obj {data.name} : {data.age} </h1>
    </>)
}

export default memo(ChildCompObj);