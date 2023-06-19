import React, { useEffect, useState } from 'react';
import { MdArrowUpward } from "react-icons/md"

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility)
        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])


    return (
        <div
            className={`scroll-to-top ${isVisible ? "show" : ""}`}
            onClick={scrollToTop}
        >
            <span>
                <MdArrowUpward />
            </span>
        </div>
    );
};

export default ScrollToTop;