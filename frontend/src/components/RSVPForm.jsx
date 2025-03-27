import React, {useState, useEffect} from 'react';
import '../styles.css';

function RSVPForm() {
    const params = new URLSearchParams(window.location.search);
    const guestSlug = params.get('guest');

    const [guestData, setGuestData] = useState(null);
    const [attendance, setAttendance] = useState('');
    const [alcohol, setAlcohol] = useState([]);
    const [allergy, setAllergy] = useState('');

    // Загружаем данные о госте
    useEffect(() => {
        if (guestSlug) {
            fetch(`${process.env.REACT_APP_API_URL}/api/guest/${guestSlug}`)
                .then(res => res.json())
                .then(data => setGuestData(data))
                .catch(err => {
                    console.error('Ошибка при загрузке гостя:', err);
                });
        }
    }, [guestSlug]);

    const handleAlcoholChange = (e) => {
        const {value, checked} = e.target;
        setAlcohol(prev =>
            checked ? [...prev, value] : prev.filter(item => item !== value)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!guestData) {
            alert('Ошибка: гость не найден.');
            return;
        }

        const data = {
            guest_id: guestData.id,
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

    if (!guestSlug) {
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
            <form onSubmit={handleSubmit} className="rsvp-form">
                <label>
                    Подтвердите ваше присутствие:
                    <select value={attendance} onChange={e => setAttendance(e.target.value)} required>
                        <option value="">Выберите вариант</option>
                        <option value="yes">Приду</option>
                        <option value="no">Не смогу прийти</option>
                    </select>
                </label>

                {attendance === 'yes' && (
                    <>
                        <label>
                            Предпочитаемый алкоголь:
                            <div className="checkbox-group">
                                <label><input type="checkbox" value="Вино" onChange={handleAlcoholChange}/> Вино</label>
                                <label><input type="checkbox" value="Шампанское"
                                              onChange={handleAlcoholChange}/> Шампанское</label>
                                <label><input type="checkbox" value="Виски"
                                              onChange={handleAlcoholChange}/> Виски</label>
                                <label><input type="checkbox" value="Без алкоголя" onChange={handleAlcoholChange}/> Без
                                    алкоголя</label>
                            </div>
                        </label>

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
