import React from "react";
import { MdPayment } from 'react-icons/md';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { IoMdPricetags } from 'react-icons/io';
import { TbViewfinder } from 'react-icons/tb';


export default function Services() {
    const data = [
        {
            icon: <IoMdPricetags />,
            title: "Get Best Prices",
            subTitle:
                "Pay through our application and save thousands and get amazing rewards.",
        },
        {
            icon: <AiOutlineSafetyCertificate />,
            title: "Covid Safe",
            subTitle:
                "We have all the curated hotels that have all the precaution for a covid safe environment.",
        },
        {
            icon:  <MdPayment />,
            title: "Flexible Payment",
            subTitle:
                " Enjoy the flexible payment through our app and get rewards on every payment.",
        },
        {
            icon:  <TbViewfinder />,
            title: "Find The Best Near You",
            subTitle:
                "Find the best hotels and places to visit near you in a single click.",
        },
    ];

    return (
        <section id="Services">
            {
                data.map(service => {
                    return (
                        <div className="service">
                            <div className="icon">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.subTitle}</p>
                        </div>
                    )
                })
            }
        </section>

    )

}
