import React from "react";
import { BiFace } from 'react-icons/bi';
export default function Testimonials() {

    return (
        <section id="Testimonials">
            <div className="title">
                <h2>Happy Customers</h2>
            </div>
            <div className="testimonials">
                <div className="testimonial">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                        asperiores eaque.
                    </p>
                    <div className="info">
                        <BiFace className="avatar" />
                        <dev className="detalis">
                            <h4>anyone</h4>
                            <span>CEO- anything company</span>
                        </dev>
                    </div>
                </div>
                <div className="testimonial">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                        asperiores eaque.
                    </p>
                    <div className="info">
                        <BiFace className="avatar" />
                        <dev className="detalis">
                            <h4>anyone</h4>
                            <span>CEO- anything company</span>
                        </dev>
                    </div>
                </div>
                <div className="testimonial">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                        asperiores eaque.
                    </p>
                    <div className="info">
                        <BiFace className="avatar" />
                        <dev className="detalis">
                            <h4>anyone</h4>
                            <span>CEO- anything company</span>
                        </dev>
                    </div>
                </div>


            </div>
        </section>

    )

}

