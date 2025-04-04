import React from 'react';
import '../CSS/Topbar.css'; // Import the CSS for the Topbar

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbar-logo">
                <h1>My Website</h1>
            </div>
            <div className="topbar-links">
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
};

export default Topbar;