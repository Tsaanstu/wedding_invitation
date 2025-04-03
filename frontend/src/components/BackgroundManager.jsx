import {useEffect} from "react";

function BackgroundManager() {
    useEffect(() => {
        const updateOrientation = () => {
            const isPortrait = window.innerHeight > window.innerWidth;

            // Удаляем предыдущие классы
            document.body.classList.remove("portrait", "landscape");

            // Добавляем нужный класс
            document.body.classList.add(isPortrait ? "portrait" : "landscape");
        };

        updateOrientation(); // запускаем при загрузке
        window.addEventListener("resize", updateOrientation);
        return () => window.removeEventListener("resize", updateOrientation);
    }, []);

    return null;
}

export default BackgroundManager;