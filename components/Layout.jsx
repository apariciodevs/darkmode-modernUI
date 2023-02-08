import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen dark:bg-[url('/space.jpg')] bg-[url('/day.jpg')] bg-center bg-cover lg:px-16 bg-blend-multiply bg-gray-400/60 dark:bg-gray-200	">
      {children}
    </div>
  );
};

export default Layout;
