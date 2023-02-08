import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen dark:bg-[url('/space.jpg')] bg-[url('/day.jpg')] bg-center bg-cover ">
      {children}
    </div>
  );
};

export default Layout;
