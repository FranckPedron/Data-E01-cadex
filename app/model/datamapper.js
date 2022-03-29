const client = require("./dataclient");

const dataMapper = {
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

    async getSentence() {
        try {
            const query = "SELECT sentence FROM sentence order by random() limit 1;";
            const result = await client.query(query);
            return result.rows[0]; // on vient chercher le résultat à l'index 0 (premier résultat)
        } catch (err) {
            console.error(err);
        }
    },

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
