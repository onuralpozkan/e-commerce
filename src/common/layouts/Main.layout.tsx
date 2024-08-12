import { Outlet } from "react-router-dom";
import CategoriesContainer from "~/features/Categories/containers/Categories.container";
import "./Main.scss";
import Header from "../components/header/Header";

const MainLayout = () => {
  return (
    <>
      <main className="main-layout">
        <Header />
        <CategoriesContainer />
        <Outlet />
      </main>
      <footer className="footer">FOOTER</footer>
    </>
  );
};

export default MainLayout;
