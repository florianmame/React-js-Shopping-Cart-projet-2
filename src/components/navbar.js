import React from "react";
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="nav_box">
                <span className="my_shop">My Shoping </span>
                <div className="cart">
                    <span></span>
                    <span></span>
                </div>
             </div>
        </nav>

        );

};

export default Navbar;  