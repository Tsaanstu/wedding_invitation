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

            insert.run('nastya', 'Настя', 'Слава', 'f');
            insert.run('vetka', 'Настя', null, 'f');
            insert.run('sania', 'Александр', null, 'm');
            insert.run('alex', 'Алексей', 'Лада', 'm');
            insert.finalize();

            console.log('✅ Добавлены начальные гости');
        }
    });
});

module.exports = db;
