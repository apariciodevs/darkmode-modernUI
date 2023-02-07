import Navbar from "./Navbar";


const Layout = ({ children }) => {
    return ( <body className="bgImage h-screen">
    <Navbar/>
          <div >{children}</div>
    </body> );
}
 
export default Layout;