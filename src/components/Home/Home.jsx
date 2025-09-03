import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const Home = () => {
  return (
    <div>
      <Header />
      <h2>This is the home component</h2>
      <Outlet />
    </div>
  );
};
