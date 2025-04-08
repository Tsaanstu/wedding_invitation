import React, {useState} from 'react';
import '../styles.css';

function RSVPForm({guest}) {
    const [attendance, setAttendance] = useState('');
    const [alcohol, setAlcohol] = useState([]);
    const [allergy, setAllergy] = useState('');

    const alcoholOptions = [
        'Пиво светлое',
        'Пиво тёмное',
        'Сидр',
        'Вино красное полусладкое',
        'Вино красное полусухое',
        'Вино белое полусладкое',
        'Вино белое полусухое',
        'Шампанское полусладкое',
        'Шампанское полусухое',
        'Виски',
        'Коньяк',
        'Водка',
        'Безалкогольные напитки'
    ];

    const handleAlcoholChange = (e) => {
        const {value, checked} = e.target;
        setAlcohol(prev =>
            checked ? [...prev, value] : prev.filter(item => item !== value)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!guest) {
            alert('Ошибка: гость не найден.');
            return;
        }

        const data = {
            guest_slug: guest.slug,
            attendance,
            alcohol,
            allergy,
        };

        fetch(`${process.env.REACT_APP_API_URL}/api/rsvp`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(response => {
                if (response.success) {
                    alert('Спасибо за ваш ответ!');
                } else {
                    alert('Ошибка отправки формы');
                }
            })
            .catch(err => {
                alert('Ошибка отправки формы');
                console.error(err);
            });
    };

    if (!guest.slug) {
        return (
            <section className="section rsvp" data-aos="fade-up">
                <h2>Приглашение не найдено</h2>
                <p>Для заполнения анкеты используйте вашу персональную ссылку.</p>
            </section>
        );
    }

    return (
        <section className="section rsvp" data-aos="fade-up">
            <h2>Анкета гостя</h2>
            <p>
                📩 <strong>Пожалуйста, подтвердите своё присутствие заранее.</strong><br/>
                Нам важно получить эту информацию, чтобы обеспечить комфортные условия, особенно для наших иногородних
                гостей.
            </p>
            <form onSubmit={handleSubmit} className="rsvp-form">
                <label>
                    <select value={attendance} onChange={e => setAttendance(e.target.value)} required>
                        <option value="">Выберите вариант</option>
                        <option value="yes">Приду</option>
                        <option value="no">Не смогу прийти</option>
                    </select>
                </label>

                {attendance === 'yes' && (
                    <>
                        <p className="rsvp-form-subtitle">Предпочитаемый алкоголь:</p>
                        <div className="checkbox-grid">
                            {alcoholOptions.map(option => (
                                <div key={option} className="checkbox-item">
                                    <input
                                        type="checkbox"
                                        id={option}
                                        value={option}
                                        checked={alcohol.includes(option)}
                                        onChange={handleAlcoholChange}
                                    />
                                    <label htmlFor={option}>{option}</label>
                                </div>
                            ))}
                        </div>

                        <label>
                            Есть ли у вас аллергии?
                            <input
                                type="text"
                                value={allergy}
                                onChange={e => setAllergy(e.target.value)}
                                placeholder="Введите, если есть"
                            />
                        </label>
                    </>
                )}

                <button type="submit">Отправить</button>
            </form>
        </section>
    );
}

export default RSVPForm;
