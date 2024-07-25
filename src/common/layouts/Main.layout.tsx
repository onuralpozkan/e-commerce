import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <div className="header">HEADER</div>
      <Outlet />
      <div className="footer">FOOTER</div>
    </div>
  );
};

export default MainLayout;
