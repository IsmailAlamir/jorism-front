import React from "react";
// import homeImage from "../assets/hero.png";
import CarouselHero from "./CarouselHero"

export default function Hero() {
    return (
        <section id="Hero">
            <div className="background">
                <CarouselHero />
                {/* <img src={homeImage} alt="homeImage" /> */}
            </div>
            {/* <div className="content">
                <div className="title">
                    <h1>Travel to Explore</h1>
                    <p>Travel Agency Website Design using Styled Components</p>
                </div>
                <div className="search">
                    <div className="container">
                        <label >Where you want to go</label>
                        <input type='text' placeholder="search your location" />
                    </div>
                    <div className="container">
                        <label >Check-in</label>
                        <input type='date' />
                    </div>
                    <div className="container">
                        <label >Check-out</label>
                        <input type='date' />
                    </div>
                    <button>Explore Now</button>
                </div>
            </div> */}

        </section>

    );
}
