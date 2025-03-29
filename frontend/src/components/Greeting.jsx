import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Greeting() {
    const { slug } = useParams();
    const [guestData, setGuestData] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            fetch(`${process.env.REACT_APP_API_URL}/api/guest/${slug}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('not found');
                    }
                    return res.json();
                })
                .then(data => {
                    setGuestData(data);
                    setLoading(false);
                })
                .catch(() => {
                    setNotFound(true);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [slug]);

    if (loading) return null;

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

    const pronoun = partner_name ? 'вас' : 'тебя';

    return (
        <section className="section greeting" data-aos="fade-up">
            <h2>{greeting}</h2>
            <p>
                Мы с радостью приглашаем {pronoun} на наше свадебное торжество.
                Этот день мы хотим разделить с самыми близкими и важными для нас людьми.
                Будем счастливы видеть {pronoun} среди наших гостей!
            </p>
        </section>
    );
}

export default Greeting;
