const cadexService = require("./service/cadex");

const controller = {
    getCadex(req, res) {
        // je génère le cadex
        const cadex = cadexService.generate();

        // je récupère les queryStrings
        const valuesToReplace = req.query;
        console.log(valuesToReplace);

        // je remplace les valeurs
        // cadex.verb = valuesToReplace.verb;
        // cadex.name = valuesToReplace.name;
        // avec le spread operator, on peut copier l'ensemble des proriétés de valuesToReplace dans cadex
        const copy = { ...cadex, ...valuesToReplace };
        // console.log(cadex);
        // console.log(copy);

        // j'envoie la phrase
        res.json(copy.glue());
    },
    postCadex(req, res) {
        // console.log(req.body);
        // on va récupérer les valeurs à insérer
        const values = req.body;

        // on insère les valeurs
        cadexService.add(values);

        // je renvoie une phrase avec les valeurs ajoutées
        const cadex = cadexService.generate();
        const copy = { ...cadex, ...values };

        res.json(copy.glue());
    },
};

module.exports = controller;
