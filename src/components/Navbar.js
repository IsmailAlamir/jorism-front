import React, { useState } from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from 'react-icons/vsc';

export default function Navbar() {
    const [navbarState, setNavbarState] = useState(false)
    return (
        <>
            <nav>
                <div className="brand">
                    <div className="container">
                        <img className="logo" src={logo} alt='logo' />
                        Jorism
                    </div>
                    <div className="toggle">
                        {
                            navbarState ? <VscChromeClose onClick={() => setNavbarState(false)} /> : <GiHamburgerMenu onClick={() => setNavbarState(true)} />
                        }
                    </div>
                </div>
                <ul>
                    <li><a href="#Hero">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#Testimonials">Testimonials</a></li>
                </ul>
                <button>Connect</button>
            </nav>
            {navbarState && <div className="ResponsiveNav"
                style={{ top: `${({ navbarState }) => (navbarState ? "50px" : "-400px")};` }}
>
            <ul>
                <li><a href="#Hero" onClick={() => setNavbarState(false)}>Home</a></li>
                <li><a href="#About" onClick={() => setNavbarState(false)}>About</a></li>
                <li><a href="#Services" onClick={() => setNavbarState(false)}>Services</a></li>
                <li><a href="#Testimonials" onClick={() => setNavbarState(false)}>Testimonials</a></li>
            </ul>
        </div>}

        </>
    )

}

