import React from 'react';
import '../styles.css';

function DressCode() {
    return (
        <section className="section dress-code" data-aos="fade-up">
            <h2>Дресс-код</h2>
            <p>
                Мы будем рады, если вы поддержите атмосферу праздника в одежде
                пастельных тонов: нежно-голубой, розовый, серый, светло-желтый.
            </p>
            <p>Главное — ваш комфорт и хорошее настроение!</p>

            <div className="color-palette">
                <img src="/icons/palette.svg" alt="Цветовая палитра" />
            </div>
        </section>
    );
}

export default DressCode;
