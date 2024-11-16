const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

exports.createShortLink = async (longUrl) => {
    const shortCode = Math.random().toString(36).substring(2, 8);
    const query = 'INSERT INTO links (long_url, short_code) VALUES (?, ?)';
    await pool.execute(query, [longUrl, shortCode]);
    return shortCode;
};

exports.findUrlByShortCode = async (shortCode) => {
    const query = 'SELECT long_url FROM links WHERE short_code = ?';
    const [rows] = await pool.execute(query, [shortCode]);
    return rows.length > 0 ? rows[0].long_url : null;
};
