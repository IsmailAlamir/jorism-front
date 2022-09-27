import React, { useState } from "react";
import logo from "../assets/logo.png"
export default function ScrollToTop() {

    const [scrollState, setScrollState] = useState(false);

    const toTop = () => {
        window.scrollTo({ top: 0 });
    };

    window.addEventListener("scroll", () => {
        window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false)

    })
    return (
        <>
            {scrollState && <div className="ToTop" onClick={toTop}
                style={{ display: ` ${({ scrollState }) => (scrollState ? "block" : "none")}` }}
            >
                <img src={logo} alt='logo'
                />
            </div>}
        </>
    )

}

