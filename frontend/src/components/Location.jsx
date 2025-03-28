import React, { useState } from 'react';
import MyMap from './MyMap';
import { FiCopy } from 'react-icons/fi';
import '../styles.css';

function Location() {
    const [copied, setCopied] = useState(false);
    const address = 'Центральная улица, 21А, деревня Высоково, городской округ Мытищи, Московская область';

    const handleCopy = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="section location" data-aos="fade-up">
            <h2>Место проведения</h2>
            <p className="address-line">
                {address}
                <button className="copy-button" onClick={handleCopy} aria-label="Скопировать адрес">
                    <FiCopy />
                </button>
            </p>
            {copied && <div className="copied-notice">Скопировано!</div>}
            <div className="map-container">
                <MyMap />
            </div>
        </section>
    );
}

export default Location;
