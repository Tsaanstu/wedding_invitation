import React, { useEffect } from 'react';
import './Petals.css';

function Petals() {
    useEffect(() => {
        const count = 20;
        const container = document.getElementById('petal-container');

        for (let i = 0; i < count; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.left = Math.random() * 100 + 'vw';
            // petal.style.animationDelay = `${Math.random() * 5}s`;
            petal.style.animationDuration = `${5 + Math.random() * 5}s`;
            container.appendChild(petal);
        }
    }, []);

    return <div id="petal-container"></div>;
}

export default Petals;
