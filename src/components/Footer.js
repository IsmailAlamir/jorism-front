import React from "react";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
    return (
        <footer>
            <span>Copyright Jorism © 2022. All rights reserved</span>
            <ul className="links">
                <li><a href="#Hero">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Testimonials">Testimonials</a></li>
            </ul>
            <ul className="social">
                <li>
                    <BsFacebook />
                </li>
                <li>
                    <BsLinkedin />
                </li>
                <li>
                    <AiFillInstagram />
                </li>
            </ul>
        </footer>
    )

}

