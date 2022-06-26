import "./Header.css";
import React from "react";


const Header = () => {
  return <nav className="navbar"> 
    <a href="/">All Events</a>
    <a className="FAQ_header" href="/FAQ">FAQ</a>
    {/* Dans le cas de la 404, on aurait du faire 
     <Route path="*" element={<Page404 />} />
    */}
    </nav>;
};

export default Header;
