const validationModule = {
    validateQuery(schema) {
        return (req, res, next) => {
            const { error } = schema.validate(req.query);

            if (error) {
                res.status(400).json({ error: "Requête non conforme" });
                return; // return fait quitter la fonction/méthode, le next ne sera pas exécuté
            }

            next();
        };
    },
    validateBody(schema) {
        return (req, res, next) => {
            // const result = cadexSchema.validate(body);
            // const { value, error } = cadexSchema.validate(body);
            const { error } = schema.validate(req.body);

            if (error) {
                res.status(400).json({ error: "Cadex non conforme" });
            } else {
                next();
            }
        };
    },
};

module.exports = validationModule;
