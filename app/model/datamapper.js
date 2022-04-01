const client = require("./dataclient");

const dataMapper = {

    // je déclare ici pour ma documentation (JSDoc), le type cadex
    /**
     * Type du cadavre exquis
     * @typedef {Object} Cadex - nom du type
     * @property {string} name - propriété du type
     * @property {string} verb
     * @property {string} adjective
     * @property {string} complement
     */

    // je commence à partir d'ici la documentation de mes méthodes

    /**
     * Génère un cadex aléatoire
     * @return {Cadex} un cadavre exquis
     */
    async generate() {
        return {
            name: await this.getRandom("name"),
            verb: await this.getRandom("verb"),
            adjective: await this.getRandom("adjective"),
            complement: await this.getRandom("complement"),
            glue() {
                // console.log("glue", this);
                return `${this.name} ${this.adjective} ${this.verb} ${this.complement}`;
            },
        };
    },

    /**
     * Retourne un cadex aléatoire déjà généré
     * @returns {string} un cadavre exquis
     */
    async getSentence() {
        try {
            const query = "SELECT sentence FROM sentence order by random() limit 1;";
            const result = await client.query(query);
            return result.rows[0]; // on vient chercher le résultat à l'index 0 (premier résultat)
        } catch (err) {
            console.error(err);
        }
    },

    /**
     * Ajoute un Cadex à la BDD
     * @param {Cadex} values - Cadex envoyé par formulaire
     */
    async add(values) {
        try {
            const keys = Object.keys(values);
            for await (const key of keys) {
                const query = {
                    text: `INSERT INTO ${key}(label)
                        VALUES ($1);`,
                    values: [values[key]],
                };
                const result = await client.query(query);
                console.log(key, result);
            }
        } catch (err) {
            console.error(err);
        }
    },

    async getRandom(table) {
        try {
            const query = `SELECT label FROM ${table} order by random() limit 1;`;
            const result = await client.query(query);

            return result.rows[0].label; // on vient chercher le résultat à l'index 0 (premier résultat)
        } catch (err) {
            console.error(err);
        }
    },
};

module.exports = dataMapper;
