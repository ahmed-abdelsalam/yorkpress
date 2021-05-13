import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <>
            <div className="l1 bg-dark-brown color-light-yellow tail"></div>
            <div className="r1 bg-dark-brown color-light-yellow tail"></div>
            <header className="bg-dark-brown color-light-yellow tail">
                <div className="header">
                    <h1 className="title">
                        Assignment Dashboard
                        {/* <Link to="/">Assignment Dashboard</Link> */}
                    </h1>
                </div>
            </header>
        </>
    );
};

export default Header;
