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
                    src="https://yandex.ru/map-widget/v1/?ll=37.749022%2C55.960715&mode=search&oid=117554353529&ol=biz&z=17"
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
