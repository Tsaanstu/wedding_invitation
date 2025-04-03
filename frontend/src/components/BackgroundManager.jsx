import React, { useEffect } from "react";
import "../styles.css"; // импортируем стили для фона

function BackgroundManager() {
  useEffect(() => {
    const updateBackground = () => {
      const bg = document.querySelector(".background");
      if (!bg) return;

      const isPortrait = window.innerHeight > window.innerWidth;
      const bgUrl = isPortrait
        ? "/images/background_vert.png" // для портретной ориентации
        : "/images/background.webp"; // для ландшафтной ориентации

      console.log("Setting background:", bgUrl); // проверяем URL фона в консоли
      bg.style.backgroundImage = `url(${bgUrl})`;
    };

    updateBackground(); // вызываем при монтировании
    window.addEventListener("resize", updateBackground); // обновляем при смене ориентации

    return () => window.removeEventListener("resize", updateBackground); // очищаем
  }, []);

  return <div className="background" />; // элемент фона
}

export default BackgroundManager;
