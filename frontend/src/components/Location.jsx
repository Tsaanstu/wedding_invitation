import React from 'react';
import '../styles.css';

function Location() {
    return (
        <section className="section location" data-aos="fade-up">
            <h2>Место проведения</h2>
            <p>Москва, примерный адрес — уточняется позже</p>
            <div className="map-container">
                <iframe
                    title="Wedding Location"
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A96f3031e00374f073647e42a007eb474adbe316b391bfb7f5a4450281ff699b5&amp;source=constructor"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
}

export default Location;
