require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = process.env.API_PORT || 5000;

// ✅ Middleware
app.use(cors()); // Разрешаем кросс-доменные запросы
app.use(express.json()); // Парсим JSON в запросах

// 🔹 POST /api/rsvp — запись анкеты
app.post('/api/rsvp', (req, res) => {
    const {guest_id, attendance, alcohol, allergy} = req.body;

    if (!guest_id || !attendance) {
        return res.status(400).json({error: 'Некорректные данные'});
    }

    const alcoholList = Array.isArray(alcohol) ? alcohol.join(', ') : '';

    db.run(
        `INSERT INTO rsvp (guest_id, attendance, alcohol, allergy)
         VALUES (?, ?, ?, ?)`,
        [guest_id, attendance, alcoholList, allergy],
        function (err) {
            if (err) {
                console.error('❌ Ошибка при записи в БД:', err.message);
                return res.status(500).json({error: 'Ошибка сервера'});
            }

            res.status(200).json({success: true, id: this.lastID});
        }
    );
});

// 🔹 Получить все ответы с именами гостей
app.get('/api/rsvp', (req, res) => {
    const query = `
        SELECT rsvp.id,
               guests.name AS guest_name,
               guests.partner_name,
               rsvp.attendance,
               rsvp.alcohol,
               rsvp.allergy,
               rsvp.submitted_at
        FROM rsvp
                 JOIN guests ON guests.id = rsvp.guest_id
        ORDER BY rsvp.submitted_at DESC
    `;

    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('❌ Ошибка при получении RSVP:', err.message);
            return res.status(500).json({error: 'Ошибка сервера'});
        }

        res.json(rows);
    });
});


// 🔹 GET /api/guest/:slug — получить информацию о госте
app.get('/api/guest/:slug', (req, res) => {
    const {slug} = req.params;

    db.get(
        `SELECT id, name, partner_name, gender
         FROM guests
         WHERE slug = ?`,
        [slug],
        (err, row) => {
            if (err) {
                console.error('❌ Ошибка при получении гостя:', err.message);
                return res.status(500).json({error: 'Ошибка сервера'});
            }

            if (!row) {
                return res.status(404).json({error: 'Гость не найден'});
            }

            res.json(row);
        }
    );
});


// ✅ Сервер запущен
app.listen(PORT, () => {
    console.log(`✅ Сервер запущен: http://localhost:${PORT}`);
});
