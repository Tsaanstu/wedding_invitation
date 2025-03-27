import React, { useEffect, useState } from 'react';

function Greeting() {
    const params = new URLSearchParams(window.location.search);
    const guestSlug = params.get('guest');

    const [guestData, setGuestData] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(true); // 🆕

    useEffect(() => {
        if (guestSlug) {
            fetch(`${process.env.REACT_APP_API_URL}/api/guest/${guestSlug}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('not found');
                    }
                    return res.json();
                })
                .then(data => {
                    setGuestData(data);
                    setLoading(false); // 🆕
                })
                .catch(() => {
                    setNotFound(true);
                    setLoading(false); // 🆕
                });
        }
    }, [guestSlug]);

    if (loading) return null; // 🆕 Ничего не рендерим во время загрузки

    if (notFound || !guestData) {
        return (
            <section className="section greeting" data-aos="fade-up">
                <h2>Гость не найден</h2>
                <p>Пожалуйста, проверьте ссылку.</p>
            </section>
        );
    }

    const { name, partner_name, gender } = guestData;

    const greeting = partner_name
        ? `Дорогие ${name} и ${partner_name}!`
        : gender === 'm'
            ? `Дорогой ${name}!`
            : `Дорогая ${name}!`;


    if (!guestSlug) {
        return (
            <section className="section greeting" data-aos="fade-up">
                <h2>Приглашение не найдено</h2>
                <p>Пожалуйста, перейдите по персональной ссылке из приглашения.</p>
            </section>
        );
    }

    return (
        <section className="section greeting" data-aos="fade-up">
            <h2>{greeting}</h2>
            <p>
                Мы с радостью приглашаем вас на наше свадебное торжество.
                Этот день мы хотим разделить с самыми близкими и важными для нас людьми.
                Будем счастливы видеть вас среди наших гостей!
            </p>
        </section>
    );
}

export default Greeting;
