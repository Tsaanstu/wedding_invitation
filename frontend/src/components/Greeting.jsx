import React from 'react';

function Greeting({guest}) {
    const {name, partner_name, gender} = guest;

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
