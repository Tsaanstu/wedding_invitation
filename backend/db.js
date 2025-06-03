const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./storage/database.sqlite');

// ✅ Миграции
db.serialize(() => {
    // Гости
    db.run(`
        CREATE TABLE IF NOT EXISTS guests (
                                              slug TEXT UNIQUE NOT NULL,
                                              name TEXT NOT NULL,
                                              partner_name TEXT,
                                              gender TEXT CHECK (gender IN ('m', 'f')) NOT NULL DEFAULT 'f',
            girl_party BOOLEAN NOT NULL DEFAULT 0,
            boy_party BOOLEAN NOT NULL DEFAULT 0
            )
    `);

    // Ответы
    db.run(`
        CREATE TABLE IF NOT EXISTS rsvp (
                                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                                            guest_slug TEXT NOT NULL,
                                            attendance TEXT,
                                            alcohol TEXT,
                                            allergy TEXT,
                                            submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                            FOREIGN KEY (guest_slug) REFERENCES guests(slug)
            )
    `);

    // Массив с начальными гостями
    const initialGuests = [
        {
            slug: 'd1ecc42b-c25c-4062-832c-cf5acc5288d7',
            name: 'Алексей',
            partner_name: 'Лада',
            gender: 'm',
            girl_party: false,
            boy_party: false
        },
        {
            slug: 'b0b95534-20f0-4001-be83-4768928038a3',
            name: 'Анастасия',
            partner_name: 'Мстислав',
            gender: 'f',
            girl_party: false,
            boy_party: false
        },
        {
            slug: 'c5253d5a-a336-40a0-9111-bf787f8a2a60',
            name: 'Диана',
            partner_name: 'Виктория',
            gender: 'f',
            girl_party: false,
            boy_party: false
        },
        {
            slug: 'a7df2f8d-5bec-4340-b022-49fd82d72b7e',
            name: 'Александр', // Дублецевич
            partner_name: null,
            gender: 'm',
            girl_party: false,
            boy_party: false
        },
        {
            slug: 'dfd75fc0-7985-4102-b77e-fc5f0e4837a6',
            name: 'Александр', // Боровиков
            partner_name: null,
            gender: 'm',
            girl_party: false,
            boy_party: false
        },
        {
            slug: '479b49d2-5a1a-48dc-b73a-80640625b7fa',
            name: 'Ольга',
            partner_name: 'Михаил',
            gender: 'f',
            girl_party: false,
            boy_party: false
        },
        {
            slug: '29c90d79-2461-4919-974d-ec6b4cbfc923',
            name: 'Татьяна',
            partner_name: 'Антон',
            gender: 'f',
            girl_party: false,
            boy_party: false
        },
        {
            slug: '8e8ad825-a63c-4623-977b-7093f8fa5d3a',
            name: 'Азалия',
            partner_name: null,
            gender: 'f',
            girl_party: false,
            boy_party: false
        },
        {
            slug: '3f14713e-12e4-4101-80ad-f3122f9b5b28',
            name: 'Анастасия',
            partner_name: null,
            gender: 'f',
            girl_party: false,
            boy_party: false
        },
        {
            slug: 'fa2fca5a-10aa-44c9-b403-9420e742e028',
            name: 'Софья',
            partner_name: 'Искандер',
            gender: 'f',
            girl_party: false,
            boy_party: false
        },
        {
            slug: '6aba713d-0cc0-4d6d-8b28-85ba9e7ef612',
            name: 'Светлана Васильевна',
            partner_name: 'Сергей Мартунович',
            gender: 'f',
            girl_party: false,
            boy_party: false
        },
        {
            slug: 'd0da1ba2-1570-4393-ae30-159e316702c8',
            name: 'Мария',
            partner_name: null,
            gender: 'f',
            girl_party: false,
            boy_party: false
        },
        {
            slug: '15d886ba-ecec-42a6-88f0-fa2a897c5430',
            name: 'Надежда Николаевна',
            partner_name: 'Василий Петрович',
            gender: 'f',
            girl_party: false,
            boy_party: false
        },
        {
            slug: 'fe79dcec-1eec-4f8a-a9d1-b35ac34a170e',
            name: 'Эльвира Раяновна',
            partner_name: 'Руслан Рустюмович',
            gender: 'f',
            girl_party: false,
            boy_party: false
        },
        {
            slug: '76e7cd1f-c26f-49c5-b8cf-a03872a08c4f',
            name: 'Амир',
            partner_name: null,
            gender: 'm',
            girl_party: false,
            boy_party: false
        },
        {
            slug: 'ca9ee244-abe9-4d16-8287-94ff867e080c',
            name: 'Амина',
            partner_name: null,
            gender: 'f',
            girl_party: false,
            boy_party: false
        },
        {
            slug: 'b81fca63-4697-41c1-8c0d-6fef785fb490',
            name: 'Разиля Тимергалиевна',
            partner_name: null,
            gender: 'f',
            girl_party: false,
            boy_party: false
        },
        {
            slug: '405da082-8725-4993-ac6b-6b522c63077e',
            name: 'Расима Тимергалиевна',
            partner_name: null,
            gender: 'f',
            girl_party: false,
            boy_party: false
        },
        {
            slug: '2c628a2c-8f98-458a-9cc1-83f441e5dd3c',
            name: 'Никита', // Казарян
            partner_name: null,
            gender: 'm',
            girl_party: false,
            boy_party: false
        },
        {
            slug: '8458f677-294b-4f04-b417-8f1479fd22ab',
            name: 'Организатор',
            partner_name: null,
            gender: 'm',
            girl_party: false,
            boy_party: false
        },
        {
            slug: '8402cea4-9187-494c-9d29-5639c49c24bf',
            name: 'Анна Борисовна', // тетя Аня
            partner_name: null,
            gender: 'f',
            girl_party: false,
            boy_party: false
        },
        {
            slug: 'fe8d85ca-2b3d-4f56-bfe1-87dfbb644f4c',
            name: 'Ильмира',
            partner_name: null,
            gender: 'f',
            girl_party: false,
            boy_party: false
        }
    ];

    const insertStmt = db.prepare(`
        INSERT INTO guests (slug, name, partner_name, gender, girl_party, boy_party)
        VALUES (?, ?, ?, ?, ?, ?)
            ON CONFLICT(slug) DO UPDATE SET
            name = excluded.name,
            partner_name = excluded.partner_name,
            gender = excluded.gender,
            girl_party = excluded.girl_party,
            boy_party = excluded.boy_party
    `);

    for (const guest of initialGuests) {
        insertStmt.run(
            guest.slug,
            guest.name,
            guest.partner_name,
            guest.gender,
            guest.girl_party ? 1 : 0,
            guest.boy_party ? 1 : 0,
            (err) => {
                if (err) {
                    console.error(`Ошибка при вставке/обновлении гостя ${guest.slug}:`, err);
                }
            }
        );
    }

    insertStmt.finalize((err) => {
        if (err) {
            console.error('Ошибка при завершении statement:', err);
        } else {
            console.log('✅ Гости добавлены/обновлены');
        }
    });

});

module.exports = db;
