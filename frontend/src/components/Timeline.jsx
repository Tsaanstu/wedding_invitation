import React from 'react';
import '../styles.css';

const timelineData = [
    {
        time: '14:00',
        title: 'Сбор гостей',
        icon: '/icons/flower.svg',
    },
    {
        time: '15:00',
        title: 'Свадебная церемония',
        icon: '/icons/rings.svg',
    },
    {
        time: '16:30',
        title: 'Праздничный банкет',
        icon: '/icons/champagne.svg',
    },
    {
        time: '18:00',
        title: 'Подача торта',
        icon: '/icons/cake.svg',
    },
    {
        time: '22:00',
        title: 'Завершение вечера',
        icon: '/icons/fireworks.svg',
    },
];

function Timeline() {
    return (
        <section className="section timeline" data-aos="fade-up">
            <h2>Программа дня</h2>
            <ul className="timeline-list">
                {timelineData.map((item, index) => (
                    <li className="timeline-item" key={index}>
                        <div className="timeline-icon">
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <div className="timeline-time">{item.time}</div>
                        <div className="timeline-title">{item.title}</div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Timeline;
