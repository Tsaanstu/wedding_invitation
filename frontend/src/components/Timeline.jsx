import React from 'react';
import '../styles.css';

const timelineDataFirstDay = [
    {
        time: '14:50',
        title: 'Сбор гостей',
        icon: '/icons/hall.svg',
    },
    {
        time: '15:10',
        title: 'Регистрация брака',
        icon: '/icons/rings.svg',
    },
];

const timelineDataSecondDay = [
    {
        time: '14:00',
        title: 'Сбор гостей',
        icon: '/icons/flower.svg',
    },
    {
        time: '14:30',
        title: 'Свадебная церемония',
        icon: '/icons/couple.svg',
    },
    {
        time: '15:00',
        title: 'Праздничный банкет',
        icon: '/icons/champagne.svg',
    },
    // {
    //     time: '18:00',
    //     title: 'Подача торта',
    //     icon: '/icons/cake.svg',
    // },
    {
        time: '22:00',
        title: 'Завершение вечера',
        icon: '/icons/fireworks.svg',
    },
];

function Timeline() {
    return (
        <section className="section timeline" data-aos="fade-up">
            <h2>Программа</h2>
            <h3>15 августа 2025</h3>
            <ul className="timeline-list">
                {timelineDataFirstDay.map((item, index) => (
                    <li className="timeline-item" key={index}>
                        <div className="timeline-icon">
                            <img src={item.icon} alt={item.title}/>
                        </div>
                        <div className="timeline-time">{item.time}</div>
                        <div className="timeline-title">{item.title}</div>
                    </li>
                ))}
            </ul>
            <h3>16 августа 2025</h3>
            <ul className="timeline-list">
                {timelineDataSecondDay.map((item, index) => (
                    <li className="timeline-item" key={index}>
                        <div className="timeline-icon">
                            <img src={item.icon} alt={item.title}/>
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
