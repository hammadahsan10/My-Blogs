import React, { useState } from 'react';
import { Home, List, PlusSquare, LogOut } from 'react-feather';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Navbar.css';
import AddBlogs from '../Blogs/AddBlogs';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false); // State to track modal visibility

    // Method to handle opening and closing of the modal
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className='container mt-2'>
            <nav className="menu" id="nav">
                <NavItem icon={<Home />} label="All Blogs" to="/blogs" />
                <NavItem icon={<List />} label="Your Blogs" to="/myblogs" />
                {/* Pass toggleModal method as prop to handle modal opening */}
                <NavItem icon={<PlusSquare />} label="Add Blog" onClick={toggleModal} />
                <NavItem icon={<LogOut />} label="Logout" to="/logout" />
            </nav>
            {/* Render modal only if showModal state is true */}
            {showModal && <AddBlogs  />}
        </div>
    );
};

const NavItem = ({ icon, label, to, onClick }) => {
    // Use onClick prop for handling click events
    return (
        <div className='container'>
            <span className="nav-item" onClick={onClick}>
                <span className="icon">
                    {icon}
                </span>
                {/* Use Link component for other menu items */}
                {to ? <Link to={to}>{label}</Link> : <span>{label}</span>}
            </span>
        </div>
    );
};

export default Navbar;
