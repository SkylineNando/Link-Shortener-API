const { createShortLink } = require('../models/linkModel');

exports.shortenLink = async (req, res) => {
    const { long_url } = req.body;

    if (!long_url) {
        return res.status(400).json({ error: 'URL longa é obrigatória' });
    }

    try {
        const shortCode = await createShortLink(long_url);
        res.status(201).json({ short_url: `${process.env.BASE_URL}/${shortCode}` });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar link curto' });
    }
};
