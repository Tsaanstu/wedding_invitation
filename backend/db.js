const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

// ✅ Миграции
db.serialize(() => {
    // Гости
    db.run(`
        CREATE TABLE IF NOT EXISTS guests (
                                              id INTEGER PRIMARY KEY AUTOINCREMENT,
                                              slug TEXT UNIQUE NOT NULL,
                                              name TEXT NOT NULL,
                                              partner_name TEXT,
                                              gender TEXT CHECK (gender IN ('m', 'f')) NOT NULL DEFAULT 'f'
            )
    `);

    // Ответы
    db.run(`
        CREATE TABLE IF NOT EXISTS rsvp (
                                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                                            guest_id INTEGER NOT NULL,
                                            attendance TEXT,
                                            alcohol TEXT,
                                            allergy TEXT,
                                            submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                            FOREIGN KEY (guest_id) REFERENCES guests(id)
            )
    `);

    // Начальные гости (если таблица пуста)
    db.get(`SELECT COUNT(*) AS count FROM guests`, (err, row) => {
        if (row.count === 0) {
            const insert = db.prepare(`
                INSERT INTO guests (slug, name, partner_name, gender) VALUES (?, ?, ?, ?)
            `);

            insert.run('d1ecc42b-c25c-4062-832c-cf5acc5288d7', 'Алексей', 'Лада', 'm');
            insert.run('b0b95534-20f0-4001-be83-4768928038a3', 'Анастасия', 'Мстислав', 'f');
            insert.run('c5253d5a-a336-40a0-9111-bf787f8a2a60', 'Диана', 'Виктория', 'f');
            insert.run('a7df2f8d-5bec-4340-b022-49fd82d72b7e', 'Александр', null, 'm'); // Дублец
            insert.run('dfd75fc0-7985-4102-b77e-fc5f0e4837a6', 'Александр', null, 'm'); // Боровик
            insert.run('479b49d2-5a1a-48dc-b73a-80640625b7fa', 'Ольга', 'Михаил', 'f');
            insert.run('29c90d79-2461-4919-974d-ec6b4cbfc923', 'Татьяна', 'Антон', 'f');
            insert.run('8e8ad825-a63c-4623-977b-7093f8fa5d3a', 'Азалия', null, 'f');
            insert.run('3f14713e-12e4-4101-80ad-f3122f9b5b28', 'Анастасия', null, 'f');
            insert.run('fa2fca5a-10aa-44c9-b403-9420e742e028', 'Софья', 'Искандер', 'f');
            insert.run('6aba713d-0cc0-4d6d-8b28-85ba9e7ef612', 'Светлана Васильевна', 'Сергей Мартунович', 'f');
            insert.run('d0da1ba2-1570-4393-ae30-159e316702c8', 'Мария', null, 'f');
            insert.run('15d886ba-ecec-42a6-88f0-fa2a897c5430', 'Надежда Николаевна', 'Василий Петрович', 'f');
            insert.run('fe79dcec-1eec-4f8a-a9d1-b35ac34a170e', 'Эльвира Раяновна', 'Руслан Рустюмович', 'f');
            insert.run('76e7cd1f-c26f-49c5-b8cf-a03872a08c4f', 'Амир', null, 'm');
            insert.run('ca9ee244-abe9-4d16-8287-94ff867e080c', 'Амина', null, 'f');
            insert.run('b81fca63-4697-41c1-8c0d-6fef785fb490', 'Разиля Тимергалиевна', null, 'f');
            insert.finalize();

            console.log('✅ Добавлены начальные гости');
        }
    });
});

module.exports = db;
