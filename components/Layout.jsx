import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen bgImage">
      {children}
    </div>
  );
};

export default Layout;
