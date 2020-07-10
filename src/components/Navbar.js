import React from 'react';
import logo from '../images/logo.svg';

const Navbar = () => {
    return (
             <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark pt-4 pb-lg-2 pl-lg-5 pr-lg-5 xnav-bg">
                <a className="navbar-brand" href="index.html">
                    <img src={logo} width="24px" height="26.7px" className="d-inline-block align-top" alt="logo" />
                    <span className="xlogo-text">Rise</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link xwhite xbolder" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link xwhite xbolder" href="#">VENDORS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link xwhite xbolder" href="#">CATEGORIES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link xwhite xbolder" href="#">CONTACT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link xwhite xbolder" href="#">FAQ</a>
                        </li>
                    </ul>
                </div>        
            </nav>
        </div>
    );
}

export default Navbar;