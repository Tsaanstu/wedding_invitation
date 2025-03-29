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
    const {guest_slug, attendance, alcohol, allergy} = req.body;

    if (!guest_slug || !attendance) {
        return res.status(400).json({error: 'Некорректные данные'});
    }

    const alcoholList = Array.isArray(alcohol) ? alcohol.join(', ') : '';

    db.run(
        `INSERT INTO rsvp (guest_slug, attendance, alcohol, allergy)
         VALUES (?, ?, ?, ?)`,
        [guest_slug, attendance, alcoholList, allergy],
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
               guests.slug AS guest_slug,
               guests.name AS guest_name,
               COALESCE(guests.partner_name, '') AS partner_name,
               rsvp.attendance,
               rsvp.alcohol,
               rsvp.allergy,
               rsvp.submitted_at
        FROM rsvp
                 JOIN guests ON guests.slug = rsvp.guest_slug
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
        `SELECT slug, name, partner_name, gender
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


// 🔹 GET /api/guest — получить информацию о гостях
app.get('/api/guest', (req, res) => {
    const {slug} = req.params;

    db.all(
        `SELECT slug, name, partner_name, gender
         FROM guests`,
        [slug],
        (err, row) => {
            if (err) {
                console.error('❌ Ошибка при получении гостя:', err.message);
                return res.status(500).json({error: 'Ошибка сервера'});
            }

            res.json(row);
        }
    );
});


// ✅ Сервер запущен
app.listen(PORT, () => {
    console.log(`✅ Сервер запущен: http://localhost:${PORT}`);
});
