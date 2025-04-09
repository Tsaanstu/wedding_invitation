import React from 'react';
import '../styles.css';

function DressCode() {
    return (
        <section className="section dress-code" data-aos="fade-up">
            <div className="dress-code-description-block">
                <h2 className="dress-code-description-header">
                    Дресс-код
                </h2>
                <div className="dress-code-description-text">
                    Для нас очень важна обстановка, в которой пройдет наше торжество,
                    поэтому мы выбрали красивое место и наняли команду професcионалов для его оформления.
                    Чтобы поддержать гармонию нашего мероприятия, мы настоятельно просим наших гостей соблюдать строгий
                    стиль и дресс-код.
                </div>
            </div>

            <div className="dress-code-style-block">
                <div className="dress-code-style-header">
                    <h2 className="dress-code-style-header-text">Стиль</h2>
                </div>

                <div className="dress-code-style-text">
                    Пожалуйста, при выборе нарядов придерживайтесь классического стиля.
                    Предпочтите спортивному костюму рубашку и джинсы, воздержитесь от слишком коротких нарядов и
                    глубоких декольте.
                    Возможно, в день мероприятия будет жарко, поэтому допускаются шорты классического кроя.
                    <br/>Мы надеемся, что вы сможете вдоволь потанцевать, поэтому к обуви требований меньше,
                    но лучше воздержаться от футбольных бутс, берцев и кожанных сапог.
                </div>
            </div>

            <div className="dress-code-palette-block">
                <div className="dress-code-palette-header">
                    <h2 className="dress-code-palette-header-text">Цветовая гамма</h2>
                </div>

                <div className="dress-code-palette-text">
                    Пожалуйста, не допускайте белых и черных элементов одежды в вашем наряде (даже мужчины).
                    Акссесуары (например, сумки и очки) и обувь черного и белого цветов допускаются.
                    <br/> Ниже представлены цвета, которые отлично подойдут к нашему мероприятию.
                </div>
            </div>

            <div className="color-palette">
                <svg width="260" height="260" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
                    <image
                        href="/icons/palette-background.png"
                        x="0"
                        y="0"
                        width="260"
                        height="260"
                        preserveAspectRatio="xMidYMid slice"
                    />
                    <g transform="translate(5,5)">
                        <circle cx="40" cy="40" r="40" fill="#f4acb7"/>
                        <circle cx="125" cy="40" r="40" fill="#dd7596"/>
                        <circle cx="210" cy="40" r="40" fill="#FB6F92"/>
                    </g>

                    <g transform="translate(5, 90)">
                        <circle cx="40" cy="40" r="40" fill="#ADB5BD"/>
                        <circle cx="125" cy="40" r="40" fill="#90CAF9"/>
                        <circle cx="210" cy="40" r="40" fill="#468FAF"/>
                    </g>

                    <g transform="translate(5, 175)">
                        <circle cx="40" cy="40" r="40" fill="#DDB892"/>
                        <circle cx="125" cy="40" r="40" fill="#B08968"/>
                        <circle cx="210" cy="40" r="40" fill="#9C6644"/>
                    </g>

                </svg>
            </div>
            <div className="dress-code-pinterest">
                Если у вас остались вопросы по дресс-коду,
                вы можете перейти по ссылке и посмотреть на собранную нами доску на <a className="contacts-url"
                                                                                       href="https://pin.it/6Bse96PTd"
                                                                                       target="_blank"
                                                                                       rel="noopener noreferrer">Pinterest</a>.
                В ней есть примеры нарядов, соответствущих дресс-коду.
                <br/>
                <br/>Или просто напишите нам :)
            </div>
        </section>
    );
}

export default DressCode;
