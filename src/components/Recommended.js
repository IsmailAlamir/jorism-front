import React, { useState } from "react";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

export default function Recommended() {

    const data = [
        {
            image: "https://img.freepik.com/premium-photo/camels-transporting-tourists-around-lost-city-petra-camels-front-treasury-petra-ancient-city-al-khazneh-jordan_431724-2089.jpg?w=2060",
            title: "Petra",
            subTitle: "One of the seven Wonders of the World",
            cost: "99 JD",
            duration: "2 night ",
        },
        {
            image: "https://www.7iber.com/wp-content/uploads/2020/07/%D8%B3%D9%84%D9%8A%D9%85%D8%A7%D9%86-%D8%A7%D9%84%D8%B2%D9%84%D8%A7%D8%A8%D9%8A%D8%A9-%D9%85%D8%B9-%D8%A7%D9%94%D8%AD%D8%AF-%D8%A7%D9%84%D8%AC%D9%85%D8%A7%D9%84-%D8%A8%D8%B1%D9%85.jpg",
            title: "Wadi Rum",
            subTitle: "The Valley of the Moon",
            cost: "99 JD",
            duration: " 2 night ",
        },
        {
            image: "https://youimg1.tripcdn.com/target/0100u120009evep5e8844.jpg?proc=source%2Ftrip",
            title: "Aqaba",
            subTitle: "The only coastal city in Jordan",
            cost: "45 JD",
            duration: " 2 night ",
        },
        {
            image: "https://mrm-style.com/en/wp-content/uploads/2022/08/Letters-from-Jordan-Amman-and-Jerash-Jewels-of-the-Middle-East-you-will-love-Mr.M-by-Marko-Tadic-mrmbymarkotadic12.jpg",
            title: "Jerash",
            subTitle: "One of the world's best-preserved ancient Roman cities",
            cost: "24 JD",
            duration: " 1 Day",
        },
        {
            image: "https://click2jordan.com/wp-content/uploads/2020/08/%D8%A7%D9%84%D8%A8%D8%AD%D8%B1-%D8%A7%D9%84%D9%85%D9%8A%D8%AA-%D8%A7%D9%84%D8%A7%D8%B1%D8%AF%D9%86.jpg",
            title: "Dead Sea",
            subTitle: "The lowest point on Earth accessible by road",
            cost: "149 JD",
            duration: " 2 night 2 day ",
        },
        {
            image: "https://ucarecdn.com/2d222796-4d8f-4914-9af8-b6b413300d9f/",
            title: "Amman Citadel",
            subTitle: "It has been occupied since at least the Bronze Age",
            cost: "5 JD",
            duration: " 2 day ",
        },
    ];

    const packages = [
        "The Weekend Break",
        "The Package Holiday",
        "The Group Tour",
        "Long Term Slow Travel",
    ];

    const [active, setActive] = useState(1);


    return (
        <section id="Recommended">
            <div className="titleRec">
                <h2>Recommended Destination</h2>
            </div>
            <div className="packages">
                <ul>
                    {packages.map((pkg, index) => {
                        return (
                            <li
                                className={active === index + 1 ? "activePkg" : ""}
                                onClick={() => setActive(index + 1)}
                            >
                                {pkg}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="destinations">
                {data.map(destination => {
                    return (
                        <div className="destination">
                            <img src={destination.image} alt={destination.title} />
                            <h3>{destination.title}</h3>
                            <p>{destination.subTitle}</p>
                            <div className="info">
                                <div className="services">
                                    <img src={info1} alt="info1" />
                                    <img src={info2} alt="info2" />
                                    <img src={info3} alt="info3" />
                                </div>
                                <h4>{destination.cost}</h4>
                            </div>
                            <div className="distance">
                                <span>________</span>
                                <span>{destination.duration}</span>
                            </div>
                        </div>
                    );
                })}

            </div>
        </section>

    )

}
