import React, { useEffect } from "react";
import "../styles.css"; // импортируем стили для фона

function BackgroundManager() {
  useEffect(() => {
    const bg = document.querySelector(".background");
    const updateBackground = () => {
      const isPortrait = window.innerHeight > window.innerWidth;
      const bgUrl = isPortrait
        ? "/images/background_vert.png" // для портретной ориентации
        : "/images/background.webp"; // для ландшафтной ориентации

      console.log("Setting background:", bgUrl); // проверяем URL фона в консоли
      bg.style.backgroundImage = `url(${bgUrl})`;
    };
    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  return <div className="background" />;
}

export default BackgroundManager;
