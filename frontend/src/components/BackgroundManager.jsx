import React, { useEffect } from "react";
import "../styles.css";

function BackgroundManager() {
    useEffect(() => {
        const bg = document.querySelector(".background");

        const setBackground = () => {
            const isPortrait = window.innerHeight > window.innerWidth;
            const bgUrl = isPortrait
                ? "/images/background_vert.png"
                : "/images/background.webp";

            console.log("Orientation:", isPortrait ? "portrait" : "landscape");
            console.log("Setting background:", bgUrl);

            if (bg) {
                bg.style.backgroundImage = `url(${bgUrl})`;
            }
        };

        setBackground();
        window.addEventListener("resize", setBackground);

        return () => window.removeEventListener("resize", setBackground);
    }, []);

    return <div className="background" />;
}

export default BackgroundManager;
