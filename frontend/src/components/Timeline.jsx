import React from 'react';
import '../styles.css';

function Timeline() {
    const events = [
        {time: '14:00', title: 'Сбор гостей'},
        {time: '15:00', title: 'Свадебная церемония'},
        {time: '16:30', title: 'Праздничный банкет'},
        {time: '22:00', title: 'Завершение вечера'},
    ];

    return (
        <section className="section timeline" data-aos="fade-up">
            <h2>Программа дня</h2>
            <ul className="timeline-list">
                {events.map((event, index) => (
                    <li key={index} className="timeline-item">
                        <span className="timeline-time">{event.time}</span>
                        <span className="timeline-title">{event.title}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Timeline;
