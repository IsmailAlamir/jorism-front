import React from "react";
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

import { ImBehance2 } from "react-icons/im";

export default function Footer() {
    return (
        <footer>
            <span>Copyright Ismail Al Amir © 2022. All rights reserved</span>
            <ul className="links">
                <li><a href="#Hero">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Testimonials">Testimonials</a></li>
            </ul>
            <ul className="social">
                <li>
                    <a href="https://github.com/IsmailAlamir" >   <BsGithub /> </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/isalamir/" >   <BsLinkedin /> </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/isalamir/" >   <ImBehance2 /> </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/ismaeelalamir/" >  <BsFacebook /> </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/1sml_/" > <GrInstagram /> </a>
                </li>
            </ul>
        </footer>
    )

}

