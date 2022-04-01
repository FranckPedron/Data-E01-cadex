// je récupère mon fichier et je le mets en mémoire
const data = require("../../data/parts.json");

const cadexService = {
    /**
     * Génère un cadex aléatoire
     * @returns {name,verb,adjective,complement}
     */
    generate() {
        // console.log("generate", this);
        // phrase générée à partir de data/parts.json
        return {
            name: this.getRandomName(),
            verb: this.getRandomVerb(),
            adjective: this.getRandomAdjective(),
            complement: this.getRandomComplement(),
            glue() {
                // console.log("glue", this);
                return `${this.name} ${this.adjective} ${this.verb} ${this.complement}`;
            },
        };
    },

    /**
     * Ajout des valeurs à celles présentes
     * @param {*} valeurs fournies par le formulaire
     */
    add(values) {
        // on récupère les clefs d'un objet avec Object.keys
        const keys = Object.keys(values);
        console.log(keys);
        console.log(values);

        console.log("data.names avant ", data.names);
        // je parcours mes clefs et pour chaque clef, j'insère la valeur dans le tableau correspondant (name va dans names)
        for (const key of keys) {
            /*
                values = { name: 'Julie' , verb : 'arrose' }
                je veux push mon name dans data.names
                -- data.names.push(values.name);
                -- data.verbs.push(values.verb);
                -- data.complements.push(values.complement); // va jouter "undefined", il faut donc faire un test avant pour s'assurer qu'il y a une valeur

                je souhaite le faire de manière dynamique
                -- data[nomDeLaListe].push(values[nomDeLaClef])
            */
            data[`${key}s`].push(values[key]);
            // data["names"].push(values["name"])
            // équivalent à data.names.push(values.name)
            // data.names.push("Michel")
        }
        console.log("data.names après ", data.names);
    },

    /**
     *
     * @returns string - retourne un nom pris dans la liste parts.json
     */
    getRandomName() {
        return getRandomElement("names");
    },

    /**
 *
 * @returns string - retourne un nom pris dans la liste parts.json
 */
    getRandomVerb() {
        return getRandomElement("verbs");
    },

    /**
    *
    * @returns string - retourne un nom pris dans la liste parts.json
    */
    getRandomAdjective() {
        return getRandomElement("adjectives");
    },

    /**
    *
    * @returns string - retourne un nom pris dans la liste parts.json
    */
    getRandomComplement() {
        return getRandomElement("complements");
    },
};

module.exports = cadexService;

/**
 *
 * Fonction utilitaire nous permettant d'aller chercher un élément au hasard dans un tableau
 */
function getRandomElement(key) {
    // on va chercher un name à l'index X
    // X est compris entre 0 et 8 (data.names.length-1)
    const X = Math.round(Math.random() * (data[key].length - 1));

    return data[key][X];
}
