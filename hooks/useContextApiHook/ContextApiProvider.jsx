import { ContextApi } from "./CreateContextApi";

const ContextApiProvider = ({ children }) => {

  const userDetails = {
    name: "John",
    mobileNumber: "8459662740",
    address: "USA",
  };

  const count=1;


  return (
    <ContextApi.Provider value={{userDetails,count}}>{children}</ContextApi.Provider>
  );
};


export default ContextApiProvider;