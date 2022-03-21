const data = require("../../data/parts.json");

const cadexService = {
    /**
     *
     * @returns {name,verb,adjective,complement}
     */
    generate() {
        // phrase générée à partir de data/parts.json
        return {
            name: "toto",
            verb: "est",
            adjective: "très beau",
            complement: "sur un bateau",
            titi: "toto",
        };
    },

    /**
     *
     * @returns string - retourne un nom pris dans la liste parts.json
     */
    getRandomName() {
        // on va chercher un name à l'index X
        // X est compris entre 0 et 8 (data.names.length-1)
        const X = Math.round(Math.random() * (data.names.length - 1));

        return data.names[X];
    },
};

module.exports = cadexService;
