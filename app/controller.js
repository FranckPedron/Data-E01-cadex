const cadexService = require("./service/cadex");

const controller = {
    cadex(req, res) {
        const phrase = cadexService.generate();

        res.json(phrase);
    },
};

module.exports = controller;
