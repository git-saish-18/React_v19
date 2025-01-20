import { Outlet, useNavigation } from "react-router";
import Navbar from "./Navbar";

const AppLayout = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") return <h1>Loading...</h1>;
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default AppLayout;
