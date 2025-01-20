import { useRef } from "react";

const UseRefHook=()=>{
    const user=useRef({name:'',
        mobileNumber:'',
    })
    const email=useRef()

    const action =()=>{
        console.log(user.current,{"email":email.current.value})
    }
return(<>
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
              onChange={(e)=>{ user.current.name=e.target.value}}
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
              ref={email}
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
              onChange={(e)=>{user.current.mobileNumber=e.target.value}}
            />
          </label>
        </div>
        <div>
          <button style={{ margin: "3rem" }} onClick={action}>
            Submit
          </button>
        </div>
      </div>
</>)
}

export default UseRefHook;