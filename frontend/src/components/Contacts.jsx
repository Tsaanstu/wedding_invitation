import React from 'react';

function Contacts() {
    return (
        <section className="section greeting" data-aos="fade-up">
            <h2>Контакты</h2>
            <p>
                В случае возникновения каких-либо вопросов обязательно пишите нам ☺️
            </p>
            <p>
                Жених Владимир: <a className="contacts-url" href="https://t.me/Tsaanstu" target="_blank"
                                   rel="noopener noreferrer">
                telegram
            </a>
            </p>
            <p>
                Невеста Алина: <a className="contacts-url" href="https://t.me/alina_co1d" target="_blank"
                                  rel="noopener noreferrer">
                telegram
            </a>
            </p>
        </section>
    );
}

export default Contacts;
