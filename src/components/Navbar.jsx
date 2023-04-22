import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive")
    return (
        <div className='Navbar'>
            <NavLink className={setActiveClass} to="/">
                <h3>Home</h3>
            </NavLink>
            {"-"}
            <NavLink className={setActiveClass} to="/pokemon">
                <h3>Pokemon</h3>
            </NavLink>
           
            
        </div>
    )
}

export default Navbar
