import React, {useState} from 'react';
import '../styles.css';
import {FiCopy} from "react-icons/fi";

function GirlParty() {
    return (
        <section className="section details" data-aos="fade-up">
            <h2>Девичник</h2>

            <h3>🧖‍♀️ Место проведения</h3>

            <p>
                📅 Дата: 13 августа (среда)<br/>
                🕖 Время проведения: 19:00 - 23:00<br/>
                📍 Место: Банный комплекс "Жар-Птица", ул. Нижняя Масловка, 15, стр. 3, Москва<br/>
            </p>

            <h3>🌸 Организационные моментики</h3>

            <ul>
                <li>Аренда бани — оплачена невестой</li>
                <li>С гостей — оплата еды и напитков за себя (приносить еду и напитки запрещено правилами заведения)</li>
            </ul>

        </section>
    );
}

export default GirlParty;
