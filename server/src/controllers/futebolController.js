const db = require("../models");
const PAGINATION_START = 0;
const PAGINATION_LIMIT = 20;


module.exports = {
    async index (request, response) {
        const start = request.query.start || PAGINATION_START;
        const limit = request.query.limit || PAGINATION_LIMIT;
        try {
            const deck = await db.Futebol.findAll({
                offset: start,
                limit: limit
            });

            response.status(206).json(deck);

        } catch (error) {
            response.json({ Error_name: error.name });
        }
    }
}