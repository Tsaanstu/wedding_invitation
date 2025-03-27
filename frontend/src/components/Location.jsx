import React from 'react';
import MyMap from './MyMap';
import '../styles.css';

function Location() {
    return (
        <section className="section location" data-aos="fade-up">
            <h2>Место проведения</h2>
            <p>Москва, примерный адрес — уточняется позже</p>
            <div className="map-container">
                <MyMap />
            </div>
        </section>
    );
}

export default Location;
