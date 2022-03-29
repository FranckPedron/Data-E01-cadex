// const cadexService = require("./service/cadex");

const dataMapper = require("../model/datamapper");

const controller = {
    async getCadex(req, res) {
        let cadex;
        if (req.query) {
            // l'utilisateur essaie de forcer des valeurs
            const cadexTemp = await dataMapper.generate();

            // je récupère les queryStrings
            const valuesToReplace = req.query;
            console.log(valuesToReplace);

            // je remplace les valeurs
            // cadex.verb = valuesToReplace.verb;
            // cadex.name = valuesToReplace.name;
            // avec le spread operator, on peut copier l'ensemble des proriétés de valuesToReplace dans cadex
            const copy = { ...cadexTemp, ...valuesToReplace };
            // console.log(cadex);
            // console.log(copy);

            cadex = copy.glue();
        } else {
            // je récupère un cadex
            cadex = await dataMapper.getSentence();
        }

        // j'envoie la phrase
        res.json(cadex);
    },
    async postCadex(req, res) {
        // console.log(req.body);
        // on va récupérer les valeurs à insérer
        const values = req.body;

        // on insère les valeurs
        await dataMapper.add(values);

        // je renvoie une phrase avec les valeurs ajoutées
        const cadex = await dataMapper.generate();
        const copy = { ...cadex, ...values };

        res.json(copy.glue());
    },
};

module.exports = controller;
