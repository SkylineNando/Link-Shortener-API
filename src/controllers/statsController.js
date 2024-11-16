const { getLinkStats } = require('../models/linkModel');

exports.getStats = async (req, res) => {
    const { short_code } = req.params;

    if (!short_code) {
        return res.status(400).json({ error: 'O código do link é obrigatório' });
    }

    try {
        const stats = await getLinkStats(short_code);
        if (!stats) {
            return res.status(404).json({ error: 'Link não encontrado' });
        }

        res.status(200).json(stats);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar estatísticas do link' });
    }
};
