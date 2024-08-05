import { Outlet } from "react-router-dom";
import CategoriesContainer from "~/features/Categories/containers/Categories.container";
import "./Main.scss";
import Header from "../components/header/Header";

const MainLayout = () => {
  return (
    <main className="main-layout">
      <Header />
      <CategoriesContainer />
      <Outlet />
      <div className="footer">FOOTER</div>
    </main>
  );
};

export default MainLayout;
