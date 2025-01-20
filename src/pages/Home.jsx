import { Outlet } from "react-router";

const Home = () => {
  return (
    <>
      <h1>Home comp</h1>
      <Outlet />
    </>
  );
};

export default Home;
