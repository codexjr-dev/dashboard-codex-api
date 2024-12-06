const { sign-in } = require('./AuthService');

module.exports = {
    async sign-in(req, res) {
        try {
            const dados = await sign-in(req.body)

            if (dados.hasOwnProperty('erro')) {
                return res.status(401).send({ error: dados.erro })
            }
            return res.status(200).send({ dados: dados })
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    },
}