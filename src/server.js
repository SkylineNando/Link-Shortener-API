const express = require('express');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', apiRoutes);

// Rota para redirecionamento
app.get('/:short_code', async (req, res) => {
    const { short_code } = req.params;
    const { findUrlByShortCode } = require('./models/linkModel');
    const longUrl = await findUrlByShortCode(short_code);
    if (longUrl) {
        res.redirect(longUrl);
    } else {
        res.status(404).send('Link não encontrado');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
