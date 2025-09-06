import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header />
      {navigation.state == "loading" ? <p>Loading...</p> : <Outlet />}
      <Footer />
    </div>
  );
};
