import React from 'react';
import '../styles.css';

function DressCode() {
    return (
        <section className="section dress-code" data-aos="fade-up">
            <h2>Дресс-код</h2>
            <p>
                Для нас очень важна обстановка, в которой пройдет наше торжество,
                поэтому мы выбрали красивое место и наняли команду професcионалов для его оформления.
                Чтобы поддержать гармонию нашего мероприятия, мы настоятельно просим наших гостей соблюдать строгий стиль и дресс-код.
            </p>
            <h3>Стиль</h3>
            <p>
                Пожалуйста, при выборе нарядов придерживайтесь классического стиля.
                Предпочтите рубашку и джинсы спортивному костюму, воздержитесь от слишком коротких нарядов и глубоких декольте,
                а также чересчур яркого макияжа.
                Возможно, в день мероприятия будет жарко, поэтому допускаются шорты классического кроя
            </p>
            <h3>Цветовая гамма</h3>
            <p>
                Ниже представлены цвета, которые отлично подойдут к нашему мероприятию.
                <p>P.S. Пожалуйста, не допускайте белых и черных элементов одежды в вашем наряде (даже мужчины).</p>
            </p>
            <p></p>

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
                        <circle cx="40"  cy="40" r="40" fill="#BBDEFB" />
                        <circle cx="125" cy="40" r="40" fill="#90CAF9" />
                        <circle cx="210" cy="40" r="40" fill="#468FAF" />
                    </g>

                    <g transform="translate(5, 175)">
                        <circle cx="40"  cy="40" r="40" fill="#DDB892" />
                        <circle cx="125"  cy="40" r="40" fill="#B08968" />
                        <circle cx="210" cy="40" r="40" fill="#9C6644" />
                    </g>

                </svg>
            </div>
        </section>
    );
}

export default DressCode;
